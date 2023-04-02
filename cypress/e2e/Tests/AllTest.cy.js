import Open_Url from '../Base/Openurl';
import logIn from '../Pages/LoginPage';
import home_page from '../Pages/HomePage';
import productPage from '../Pages/ProductPage';
import Adddress_page from '../Pages/AddressPage';
import Delivery_Address from '../Pages/DeliveryAddress';

describe('Test', () => {
  // class name objectName = new Classname
  // create object

  const url = new Open_Url();
  const login = new logIn();
  const HPage = new home_page();
  const product = new productPage();
  const address = new Adddress_page();
  const deliveryAdd = new Delivery_Address();

  it('Evaly site All Tests', () => {
    url.openUrl();
    login.loginProcess();
    HPage.homepage();
    product.product();
    address.addresspage();
    deliveryAdd.deliveryAddress();
  });
});
