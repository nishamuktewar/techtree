**Curriculum learning** refers to the approach of determining the order by which the training sets are given to the algorithm we want to train, ‘the learner’. Its logic is inspired by the modern human learning approach of building up more complex tasks from basic knowledge. As described in 2009 ([ref](http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=43D608135DAC6C2C659568DAC1D70204?doi=10.1.1.149.4701&rep=rep1&type=pdf)), this sorting rule, ‘the curriculum’, relies on some heuristic determined from previous knowledge of the complexity of the task. Implementations of this approach have been published, the most recent of which using the first-shooter video game Doom.
 
 In an alternative approach, self-paced learning (SPL), “the curriculum is dynamically generated by the learner itself, according to what the learner has already learned” by embedding curriculum design as a regularization term. In 2015, self-paced curriculum learning, an approach which combines the strategies of both approaches was proposed and shown to outperform SPL with both a synthetic and real video datasets ([ref](https://pdfs.semanticscholar.org/21d2/55246cd7ddba24a651fd716950f893ea8eb2.pdf)). This hybrid approach as well as other approaches that aim to (semi-)automate the process of curriculum determination has been a very active area of research in 2017 (see Recent papers below). 
 
 Advances in this field have the potential to impact the video game, locomotion, and robotics industries, central control systems, logistics, and urban planning, especially improving performance on tasks with sparse rewards (this refinement could be particularly important for the industry when safety considerations are in play, e.g. self-driving cars). Bonsai is a company that implements curriculum learning approaches commercially, using its own proprietary language ‘Inkling’. Even though ‘Inkling’ is proprietary, the company attracted significant investments earlier this year which is indicative of the interest in the area. Until now, interest on the topic has been confined in academic cycles (however notice Google’s and OpenAI’s papers in the 2017 list below), Bonsai’s current success might indicate the field has matured.  This area is very promising once more open source tools are available for the implementation of Curriculum Learning in diverse datasets. 
    
<sup>1</sup>Recent papers:

[Training Agent for First-Person Shooter Game with Actor-Critic Curriculum Learning](https://openreview.net/pdf?id=Hk3mPK5gg)

[Automated Curriculum Learning for Neural Networks](https://arxiv.org/pdf/1704.03003.pdf)

[Automatic Goal Generation for Reinforcement Learning Agents](https://arxiv.org/abs/1705.06366)

[Learning to Multi-Task by Active Sampling](https://arxiv.org/abs/1702.06053)

<sup>1</sup>Recent products:
Bons.ai (Inkling)

<sup>1</sup>Recent: less than a year old