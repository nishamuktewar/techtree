TL;DR: This seems like a promising area for further investigation.  People are doing a lot here and it’s being used in conjunction with many other methods (yes it’s cooler beyond the evolutionary creature videos).  There’s a ton out there and I was only able to scratch the surface- so I think this is a topic worth pursuing!

What is it: A type of algorithm that evolves over “generations”- allowing the most fit to continue to evolve.  

How it works:
- Stochastic gradient descent relies on connections made by a human architecting the network- not evolution (which is how the brain does this).
- First models appeared in the 1980s as an alternative to backpropagation
  - Fixed-topology neuroevolution was developed- where an architecture was crafted by humans but the weights were learned through evolution.
- Generate around 100 ANNs to start- and a robot body in a physic simulator.
  - Choose an ANN at random and let it send signals to the robot.  It might also receive input from the body- sensations.  A computer then judges the robots actions and gives a “fitness” score.  **How does the computer assess this??
  - Some are slightly better than others (they are all terrible to start because they are randomly assigned).
- Initial models were frustratingly “dumb” forms of evolved ANNs. As theories of evolution evolve- this field has evolved in tandem.
- Early models were inhibited by a fixed topology- they didn’t grow as human brains have over time.  So experimented with topology and weight evolving artificial neural networks (TWEANNS)
- One method to test was called pole balancing - how well a pole was balanced was a test of fitness.
- “Cooperative coevolution” is the idea that sub-populations of neurons would optimize for their particular group and then combine to form larger networks.
- “Competing conventions” problem- it’s difficult to combine two ANNs to produce an offspring (crossover)
- Evolving populations go extinct before they can realize their potential.
- Neuroevolution of Augmented Technologies (NEAT)
  - Marks genes with historical markings to ensure a coherent result of a crossover
  - Allows for speciation to allow for more time before being eliminated
  - Trademark of this algorithm is its ability to start simply and increase in complexity over time.
  - Uses an artificial DNA called direct encoding.  So, every connection is described in the genome by a single gene.
    - Still can’t evolve massive structures
- Now indirect encodings are being developed to have a compressed version
- One of the most popular indirect encodings is “compositional pattern producing networks” (CPPN)
- HyperNEAT is also a compressed version
- New research suggests the parents shouldn’t necessarily be selected based on their fitness, but perhaps also their novelty.
- Quality diversity/Illumination algorithms: Uses novelty as criteria and selects a cross-section.
- Quality diversity algos- add fitness back in

What’s happened recently:
- Neuroevolution may be on the cusp of a story similar to deep learning- where the availability of hardware (i.e. parallel processing) allows for new advancements.
- Can we speed up the evolution process now?**
- Making a comeback as big hardware investments have been made into deep learning to use neuroevolution to determine the architecture.
- OpenAI reported a variation of neuroevolution that beat more conventional deep-learning algos
- New research on how to evolve plastic NNs
- Open-endedness- evolving increasingly complex behaviors without end.  This remains a big challenge.
- Uber
  - Surprised that a relatively simple GA was able to train a deep neural net with over 4 million parameters (to play Atari games from pixels).  
  - This algo outperforms deep RL and evolutionary strategies while being parallelized.
  - Novelty searches can work at the scale of DNNs and can promote work on problems with deceptive local optima.
  - In a separate paper- compute the gradients of the weights (as opposed to the errors)- allowing treatment of the most sensitive parameters more delicately than the least to overcome the problems of random mutation.

Papers:
http://eng.uber.com/wp-content/uploads/2017/12/deep-ga-arxiv.pdf

Blogs/News:
https://www.youtube.com/watch?v=qv6UVOQ0F44
http://www.sciencemag.org/news/2018/01/artificial-intelligence-can-evolve-solve-problems
https://eng.uber.com/deep-neuroevolution/
https://jack-clark.net/2017/12/25/import-ai-74-the-rich-get-richer-trends-in-datacenter-scale-ai-cloning-human-voices-with-tacotron-2-and-the-us-mentions-ai-within-its-national-security-strategy-plus-festive-networks/
https://www.oreilly.com/ideas/neuroevolution-a-different-kind-of-deep-learning
https://www.youtube.com/watch?v=kHyNqSnzP8Y
https://blog.openai.com/evolution-strategies/
https://www.mitpressjournals.org/doi/abs/10.1162/106365602320169811
