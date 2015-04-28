#Fast Forward Labs Update [Logo Header]
#Electronic Regulars: New App Models Connecting Physical Experiences with Transactions

This update discusses recent mobile device apps that facilitate transactions around real-world experiences and services.

Physical experiences are increasingly being supplemented by digital payment and service methods on mobile devices. A user enters payment and/or customer information into the app once, then does not need to think about re-authorizing in the future, much like Amazon's one-click feature, brought into the real world. This facilitates smoother, faster transactions that benefit customers and vendors.  In essence, this approach establishes a trust relationship between the customer that reassures the vendor that the customer will pay, emulating the experience of a user being a "regular" of that vendor.

##Examples

Uber's car service is perhaps the best-known example.  Uber saw explosive growth after moving to seamless payments with Braintree, which allowed users to pay in their own currencies. Starbucks coffee shops accept in-app payments for real-world coffee.  Starbucks' research showed in testing that speed of transaction increased (though that may not be true at scale, given that most inexpensive purchases don't have added receipt signing time) but more importantly customers preferred the app payment. They are scaling that idea to allow in-app orders as well. Users can change the actual payment method in the process of completing the transaction -- changing which card gets charged during an Uber ride, reloading a Starbucks mobile card using Paypal while waiting on line. 

Here in NYC on a much smaller scale, regional salad chain Sweetgreen released a mobile app that includes payment option that requires pickup at it's brick & mortar locations. Again, these app features reduce waiting time and ordering mistakes for customers, and help Sweetgreen get its product to consumers more efficiently.

As another example, PS Dept's app connects users with personal shoppers at major luxury fashion stores.  Its in-app payments give customers access to merchandise that would otherwise be available only in brick-and-mortar stores. Their luxury partnerships gives in-store associates access to a digital customer base to send physical, location-specific merchandise. Because the buying patterns of many major retailers are non-uniform, and the web offerings represent a tiny subset of total offered merchandise,  this provides new opportunities for the brick-and-mortar stores and sales experts to move inventory that is not resolved by ecommerce. (Spring, a young shopping app that won best of 2014, similarly stores payments info once and allows the user to pick and choose from a curated list half from generated recommendations, half from curated brand stories.) (Lyst, universal shopping cart saw 5x as many sales within a month after releasing the ability to pay all at once.)  

Vending machines have been set up to accept contactless payments by smartphone over the internet or using short-range wireless protocols like NFC or Bluetooth. "Regulars" who live or work near these machines can simply have their purchases charged to a registered payment method.

Some apps ask you to pay in advance (restaurant app, Jukely), then have you check in at the physical location. Probability of a person skipping out on their restaurant reservation, concert ticket, among others would be an extremely useful metric -- but could also start to get creepy like a credit score if this type of information is used to alter the types of services offered to customers. Retailers already keep tabs on the consumers who return merchandise (http://bigstory.ap.org/article/retailers-keeping-tabs-consumers-return-habits) and new legislation in the US means companies can sell consumer data to each other (

Limiting factors: Apple takes a 30% cut of apps in its store that include in-app purchases, not to mention charges its Apple Pay partners a percentage. [cite]

## Classification of Mobile Payments
In the realm of mobile payments, these purchases are considered CNP (card not present). 



##Payment Logistics

Payment options like Braintree, Square, [Stripe, WePay, Circle (bitcoin)....] [when did they come out?] [what's so special about their technology?] [what kind of encryption are they using?] [why weren't mobile payments happening before?] [what does this mean for consumer behavior data?]

> "For example, Braintree's mobile library uses __client side encryption__ written in a __mobile language__, making it __dramatically faster than libraries that are written for typical web pages.__ This __encryption was actually built into the Uber app__, allowing it to handle credit card data securely and quickly. With Braintree's approach, the customer who enters credit card information into the app is the last person to see it."

https://www.braintreepayments.com/case-studies/uber

__Where is it increasing in popularity (so far, looks like luxury living-focused, concentrated at the coasts)__

So far, it looks likes these payments are going to the service industry: private cars, cafes, restaurants, shopping,... Is there a time where this will begin to saturate other markets? 

_Are there any industry examples (e.g. manufacturing? science? thinking of parts ordering startups)_
* Auto Parts Warehouse
* Prevost (motorcoach parts)
* Interspare (textile machinery) - submits photos of the parts/machines at issue; doesn't allow automatic payment, but these aren't coffee--they're big expensive industrial machines, and they believe it's better to have the vendor's internal experts assess the necessary parts than have the customer order them directly.
* Siemens HVAC

EZ Pass (established in 2000??) is familiar to automobile drivers who need to pay tolls during their commute. A typical experience is 1-2 cars q



##Next Applications

Recent approaches have relied on mobile devices to merge the physical world with electronic transactions.  One very new direction is expanding beyond mobile devices such as a smartphone or tablet and further into the physical world.

A few weeks ago, Amazon took this step with its new Dash button, a physical stick-on device that is connected to a specific product.  For example, a Dash button can be stuck to a dishwasher; the user designates the product for that button to be diswasher detergent.  When the user runs low on dishwasher detergent, they press the button, which re-orders their preferred brand and size with no further intervention.  Other examples advertised by Amazon include shaving razor blades, packaged foods, and coffee.

Consumer products company Quirky has taken a similar approach with its Poppy line of products which incorporate automatic re-ordering.  This line currently includes a coffee maker, a baby formula heater-dispenser, and a pet food dispenser.

Outside of these product-based approaches, it is easy to see applications for such a device to order products _and_ services.  For example, a button or built-in feature on a printer to re-order paper or toner, or send a repair request to the printer service company.  Likewise Uber might use such a device to request a pickup from a user's home or from a hotel, bar, or nightclub.  Restaurants that offer delivery could store a user's regular order and complete the transaction with a single button press.  Within a restaurant, a tabletop device or smartphone could be used to 

##Blindspots and Opportunities:
Do the statistics on smart phone adoption & data plans & location that drains battery make a difference? 
Legislation is pending on a bill that would potentially make companies less liable for massive data breaches. Security is cited as a potential worry for consumers about using mobile money. It will be up to companies to distinguish themselves with security features that elude plastic credit cards. Cell phones are able to generate one-time use charge information that would prevent a fraudulent charge from compromising entire bank accounts (cite), which would help with the pitfalls experienced recently by Venmo (cite) and after last year's Apple security loophole (cite) that might have users shy away from storing sensitive financial information. 
* Security pitfalls (will users start to shy away? are people deactivating after Uber and Venmo scares?) 
	* Stripe doesn't send card information to intermediary servers
	* PCI-DSS Payment Card Industry Data Security Standard - required by the major cards (and by law in some US states)

	
* Stripe seems to have the best, easiest API


Brainstorm:

Uber uses Braintree (acquired Card.io) 
PS Dept uses []
Magic 
Cover - 
Starbucks [Gift cards. Paypal. Bar codes.]
Beautified
Sweetgreen
Chop't (?)
Lyft uses Stripe - http://www.lyft.com/terms


Sorta:

Spring (non-physical experience)
Seamless/Grubhub
Pizza Hut, Dominoes, Papa Johns?
Google Wallet
Spring (no physical experience)
Jukely (subscription model for partying)
Shyp (local shipping, paid through app)

Powered by:
Stripe
Square Cash (?) 
Venmo
Paypal 
Braintree
Apple Pay? RFID? Beacons?

Random side thoughts: 
(Snapchat has cash now!)
(Instagram - what's up with their in-app purchases?)

PS Dept lets iPhone shoppers text stylists in major stores, free shipping, free returns. There is no e-commerce aspect -- it's directly based on bricks & mortar inventory, pushed into m-commerce. Any savvy shopper knows major department stores rarely match their extensive in-store inventory with online interfaces. But the true physical experience here? Store associates, using in-store payments to augment their consumer interactions. 
http://www.worth.com/index.php?option=com_content&view=article&id=6391

https://www.americanexpress.com/us/small-business/openforum/articles/5-mobile-payment-apps-that-get-you-paid-faster/

http://www.businessnewsdaily.com/4457-mobile-payment-solutions.html

Good Mobile Payments Paper:
https://www.kansascityfed.org/publicat/econrev/pdf/12q1Hayashi.pdf
Good technical survey:
http://arstechnica.com/gadgets/2014/10/29/how-mobile-payments-really-work/


According to some estimates, this
method of payment can be 15 seconds to 30 seconds faster than swiping
a traditional card and signing the receipt or entering a PIN (Morea;
Polasik and others). This small difference in transaction speed can be
important in situations such as mass transit or highway toll gates where
consumers need to move quickly through the checkout point.5