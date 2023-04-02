class Adddress_page {
  addresspage() {
    const data = require('../Pages/AddressPageLocatorAndData.json');
    const method = require('../Utilities/CommonMethod');

    method.TitleVerify('Your Cart - Evaly | Online shopping platform');
    cy.xpath(data.Address_BTN).click();
    //method.Click(data.ADD_Address_BTN);
    cy.xpath(data.Add_Address).click();
  }
}
export default Adddress_page;
