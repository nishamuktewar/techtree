
Bayesian Program Learning (BPL) is an attempt to answer two questions:

 - How do people learn new concepts from a single or just a few examples (one-shot learning)?
 - How do people learn such abstract, rich, and flexible representations, especially from sparse data, that allow, e.g., creating new exemplars, parsing objects into parts and relations, creating new, abstract categories of objects based on existing categories?

The buzz (a Nobel Laureate in Physics [got excited](https://www.edge.org/response-detail/26671) and it received [media coverage](http://www.ctvnews.ca/sci-tech/new-algorithm-lets-machines-learn-like-humans-1.2695230)) around Bayesian Program Learning started with a publication in [Science in 2015 by Lake et al.](https://www.cs.cmu.edu/~rsalakhu/papers/LakeEtAl2015Science.pdf) accompanied by an [implementation of BPL in Matlab](https://github.com/brendenlake/BPL) (very academic code; there is an [abandoned attempt](https://github.com/MaxwellRebo/PyBPL) to port the code over to python). 

The idea of BPL is that concepts can be represented as simple probabilistic programs, that is, "probabilistic generative models expressed as structured procedures in an abstract description language". The authors say BPL brings together compositionality, causality, and learning to learn. It easier to understand when applied to a specific example, let's take the one from their paper - handwritten characters. Handwritten character types are an abstract representation of parts, subparts, and relations. Reflecting on the handwriting process, parts are created by strokes (i.e., lines between pressing down the pen and lifting it), subparts are created by pauses during a stroke (i.e., more primitive parts (modeled as cubic b-splines)). Knowledge about the handwriting process (i.e., causality behind the handwritten characters) is build into a generative model (i.e., the assumption that subparts can be modeled as cubic b-spines). Based on a set of training data, BPL learns the set of primitives (parts, subparts, and their relations (independent, connect top, connect bottom, along)), i.e., it learns the parameters for the generative model (it learns to parse during training). It composes characters by combining primitives into more complex objects (the supplement has all the [model info](http://cims.nyu.edu/~brenden/LakeEtAl2015Science_supp.pdf)). What BPL does, essentially, is impose a very strong inductive bias. The number of possible solutions is greatly restricted. Therefore, even a single example (one-shot learning) can steer the algorithm towards the right solution (i.e., one shot generation of images). In contrast, deep neural networks have a huge solution space with many hyperparameters. Therefore, they require a huge number of examples in order to converge to good solution.

The authors demonstrate successful one-shot learning within the domain of hand-written characters, the model has the ability to generate new sets of characters indistinguishable from human-generated ones based on one sample (i.e., it passed a "visual Turing test"). These are intriguing results, here is why this topic is not a good research report for FFL.

 - handwritten digits is a very narrow domain with few applications (and good exisiting solutions), generalizing BPL is no trivial task given that the "act of handwriting" is deeply built into the current generative model.
 - there is only a small research community interested in the topic (Josh Tenenbaum at MIT, Brenden Lake at NYU formerly MIT), few follow up papers (it's mainly the 2015 Science paper) (though Brendon was just appointed as assistant prof at NYU Data Science).

Intriguingly, Josh gave a presentation at the last O'Reilly AI conference (alas, I couldn't attend). Also, BPL was represented at NIPS 2016 (http://web.mit.edu/ellisk/www/programSample.pdf), but by the same crowd. I do believe it is a topic to keep track off, it's related to their [intuitive physics](https://arxiv.org/abs/1612.00341) ideas ([NIPS 2016 workshop](http://phys.csail.mit.edu/schedule.html)) (vs. bottom-up [PhysNet approach](https://arxiv.org/pdf/1603.01312.pdf)), too (and part of the history of image statistics in vision) but it is too immature for us to do as a report. Certainly not *applied* ML anytime soon. 

Program induction is cool and related, see [DeepCoder](https://openreview.net/pdf?id=ByldLrqlx), and more popular ([NIPS 2016 workshop](https://uclmr.github.io/nampi/)). Curriculum learning is also related (covered by Niki). 

Other references:
 - http://cims.nyu.edu/~brenden/1604.00289v3.pdf
 - http://web.mit.edu/ellisk/www/programSample.pdf
 - http://www.franksworld.com/2017/05/19/machine-learning-for-program-induction/
 - http://cims.nyu.edu/~brenden/LakeEtAl2015Science_supp.pdf

Kind of designing understandable, reusable features but in an automated fashion (vs. handcoded) based on understanding of real-world generative process of the observable "tokens". 

