
## Automated Machine Learning - An Overview

There is a lot of interest in automated machine learning (AutoML) driven by the lack of data science and machine learning talent and the high costs associated with hiring and retaining data scientists and machine learning engineers. Furthermore, Google CEO Sundar Pichai talks about the promise of AI-as-a-service or automated machine learning, e.g., at the [Google I/O conference summer 2017](https://www.technologyreview.com/s/607894/why-googles-ceo-is-excited-about-automating-artificial-intelligence/): he introduced project "AutoML" coming out of the company’s Google Brain AI research group. Meanwhile, the company [DataRobot](https://www.datarobot.com/) aggressively pushes its AutoML platform.

As so often, there is confusion about what AutoML actually means, or what it is. There are at least three different notions of AutoML:

 - **Citizen Data Science**: automated data science and machine learning will allow everyone to do data science and machine learning (i.e., no special skills required).
 - **Efficient Data Science**: automated data science and machine learning will assist data scientists and machine learning engineers in their work to make them more efficient.
 - **AutoML as transfer learning**: the use of pretrained models or algorithms to solve novel problems.
 - **AutoML as meta learning**: the use of algorithms to find the best neural network architecture or custom optimization algorithm for a given problem.

Google's AutoML works on AutoML as meta learning, DataRobot addresses interpretation "Citizen Data Science" and "Efficient Data Science" (without making that distinction). Here are two good AutoML overview articles:

 - https://medium.com/airbnb-engineering/automated-machine-learning-a-paradigm-shift-that-accelerates-data-scientist-productivity-airbnb-f1f8a10d61f8
 - https://blog.bigml.com/2017/01/23/machine-learning-automation-beware-of-the-hype/

### Citizen Data Science

There is consensus that Citizen Data Science is not possible, perhaps even dangerous; give people tools they don't know to use and chaos ensues. Nevertheless, it is such a good sales pitch, companies like DataRobot do try to market their solution as a Citizen Data Science solution.

### Efficient Data Science

There are many parts of the data science and machine learning workflow that are repetitive. There are also problems everyone solves, and not always well, part of the data science and ML pipeline (e.g., data and model versioning). Companies like Domino Data Labs, and CDWS, aim to make data scientists more efficient. There is a definite lack of smart platforms for rapid experimentation (i.e., testing and benchmarking different models) and smart hyperparameter optimization while there are (open source) tools:

 - AutoSklearn: https://github.com/automl/auto-sklearn
 - RoBo: https://github.com/automl/RoBO (Bayesian optimization framework)
 - HOPLib2: https://github.com/automl/HPOlib2 (hyperparameter optimization)
 - SMAC3: https://github.com/automl/SMAC3 (hyperparameter opt)
 - AutoWeka: https://github.com/automl/autoweka (model selection, hyperparams)
 - TPOT: https://github.com/rhiever/tpot (genetic programming to optimize ML pipelines)
 - auto_ml: https://github.com/ClimbsRocks/auto_ml (experimentation, model selection, hyperparams)
 - WizzML: https://bigml.com/whizzml (and flatline https://github.com/bigmlcom/flatline)

The [paper](https://papers.nips.cc/paper/5872-efficient-and-robust-automated-machine-learning.pdf) on AutoSklearn was presented at NIPS in 2015.

There is definite potential, but companies are going to reap the biggest benefits if they build in-house infrastructure to support their data science and ML teams. 

[Uber](https://eng.uber.com/michelangelo/) and [Google](http://www.kdd.org/kdd2017/papers/view/tfx-a-tensorflow-based-production-scale-machine-learning-platform) recently wrote about their machine learning platforms (good [overview article](https://medium.com/intuitionmachine/google-and-ubers-best-practices-for-deep-learning-58488a8899b6) that compares the two). Uber's includes a "feature store". Unsurprisingly, the same (engineered) features prove useful for many models. Alongside storage of appropriate metadata (e.g., author of model, training set, features, etc.) these architectures can greatly enhance the productivity of data science teams. 

To make data science and ML teams efficient, we need to identify current bottlenecks. A recent (2017) [paper](https://arxiv.org/abs/1703.03924) looks at ML pipelines generally and identifies what's needed especially in production, a possible guide for constructing platforms that enhance the efficiency of data science and ML teams. Generally, an excellent paper from Google published in 2014 highlights [typical anti-patterns](https://research.google.com/pubs/pub43146.html) in ML that platforms could mitigate.

### Transfer and meta learning
Transfer and meta learning are active areas of research, very exciting ones. 

 - Good overview of learning to learn with many references: http://bair.berkeley.edu/blog/2017/07/18/learning-to-learn/
 - AdaNet - learning the structure of networks: https://arxiv.org/abs/1607.01097
 - AutoML for optimization algos: https://arxiv.org/abs/1606.04474

Note that if companies do a better job storing models and making them searchable, like Uber does, than you can the benefits of "transfer" learning without the complications. You can reuse features (not quite transfer learning but similar in spirit) and lower layers of neural networks. 




