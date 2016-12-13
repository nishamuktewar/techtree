# Probabilistic Programming & Bayesian Inference

Tutorial Description on Variational Inference by David Blei, Shakir Mohamed, and
Rajesh Raganath (https://nips.cc/Conferences/2016/Schedule?showEvent=6199). The
slides are here
(http://www.cs.columbia.edu/~blei/talks/2016_NIPS_VI_tutorial.pdf) and
containt nice examples which may help us as we communicate the content we
developed to clients. For research, part IV "Beyond the Mean
Field" is relevant. It presents a number of approaches to approximate more
complex posterior distributions than we cover in our report. Here is a summary
of the proposed approaches:

! [Visual summary of work beyond the Mean Field]
(https://github.com/fastforwardlabs/techtree/blob/master/friederike/VarInference-overview.png)

### Important References
 - Gregor et al. 2016: DRAW - https://arxiv.org/abs/1502.04623
 - Rezende et al. 2015: Variational Inference with Normalizing Flows -
 http://jmlr.org/proceedings/papers/v37/rezende15.pdf
 - Kingma et al 2016: Improving Variational Inference with inverse autoregressive
flows - https://arxiv.org/abs/1606.04934
 - Dinh et al. 2016: Density estimation using Real NVP - https://arxiv.org/abs/1605.08803
 - Ranganath et al. 2016: Hierarchical Variational Models - https://arxiv.org/abs/1511.02386

### Books
Book covering variational inference in depth for background reading and/or
technical clients: https://people.eecs.berkeley.edu/~jordan/papers/variational-intro.pdf

# Talks and papers I enjoyed

## Andrew Ng on Applied AI (excellent talk)
Nuts and Bolts of Applying Deep Learning:
https://www.youtube.com/watch?v=eyovmAtoUx0&feature=youtu.be starting at 9:10.
He gives practical suggestions for how to best design and measure AI projects.
Excellent (and featured in Dec 2016 client newsletter). He prediced transfer
learning as the next big thing in ML, not reinforcement or unsupervised
learning.

## General Adversarial Networks (Ian Goodfellow)
The slides for the tutorial are here
(http://www.iangoodfellow.com/slides/2016-12-04-NIPS.pdf). There was also a
workshop on Adversarial Training later in the week (see here for description
including a list of references -
https://sites.google.com/site/nips2016adversarial/) but I was at another
workshop. My assessment is - GANs are super cool and will find applications in
image to image translation, high resolution image generation, and next frame
video prediction but currently, there is no good evaluation metric for the
performance on GANs and the results are not production ready (please do look at
the mutilated dog pictures later in the slides)

! [Visual overview of GANs]
(https://github.com/fastforwardlabs/techtree/blob/master/friederike/GANs.png)

## Awarded Talk: Value Iteration Networks (VINs)
https://papers.nips.cc/paper/6046-value-iteration-networks.pdf
NN for planning based reasoning (cool), can solve simple mazes (i.e. path
planning). Reactive policies won't work for goal-directed behavior. Key insight,
classic value iteration can be represented by a CNN. Generalizes well. Model
free.

## Bayesian method for large-scale forcasting (Amazon)
https://papers.nips.cc/paper/6313-bayesian-intermittent-demand-forecasting-for-large-inventories.pdf
Nice example how Bayesian methods can be applied to time series data.

## Comparing biological systems to algorithms
To help improve our understanding of biology and to help design more efficient
algorithms. The authors looked at how the brain constructs its network and shows
that excessive wiring with usage dependent pruning leads to more efficient,
robust networks than adding nodes and edges as needed. Second application to
oder discrimination in the fly and locality sensitive hashing. Beautiful work!
Worth a blog post (https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3261700/pdf/msb201178.pdf)
See also: http://www.algorithmsinnature.org/

## Using Fast Weights to attent to the recent past
https://arxiv.org/abs/1610.06258 the authors propose and test a new type of
weight that does not, like classic weights, act as the long term memory of the
network. Instead, values of weights decay over time to act as short term memory
(to free up hidden units to function purely as working memory). Neat.

## Phased LSTMs
Cool. Micha played with them. https://arxiv.org/abs/1610.09513 Kind of funny how
the brain employs the same mechanism e.g.
http://www.sciencedirect.com/science/article/pii/S1364661316301474

## Supervised word mover's distance
http://mkusner.github.io/publications/SWMD.pdf to help bias WMD to discriminate
along lines important for the task at hand. Alternatively, one could "squash"
the word embedding space. Still neat.

## Beyond Exchangability: the Chinese voting process
Neat paper on how to estimate quality of posts on community boards like
Stackoverflow partialling out bias like one on top more often viewed. http://papers.nips.cc/paper/6362-beyond-exchangeability-the-chinese-voting-process.pdf


- Causal models and reasoning
- Differential privacy/overfitting and private data --- synthetic data
  generation
- One shot learning
- Semi-supervised/adversarial learning --- embedding and autoencoders
- Reinforcement learning
- Dynamic vocabs in NLP (fasttext)
- Intuitive psychology/theory of mind (RL for coffee)
- Automatic theorem proving/program correctness --- property-based code testing
- Neuromorphic computing --- FPGAs
- Conversational AI/bots --- question answering
- Time series/forecasting --- Gaussian processes
- Serverless products
- Interpretability (LIME, BRLs) and trust
- Recommendation
- Automatic ML/parameter optimization
- Provenance/reproducibility of data analysis
- Source/fact credibility ranking --- fact-checking plugin
- Anomaly detection
- Source code repository analysis/sparse pointer models
