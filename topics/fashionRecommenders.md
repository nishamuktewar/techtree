__On Fashion Recommenders__ 

*__What is a recommender system?__*

A recommender system in the apparel & fashion industry is a computational framework for matching ecommerce users to product suggestions. Personalized recommendation done well puts the right products in front of the right users at the right time, and can have a serious impact on revenue -- notably Gilt Groupe saw __double-digit revenue lifts from their personalization efforts.__ A given ecommerce site may have tens of thousands of products available for sale, and has the flexibility to create unique sets of item suggestions to match the preferences of millions of users. 

In the fashion industry, extensive effort goes into manual product curation, or at least the appearance of a human touch. A product image that includes a fully-outfitted model gives a natural option for suggested items, partially utilized by Net-a-Porter: complete the look. For the consumer, the look seems to be expertly styled at a photo shoot long in advance of being listed online. A more likely approach is to shoot products individually, then generate outfit combinations post-shoot on a simulated model with software like Looklet. This opens up the potential to update full-outfit images over time to only display in-stock items. An ecommerce company may create in-house or brand-sponsored editorial pages of looks (e.g. Gilt), allow users to create shareable lists (e.g. Lyst) or go as far as developing a print magazine to reach customers (e.g. Net-a-Porter). The set of online editorial posts or sales that are featured can also be customized per user, meaning there is much to learn from personalization at media companies. As noted in a recent paper by Pinterest, items that are grouped together manually have a "curation link" between them, which can be stored and utilized in producing recommendations. 

Automated systems can focus on a few paradigms to produce a recommendation. __Content-based approaches__ tend to focus on information extracted from products (descriptions, colors, shapes, type) or the user (age group, location, preferences profile). Say a user fills out a profile asking for a navy cocktail dress on Rent the Runway, a rental site where users borrow high-end dresses for a fraction of the retail price. It is relatively safe for the recommender to focus closely on the user's stated preferences, given that they have a pre-set event to wear the dress and may have very specific dress code requirements. Generally, it is difficult to get consumers explicitly fill out preferences, and when they do it could be more aspirational than behavioral (e.g. adding a preference for a very edgy brand when the user typically only purchases workwear).

__Collaborative filtering (CF)__ estimates a user's interest in an item by comparing preferences of many users, or by looking for unstated similarities between items. Explicit preferences come from products that are given star ratings. Implicit preferences may be gleaned from likes, favorites, wishlists, or behaviors like browsing, purchasing, and searching on the site. 

Imagine a matrix with users as rows and items as columns, whose entries have 1-5 star ratings that users have given to items. CF attempts to decompose this matrix into two separate matrices, teasing out hidden features that describe the preference ratings. With these two matrices relating __users to features__ and another relating __items to features__, the system can use these features to guess a rating for an item that a user has never seen by taking the *inner product* of these matrices. This assumes that items will accumulate preference data over time, so that the matrix isn't too sparse to be useful.

In fashion, however, items have a fixed or seasonal shelf life and may *never* replenish if sold out. It is dangerous to get too item-specific, and an item may be out of season by the time it accumulates enough data to get recommended. The most popular products, where many users have interacted with an item, may also be the least interesting to a specific user segment, and these edge cases might be major spenders in the business. Instead, as noted by Gilt, it's helpful to focus on underlying *attributes* of an item and generate recommendations based on similarities between brands, prices, product categories, colors, etc. Attention must also be paid to showing the user items that are similar either because they can substitute or because they can be worn together. Visual search techniques can fill in information that allows products with no user interaction to get recommended. This might be tricky for pleasing suppliers, however, if a fashion brand who produces clothing sold on an ecommerce site is horrified to see their $2000 print skirt next to a visually identical option for $200. Preferences for a specific item will also change over time, especially after making a purchase. For example, while shopping for black pants, a user may want to see as many options as possible, then immediately lose interest in black pants recommendations after purchase and want to see coordinating shirts instead.

Given sparse information about a new user, recommender systems may solve the "cold start" problem by selecting content based on past behavior by a "similar" user. If John has a Nordstrom account and likes Armani and Burberry, when Mark first shops Nordstrom and searches for Armani, he might get Burberry in a list of recommended items on a product page. One concern that can be overlooked is the assumption that Mark and John are engaging with these products for the same reasons. Perhaps Mark loves expensive suits and otherwise prefers cheap t-shirts, while John exclusively shops for luxury brands across his wardrobe. Trending content is also a common source of "default" recommendations for unknown users, making fashion analytics startups like Trendalytics and Editd a highly relevant source of data processing.

A hybrid approach of content-based and collaborative filtering approaches works well in this industry, and companies seem to be taking advantage of extracting as much data as possible per item. There is a major opportunity in computer vision and deep learning to classify the relatively clean images that make up much of fashion ecommerce, a problem approached BY startups like Slyce. [BOF Article]. Lyst, a company that sells products from a network of retailers, uses supervised learning to automatically classify products instead of taking existing copy and categorization at face value, including color parsing with support vector machines, and duplicate item sensing with locality sensitive hashing. Pinterest notes a less than 1% false positive rate for detecting items from images when computer vision techniques are used in combination with metadata about items. This kind of personalization can be supplemented by automated pose estimation and other item recognition techniques to retrieving similar outfits by silhouette.

For unconventional business models like Rent the Runway, sophisticated inventory movement data is incorporated its personalized recommendations. The idea is to maximize how many times one dress can be worn by taking into account the logistics of shipping from user to warehouse to user on time, with specialty dry cleaning in between wears. 

Some sites have millions of products and users, and it would be computationally expensive to check on each possible variable. Because of this cost, many sites also update recommendations overnight instead of in realtime. But there is some disconnect with the user, as an individual may not necessarily revisit a site daily. There is some focus, therefore, in academic literature on how to improve the computational efficiency of the matrix decompositions underlying these recommendations. Probabilistic methods (e.g. ETSY blog post cf, Finding Structure with Randomness: Probabilistic Alogirthms for Const. Matrix Decomp.) can improve on robustness, speed, and accuracy of a recommender, in part by reducing the computational complexity of a matrix decomposition.

Successful recommenders seem to be measured by computational speed, with few studies exploring user experience relative to different types of recommenders. Sites can (and do) construct tests themselves by displaying or AB testing multiple sets of options generated by different recommenders. There are also different standards on how many similar products to show: about a dozen, looping (Net-A-Porter and Farfetch), a few dozen with endless scroll capabilities (Lyst), or four (Gilt) -- it would be interesting to note how these different options affect how consumers interact with their recommendations. In addition, some scrutiny can be applied to how long it takes for the consumer to "run out" of unique suggestions. 

In order to flesh out explicit feedback, useful for informing consumers, encouraging logins and increasing internal data sources for a recommender, companies can consider what asking four different types of ratings/reviews/Q&A: 

* I am a consumer who owns this product. 
* I am a consumer who has seen or tried on this product in person. 
* I am the brand who designed this product 
* I am a retailer who carries this product

Totokaelo is doing a great job with getting additional review information from user-retailer interactions [link: http://totokaelo.com/maison-martin-margiela/tabi-bootie/black-combo/MH4435]. Rent the Runway incorporates extensive user feedback by purposely shipping two sizes per garment, and gathering private feedback from each transaction. Their database of selfies, fit reviews, and condition reviews gives them a clearer picture per item without requiring public-facing feedback on potentially sensitive issues. 

Hyper-personalization is seen both in an algorithmic and human-centric approach. Zipfit Denim in Chicago collects metrics from its inventory of denim and takes in explicit user preferences to suggest individual pairs of jeans that will fit the user, meaning men walk in and out of the store in minutes with well-fitting jeans. This goes deeper than brand-level fit recommendations. Human-validated decisions also permeate the fashion recommender space. P.S. Dept in NYC started out retrofitting bricks & mortar retailers with an iPhone app that connects existing store associates to consumer requests anywhere, so their recommendations are all individually tailored in realtime for active users. Subscriptions services like Stitch Fix partner algorithms with "curators" for users, who can further tailor recommendations to the user before sending out a box of 5 items at a time. To get back in touch with the human side of fashion, the recommender literature would benefit from a field study of user feedback on various algorithms, beyond metrics like click-through rates.  
 
__WORKS CITED__

* [1] Koren, Yehuda. Yahoo Research. Bell & Volinsky, AT&T Labs. - 2009 IEEE paper: Matrix Factorization Techniques for Recommender Systems. 
* Lyst talks 
* Etsy Blog
* Matrix Factorization for Recommender Systems 
* Collaborative filtering blah blah  (e.g. Etsy Lyst)
* Weighted Alternating least squares (e.g. Etsy Lyst)
* Weighted Low Rank 
_Related Companies:_
* Netflix (potentially open?) http://www.wired.com/2013/08/qq_netflix-algorithm/
* Amazon
* Ebay (search >> recommender)
* Etsy (open) https://codeascraft.com/2014/11/17/personalized-recommendations-at-etsy/
* Potential Problems or Points of Interest:
A/B Testing - is it the best way to judge?
Amazon Mechanical Turk example from @echen
http://www.quora.com/How-do-you-measure-and-test-the-quality-of-recommendation-engines/answer/Edwin-Chen-1
* [1] Collaborative Filtering for Implicit Feedback Datasets (Etsy, Lyst)
* Weight Alternating Least Squares 
[ ] Probabilistic Matrix Factorization, Salakhutdinov and Mnih.
[Ref Volinsky]
http://www.fastcompany.com/3025642/getting-their-fix


[link: http://developers.lyst.com/data/images/2014/02/13/background-removal/]
[link: http://developers.lyst.com/data/images/2014/02/13/background-removal/]
[link: http://www.slideshare.net/ejlbell/fashion-productdeduplication]
http://vision.is.tohoku.ac.jp/~kyamagu/research/paperdoll/ (paperdoll)
http://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&arnumber=6909696 (deep learning for pose estimation)

* Pinterest paper 
* paper about human side of recommenders
