describe('OPEN URL', () => {
  beforeEach(() => {
    cy.visit('https://evaly.com.bd/');
    cy.title().should('eq', 'Evaly | Online shopping platform');
  });

  let signUp_BTN = "//span[@class='hidden md:inline-block']";

  let search_enter =
    "//div[@class='hidden w-full md:flex px-4']//input[@id='searchbar']";
  let search_BTN =
    "//div[@class='hidden w-full md:flex px-4']//button[@class='p-2 px-5 text-white bg-black4 font-medium text-lg gap-2'][normalize-space()='Search']";
  let shotBy = "//span[normalize-space()='Price']";
  let checkbon_Smartwatches = "//p[normalize-space()='Smartwatches']";

  it('Login Page Test', () => {
    cy.xpath(signUp_BTN).click();
    cy.get('.mt-12 > :nth-child(1) > .relative > .block').type(
      'mrtanmoy64@gmail.com'
    );
    cy.wait(500);
    cy.get('.mt-4 > label.block > .relative > .block').type('password123#');
    cy.get('.btn').click();
    cy.wait(2000);

    cy.xpath(search_enter).type('Smart Watch');
    cy.xpath(search_BTN).click();
    cy.xpath(shotBy).click();
  });

  // it('Home Page Test', () => {
  //   //  cy.xpath(search_enter).type('Smart Watch');
  //   //  cy.xpath(search_BTN).click();
  //   //  cy.xpath(shotBy).click();
  //   //  cy.xpath(checkbon_Smartwatches).click();
  // });
});
