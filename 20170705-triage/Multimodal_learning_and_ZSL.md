## Multimodal Learning
Multimodal learning generally refers to models that can extract unified representations from inputs of diverse modalities. This is to say that voice, video, image, and text could all be used together to train a classifier. Approaches to multimodal learning include the use of Deep Boltzmann Machines, Google's recent Tensor2Tensor, etc. Multimodal learning has demonstrated gains in accuracy and is effective with incomplete training data, which is one reason why it has been used for zero- and single-shot learning as well. 

In a recent newsletter, FFL has described the tensor2tensor approach to multimodal learning as "essentially a creative re-use of established deep learning model components. There are four "modality nets", the "sensory organs" of MultiModel, one for language (text data), one for images, one for audio, and one for categorical data. These modality nets learn abstract representations of the inputs (i.e., representation learning, at the heart of neural network success) and feed into a task- and domain-agnostic encoder for even more abstract, modality independent representation learning."

_Brief Bibliography_
- Kaiser, Lukasz, et al. "One Model To Learn Them All." arXiv preprint arXiv:1706.05137 (2017). https://arxiv.org/pdf/1706.05137.pdf
- Srivastava, Nitish, and Ruslan R. Salakhutdinov. "Multimodal Learning with Deep Boltzmann Machines". NIPS. 2012. http://papers.nips.cc/paper/4683-multimodal-learning-with-deep-boltzmann-machines.pdf
- Ngiam, Jiquan, et al. "Multimodal Deep Learning". ICML. 2011.http://machinelearning.wustl.edu/mlpapers/paper_files/ICML2011Ngiam_399.pdf

Recent developments in Multimodal Learning come out of the Kaiser et al. paper (2017) and have application in audio, video, and image recognition. One key benefit of Multimodal Learning (and ZSL) is the ability to leverage unlabeled datasets into well-trained models... this reduces costs of labelling data where none previously exists. While some of the approaches for transfer learning that cover ZSL and Multimodal Learning more broadly have been understood for a couple of years now, the recent release of Google's Tensor2Tensor could make a report on Mulitmodal learning a good way to get involved with that package. 

Algorithmic innocation: https://arxiv.org/pdf/1706.05137.pdf
Most "obvious" application: recommendation engines
Concern: overlap with FF07