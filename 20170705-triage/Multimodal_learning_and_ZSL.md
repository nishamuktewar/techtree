## Zero- and Single-Shot Learning
One- or zero-shot learning is used to describe techniques that can be used to identify objects that were not present in the training of a classifier. A general approach to zero-shot learning models uses the descriptions of those objects, relates those descriptions to those that were present in the training layer, and uses the semantic relationship between trained and untrained objects to make a classification. It is basically a transfer learning problem. [Romera-Paredes and Torr](http://proceedings.mlr.press/v37/romera-paredes15.pdf) describe ZSL as a two-step process: training and inference. Inference can take several forms, including learning intermediate attribute classifiers, compatibility learning frameworks, or label embeddings.[Xian et al.](https://arxiv.org/abs/1703.04394) summarize the state-of-the-art of ZSL and, in doing so, distinguish between 'classic' ZSL and 'generalized' ZSL and suggest a framework for evaluating the success of ZSL approaches. Main applications are image recognition, but with some implementations, any CNN using semantic labels could be adapted for ZSL. Another major approach to ZSL is multi-modal learning, which has semantic transfer functions built in.

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


## Multimodal Learning
Multimodal learning generally refers to models that can extract unified representations from inputs of diverse modalities. This is to say that voice, video, image, and text could all be used together to train a classifier. Approaches to multimodal learning include the use of Deep Boltzmann Machines, Google's recent Tensor2Tensor, and [find one more]. Multimodal learning has demonstrated gains in accuracy and is effective with incomplete training data, which is one reason why it has been used for zero- and single-shot learning as well. In a recent newsletter, FFL has described the tensor2tensor approach to multimodal learning as "essentially a creative re-use of established deep learning model components. There are four "modality nets", the "sensory organs" of MultiModel, one for language (text data), one for images, one for audio, and one for categorical data. These modality nets learn abstract representations of the inputs (i.e., representation learning, at the heart of neural network success) and feed into a task- and domain-agnostic encoder for even more abstract, modality independent representation learning."

_Brief Bibliography_
- Kaiser, Lukasz, et al. "One Model To Learn Them All." arXiv preprint arXiv:1706.05137 (2017). https://arxiv.org/pdf/1706.05137.pdf
- Srivastava, Nitish, and Ruslan R. Salakhutdinov. "Multimodal Learning with Deep Boltzmann Machines". NIPS. 2012. http://papers.nips.cc/paper/4683-multimodal-learning-with-deep-boltzmann-machines.pdf
- Ngiam, Jiquan, et al. "Multimodal Deep Learning". ICML. 2011.http://machinelearning.wustl.edu/mlpapers/paper_files/ICML2011Ngiam_399.pdf

Recent developments in Multimodal Learning come out of the Kaiser et al. paper (2017) and have application in audio, video, and image recognition. One key benefit of Multimodal Learning (and ZSL) is the ability to leverage unlabeled datasets into well-trained models... this reduces costs of labelling data where none previously exists. While some of the approaches for transfer learning that cover ZSL and Multimodal Learning more broadly have been understood for a couple of years now, the recent release of Google's Tensor2Tensor could make a report on Mulitmodal learning a good way to get involved with that package. 
