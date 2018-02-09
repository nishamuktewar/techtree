TL;DR: I don't think this would be the most fruitful topic, although it does hold promise for a lot of companies, I'm not convinced the recent advances have made anything "newly possible".

What is it: This is a broad field.  It can mean partially obscuring data, running neural networks on encrypted data, or running models locally (on a smart phone for instance) instead of transfering data back to the cloud (federated learning).  

How it works: 
Homomorphic encryption makes it possible to take in encrypted data and run machine learning models on it, and then spit out an encrypted result.  There are restricted ML algorithm cases in which this will work.  A blog that went through how to implement this showed that it took 12 minutes- so wouldn’t be useful for anything real time.  

Recent advances:
- Microsoft created Cryponet which uses homomorphic encryption
- Academic research terming this CryptoDL has build other CNNs with low degree polynomials (which are important for homomorphic encryption
  - Were able to get to 99.52% accuracy on MNIST data set.

Where it’s been/being used:
I can’t find any concrete uses (beyond Microsoft).  The hope is that people could use this on particularly sensitive data, such as health care or financial data.  The research for this is being funded by Microsoft and Google but I didn’t find many commercial applications.

Paper/reports:
http://www.ece.rutgers.edu/~asarwate/nips2017/NIPS17_DPML_Tutorial.pdf
http://proceedings.mlr.press/v48/gilad-bachrach16.pdf
http://www.shokri.org/files/Shokri-CCS2015.pdf
https://arxiv.org/abs/1602.05629
https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/46307.pdf
https://www.researchgate.net/publication/269997816_Differential_Privacy_and_Machine_Learning_a_Survey_and_Review
https://arxiv.org/abs/1711.05189
https://arxiv.org/abs/1412.6181

Blogs:
https://www.technologyreview.com/s/601294/microsoft-and-google-want-to-let-artificial-intelligence-loose-on-our-most-private-data/


