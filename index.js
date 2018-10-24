const _guv = require('get-url-versions');
const _gs = require('./get-site.js');

async function getWebsiteText(_url, timeOutSeconds=4){

    var urls = _guv.getURLs(_url);
    
    for(var key in urls){
        var url = urls[key];
        var data = await _gs.getWebsiteText(url, null, timeOutSeconds * 1000);
        if(!data.error){
            return data;
        }
    }
    return data;
}



module.exports = {
    getWebsiteText: getWebsiteText
}