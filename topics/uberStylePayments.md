#Fast Forward Labs Update [Logo Header]
#Electronic Regulars: New App Models Connecting Physical Experiences with Transactions

This update discusses recent mobile device apps that facilitate transactions around real-world experiences and services.

Physical experiences are increasingly being supplemented by digital payment and service methods on mobile devices.  A user enters payment and/or customer information into the app once, then does not need to think about re-authorizing in the future, much like Amazon's one-click feature, brought into the real world. This facilitates smoother, faster transactions that benefit customers and vendors.  In essence, this approach establishes a trust relationship between the customer that reassures the vendor that the customer will pay, emulating the experience of a user being a "regular" of that vendor.

##Examples

Uber's car service is perhaps the best-known example.  Uber saw explosive growth after moving to seamless payments with Braintree, which allowed users to pay in their own currencies.

Starbucks coffee shops accept in-app payments for real-world coffee.  App payments (and orders) are faster to process than cash or payment cards at the register.  As a result, Starbucks' customers save time in line, and Starbucks can sell more product with its employees focused on making beverages instead of taking payments.  
NOTE: <- above is not necessarily true -- metrics showed that the checkout process was slower, but people liked using it anyway 
Similarly, Sweetgreen, a regional salad restaurant chain, released a mobile app that includes payment and pickup options at its real-world locations.  Again, these app features reduce waiting time and ordering mistakes for customers, and help Sweetgreen get its product to consumers more efficiently.

As another example, PS Dept's app connects users with personal shoppers at major luxury fashion stores.  Its in-app payments give customers access to merchandise that would otherwise be available only in brick-and-mortar stores.  This provides new opportunities for the brick-and-mortar stores and sales experts to move inventory. Spring, a young shopping app that won best of 2014, similarly stores payments info once and allows the user to pick and choose from a curated list half from generated recommendations, half from curated brand stories. 

Vending machines have been set up to accept contactless payments by smartphone over the internet or using short-range wireless protocols like NFC or Bluetooth. "Regulars" who live or work near these machines can simply have their purchases charged to a registered payment method.

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


##Next Applications

Recent approaches have relied on mobile devices to merge the physical world with electronic transactions.  One very new direction is expanding beyond mobile devices such as a smartphone or tablet and further into the physical world.

A few weeks ago, Amazon took this step with its new Dash button, a physical stick-on device that is connected to a specific product.  For example, a Dash button can be stuck to a dishwasher; the user designates the product for that button to be diswasher detergent.  When the user runs low on dishwasher detergent, they press the button, which re-orders their preferred brand and size with no further intervention.  Other examples advertised by Amazon include shaving razor blades, packaged foods, and coffee.

Consumer products company Quirky has taken a similar approach with its Poppy line of products which incorporate automatic re-ordering.  This line currently includes a coffee maker, a baby formula heater-dispenser, and a pet food dispenser.

Outside of these product-based approaches, it is easy to see applications for such a device to order products _and_ services.  For example, a button or built-in feature on a printer to re-order paper or toner, or send a repair request to the printer service company.  Likewise Uber might use such a device to request a pickup from a user's home or from a hotel, bar, or nightclub.  Restaurants that offer delivery could store a user's regular order and complete the transaction with a single button press.  Within a restaurant, a tabletop device or smartphone could be used to 




Blindspots:
* Statistics on smart phone adoption & data plans & location that drains battery 
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


