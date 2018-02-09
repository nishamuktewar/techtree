
## Adversarial attacks and countering adversarial attacks

Adversarial examples are deliberately constructed inputs which cause a network to produce the wrong outputs (e.g., misclassify an input image). The existence of such examples tells us something about interesting about the differences between DNN vision and human vision (i.e., very different). 

Adversarial examples can be constructed even without access to the to-be-attacked model, and no knowledge of the model whatsoever, and without access to the training data. Mere access to the models predictions is sufficient. Adversarial examples produced with one network architecture are likely to fool NNs with different architecture, and even non-neural classifiers. Essentially, adversarial samples generate really well, which isn't exactly what we were hoping for.

Adversarial examples exist because a NN learns to partition the (very high dimensional) decision space into section that are larger than the space real data lives in (essentially, adversarial samples exist because NNs are too linear). Also, existence of adversarial samples shows that the partitioning of the space by an NN doesn't overlap with human partitioning. 

To find effective adversarial examples, one needs strategies (because the search space is huge). Most strategies rely on the morphing of real images until adversarial samples are found (i.e., evolutionary strategies). Interpretability solutions can be used as a foundation for generation of adversarial examples (by showing the boundaries of the decision space and therefore the space within which adversarial examples can be generated).

Adversarial examples are not limited to images, they also exist for text classification, or classification. Adversarial attacks can change [policies of RL agents](https://arxiv.org/pdf/1701.04143.pdf).

The best overview of adversarial attacks is [here](https://blog.acolyer.org/2017/02/28/when-dnns-go-wrong-adversarial-examples-and-what-we-can-learn-from-them/) and [here](https://blog.openai.com/adversarial-example-research/).

### Defending against adversarial attacks

There are several strategies to defend against adversarial attacks. [Knowledge distillation](https://arxiv.org/pdf/1511.04508.pdf) is one approach, where the NN is not distilled to be smaller but the decision surface is artificially flattened around real data to limit the damage of adversarial attacks. Alas, it is known to [not be immune against attacks either](https://nicholas.carlini.com/papers/2016_defensivedistillation.pdf).

There are many other approaches to immunizing NNs:
 - GAN based by FB: https://openreview.net/forum?id=BkJ3ibb0-
 - GAN like: https://arxiv.org/pdf/1705.09064.pdf with github code https://github.com/Trevillie/MagNet (Keras and TF)
 -  Convex outer adversarial polytopes: https://arxiv.org/abs/1711.00851
 -  https://arxiv.org/abs/1705.07535
 - (not necessarily immunize, but this one indicates a technical basis for why systems may be vulnerable): https://arxiv.org/pdf/1711.02846.pdf
 - (GAN approach to creating AEs for then building defenses - which sortof sounds like building better guns to improve your bulletproof vest): https://arxiv.org/pdf/1801.02610.pdf

We could build a fun prototype for this topic (battle of human against machine in correct classification, or some more business oriented prototype). However, I am not sure the field is "ready".

(Agree - also, I don't think most clients would see the immediate relevance and might just percieve it as another layer of complexity in a field which is already difficult to understand and implement - i.e. I don't know if we have good recommendations we can give to clients about what to do about this yet, other than to let certain clients in media and transportation and consulting know that these exist. It would be cool to build a program to take a person's pic and automatically tweak it to fool [this](https://cloud.google.com/vision/) or [this](https://www.tineye.com/))

*Overall*: I suggest one more deep dive into the paper on immunizing adversarial attacks, potentially for a newsletter post, but not likely this will be a report topic. 
