## Privacy

- Training NN models on private data
    - Train a model on the private data then use that as a "teacher" to train
      another network. This way the "student" model cannot memorize any private
      data
    - http://www.gitxiv.com/posts/vgErFTsMhzv7B6rtn/semi-supervised-knowledge-transfer-for-deep-learning-from

## NLP

- Using Bayesian Inference to learn RNN weights for language models
    - Using bayesian inference to help avoid overfitting in RNN based language
      models
    - could this be used to create bounds on RNN weights for fine tuning on a
      small number of samples?
    - https://arxiv.org/abs/1611.08034
- Dealing with long range dependencies in language
    - A new type of 'attention/memory' model to help with strong long range
      dependencies (ie: code suggestion)
    - https://arxiv.org/abs/1611.08307
    - https://github.com/uclmr/pycodesuggest
- Fast text classifiers without NN
    - fastText is a text classifier that has similar accuracies as a NN but is
      fast as shit. Also handles out of vocab words!
    - http://www.gitxiv.com/posts/tm3BwwpxA39nAMmSj/bag-of-tricks-for-efficient-text-classification
- Rationalizing a NN's output
    - Identifying sections of text that are relevant to different qualitative
      aspects of an items review
    - http://www.gitxiv.com/posts/kA3yBQ57SjrnGzuNX/rationalizing-neural-predictions
- Translation using Atrous Convolutions
    - Much faster to processes since atrous convolutions process much faster
      than RNN's
    - http://www.gitxiv.com/posts/b5DTwRhTbxe9mCL8r/neural-machine-translation-in-linear-time
- Character level translation
    - character convolutions... sharable character representations across
      multiple language pairs to better performance.
    - http://www.gitxiv.com/posts/gbdoHS74NL5c24YxB/fully-character-level-neural-machine-translation-without

## Images

- Conditional PixelCNN image generation
    - Generate images conditioned on NN state (such as classification or latent
      variable state)
    - http://www.gitxiv.com/posts/QcpCypbBsMNgrZzfK/conditional-image-generation-with-pixelcnn-decoders


## Timeseries

- Variational Fourier Features for Gaussian Processes
    - A fast way to train gaussian processes that scales _very_ well with the
      number of features (O(NM) instead of O(NM^2))
    - http://www.gitxiv.com/posts/MThYikh4v6mccqZhz/variational-fourier-features-for-gaussian-processes


## Graph Theory

- Semi-supervised CNNs for graphs
    - Graphs have always been hard to deal with in NNs because they lack
      structure
    - http://www.gitxiv.com/posts/3LZ6Ep25Aw4KCG4Cc/semi-supervised-classification-with-graph-convolutional


## Music

- Using RL to help RNNs maintain long term structure
    - RNNs are hard to train when focusing on having good long term structure.
      This method uses RL (namely deep Q learning) to help with this.
    - https://notfuchsia.github.io/2016/10/24/natasha/


## Other

- memristors? everyone seems to be loving them in the "advanced technologies"
  fields
- NN expresivity
    - Cool analysis of the importance of a particular layer of a NN... could be
      used for automatic topology?
    - https://arxiv.org/abs/1611.08083

