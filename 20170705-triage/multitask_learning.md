# Multi-Task Learning

## Overview

- Particularly useful in robotics where multiple sensors and multiple
  definitions of being a "good robot" exist, however advances in this field are
  small due to data limitations
    - https://arxiv.org/abs/1610.08844 (endoscopic robots)
    - https://arxiv.org/abs/1609.07088 (RL, transfer learning... using
      mutli-task to bootstrap zero-shot learning)
- Image/Text seem to be the major winners
    - https://arxiv.org/abs/1605.05101 (text)
    - https://arxiv.org/abs/1510.05484 (image)
- Google's "kitchen sink" model doesn't quite do multi-task learning, but
  instead does multi-input single task learning. The interesting part about it
  is their use of pre-trained models. Other papers also use pretrained for
  multi-task and show really good success with it which other papers (namely the
  endoscopic one).

- The main benefit seems to be using additional data _you already have_ during
  training and then modifying the network to remove the additional
  classifications you don't need later.
    - ie: you want to classify a piece of text. you have the text, the
      classification target, and some extra information like the source of the
      text. Start with a network predicting both classification and source:

                                         ,--- classification target
            text --- latent NN layers --<
                                         '--- source of text

      once the network is trained, simply delete the branch in the NN to the
      "source of text" prediction.

- There may be some interesting effects here where regularization is forcing the
  model to learn general features and the auxiliary tasks help with providing
  the positive feedback in finding those general features


## Thoughts

This seems like a great topic that really lets people make full use of their
data. I haven't seen any surveys going over how your data requirements change as
you add more tasks to your network and I can convince myself that it would go
either way (especially if the objective function is biased towards the primary
task).

I would say this is a research topic and there is a good opportunity for us to
make some contributions to the field. That being said, it may be hard to find a
compelling prototype.

## Background added 2017-07-25

[Technical primer](http://ruder.io/multi-task/index.html) (also on [arXiv](https://arxiv.org/abs/1706.05098))

[Deep Learning for NLP Best Practices](http://ruder.io/deep-learning-nlp-best-practices/index.html) puts it into an NLP research context
