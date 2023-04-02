export function TitleVerify(expectedTitle) {
  return cy.title().should('eq', expectedTitle);
}
export function assertion(xpath, expected) {
  return cy.xpath(xpath).should('have.text', expected);
}
export function datasend(xpath, value) {
  return cy.xpath(xpath).type(value);
}
export function scroll(xpath) {
  return cy
    .xpath(xpath)
    .scrollIntoView({
      easing: 'linear',
      duration: 3000,
    })
}

export function Click(xpath) {
  return cy.xpath(xpath).click();
}
export function findlocator(xpath){
  return cy.xpath(xpath)
}
// export function Radio(xpath){
//   return cy.xpath(xpath).check();
// }
// export function Selct(xpath, number){
//   return cy.xpath(xpath).select(number);
// }
export function takeFullscreenshot(scName) {
  return cy.screenshot(scName);
}
export function takespecificScreenshot(xpath, scName) {
  return cy.xpath(xpath).screenshot(scName);
}
export function time() {
  return cy.wait(3000);
}
