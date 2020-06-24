describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

//   describe('My First falling Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(false)
//     })
//   })


describe('My First API test', () => {
  it('User gender is male', () => {
      cy.request({
          method: 'GET',
          url: 'https://randomuser.me/',
          qs: {
              nat: 'us',
              gender: 'male'
          }
      })
      .then(response => {
          expect(response.status).to.eq(200);
      })
      
  })
})


describe('My First visit Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.url().should('include', '/actions')

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')

  })
})


describe("Titles", () => {
    beforeEach(() => {
        cy.visit("https://fwdays.com/event/QA-fwdays20-online-conference")
    });

    it("Scrolls to sections using top navi", () => {
        cy.contains("Онлайн-конференція").scrollIntoView();

        ["Спікери", "Програма", "Місце проведення"].forEach(navigationItem => {
          cy.get("#event-menu-trigger").click()
          cy.contains(".event-menu a.go-to-block", navigationItem).click()

          cy.contains("h2", navigationItem).should('be.visible')

        }) 
    });

})