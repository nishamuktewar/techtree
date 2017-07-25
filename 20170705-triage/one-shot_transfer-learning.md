## Zero- and Single-Shot Learning
One- or zero-shot learning is used to describe techniques that can be used to identify objects that were not present in the training of a classifier. A general approach to zero-shot learning models uses the descriptions of those objects, relates those descriptions to those that were present in the training layer, and uses the semantic relationship between trained and untrained objects to make a classification. It is basically a transfer learning problem. [Romera-Paredes and Torr](http://proceedings.mlr.press/v37/romera-paredes15.pdf) describe ZSL as a two-step process: training and inference. Inference can take several forms, including learning intermediate attribute classifiers, compatibility learning frameworks, or label embeddings.[Xian et al.](https://arxiv.org/abs/1703.04394) summarize the state-of-the-art of ZSL and, in doing so, distinguish between 'classic' ZSL and 'generalized' ZSL and suggest a framework for evaluating the success of ZSL approaches. Main applications are image recognition, but with some implementations, any CNN using semantic labels could be adapted for ZSL. Another major approach to ZSL is multi-modal learning, which has semantic transfer functions built in.

### N-shot / transfer learning can be achieved in at least three ways:
 - Harnessing rich representation layers of neural networks that are sufficiently abstract to be repurposed in novel (probably still somewhat related tasks), i.e., multi-task learning (and multi-modal to an extent)
 - Smart weight initialization, i.e., training NN on one task, freezing lower level weights, and retrain output layers on novel task with less data
 - Bayesian program learning, i.e., assumptions about data generation process limits space of possibilities and makes it easier to adapt to/learn from new samples

Algorithmic breakthrough: e.g. https://arxiv.org/abs/1605.05101
Capability: learning from very little data (opens up use cases for NN)
Concern: transfer learning, n-shot learning is a very broad topic

_Brief Bibliography_
- Xian, Yongqin, Bernt Schiele, Zeynep Akata. "Zero-Shot Learning - The Good, the Bad and the Ugly". arXiv. 2017. https://arxiv.org/abs/1703.04394
- Romera-paredes, Bernardino and Philip Torr. "An Embarrassingly Simple Approach to Zero-Shot Learning". ICML. 2015. http://proceedings.mlr.press/v37/romera-paredes15.html
- Socher, Richard, Milind Ganjoo, Christopher D Manning, and Andrew Y Ng. "Zero-Shot Learning Through Cross-Modal Transfer". NIPS. 2013. http://papers.nips.cc/paper/5027-zero-shot-learning-through-cross-modal-transfer.pdf
- Palatucci, Mark, Geoffrey Hinton, Dean Pomerleau, and Tom M Mitchell. "Zero-Shot Learning with Semantic Output Codes". NIPS. 2009. http://papers.nips.cc/paper/3650-zero-shot-learning-with-semantic-output-codes.pdf
- Fei-fei, Li, Rob Fergus, Pietro Perona. "One-Shot Learning of Object Categories". IEEE transactions on pattern analysis and machine intelligence 28(4). 2006. http://authors.library.caltech.edu/5407/1/LIFieeetpam06.pdf

_Recent Blog/Video Posts_
- [One-Shot Learning and Siamese Networks in Keras](https://sorenbouma.github.io/blog/oneshot/)
- [Zero-Shot Learning - Dr. Timothy Hopesdales](https://www.youtube.com/watch?v=jBnCcr-3bXc)
- [Zero-Shot Translation with Google’s Multilingual Neural Machine Translation System](https://research.googleblog.com/2016/11/zero-shot-translation-with-googles.html)
