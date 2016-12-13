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

# Andrew Ng on Applied AI (excellent talk)
Nuts and Bolts of Applying Deep Learning:
https://www.youtube.com/watch?v=eyovmAtoUx0&feature=youtu.be starting at 9:10.
He gives practical suggestions for how to best design and measure AI projects.
Excellent (and featured in Dec 2016 client newsletter).

# General Adversarial Networks (Ian Goodfellow)
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
