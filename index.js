const _guv = require('get-url-versions');
const _gs = require('./get-site.js');

// var website = 'https://www.amazon.com/'

// getWebsiteText(website)
// .then(function(data){

//     if(data.error){
//         console.log('Couldnt get website :(');
//         console.log('Error: ' + data.message);
//         return;
//     }

//     console.log('Website: ' + data.website);
//     console.log('Title: ' + data.title);
//     console.log('Text: ' + data.text);
// });


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