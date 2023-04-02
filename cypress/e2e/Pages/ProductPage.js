class productPage{
    product(){

        const locator = require('../Pages/ProductPageLocator.json')
        const method = require('../Utilities/CommonMethod')
        cy.wait(5000)
        method.Click(locator.price);
        cy.wait(2000)
        method.scroll(locator.NextPage);
        method.Click(locator.NextPage);
        method.scroll(locator.Nextpage_product);
        cy.wait(2000)
        method.TitleVerify('Evaly Products');
        method.Click(locator.Nextpage_product);
        cy.wait(2000)
        method.TitleVerify('Colmi P8 Max PMMA Full Coverage Screen Protector');
        method.assertion(locator.productPrice,'৳65');
        cy.wait(4000)
        method.scroll(locator.AddToCart);
        method.Click(locator.AddToCart);
        cy.reload();
        cy.wait(4000)
        method.scroll(locator.AddToCart);
        method.Click(locator.AddToCart);
        cy.wait(4000)
        method.assertion(locator.AddToCart,'Add to cart');
        method.Click(locator.ViewCart);
        cy.wait(4000)
        //cy.xpath(locator.ViewCart).click();
       // method.assertion(locator.ViewCart,'View Cart')
    
    }
}export default productPage