class home_page{
    homepage(){
        const data = require('../Pages/HomePageLocatorAndDataset.json')
        const method = require('../Utilities/CommonMethod')
        method.time();
        method.datasend(data.search_enter,data.search_value);
        method.time();
        method.Click(data.search_BTN);
    }
}export default home_page;