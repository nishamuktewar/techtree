__On Fashion Recommenders__ 

*__What is a recommender system?__*

A recommender system for the apparel & fashion industry can be defined as a computational framework for automatically matching users of e-commerce sites with product suggestions. Personalization done well puts the right products in front of the right users at the right time, and can have a serious impact on revenue -- notably Gilt Groupe saw __double-digit revenue lifts from their personalization efforts.__ A given e-commerce site may have tens of thousands of products available for sale, and has the flexibility to create unique display sets of items to match the preferences of millions of users. In the fashion industry, extensive effort also goes into manual product curation. A set of recs might link to products to complete an outfit (as on Net-a-Porter), which was expertly styled at a photoshoot long before the product was listed. An editorial team may create pages of looks to match trending themes (as on Lyst, Gilt, and Net-a-Porter), although which editorial posts are featured can also be customized per user.  

These systems can focus on a few paradigms to produce a recommendation. __Content-based approaches__ tend to focus on information extracted from products (product description, fibers, item category, sizes, colors) or the user (age group, location, preferences profile). Say a user fills out a profile asking for a navy cocktail dress on Rent the Runway, a rental site where users borrow high-end dresses for a fraction of the price. It is relatively safe to for the recommender to focus closely on the user's exact preferences, as the user may have very specific requirements for a formal outfit to wear on a specific day for a specific event. Generally, it is difficult to get consumers explicitly fill out preferences, and when they do it could be more aspirational than behavioural (e.g. adding a preference for a very edgy brand when the user typically only purchases workwear).

__Collaborative filtering (CF)__ develops an estimate for a user's interest in an item by comparing behaviors of many users, or by looking for similarities between items. Explicit preferences come from products that are given star ratings. Implicit preferences may be gleaned from likes, favorites, wishlists, or behaviors like browsing, purchasing, and searching on the site. Imagine a matrix with users as rows and items as columns, whose entries indicate a user's affinity for a certain product (usually 1-5 stars for a rating). CF attempts to decompose this matrix into user vectors and item vectors. Given a vector of __user preferences__ and another of __item performance__, the *inner products* of these two vectors attempt to __estimate__ a user's __interest level__ in a product, even if it has not been seen before. This assumes that products will accumulate preference data over time, so that the matrix isn't too sparse to be useful. In fashion, however, items have a fixed or seasonal shelf life and may *never* replenish if sold out. The most popular products may also be the least interesting to a specific user segment. Instead, as noted by Gilt, it's helpful to focus on underlying *attributes* of an item and generate recommendations based on similarities between brands, prices, product categories, colors, etc. Attention must also be paid to showing the user items that are similar either because they can substitute or because they can be worn together. Preferences for a specific item will change over time, especially after making a purchase. For example, while shopping for black pants, a user may want to see as many options as possible, then immediately lose interest in black pants recommendations after purchase and want to see coordinating shirts instead.

Given sparse information about a new user, recommender systems may solve the "cold start" problem by selecting content based on past behavior by a "similar" user. If John has a Nordstrom account and likes Fendi and Dior, when Mary goes first shops Nordstrom and searches for Fendi, she might get Dior in her list of recommended items on a product page. One concern that can be overlooked is the assumption that Mary and John are engaging with these products for the same reasons. Perhaps Mary loves expensive handbags and very cheap clothing, while John exclusively shops for luxury brands across his wardrobe. Trending content is also a common source of "default" pages for unknown users, making fashion analytics startups like Trendalytics and Editd a highly relevant source of external data processing.

A hybrid approach of content-based and collaborative filtering approaches works well in this industry, and companies seem to be taking advantage of extracting as much data as possible per item. There is a major opportunity in computer vision to classify the relatively clean images that make up much of fashion e-commerce in a more objective manner. [BOF Article]. Lyst, a company that sells products from a network of retailers, uses supervised learning to automatically classify products instead of taking existing copy and categorization at face value [link: http://developers.lyst.com/data/images/2014/02/13/background-removal/], including color parsing with support vector machines [link: http://developers.lyst.com/data/images/2014/02/13/background-removal/], and duplicate item sensing with locality sensitive hashing [link: http://www.slideshare.net/ejlbell/fashion-productdeduplication]. 

This kind of personalization can be supplemented by automated pose estimation: http://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&arnumber=6909696 (deep learning for pose estimation)
garment classification: http://dl.acm.org/citation.cfm?id=2283775&preflayout=flat (read fashion magazine photos to learn garments that go together)
retrieving similar styles: http://vision.is.tohoku.ac.jp/~kyamagu/research/paperdoll/ (paperdoll)

Rent the Runway, where high-end dresses can be borrowed for an event and returned, incorporates sophisticated inventory movement information into its personalized recommendations. 

What's likely to happen next -- 

Measuring negative preferece
User experience
Automated matching
Deep learning

Some sites have millions of products and users, and it would be computationally expensive to check on each possible variable. Because of this cost, many sites also update recommendations overnight instead of in realtime. But there is some disconnect with the user, as an individual may not necessarily revisit a site daily. There is some focus, therefore, in academic literature on how to improve the computational efficiency of the matrix decompositions underlying these recommendations. Probabilistic methods (e.g. ETSY blog post cf, Finding Structure with Randomness: Probabilistic Alogirthms for Const. Matrix Decomp.) can improve on robustness, speed, and accuracy of a recommender, in part by reducing the computational complexity of a matrix decomposition.

Successful recommenders seem to be measured by computational speed, with few studies exploring user experience relative to different types of recommenders. Sites can (and do) construct tests themselves by displaying or AB testing multiple sets of options generated by different recommenders. There are also different standards on how many similar products to show: about a dozen, looping (Net-A-Porter and Farfetch), a few dozen with endless scroll capabilities (Lyst), or four (Gilt) -- it would be interesting to note how these different options affect how consumers interact with their recommendations. In addition, some scrutiny can be applied to how long it takes for the consumer to "run out" of unique suggestions (something Lyst maximizes by having a "view more" button). One paper [] points out that users like to see sets of items that go together well, rather than 

In order to flesh out explicit feedback, useful for informing consumers, encouraging logins and increasing internal data sources for a RS, companies can consider asking four different types of ratings/reviews/Q&A: 

* I am a consumer who owns this product. 
* I am a consumer who has seen or tried on this product in person. 
* I am the brand who designed this product 
* I am a retailer who carries this product

Totokaelo is doing a great job with getting additional review information from user-retailer interactions [link: http://totokaelo.com/maison-martin-margiela/tabi-bootie/black-combo/MH4435] Rent the Runway incorporates extensive user feedback by purposely shipping two sizes per garment, and gathering private feedback from each transaction. Their secret database of selfies, fit reviews, and condition reviews gives them a clearer picture per item regardless without requiring public-facing feedback on potentially sensitive issues. 

Hyper-personalization is seen both in an algorithmic and human-centric approach. Zipfit Denim in Chicago collects metrics from its inventory of denim and takes in explicit user preferences to suggest styles that will fit the user, meaning men walk in and out of the store in minutes with well-fitting jeans. Human-validated decisions also permeate the fashion recommender space. P.S. Dept in NYC retrofits bricks & mortar retailers with an iPhone app that connects existing store associates to consumer requests anywhere, so their recommendations are all individually tailored in realtime for active users. Subscriptions services like Stitch Fix partner algorithms with "curators" for users, who can further tailor recommendations to the user before sending out a box of 5 items at a time. 

Recommender systems would benefit greatly from a field study of how various algorithms are working in industry based on user feedback.  
 
__Notes: Tech Deets__
Aster
Hadoop
Atwood (?) 
Kafka
Spark
Scala 
Conjecture (Etsy)
Editd
Trendalytics
 
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
