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
  let sortBy = "//span[normalize-space()='Price']";

  let checkbon_Smartwatches = "//p[normalize-space()='Smartwatches']";

  let next_BTN = "//a[normalize-space()='2']";

  let selet_Watch = "//p[@title='Kieslect Kr Full Coverage Screen Protector']";

  it('Login Page Test', () => {
    cy.xpath(signUp_BTN).click();
    cy.xpath(signUp_BTN).should('have.text', 'Sign in');

    cy.get('.mt-12 > :nth-child(1) > .relative > .block').type(
      'mrtanmoy64@gmail.com'
    ); //enter email
    cy.wait(500);
    cy.get('.mt-4 > label.block > .relative > .block').type('password123#'); // enter password
    cy.get('.btn').should('have.text', 'Login').click(); // click login button
    cy.wait(2000);

    cy.xpath(search_enter).type('Smart Watch'); // search field enter 'Smart Watch'
    cy.xpath(search_BTN).should('have.text', 'Search'); // assert search
    cy.xpath(search_BTN).click(); // search button click

    cy.xpath(sortBy).click(); // short by price click in button
    // cy.xpath(next_BTN).scrollTo(next_BTN).click();
    //.should('have.text', 'Price')
    cy.xpath(next_BTN) // scroll
      .scrollIntoView({
        easing: 'linear',
        duration: 1000,
      })
      .click();
    cy.xpath(next_BTN).should('have.text', '2'); // scroll and go the next page
    cy.xpath(selet_Watch)
      .should('have.text', 'Kieslect Kr Full Coverage Screen Protector')
      .click();

    cy.get('.mb-4 > .flex > .text-base') // product price
      .should('have.text', '৳65');

    // Add to card button click
    cy.get('.btn > span')
      .scrollIntoView({
        easing: 'linear',
        duration: 500,
      })
      .should('have.text', 'Add to cart')
      .click();

    // order icon button and all product order details
    cy.get('.top-0 > .relative').click();

    // Add Address button in click
    cy.get('a > .btn').should('have.text', 'Add Address').click();
    // Add address
    cy.get('.btn > span').click();
  });

  // it('Home Page Test', () => {
  //   //  cy.xpath(search_enter).type('Smart Watch');
  //   //  cy.xpath(search_BTN).click();
  //   //  cy.xpath(shotBy).click();
  //   //  cy.xpath(checkbon_Smartwatches).click();
  // });
});
