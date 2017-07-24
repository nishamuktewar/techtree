*Unsupervised or supervised greedy pretraining of (deep) neural networks*: layer by layer training of neural networks, supervised or unsupervised, before complete network assembly. Usually (though not always) followed by a supervised fine-tuning step to optimize the entire network. In case of supervised pre-training, start with a shallow network to predict output variable, then keep only the input and hidden layers and use the output of the hidden layer as a new input to additional layers that now predict target variable (repeat). Unsupervised pretraining relies on single-layer representation learning algorithms such as RBM, single-layer autoencoders, sparse coding model, etc. Each takes the output of the previous layer. 

There are two primary reasons for pretraining: 

(1) It allows to use unlabelled data during training, in case labelled data is in short support (unsupervised pretraining). Here, pre-training relates to transfer learning.
(2) It allows to build very, very deep neural networks. Historically, pretraining was used to train deep neural networks before optimization algorithms were improved to train deep neural networks directly without pre-training. Very, very deep networks are still hard to optimize with SGD. Pre-training is essentially a way to initialize weights, and active area of research (e.g., https://arxiv.org/abs/1511.06422, https://arxiv.org/abs/1704.08863, https://prateekvjoshi.com/2016/03/29/understanding-xavier-initialization-in-deep-neural-networks/), for very, very deep nets. 

Pretraining is related to two major research efforts:

(1) Initializing weights: pretaining is a way to initialize weights, a way that informs initial weights by the data (vs. some statistical property).
(2) Improving optimizers: orthogonal to pretraining, pretraining compensates for lack of optimizers that work for very, very deep neural networks. 

 - Original paper [Bengio et al 2007](https://papers.nips.cc/paper/3048-greedy-layer-wise-training-of-deep-networks.pdf)
 - Recent work for very deep nets [FitNets](https://arxiv.org/abs/1412.6550)
 - Recent work on [16 - 19 layer conv net](https://arxiv.org/pdf/1409.1556.pdf). The paper shows that pre-training doesn't have to be layer-by-layer, it can also happen with assmeblies of layers. 
 - Schmidhuber and team also introduced ["information highway network"](http://papers.nips.cc/paper/5850-training-very-deep-networks.pdf), 

