TL;DR: This speeds things up sigificantly but I don't see (from my first pass) what big capability it enables.  

What is it: Train a compact model (that’s easier to deploy) with distilled knowledge from an ensemble of models.

How it works:
Train the single (distilled) model for each data point based on the distribution for that point taken from multiple models in the ensemble (called “soft targets” instead of true labels).
This technique can speed up how quickly models are served.

Recent advances:
Has been extended to multi-class (NIPS 2017)

Where it’s being used:
https://mashable.com/2018/01/25/twitter-improves-ai-to-crop-pictures/#iLLS_5eOOaqO

Papers:
https://arxiv.org/abs/1503.02531
https://arxiv.org/abs/1710.09282
https://arxiv.org/abs/1609.07061
https://papers.nips.cc/paper/6676-learning-efficient-object-detection-models-with-knowledge-distillation.pdf

Blogs:
https://www.kdnuggets.com/2015/05/dark-knowledge-neural-network.html

