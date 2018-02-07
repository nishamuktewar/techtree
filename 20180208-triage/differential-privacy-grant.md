# Differential privacy:

## Thinking about a prototype:

This was more interesting to read about then I thought it would be! My main goal was to think about a prototype. My first take would be a prototype that displays query results at the top and a table of the data at the bottom. You could then click a button to ‘privatize’(?) the data and it would show how the individual records below were perturbed but the results of the queries remained nearly the same. It could also display how much leakage had occurred and maybe you could adjust the privacy budget. This would be more an illustration than an exact application…

I also think it would be fun to build some demonstrations of the need for it. Something like the paper on de-anonymizing individuals from the Netflix dataset. Probably we would have to do that with simulated data, which might make it less interesting. But the idea would be you view this dataset, then you have an auxiliary dataset and use that to go through and identify people with it. This could be combined with the prototype described above.

I think those would be fun prototypes to build and experiment with. I think the main issue is kind of like what we’ve talked about with reinforcement learning prototype ideas: the fact that we’d need to use a bunch of simulated data might make it feel like we had set things up for our algorithms to work, where the nice thing about prototypes like Brief is that you can see bring new articles/data to it and see how it performs.

## Reading notes:

**Uber differential privacy project**: https://medium.com/uber-security-privacy/differential-privacy-open-source-7892c82c42b6   
- "In short, differential privacy allows general statistical analysis without revealing information about a particular individual in the data.”  
- “Differential privacy is enforced by adding noise to a query’s result, but some queries are more sensitive to the data of a single individual than others. To account for this, the amount of noise added must be tuned to the sensitivity of the query, which is defined as the maximum change in the query’s output when an individual’s data is added to or removed from the database.”

**Strava heat maps reveal military bases**: https://www.theverge.com/2018/1/28/16942626/strava-fitness-tracker-heat-map-military-base-internet-of-things-geolocation . 
- Visual illustration how attempts to show interesting aggregate information can be used to identify near individual level data when focused on low-activity areas.

**What is differential privacy**: https://blog.cryptographyengineering.com/2016/06/15/what-is-differential-privacy
- Apple uses it to discover usage patterns without compromising individual data. 
- Definition: “Imagine you have two otherwise identical databases, one with your information in it, and one without it. Differential Privacy ensures that the probability that a statistical query will produce a given result is (nearly) the same whether it’s conducted on the first or second database.”  
- “Even more usefully, the calculation of “how much” noise to inject can be made without knowing the contents of the database itself (or even its size). That is, the noise calculation can be performed based only on knowledge of the function to be computed, and the acceptable amount of data leakage.”  
- “The total allowed leakage is often referred to as a “privacy budget”, and it determines how many queries will be allowed (and how accurate the results will be). The basic lesson of DP is that the devil is in the budget. Set it too high, and you leak your sensitive data. Set it too low, and the answers you get might not be particularly useful.”  
- Good example of the trade-off for machine learning projects in a link to a paper on dosing recommenations.

**De-anonymizing Netflix recommendations dataset**: https://www.cs.utexas.edu/~shmat/shmat_oak08netflix.pdf . 
- Shows the need for differential privacy. They were able to identify users whose viewing history they had by comparing them to the dataset. Then they looked at doing it with IMDB user data. They point out that subject matter of what was rated could reveal sensitive information about a user (political leanings, sexual orientation). Netflix had perturbed the data, but not by much.

**RAPPOR**: https://github.com/google/rappor . 
- Related project by google that protects individual privacy in survey responses while inferring aggregate info.
