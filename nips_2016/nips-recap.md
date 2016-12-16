# Relevant work for past reports

## Probabilistic Programming & Bayesian Inference

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

The normalizing flow method is particularly interesting for it's versatility. In
it, you start with a gaussian and learn compositions of analytic functions that
transform the gaussian into your posterior. This gives you a fully differentiable
and potentially understandable form of the function. It also feels like there is
a connection between this and the learning-to-learn stuff, but I can't quite
place it yet.

Another interesting thing is the stochastic RNNs that allow you to track
uncertainty in latent state representations. This basically allows a motivated
way to connect the deterministic aspect of neural networks with the inherit
uncertainty when doing variational inference. This method also gives the best
results on audio analysis to date.
https://github.com/marcofraccaro/srnn

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

### Applications

 - Bayesian method for large-scale forcasting (Amazon)
https://papers.nips.cc/paper/6313-bayesian-intermittent-demand-forecasting-for-large-inventories.pdf
Nice example how Bayesian methods can be applied to time series data.



# Relevant for future reports

## General Adversarial Networks (Ian Goodfellow)

The slides for the tutorial are here
(http://www.iangoodfellow.com/slides/2016-12-04-NIPS.pdf). There was also a
workshop on Adversarial Training later in the week (see here for description
including a list of references -
https://sites.google.com/site/nips2016adversarial/) but I was at another
workshop. Our assessment is - GANs are super cool and will find applications in
image to image translation, high resolution image generation, and next frame
video prediction but currently, there is no good evaluation metric for the
performance on GANs and the results are not production ready (please do look at
the mutilated dog pictures later in the slides).

One interesting possibility with GANs is to use them to a) expand on training
data for use in other training procedures b) creating alternative but
representative datasets for economization

! [Visual overview of GANs]
(https://github.com/fastforwardlabs/techtree/blob/master/friederike/GANs.png)

## Awarded Talk: Value Iteration Networks (VINs)

https://papers.nips.cc/paper/6046-value-iteration-networks.pdf
NN for planning based reasoning (cool), can solve simple mazes (i.e. path
planning). Reactive policies won't work for goal-directed behavior. Key insight,
classic value iteration can be represented by a CNN. Generalizes well. Model
free.

## Using Fast Weights to attent to the recent past

https://arxiv.org/abs/1610.06258 the authors propose and test a new type of
weight that does not, like classic weights, act as the long term memory of the
network. Instead, values of weights decay over time to act as short term memory
(to free up hidden units to function purely as working memory). Neat.

## Phased LSTMs

Cool. Micha played with them. https://arxiv.org/abs/1610.09513 Kind of funny how
the brain employs the same mechanism e.g.
http://www.sciencedirect.com/science/article/pii/S1364661316301474
This sort of system is part of an effort to make an "asynchronous" neural
network that can take in data from various timescales. So, if we have multiple
sensors that are sampling data at very different rates, the NN can use this
information without needing to pad the data out. In their benchmarks, they were
able to make pLSTM's that use 5% the compute than the corresponding LSTM with
better accuracy in timeseries prediction.

## Interpretability

Not a big topic at NIPS, the talks that were presented were nice but not great.


## Learning to Learn

Learning to learn seems to be the big thing within the theoretical community at
NIPS. It involves creating algorithms whose outputs are optimal learning
algorithms. The most popular paper about this at this years nips was [Learning
to learn by gradient descent by gradient
descent](https://arxiv.org/abs/1606.04474) where you use an LSTM with SGD to
learn a better learning algorithm for another network that is being trained.
However, the 'learning to learn' community seems to have larger sights... they
don't just want to learn to learn the optimization algorithm but even the
general algorithms to generate the neural network in the first place. A
particularly interesting thing would be if an algorithm could be created that
would have automatically solved the 'vanishing gradient' problem with RNN's that
kept those algorithms from being useful until recently.

Another interesting aspect of this 'learning to learn' is how we now have reason
to believe that all local minima of deep NNs are global minima, which is great,
but that the saddle points are particularly bad (no negative hessian values
which means most optimization schemes will get stuck in them).  Furthermore,
exactly how bad the saddle points are depends on the size of the smallest layer
of your neural network. Learning to learn-type algorithms could automatically
give us ways to solve this problem.

https://github.com/deepmind/learning-to-learn


# Relevant for short projects

## Supervised word mover's distance

http://mkusner.github.io/publications/SWMD.pdf to help bias WMD to discriminate
along lines important for the task at hand. Alternatively, one could "squash"
the word embedding space. Still neat.

## Beyond Exchangability: the Chinese voting process

Neat paper on how to estimate quality of posts on community boards like
Stackoverflow partialling out bias like one on top more often viewed. http://papers.nips.cc/paper/6362-beyond-exchangeability-the-chinese-voting-process.pdf

## Examples are not enough: learn to criticize

http://people.csail.mit.edu/beenkim/papers/KIM2016NIPS_MMD.pdf
http://github.com/BeenKim/MMD-critic/

## better k-means initialization

kmeans? AT NIPS? WITH GOOD RESULTS??? Yes, it's crazy, but a cool paper with a
better initialization scheme for k-means has come out. It has the same error
guarantees as k-means++ but is MUCH faster to initialize. It also comes with
python code that is a dropin with sklearn so there is really no reason not to
use it right now.

https://github.com/obachem/kmc2


# Other

## Andrew Ng on Applied AI (excellent talk)
Nuts and Bolts of Applying Deep Learning:
https://www.youtube.com/watch?v=eyovmAtoUx0&feature=youtu.be starting at 9:10.
He gives practical suggestions for how to best design and measure AI projects.
Excellent (and featured in Dec 2016 client newsletter). He prediced transfer
learning as the next big thing in ML, not reinforcement or unsupervised
learning.

## Comparing biological systems to algorithms
To help improve our understanding of biology and to help design more efficient
algorithms. The authors looked at how the brain constructs its network and shows
that excessive wiring with usage dependent pruning leads to more efficient,
robust networks than adding nodes and edges as needed. Second application to
oder discrimination in the fly and locality sensitive hashing. Beautiful work!
Worth a blog post (https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3261700/pdf/msb201178.pdf)
See also: http://www.algorithmsinnature.org/

# Stuff, ignore

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
    - eDBF's? Discrepancy-based timeseries forecasting... seemed important in the
      workshop but I didn't quite understand why
- Serverless products
- Interpretability (LIME, BRLs) and trust
- Recommendation
- Automatic ML/parameter optimization
- Provenance/reproducibility of data analysis
- Source/fact credibility ranking --- fact-checking plugin
- Anomaly detection
- Source code repository analysis/sparse pointer models
