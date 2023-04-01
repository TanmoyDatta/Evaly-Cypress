import Open_Url from '../Base/Openurl';
import logIn from '../Pages/LoginPage';
import home_page from '../Pages/HomePage';

describe('Test', () => {
  // class name objectName = new Classname
  // create object

  const url = new Open_Url();
  const login = new logIn();
  const HPage = new home_page();

  it('Evaly site All Tests', () => {
    url.openUrl();
    login.loginProcess();
    HPage.homepage();
  });
});
