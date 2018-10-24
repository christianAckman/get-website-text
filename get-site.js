async function getWebsiteText(website, noRedirects=false, timeOutSeconds){
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch();

    try{
        const page = await browser.newPage();
        
        navigationOptions = {
            timeout: timeOutSeconds,
            waitUntil: 'networkidle2'
            //waitUntil: 'load'
        }

        if(noRedirects === true){
            console.log('no redirects!!')
            // https://github.com/GoogleChrome/puppeteer/issues/1132#issuecomment-393724933
            await page.setRequestInterception(true);

            page.on('request', request => {
                    if (request.isNavigationRequest() || request.redirectChain().length){
                        request.abort();
                    }
                    else{
                        request.continue();
                    }
            });
        }

        await page.goto(website, navigationOptions);

        await page.setViewport({
            width: 600,
            height: 1000
        })

        text = await page.evaluate(() => document.body.innerText)
        title = await page.title();
    }
    catch(err){
        return {
            error: true,
            message: err,
            website: website
        }
    }
    finally{
        await browser.close();
    }
    return {
        text: text,
        title: title,
        website: website,
        error: false
    }
}


module.exports.getWebsiteText = getWebsiteText;