__Fashion Recommender Systems__

_What is a recommender?_

A recommender system is a computational framework for automatically matching users to products/content primarily on e-commerce sites, whether or not the user has a history or login for that site.  

Most recommendations for one user are based on products other users enjoyed. If John likes Slayer and Feist, and you search for a Feist song, the next song may well be a Slayer song. (Or, other Feist songs. Or people she has collaborated with in the past. Or other songs that are labeled with the same genre, or year, or other factors). 
It is computationally expensive for a site with millions of users and potentially millions of products to find the inner product of a matrix across all of these products. Products that have not been rated by many (or any) users, suffer (and must be counted for, somehow). Popular products that could potentially dominate all recommendations must be weighted against.

Apparel and fashion recommenders can be found at sites like Gilt, Lyst, and Nordstrom to name a few. Other recommenders based on “taste” (rather than subject matter, etc) include SEE: list below 

_How does this work in the present?_

Basically everyone is doing the same thing. Create a product matrix, create a user matrix, tweak a little bit. Do some svd, compute inner products (but not all of the inner products because it is too computationally expensive to do. There are some workarounds for the computational expense of the recommenders. Weight against empty entries (1 = preference 0 = No preference (negative preference not measured))

The paper I am reading now points out that probabilistic methods could be faster, more robust, more precise, more useful computational methods for computing inner products (?) restricting matrices to their low rank subspaces *by allowing for computations to a target matrix with a fixed amount of columns plus a tolerance of 5-10 extra columns, which drastically improves the probability of finding a better low-rank representation). 

Which is great, but still says nothing about user testing. EChen has a conversation about this. 

Well, first of all, no one seems to be measuring how good of a job they’re doing (or talking about it). What everyone’s talking about is the computational efficiency of the algorithms. And workarounds when they can’t 


__The human-algorithm spectrum__
_Make a visual for the human-algorithm spectrum of recommendations_ Fill list of co's first

Computation is only one side of the story. More than one startup is using a human-computer combination to produce better recommendations. 
Human -- 
*PS Dept app has a seamless integrated check out app that connects with stylists at tons of stores across the USA and does not need to pay them individually.
*Keaton Row also approaches this from a human perspective. (How are they doing financially?)
*There is also the MIT dude who has both an algorithm and human stylists that duke it out if there is a disagreement on the recommendations. 
*Mr. Larkin (class of Shopify or fully manual recommenders??)
*Net-a-Porter
*Barneys
*Bergdorf Goodman
*Neiman marcus 
*Saks
*Ssense
*?? Spring
*Farfetch
*Stitch Fix
*Proclivity (separate retailer add on) 
*Nordstrom 
*Gilt (to a disadvantage)
*Lyst is getting close to full automation - computer vision on products. Semantic analysis of product descriptions.
*Slyce
*(Etsy)
-- Computation

Are probabilistic matrix decompositions the only way to do a better job?
Why aren’t the visual computers doing better? [BOF Article]
Why is Lyst doing so well? [Targeted research, one at a time, CV, de-dupe, search, merge, etc]
Is the problem tagged vs untagged data? [probably sometimes. many semantic models. few objective]
How to you philosophically approach the nature of data? [how do you convert the data? are you objective (i.e. the rgbb contents of the image, the estimation of the pose) or personal (clicks, past likes, etc) 

... 
_Sample Experiment_
I have a lot of thoughts on this!! Ok, let’s say I am a female looking for a work-appropriate outfit for my new super strict office. How many clicks does it take before I end up in a loop of the same few products? How many peopel have built ways out of this loop? Investigation: websites and clicking: how many clicks until I get stuck? Are recommendations the same type of availability as the initial product (e.g. are they pooling from sold-out products?)
Love to write a paper profiling different sites and what’s going on with the recommenders at that site. Don’t need to publish these sites and potentially alienate our clients but... want to get a better sense of the inner workings. 

All my shopping exclusively on Lyst because it’s easier than anything else to find what I need and no extras. Google searching can be a last resort - usually I’ll want to guess which ecomm sites have it and check there 

_Observation_
Lack of user experience, or integration with how people shop in 3D 
What about integration with physical buying habits?
What about RFID tags and seeing where a product moves in a store (which products covary in-store?) and using that to bolster online preferences?
What’s the store front?
Conceptually: 
We would never ask a user to walk into a store and declare their purpose before seeing the contents of a store. How does the visual architecture of the recommender match with the structures of visual merchandising in the fashion industry that is presently standard? How about side/front/back views not working out? .

Irrelevant - If i go in for a Mara Hoffman bikini and leave with a Clover Canyon, what can you do with that information? What can Mara Hoffman do? What are the bigger problems being pointed to with the blank matrix entries?

Is implicit the only way we should be gathering data? Ratings can be tacky for items. How do we review products we’ve seen in store but do not own? What is the right classification system? (I own this product. I have seen this product in person. Allow brands to respond. Allow clerks to respond).
sample startup in seattle is doing this really well, allowing a conversational "rating" / q&a system

_TODO: Experts_

** Must note that this came from the etsy engineering blog and should get a quote from an Etsy engineer.
Read through the entirety of realtime and get a sense of how this might fit with a new paradigm. **

_Deep Learning and other trends_
Are there probabilistic machine learning methods for recommender systems that aren't doign a good enough job?
Yes: Collaborative filtering / deep learning / read! check 




_Fashion-Native Companies:_

* Barneys - Has worked with Proclivity in the past
* Saks - Has worked with Proclivity in the past
* Lyst - Teeming with data scientists
* Net-A-Porter - Uses stylists
* PS Dept - Uses tech to link in-store associates with shoppers (humans!)
* Gilt (relatively open)

_Visual Search:_
* Slyce (JCP/Neiman?)
* 

_Aggregators:_ 
* Wanelo (N/A)
* Fancy (still relevant?)
* Want
* Nuji (potentially open?)
* Polyvore


_Related Companies:_
* Netflix (potentially open?) http://www.wired.com/2013/08/qq_netflix-algorithm/
* Amazon
* Ebay (search >> recommender)
* Etsy (open) https://codeascraft.com/2014/11/17/personalized-recommendations-at-etsy/

Potential Problems or Points of Interest:
A/B Testing - is it the best way to judge?
Amazon Mechanical Turk example from @echen
http://www.quora.com/How-do-you-measure-and-test-the-quality-of-recommendation-engines/answer/Edwin-Chen-1

Are there standard ways to judge the effectiveness of the algos? 
Looping: For example, the Gilt algo will eventually run out of products. E.g. How many clicks before you run out of products? 
Idea of discovery 

Comparing & abstracting: 
Gilt - eventually cycles through the same six pairs of wide-leg pants & runs out of ideas
Gilt - doesn't remember whether you've clicked on this and vow to show something else
Gilt - not styled by hand, only algo answer. does not show other outfit pieces
Gilt - non-existant or hidden social component 
Lyst - sometimes overly inclusive (more search engine than recommender) 
Lyst - first-page recommender is content curated by branding team
Lyst - very flexible for filtering out products when you have something very specific in mind
Lyst - combines visual similarity and category filtering 
Lyst - Usually has a new thing to click on without running into a closed-loop
Lyst - Documented as using: "Weighted Alternating Least Squares" & "Collaborative Filtering for Implicit Feedback Datasets" 
** Read some papers on this
Wanelo - assumes you want to shop like other people (someone says this isn't true? Lyst?)
Polyvore - clustery
Etsy - TMI. How to adjust? Collapses a matrix cown
Barneys - Check how many clicks before a loop. Does have some overlap.

Future Possibilities, Improvements:
Approximate Bayesian Computation might be helpful for simulating recommendations based on a tiny number of clicks. 
Bloom filters (?) Hmm 
Tinder-like explicit feedback for product recommendations (why is this not happening?) 


Reference Papers To Source: 
[1] Collaborative Filtering for Implicit Feedback Datasets (Etsy, Lyst)
Weight Alternating Least Squares 
[ ] Probabilistic Matrix Factorization, Salakhutdinov and Mnih. 

Paper notes

That Netflix prize paper literally everyone uses for something. 
[1] Koren, Yehuda. ahoo Research. Bell & Volinsky, AT&T Labs. - 2009 IEEE paper: Matrix Factorization Techniques for Recommender Systems. 
    Problems Raised. 
      Content filtering - creates a user or product profile - *expensive to gather & merge external information
      Collaborative filtering - identifies user-item associations, analyzes user relationships & item similarity
          *Cold start problem - What to do with a new product or new user? Content filtering is better. 
          Neighborhood method
          Latent factor models - discovers its own categories which may or may not be immediately apparent
            Matrix factorization - scale well, accurate predictions, flexible modeling options
             *Explicit feedback - difficult, most users only rate a small number of products.
             Implicit feedback - strength of matrix factorization.
              *Computing the mapping of each item and user to factor vectors q and p. Matching items to hidden factors
              SVD *must factor the user-item rating matrices
              *sparseness in rating matrix continuing problem
               *using only the known value causes overfitting
               *data imputation (older method) increases amt. data
               * model the observed only & avoid overfitting with regularized model. 

This paper exactly is still being referenced by Etsy, 2014. 

// Notes 1/23, 1/29 primarily offline. 

Recommender Systems so far: 
IContent based methods
Collaborative Filtering
Hybrid Models

Problems: 
Huge matrices take too long to process
Users are barely prompted for feedback
Success is measured by computational complexity / speed
   

// 

CDL for RS (Collaborative Deep Learning...)
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

Finding Structure with Randomness: Probabilistic Alogirthms for Const. Matrix Decomp.
Use randomization for more powerful matrix decome 
rand om sample -> subspace -> implicit/explicit compresse d matrix -> reduced matrix deterministic manipulation _. low rank factorization 
benefits: 
accuracy + speed + robustness
O(mnlog(k)) vs O(mnk), k = dominant components of svd
k passes instead of O(k) passes
too big matrices, missing data, too many passes over data = :( 
MC = low/uncertain accuracy, sensitive to rng
Randomization = insensitive to rng quality, highly accurate result (what does accurate mean here?) 
classic steps -- 
(1) construct a low d subspace
(2) restrict matrix to subspace & compute a strd factorization (qr, svd, etc...)
Now: Use random samplling mathods instead. 

__WORKS CITED__
Etsy Blog
Matrix Factorization for Recommender Systems 
Collaborated 
Weighted Low Rank 