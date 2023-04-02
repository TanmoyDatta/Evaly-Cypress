class Delivery_Address{

    deliveryAddress(){
        const data = require('../Pages/DeliveryAddressLocatorAndData.json')
        const method = require('../Utilities/CommonMethod')

        method.TitleVerify('Edit Delivery Address - Evaly | Online shopping platform');
        method.datasend(data.FullName,data.FullName_value);
        method.datasend(data.ContactNumber,data.ContactNumber_value);
        method.findlocator(data.City).click();
        method.findlocator(data.Division).select(6);
        method.findlocator(data.District).select(3);
        method.findlocator(data.Sub_District).select(1);
        method.datasend(data.House,data.House_value);
        method.datasend(data.Area,data.Area_value);
        method.datasend(data.StreetAddress,data.StreetAddress_value);
        method.findlocator(data.Submit_BTN).click();
       // method.TitleVerify('Submit');
        method.takeFullscreenshot('DerivaryInfo');
    }
}export default Delivery_Address