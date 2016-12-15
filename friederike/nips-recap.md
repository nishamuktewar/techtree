# NIPS 2016
All posters with links to spotlight talks:
https://nips.cc/Conferences/2016/Schedule?type=Poster

Reddit link with compilation of various implementations
of these papers.
https://www.reddit.com/r/MachineLearning/comments/5hwqeb/project_all_code_implementations_for_nips_2016/

# Relevant work for past reports

## Probabilistic Programming & Bayesian Inference

Tutorial Description on Variational Inference by David Blei, Shakir Mohamed,
and Rajesh Raganath (https://nips.cc/Conferences/2016/Schedule?showEvent=6199).
The slides are here
(http://www.cs.columbia.edu/~blei/talks/2016_NIPS_VI_tutorial.pdf) and containt
nice examples which may help us as we communicate the content we developed to
clients. For research, part IV "Beyond the Mean Field" is relevant. It presents
a number of approaches to approximate more complex posterior distributions than
we cover in our report. Here is a summary of the proposed approaches:

! [Visual summary of work beyond the Mean Field]
(https://github.com/fastforwardlabs/techtree/blob/master/friederike
/VarInference-overview.png)

### Important References
 - Gregor et al. 2016: DRAW - https://arxiv.org/abs/1502.04623
 - Rezende et al. 2015: Variational Inference with Normalizing Flows -
   http://jmlr.org/proceedings/papers/v37/rezende15.pdf
 - Kingma et al 2016: Improving Variational Inference with inverse
   autoregressive flows - https://arxiv.org/abs/1606.04934
 - Dinh et al. 2016: Density estimation using Real NVP -
   https://arxiv.org/abs/1605.08803
 - Ranganath et al. 2016: Hierarchical Variational Models -
   https://arxiv.org/abs/1511.02386

### Books
Book covering variational inference in depth for background reading and/or
technical clients: https://people.eecs.berkeley.edu/~jordan/papers/variational-
intro.pdf

### Applications
 - Bayesian method for large-scale forcasting (Amazon)
   https://papers.nips.cc/paper/6313-bayesian-intermittent-demand-forecasting-
   for-large-inventories.pdf Nice example how Bayesian methods can be applied
   to time series data.

# Relevant for future reports

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

(See also http://www.inference.vc/my-summary-of-adversarial-training-nips-workshop/ --mike)

! [Visual overview of GANs]
(https://github.com/fastforwardlabs/techtree/blob/master/friederike/GANs.png)

## Awarded Talk: Value Iteration Networks (VINs)
https://papers.nips.cc/paper/6046-value-iteration-networks.pdf NN for planning
based reasoning (cool), can solve simple mazes (i.e. path planning). Reactive
policies won't work for goal-directed behavior. Key insight, classic value
iteration can be represented by a CNN. Generalizes well. Model free.

## Using Fast Weights to attent to the recent past
https://arxiv.org/abs/1610.06258 the authors propose and test a new type of
weight that does not, like classic weights, act as the long term memory of the
network. Instead, values of weights decay over time to act as short term memory
(to free up hidden units to function purely as working memory). Neat.

## Phased LSTMs
Cool. Micha played with them. https://arxiv.org/abs/1610.09513 Kind of funny
how the brain employs the same mechanism e.g.
http://www.sciencedirect.com/science/article/pii/S1364661316301474 Related work
https://github.com/fastforwardlabs/techtree/blob/master/friederike/nips2016pict
ures/IMG_1461.JPG

## Interpretability
Not a big topic at NIPS, the talks that were presented were nice but not great.

## Genetic Algorithms for NN (structure) optimization
Artificial evolution of neural networks using genetic algorithms, promising
approach to solving reinforcement learning problems:
http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf ... maybe genetic
algorithms will be back after all? The optimization of the
structure/architecture of NNs was a bit topic at NIPS:
https://arxiv.org/abs/1606.02580

## Dialogue systems
Slides are here: https://github.com/fastforwardlabs/techtree/blob/master/friede
rike/jason_weston_nips2016-rnn_symposium_pdf.pdf Nice incremental talk on how
to build modular and end-2-end dialogue system. Relevant for any chatbot
project, NLU, and dialogue management. Good introduction, nice motivation, good
process recommendations for research. https://github.com/fastforwardlabs/techtr
ee/blob/master/friederike/nips2016pictures/IMG_1475.JPG

Also workshop on dialogue systems: http://letsdiscussnips2016.weebly.com/ Cool
talks https://arxiv.org/abs/1606.01269 (Jason Williams), NLU through
cooperative referential games (nice alternative approach)
https://arxiv.org/abs/1605.07133,
https://mainatnips.github.io/mainatnips.github.io/abstracts/gauthier-
mordatch.pdf, https://arxiv.org/abs/1610.04211, and
https://arxiv.org/abs/1611.06216 (review paper, start here).

The workshop was really well organized, a good balance of novel, alternative
approaches, an exploration of the value of linguistic approaches, E2E deep
learning, and the one and only event I went to that was gender balanced. Jason
Weston did am amazing job and would be worth reaching out to. Very nice guy.

## Meta Learning/Transfer learning
e.g. RL2: https://arxiv.org/pdf/1611.02779.pdf Big topic at NIPS. More
references https://github.com/fastforwardlabs/techtree/blob/master/friederike/n
ips2016pictures/IMG_1462.JPG

## (Deep/RL) Learning Communication Protocols
 - https://arxiv.org/abs/1602.02672
 - https://arxiv.org/abs/1605.06676 Multi-agent coordination requires a model
   of the other. Papers on learning communication protocols from scratch.
 - http://learning.mpi-sws.org/mlss2016/slides/2016-MLSS-RL.pdf

## Compositionality & Deep Learning
https://arxiv.org/pdf/1511.06279v3.pdf complex modular NN structure to learn at
higher levels of abstraction to allow flexible behavior in (unfamiliar)
environments with capability to learn compositional programs (cool).

# Relevant for short projects

## Supervised word mover's distance
http://mkusner.github.io/publications/SWMD.pdf to help bias WMD to discriminate
along lines important for the task at hand. Alternatively, one could "squash"
the word embedding space. Still neat.

## Beyond Exchangability: the Chinese voting process
Neat paper on how to estimate quality of posts on community boards like
Stackoverflow partialling out bias like one on top more often viewed.
http://papers.nips.cc/paper/6362-beyond-exchangeability-the-chinese-voting-
process.pdf

## Examples are not enough: learn to criticize
http://people.csail.mit.edu/beenkim/papers/KIM2016NIPS_MMD.pdf

## Hawke's process
https://arxiv.org/pdf/1507.02822v1.pdf

## Open AI Universe
https://openai.com/blog/universe/ - take for a test drive!

## Crowdsourcing and Active Learning
Similar work to "fake news detector" - ground truth is unknown, how do you
estimate the reliability of your sources? Coherence (Friede wrote her Logic MS
thesis on this).

 - Tutorial: http://www.jennwv.com/projects/crowdtutorial.html
 - Workshop:http://crowdml.cc/nips2016/
 - Noteable: nice talk on violation independence assumption (which many folks
   take for granted) by Jenn Wortman Vaughan. Also
   http://suchow.io/assets/docs/suchow2016crowdml.pdf and
   https://arxiv.org/pdf/1602.03619.pdf
 - More here https://github.com/fastforwardlabs/techtree/blob/master/friederike
   /nips2016pictures/IMG_1469.JPG

In general, fun how experimental design and ML meet. Dominant, the "Dawid-Skene
model" (?).

Also interesting application for hedge funds where again, ground thruth isn't
known but the isolation/independence of group helps figure out what's signal.
Apparently, 2Sigma is doing something like this already.

# Other

## Andrew Ng on Applied AI (excellent talk)
Nuts and Bolts of Applying Deep Learning:
https://www.youtube.com/watch?v=eyovmAtoUx0&feature=youtu.be starting at 9:10.
He gives practical suggestions for how to best design and measure AI projects.
Excellent. He prediced transfer learning as the next big thing in ML, not
reinforcement or unsupervised learning. ***client newsletter Dec 2016***

## Comparing biological systems to algorithms
To help improve our understanding of biology and to help design more efficient
algorithms. The authors looked at how the brain constructs its network and
shows that excessive wiring with usage dependent pruning leads to more
efficient, robust networks than adding nodes and edges as needed. Second
application to oder discrimination in the fly and locality sensitive hashing.
Beautiful work!
(https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3261700/pdf/msb201178.pdf) See
also: http://www.algorithmsinnature.org/ ***good for blog post***

## Differentiable Neural Computers
 - http://www.nature.com/nature/journal/v538/n7626/full/nature20101.html
 - http://www.nature.com/nature/journal/v538/n7626/full/nature19477.html?cookie
   s=accepted
 - https://arxiv.org/abs/1410.5401
 - https://deepmind.com/blog/differentiable-neural-computers/ (start reading
   here) ***good for blog post***

## Turker Communities
Jenn Wortman Vaughan analyzed the dependence/independence of Amazon Turkers and
discovered micro communities, where Turkers have recreated the social dynamics
of traditional jobs. Interesting case study on the impact of "the new job
economy" on people's lifes and their spontaneous reaction to it. ***good for
blog post***

(Mike adds: http://wiki.wearedynamo.org/index.php/Guidelines_for_Academic_Requesters is an interesting attempt to unionize/organize turkers to advocate for better conditions)

## Royal Society Machine Learning Working Group
 - https://royalsociety.org/about-us/committees/machine-learning-working-group/
   Have a paper coming out soon on society and ML. Interesting. ***good for
   blog post (once working paper is out)***

## Z. Ghahramani - 7 Challenges AI/ML
(1) interpretability (2) verification & robustness (3) privacy & sensitive data
(4) real world data, biases and messiness (5) causality (6) human machine
interaction (7) security & control

# Eval plans future reports based on NIPS

- Causal models and reasoning > up and coming.
- Differential privacy/overfitting and private data --- synthetic data
  generation > hot two years ago in academic community
- One shot learning > up and coming
- Semi-supervised/adversarial learning --- embedding and autoencoders > current
- Reinforcement learning > current in industry hard to get data you need
  (that's why research is on games)
- Dynamic vocabs in NLP (fasttext) > current
- Intuitive psychology/theory of mind (RL for coffee) > up and coming
- Automatic theorem proving/program correctness --- property-based code testing
  > one poster only but Samsung Research also working on it
- Neuromorphic computing --- FPGAs > up and coming
- Conversational AI/bots --- question answering > current
- Time series/forecasting --- Gaussian processes > very little
- Serverless products > nothing
- Interpretability (LIME, BRLs) and trust > some but not very interesting work
- Recommendation > little
- Automatic ML/parameter optimization > current to up and coming especially
  automatic optimization of NN architecture
- Provenance/reproducibility of data analysis > one talk
- Source/fact credibility ranking --- fact-checking plugin > covered in
  crowsourcing, niche
- Anomaly detection > little
- Source code repository analysis/sparse pointer models > little
