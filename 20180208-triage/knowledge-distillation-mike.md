# Knowledge distillation

This is making neural networks simpler to make them smaller (and therefore
easier to deploy) and/or faster or less demanding of resources at inference.

There are a few main approaches. One is similar to the "shadow model" approach
we discussed in the interpetabilty report: i.e. use the "correct" model to
provide training data for a smaller network [e.g. Transferring Knowledge to
Smaller Network with Class-Distance
Loss](https://openreview.net/forum?id=ByXrfaGFe&noteId=ByXrfaGFe).

One is to constrain the weights to e.g. +1/-1 during training (see [Quantized
Neural Networks: Training Neural Networks with Low Precision Weights and
Activations ](https://arxiv.org/abs/1609.07061)

One is to more literally compress the "correct" model by doing things like
binarizing weights or otherwise representing them less precisely, or pruning
unimportant parts of the network, e.g. [Tensorflow docs, recommended! Very
clear!](https://www.tensorflow.org/performance/quantization)

[This 2017 review](https://arxiv.org/abs/1710.09282) provides a taxonomy and
survey of these techniques.

[This new paper uses a "Bloomier filter"](https://arxiv.org/abs/1711.04686) to
_encode_ rather than compress networks.

### Pros

There are lots of theoretical breakthroughs. This is cool and important stuff
from the point of view of people trying to better understand what makes neural
networks tick, and dealing with embedded deployment.

### Concerns

The capability -- making neural networks smaller and faster at inference -- is
extremely technical and hard to understand for most people. For those of our
clients that understand it, it doesn't come up in practice for most of them.

I know of one example among our clients: MediaMath trained RNNs on a
per-campaign and per-user basis, leading to a combinatorial expansion of number
of trained models, each of which was very large. They worked well but they gave
up deploying them because of size.

This would be 3 neural network reports in a row.
