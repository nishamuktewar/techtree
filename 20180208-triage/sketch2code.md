# Sketch 2 code / wireframe 2 code / etc.

X 2 code is a dream of a world in which we can translate you-name-it into code to realize digital products in less time also for faster iteration cycle during product development. Code name: #AutoIDEO. 

Essentially, X 2 code is a subfield of "automatic programming": automatic code generation to allow human (programmers / designers) to work at a higher level. Also, a subfield of "program synthesis": automatically constructing a program that conforms to a given high(er)-level specification (also known as Church's problem) It is, in spirit, related to probabilistic soft logic: "From a logical point of view, a program synthesizer is a solver for second-order existential logic.". Since 2014, there have been yearly [program synthesis competitions](http://www.sygus.org/). Still, so far only small programs.

There are two recent products out there:

 - Sketching interfaces at AirBnB: https://airbnb.design/sketching-interfaces/
 - MS Ink2Code: https://www.microsoft.com/en-us/garage/blog/2018/01/napkin-disrupted-meet-ink-code-microsoft-garage-project/

They are not strictly speaking automatic programming tools. It's likely that the backend for the AirBnB tool is an image recognition classifier trained to recognize defined elements of the AirBnB visual language (https://airbnb.design/building-a-visual-language/). Once recognized, code templates for the element are retrieved and an optimization algorithms (presumably iterative) fits them "on the screen". There is less info for Ink2Code, it's likely a similar backend w/o the image recognition component (it's a virtual sketch).

Program synthesis is an active field of research with a long tradition. Currently, there are two key challenges in program synthesis. First, there are trillions of possible programs in our expressive DSL (domain specific language), and the correct program has likely never been seen before by the system. Second, because the I/O examples are hand-generated by a human, they often contain noise (e.g., typos), as in the example above. MS build a program synthesizer using an [attentional sequence-to-sequence neural network](https://www.microsoft.com/en-us/research/blog/deep-learning-program-synthesis/) which can solve simple regex style problems. 

A few more resources:
 - https://www.microsoft.com/en-us/research/publication/robustfill-neural-program-learning-noisy-io/
 - https://www.microsoft.com/en-us/research/publication/neuro-symbolic-program-synthesis-2/
 - Selecting from generated programs using RL: https://arxiv.org/abs/1801.03526
 - 2017 article that promising impressive results (soon): https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5597726/
 - DeepCoder: https://openreview.net/pdf?id=ByldLrqlx
 - Glass box program synthesis: https://arxiv.org/abs/1709.08669
 - 
 
Also, this paper outlines an algorithm to uncover rules / programs from data (i.e., not clusters) (i.e., reverse probabilistic soft logic): https://papers.nips.cc/paper/5785-unsupervised-learning-by-program-synthesis.pdf

*Overall*: cool stuff. AirBnB work cool but not interesting from an algorithmic perspective. Program synthesis very cool, but too early / limited to date.