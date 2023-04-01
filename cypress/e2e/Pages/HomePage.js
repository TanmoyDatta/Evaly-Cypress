class home_page{
    homepage(){
        const data = require('../Pages/HomePageLocatorAndDataset.json')
        const method = require('../Utilities/CommonMethod')

        method.dataSend(data.search_enter,data.search_value);
        method.Click(data.search_BTN);
    }
}export default home_page;