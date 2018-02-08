# Learning on confidential data

## Data leakage during model serving

It is sometimes possible to learn about the training data given a black box
model. 

E.g. in [Membership Inference Attacks against Machine Learning Models,
2016](https://arxiv.org/abs/1610.05820) they figure out if a specific example
was in the training set.

In [Model Inversion Attacks that Exploit Confidence Information and Basic
Countermeasures](http://www.cs.cmu.edu/~mfredrik/papers/fjr2015ccs.pdf) they
reconstruct the faces that correspond to each class of a black box face
classifier that gives estimates of confidence.

These recent examples demonstrate that the kinds of "attacks" are broad. There
are no general purpose strategies for mitigating all of them. It would
therefore be difficult to provide something of general utility in the report or
prototype. It would end up being a bag of tricks.

## Shared learning

In this scenario N organizations want to share data with each other because it
will improve their own model (or the shared model) to have more, high quality
training data. But they cannot share their data because of legal or competitive
requirements.

E.g. banks want to train a joint fraud model. Healthcare organizations want to
train a epidemic model.

Multi-party computation allows them to jointly compute a function without
having access to any data other than their own. Interesting, but the
computational overheads are large and it doesn't seem to have been applied to
ML.

There's an interesting business model here in acting as the broker here, and
building incentives into the algorithm to share good data (See R6 of [A
Berkeley View of Systems Challenges for
AI](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2017/EECS-2017-159.pdf) for
more on this.)
