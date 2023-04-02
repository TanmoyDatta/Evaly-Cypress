class logIn {
  loginProcess() {
    const data = require('../Pages/LoginPageLocatorAndDataset.json');
    const method = require('../Utilities/CommonMethod');

    method.TitleVerify('Evaly | Online shopping platform');
    method.time();
    method.Click(data.signUp_BTN);
    method.time();
    method.datasend(data.enter_mail,data.mail)
    method.datasend(data.enter_password,data.password)
    method.time();
    method.Click(data.login_BTN);
    method.assertion(data.login_BTN,'Login');
  }
}
export default logIn;
