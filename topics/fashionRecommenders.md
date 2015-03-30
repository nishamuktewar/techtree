__On Fashion Recommenders__ 

*__What is a recommender system?__*

A recommender system for the apparel & fashion industry can be defined as a computational framework for automatically matching users of e-commerce sites with product suggestions. Personalization done well puts the right products in front of the right users at the right time, and can have a serious impact on revenue -- notably Gilt Groupe saw double-digit revenue lifts from their personalization efforts. A given e-commerce site may have tens of thousands of products available for sale, and has the flexibility to create unique displays of items to match the preferences of millions of users. In the fashion industry, extensive effort also goes into manual product curation. A set of recs might link to products to complete an outfit (as on Net-a-Porter), which was expertly styled at a photoshoot long before the product was listed. An editorial team may create pages of looks to match trending themes (as on Lyst), although which editorial posts are featured can also be customized per user.  

These systems can focus on a few paradigms to produce a recommendation. __Content-based approaches__ tend to focus on information extracted from products (product description, fibers, item category, sizes, colors) or the user (age group, location, preferences profile). Say a user fills out a profile asking for a navy cocktail dress on Rent the Runway, a rental site where users borrow high end dresses for a fraction of the price. It is relatively safe to for a recommender to focus closely on the user's specifically entered preferences, as the user may have a very specific requirements for a formal outfit to wear on a specific day for a specific event. For the most part, it is difficult to get consumers explicitly fill out preferences, and when they do it could be more aspirational than behavioural (e.g. listing a very expensive high end brand the user loves but never purchases). __Collaborative filtering__ develops an estimate for a user's interest in an item by comparing behaviors of many users, or by looking for hidden similarities between items. Explicit preferences come from products that are liked, favorited, added to wishlists, or rated. Implicit preferences may be gleaned from behaviors like browsing, purchasing, and searching on the site [[matrix fact paper]]. Given a modeled (?) vector of __user preferences__ and another of __item performance__, the *inner products* of these two vectors attempt to estimate a user's __interest level__ in a product, even if it has not been seen before. To find similar customers, a system may look for patterns of affinity across a matrix of users and items. In fashion, however, items have a fixed or seasonal shelf life and may *never* replenish if sold out. So, it's not terribly useful to gain a deep understanding of a certain product, and assume interest in the product will accumulate over time. A well-liked product may also be the lowest in stock, even more severely for sites with short-term sales like Gilt. Instead, it's important to focus on underlying attributes of an item, and generate recommendations based on clusters of brands, prices, product categories, 

[Ref Volinsky]

Given sparse information about a new user, recommender systems may select content based on past behavior by a "similar" user. If John has a Nordstrom account and likes Fendi and Dior, when Mary goes first shops Nordstrom and searches for Fendi, she might get Dior in her list of recommended items on a product page. Gilt builds in recommendations based on search -- if you look for a specific brand that they do not carry, you will automatically see similar brands that are carried. 

[[ The tricky part is determining how you know John "likes" Fendi - did he rate a Fendi product five stars, does he click on Fendi products frequently, was it added it to a favorites list, is he following the brand's updates, has he recently purchased, or do we just know that he searched for both within a short time period? And, are Mary and John similar enough to make this recommendation work (i.e. do they like these brands for the same reasons)? Does Mary have a thing for expensive handbags, yet only spends about $30 per item otherwise, while John exclusively shops luxury brands? Choosing how to model the vast variety of feedback possible to incorporate makes different recommenders unique. ]]

Products that have not been rated by many users suffer and must be incorporated. Popular products that could potentially dominate all recommendations must be weighted against. In some systems, negative preference is not measured at all.

What's likely to happen next -- 

Some sites have millions of products and users, and it would be computationally expensive to check on each possible variable. There is some focus, therefore, in academic literature on how to improve the computational efficiency of the matrix decompositions underlying these recommendations. Probabilistic methods for matrix decomposition help (e.g. ETSY blog post cf). Because of this cost, many sites also update recommendations overnight, instead of in realtime. But the user is not going to wait until tomorrow for recommendations to get better - typically, they want to have a good experience, now. [[ Fold in below ]]

[Prob Matrix Decomp Paper Notes]
> Finding Structure with Randomness: Probabilistic Alogirthms for Const. Matrix Decomp.
Use randomization for more powerful matrix decome 

* random sample
* subspace
* implicit/explicit compressed matrix
* reduced matrix deterministic manipulation
* low rank factorization 
> benefits: 
accuracy + speed + robustness
O(mnlog(k)) vs O(mnk), k = dominant components of svd
k passes instead of O(k) passes
too big matrices, missing data, too many passes over data = :( 
MC = low/uncertain accuracy, sensitive to rng
Randomization = insensitive to rng quality, highly accurate result (what does accurate mean here?) 
classic steps -- 
(1) construct a low d subspace
(2) restrict matrix to subspace & compute a strd factorization (qr, svd, etc...)
Now: Use random sampling mathods instead. 

Yet, very little of the research considers performance gains in the context of users, which could be why in industry many companies tend to incorporate human recommendations to improve user experience. The next paper might be something like: Field studies in recommender systems. 


_How does this work in the present?_

>* Content based methods
* Collaborative Filtering
* Hybrid Models

__Problems:__ 
> * Huge matrices take too long to process
* Users are barely prompted for feedback
* Success is measured by computational complexity / speed

__Problems Raised in [1]__
>* Content filtering - creates a user or product profile
* expensive to gather & merge external information
* Collaborative filtering - identifies user-item associations, analyzes user relationships & item similarity
* Cold start problem - What to do with a new product or new user? * Content filtering is better. 
* Neighborhood method
* Latent factor models - discovers its own categories which may or may not be immediately apparent
* Matrix factorization - scale well, accurate predictions, flexible modeling options
* Explicit feedback - difficult, most users only rate a small number of products.
* Implicit feedback - strength of matrix factorization.
* Computing the mapping of each item and user to factor vectors q and p. Matching items to hidden factors
* SVD - must factor the user-item rating matrices
* sparseness in rating matrix continuing problem
* using only the known value causes overfitting
* data imputation (older method) increases amt. data
* model the observed only & avoid overfitting with regularized model. 

Unlike some of the classic research in machine learning literature, starred ratings (explicit feedback) on fashion products are not always a given. 

Instead of passing through large amounts of data rather slowly, there are probabilistic methods that can be used to get around the computational heft -- 
[Etsy-suggested Probabilistic Matrix decomp paper] points out that 
>probabilistic methods can be faster, more robust, more precise, more useful computational methods for computing inner products, restricting matrices to their low-rank subspaces by allowing for computations to a target matrix with a fixed amount of columns plus a tolerance of 5-10 extra columns


-- __Computation__

Mini experiment in specificity: 
searched "Black Culotte"
Site | # Results | # Rmds | Similar Recs | Coordinating Recs 

Gilt | 1 | 4 | 1p culottes & 3 pairs of pants | None
NAP | n | 13+ | All pants | Outfits given as well
Lyst
Ssense
Farfetch
Barneys()
Saks()


__New Development__ 

> // [CDL for RS (Collaborative Deep Learning...)]
Heirarchical Bayesian Model (SDAE)
PMF (probabilistic matrix factorization)
Inputs: 
Text blob (bag of words from item content info)
rating matrix (from any users) 
Problems:
sparse ratings ruin the performance of CF, CTR
CTR needs help with sparse rating data 
Solutions:
CDL allows both matrix factorization of sparse matrix 
& ratings provide feedback to guide the extraction of useful features
Works with other types of deep learning
Tested on real-world data 
Outperforms CTR 
//

On the other hand, there is a major opportunity in computer vision to classify the crisp, clean images that make up much of fashion e-commerce in a more objective manner (implicit feedback). [BOF Article]
Why is Lyst doing so well? [Targeted research, one at a time, CV, de-dupe, search, merge, etc]
Is the problem tagged vs untagged data? [probably sometimes. many semantic models. few objective] How to you philosophically approach the nature of data? [how do you convert the data? are you objective (i.e. the rgbb contents of the image, the estimation of the pose) or personal (clicks, past likes, etc) 

// [Lyst talks]
> using mathematics to unders

__User Experience__
To increase accuracy, should induce customers to leave product information. What is the right classification system? (I own this product. I have seen this product in person. Allow brands to respond. Allow clerks to respond).
sample startup in seattle is doing this really well, allowing a conversational "rating" / q&a system
 
First pages are often curated by marketing/branding/styling experts. Human-validated decisions (brought up by Birchbox or Stitch fix or one of the other box people)

Looping: For example, the Gilt algo will eventually run out of products. E.g. How many clicks before you run out of products? 
eventually cycles through the same six pairs of wide-leg pants & runs out of ideas. Doesn't remember whether you've clicked on this and vow to show something else.

Wall of recommendations (overly inclusive, search engine like)first-page recommender is content curated by branding teamLack of outfit completion / overfocus on outfit completion.

Recently, sites have opened the hood to where these recommendations are coming from, and allow for a few different paradigms to co-exist. Telling the user why they are receiving a recommendation may yield a more positive experience -- e.g. Amazon's "Items purchased together" vs "Similar Items" vs "Sponsored Content" vs "Customers who bought x also bought y" 

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

__Random thoughts__
Future Possibilities, Improvements:
Approximate Bayesian Computation might be helpful for simulating recommendations based on a tiny number of clicks. 
Tinder-like explicit feedback for product recommendations (why is this not happening?) 
Bloom filters? 

__TODO: Experts__
** Must note that this came from the etsy engineering blog and should get a quote from an Etsy engineer.
Read through the entirety of realtime and get a sense of how this might fit with a new paradigm. **

