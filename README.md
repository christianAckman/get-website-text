# get-website-text

## Install

```
$ npm install get-website-text
```

## Usage:
```
var website = 'https://www.amazon.com/'

getWebsiteText(website)
.then(function(data){

    if(data.error){
        console.log('Couldnt get website :(');
        console.log('Error: ' + data.message);
        return;
    }

    console.log('Website: ' + data.website);
    console.log('Title:   ' + data.title);
    console.log('Text:    ' + data.text);
});
```

**Output:**

```
Website: http://amazon.com/
Title: Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more
Text: From The Community
Amazon Try Prime

All

Go 
Search 
Sign in
New customer? Start here.
Deliver Waynesburg 22354
 EN    Hello. Sign inAccount & Lists OrdersTry Prime Cart 0
Your Amazon.comToday's DealsGift CardsRegistrySellTreasure TruckHelpDisability Customer Support
Welcome to Amazon.com. If you prefer a simplified shopping experience, try the mobile web version of Amazon at www.amazon.com/access. The mobile web version is similar to the mobile app. Stay on Amazon.com for access to all the features of the main Amazon website.
Previous page


 
 
Next page
Your bedroom oasis

Start creating
Deal of the Day

$119.99$119.99

Save on Shark Navigator Lift-Away Professional NV356E!
See more deals
Find cool tech gifts

See more from Gift Finder
Gifts $10 or less with free shipping See more
               
Accessories $10 and under with free shipping See more
             

 
Home décor for $10 or less with free shipping See more
               

Apparel for $10 and under with free shipping See more
              

Ad feedback 

 
Jewelry for $10 or less with free shipping See more
                
Affordable watches with free shipping See more
              

 
Toys & Games best sellers See more
                   

Ad feedback 
Back to top
Get to Know Us
Careers
Blog
About Amazon
Press Center
Investor Relations
Amazon Devices
Make Money with Us
Sell on Amazon
Sell Under Private Brands
Sell on Amazon Handmade
Sell Your Services on Amazon
Sell on Amazon Business
Sell Your Apps on Amazon
Become an Affiliate
Advertise Your Products
Self-Publish with Us
›See all
Amazon Payment Products
Amazon Rewards Visa Signature Cards
Amazon.com Store Card
Amazon Business Card
Amazon.com Corporate Credit Line
Shop with Points
Credit Card Marketplace
Reload Your Balance
Amazon Currency Converter
Let Us Help You
Your Account
Your Orders
Shipping Rates & Policies
Amazon Prime
Returns & Replacements
Manage Your Content and Devices
Amazon Assistant
Help
English  United States
Amazon Music
Stream millions
of songs		Amazon Drive
Cloud storage
from Amazon		6pm
Score deals
on fashion brands		AbeBooks
Books, art
& collectibles		ACX 
Audiobook Publishing
Made Easy		Alexa
Actionable Analytics
for the Web		Amazon Business
Everything For
Your Business
 
AmazonFresh
Groceries & More
Right To Your Door		AmazonGlobal
Ship Orders
Internationally		Home Services
Handpicked Pros
Happiness Guarantee		Amazon Inspire
Digital Educational
Resources		Amazon Rapids
Fun stories for
kids on the go		Amazon Restaurants
Food delivery from
local restaurants		Amazon Web Services
Scalable Cloud
Computing Services
 
Audible
Download
Audiobooks		Book Depository
Books With Free
Delivery Worldwide		Box Office Mojo
Find Movie
Box Office Data		ComiXology
Thousands of
Digital Comics		CreateSpace
Indie Print Publishing
Made Easy		DPReview
Digital
Photography		East Dane
Designer Men's
Fashion
 
Fabric
Sewing, Quilting
& Knitting		Goodreads
Book reviews
& recommendations		IMDb
Movies, TV
& Celebrities		IMDbPro
Get Info Entertainment
Professionals Need		Junglee.com
Shop Online
in India		Kindle Direct Publishing
Indie Digital Publishing
Made Easy		Prime Now
Ultrafast Delivery
on Everyday Items
 
Amazon Photos
Unlimited Photo Storage
Free With Prime		Prime Video Direct
Video Distribution
Made Easy		Shopbop
Designer
Fashion Brands		Amazon Warehouse
Great Deals on
Quality Used Products		Whole Foods Market
America’s Healthiest
Grocery Store		Withoutabox
Submit to
Film Festivals		Woot!
Deals and 
Shenanigans
 
 		Zappos
Shoes &
Clothing		Souq.com
Shop Online in
the Middle East		Subscribe with Amazon
Discover & try
subscription services		PillPack
Pharmacy Simplified		 		 
Conditions of UsePrivacy NoticeInterest-Based Ads© 1996-2018, Amazon.com, Inc. or its affiliates
```