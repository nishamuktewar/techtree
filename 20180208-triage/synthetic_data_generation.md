TL;DR: This is a promising area.  It would be worth doing some more research.  A lot of advances are being made in tandem with other GAN research right now and this is something that would enable a lot of interesting and highly applicable data work.

What it is: Models that start at random and generate data that should reflect the distribution of underlying data.  This allows people to build models where data may be sparse or there are privacy concerns.  This also allows for people to generate new images based on the distributions from other (real) images.  Gets around some issues of labeled data being expensive.

How it works:
- Three types (according to OpenAI and Mighty AI):
  - Generative Adversarial Networks (GANs): Generator changes based on differences that the discriminator finds between the true and modeled data.
    - Difficult to optimize but have clearer images.
- Variational auto-encoder (VAE): graphical model that maximized the lower bound (?) on the log likelihood of the data
  - Can perform learning and efficient Bayesian inference - but images tend to be blurry
- Autoregressive models: (such as PixelRNN) train a network that models the conditional distribution of the top and left pixels (of images).
- MIT LIDS (laboratory for information and decision systems) group describes the synthetic data vault using recursive conditional parameter aggregation.
- Use MLE to determine a “goodness of fit” between simulated and real data using Kullback-Leibler divergence, the probability of sampling numbers below the lower bound and the probability of sampling numbers above the higher bound.
- Drawbacks of original GAN: 
  - Hyperparameter dependent
  - Have to hand tune because loss functions are not informative
  - Can’t generate categorical data (but can with Wasserstein GAN)

Recent advances:
- Wasserstein GAN (WGAN) 
- Bidirectional GAN- Learns a generative and encoding network
- InfoGAN- maximizes information overlap between generators input space and inference net’s output space
- Adversarial autoencoder- regularizes the autoencoder- forcing it to a meaningful, structured, and cohesive code space

Where it’s been used:
- Can train to generate game data
- Synthetic medical image generation

Papers/Reports:
https://arxiv.org/abs/1801.02385
https://blog.openai.com/generative-models/

Blogs:
https://blog.waya.ai/simgans-applied-to-autonomous-driving-5a8c6676e36b
http://news.mit.edu/2017/artificial-data-give-same-results-as-real-data-0303
https://mty.ai/blog/at-a-glance-generative-models-synthetic-data/
https://engineering.salesforce.com/using-synthetic-data-modeling-to-enhance-machine-learning-675175beed45
https://medium.com/jungle-book/towards-data-set-augmentation-with-gans-9dd64e9628e6
https://blog.waya.ai/simgans-applied-to-autonomous-driving-5a8c6676e36b
