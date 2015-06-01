#Fast Forward Labs Update [Logo Header]
#Electronic Regulars: New App Models Connecting Physical Experiences with Mobile Transactions

This update discusses apps that focus on mobile payments for physical experiences.

** Fold in updates from this article: http://qz.com/414549/retailers-have-mishandled-mobile-payments-for-years-its-time-to-surrender-to-tech/

Physical experiences are increasingly being supplemented by digital payment and service methods on mobile devices. With a given mobile app, the user enters payment information once, then skips re-authorization in the future. User authorization is implicitly assumed, and the user is charged based on information tied directly to their mobile phone - for example, GPS location or presence at a retail point of sale.  Many of these apps currently focus on "luxury" experiences like booking a car that automatically charges at destination, or booking a restaurant reservation with the meal fully paid for in advance. In essence, this approach establishes a trust relationship between the user that reassures the vendor that the customer will pay, emulating the experience of a user being a "regular" of that vendor. From a user perspective, it might feel like Amazon's one-click feature in physical space. This facilitates potentially smoother, faster transactions that give vendors better access to data surrounding transactions. 

The promised payment seamlessness of these types of apps can break down right at setup. At first, entering payment information for a mobile app seems like a typical e-commerce transaction, where the card is not present (CNP) but can still be authorized with card number, security code, and expiration date. A first-time user of Uber in NYC tried to update his payment option while logged in on a laptop, then book a ride on the mobile app to make a trip to the airport. The new card never populated. Worse, any attempt to input the card from the app itself was met with an error saying the card was a duplicated payment method. Intuitive solutions like clearing data, deleting the first card, force-stopping the app, restarting the phone were all tried to no avail. Cash or in-person payment is not a fallback option for utilizing most of Uber's services -- in this case, UberPool. The user ended up adding a "different" payment form by entering the same card on Google Wallet. 

Although the card account that funded the transaction was the same in the end, these payments differ structurally. Part of Uber's explosive growth comes from utilizing Braintree to handle transactions, directly charging the cards added as a "card-not-present" transaction in a user's own currency. By adding the card to Google Wallet, the payment takes an extra step: Google will technically create a virtual pre-paid card that is funded by the original. This is a useful workaround and could help protect and account, but at the same time metadata may not transmit back to original card providers which could affect loyalty points.

The underlying mechanics of mobile payments differ subtly, with authorization options that are customized for highly portable devices. One of the early definers of the mobile payment space is Starbucks, which retrofits existing cash registers by generating QR codes that work online or offline.  Encryption methods common for ecommerce transactions would be clunky and slow on the phone, and were not originally designed to work quickly over a mobile network. Local storage of card data would also be less than desirable for security reasons. Braintree uses tokenization to provide enhanced security for data transfer, meaning sensitive data is obscured by a string of meaningless symbols. 
> "uses __client side encryption__ written in a __mobile language__, making it __dramatically faster than libraries that are written for typical web pages.__ This __encryption was actually built into the Uber app__, allowing it to handle credit card data securely and quickly. With Braintree's approach, the customer who enters credit card information into the app is the last person to see it."
Vending machines have been set up to accept contactless payments by smartphone over the internet or using short-range wireless protocols like NFC or Bluetooth.

Enhanced data on purchases is one reason retailers like this data. Probability of a person skipping out on their restaurant reservation, concert ticket, among others would be an extremely useful metric -- but could also start to get creepy like a credit score if this type of information is used to alter the types of services offered to customers. Retailers already keep tabs on the consumers who return merchandise (http://bigstory.ap.org/article/retailers-keeping-tabs-consumers-return-habits) and new legislation in the US may mean companies can sell consumer data to each other( )

##Examples

Uber's car service is perhaps the best-known example.  Starbucks coffee shops accept in-app payments for real-world coffee.  Starbucks' research showed in testing that speed of transaction increased (though that may not be true at scale, given that most inexpensive purchases don't have added receipt signing time) but more importantly customers preferred the app payment. They are scaling that idea to allow in-app orders as well, meaning locations can better plan the flow of order filling. Users can change the actual payment method in the process of completing the transaction -- changing which card gets charged during an Uber ride, reloading a Starbucks mobile card using Paypal while waiting on line, all without carrying cards around. 

Here in NYC on a much smaller scale, regional salad chain Sweetgreen released a mobile app that includes payment option that requires pickup at it's brick & mortar locations. At our nearby Kenmare location, the pickup line is typically empty while customers ordering in person could easily be waiting behind 30 people.  Again, these app features reduce waiting time and ordering mistakes for customers, and help Sweetgreen get its product to consumers more efficiently. 

As another example, PS Dept's app connects users with personal shoppers at major luxury fashion stores.  Its in-app payments give customers access to merchandise that would otherwise be available only in brick-and-mortar stores. Their luxury partnerships gives in-store associates access to a digital customer base to send physical, location-specific merchandise. In this case, it's more like the store associates are the users with a physical experience, and the consumers are the ones dealing with mobile payments. Because the buying patterns of many major retailers are non-uniform, and the web offerings represent a tiny subset of total offered merchandise,  this provides new opportunities for the brick-and-mortar stores and sales experts to move inventory that is not resolved by ecommerce. 

PS Dept lets iPhone shoppers text stylists in major stores, free shipping, free returns. There is no e-commerce aspect -- it's directly based on bricks & mortar inventory, pushed into m-commerce. Any savvy shopper knows major department stores rarely match their extensive in-store inventory with online interfaces. But the true physical experience here? Store associates, using in-store payments to augment their consumer interactions. 
http://www.worth.com/index.php?option=com_content&view=article&id=6391

Limiting factors: Apple takes a 30% cut of apps in its store that include in-app purchases, not to mention charges its Apple Pay partners a percentage. [cite] On the flipside of convenience, this could mean you are stuck with your default or unable to complete the purchase if your phone dies on the way. With NFC, you may end up accidentally paying for someone else's item if you are too close to the point-of-sale during their checkout. And, if your phone gets stolen, the thief may have quick and full access to your suite of accounts without needing to visit any physical stores or ATMs. 

##Payment Logistics, Security, Hardware, and Limitations

[when did they come out?]
[what's so special about their technology?]
[what kind of encryption are they using?]
[why weren't mobile payments happening before?]
[what does this mean for consumer behavior data?]

Legislation is pending on a bill that would potentially make companies less liable for massive data breaches. Security is cited as a potential worry for consumers about using mobile money. It will be up to companies to distinguish themselves with security features that elude plastic credit cards. Cell phones are able to generate one-time use charge information that would prevent a fraudulent charge from compromising entire bank accounts (cite), which would help with the pitfalls experienced recently by Venmo (cite) and after last year's Apple security loophole (cite) that might have users shy away from storing sensitive financial information. 

* Security pitfalls (will users start to shy away? are people deactivating after Uber and Venmo scares?) 
* Stripe doesn't send card information to intermediary servers
* PCI-DSS Payment Card Industry Data Security Standard - required by the major cards (and by law in some US states)
* Stripe seems to have the best, easiest API

Payment options like:

* Seamless/Grubhub
* Instagram - what's up with their in-app purchases? (like to know it)
* Braintree, 
* Square, 
* [Stripe, WePay, Circle (bitcoin)....]
* Google wallet uses ____.
* Paypal uses ____.
* Apple Pay is uses ___ and ___.
* PS Dept uses []
* Magic 
* Cover - 
* Starbucks [Gift cards. Paypal. Bar codes.]
* Beautified
* Sweetgreen
* Lyft uses Stripe - http://www.lyft.com/terms
* Pizza Hut, Dominoes, Papa Johns?
* Google Wallet
* Jukely (subscription model for partying)
* Shyp (local shipping, paid through app)
* Stripe
* Square Cash (?) 
* Venmo
* Paypal 
* Apple Pay?
* RFID?
* Beacons?
* Snapchat 

*Smart phone adoption*

* Smart phone spread, geographically, socioeconomically -
* Data plan diversity, network diversity & transactions - 
* Battery life - 
* Spotty network/GPS maps (Uber let's you physically manipulate location, but won't work if it's not turned on)
* Upper class apps (forces data usage the entire ride).  

##References 

Good Mobile Payments Paper:
https://www.kansascityfed.org/publicat/econrev/pdf/12q1Hayashi.pdf
>According to some estimates, this
method of payment can be 15 seconds to 30 seconds faster than swiping
a traditional card and signing the receipt or entering a PIN (Morea;
Polasik and others). This small difference in transaction speed can be
important in situations such as mass transit or highway toll gates where
consumers need to move quickly through the checkout point.

Good technical survey:
http://arstechnica.com/gadgets/2014/10/29/how-mobile-payments-really-work/
Articles:
https://www.americanexpress.com/us/small-business/openforum/articles/5-mobile-payment-apps-that-get-you-paid-faster/
http://www.businessnewsdaily.com/4457-mobile-payment-solutions.html

