I love episolon-delta proofs! Brings me back to the early days in analysis! 

Been area of research for 10 years (academia, Cynthia Dwork at Microsoft) and becoming popular now (or has it been more widespread?), likely because of greater use of data science in private sector.

Would make for an interesting report because it challenges market to think differently about foundations of privacy (from anonimity to protections in an aggregate).

Market and commercial opportunity I believe strong because everyone has to be concerned with privacy. Also think good sell for banks so we can help them hide input of models to meet SEC information barrier requirements.

An outstanding issue in the community is how to quantify privacy budgets to different models and queries - this would be where to look for any new developments in the research area. We're not there yet. 

I think there is a place to articulate these rather technical concepts in layman's terms to help larger audience understand.

Can we survey our customers to see who is using this yet? Should we have that as a formal step in our research process?

Two directions in research/commoditizaiton: increasingly particular (PrivInfer, Variational Bayes, topic modeling, Nets --> specific noise for specific techniques) or generalization (frameworks across distributions)

Possibility of short report that focuses on diff priv versions of algorithms we already studied? 

Developments:

PrivInfer - wrote about this in ProbProg report - framework for Probprog languages (do we see this as commoditization - customization to different tooling?) 

Kunal Talwar at Google Brain gave a good talk (https://www.youtube.com/watch?v=HFMZYFrHqLo&list=PLdDZb3TwJPZ7Ug5Ydu1j9V1m_RgtW7C9_&index=4) about adding diff priv to nets. 

Aaron Roth at UPenn on reuse of data sets (Adaptive queries) and working with privacy budgets - likely good for active learning (?): (https://www.youtube.com/watch?v=9mqXjdnZA18&index=7&list=PLdDZb3TwJPZ7Ug5Ydu1j9V1m_RgtW7C9_)

This paper (https://arxiv.org/abs/1610.07543) on privacy loss with correlated time series data.  

This paper (https://arxiv.org/pdf/1611.08936v1) works to generalize diff privacy framework from specific distributions (Gaussian, Laplacian). 
