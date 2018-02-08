# Reinforcement Learning                                                                             
Verdict - Yes.                                                                                         
                                                                                                     
## Overview                                                                                          
                                                                                                     
- RL trains an agent to learn a policy(set of actions) that maximizes a cumulative reward. To do this we map state-action pairs to the reward we expect them to produce with a Q function. We find the best policy by choosing an action that maximizes Q at each state.                                     
                                                                                                     
- Deep RL generally means using neural nets to approximate the Q function or a variant of it. By doing so it is learning the mapping between state-action pairs to rewards. Example: if the state is an image, a conv net can learn that we get a reward of 5 by jumping and a reward of 0 by running while in that state.
                                                                                                     
                                                                                                     
## Prototype ideas                                                                                   
- We need a simulator to create a world. Agent based models can be used to simulate this "world". Examples are Anylogic (supply chain) and Gazebo (robotics)                     
- Optimal policy for sales agents (we need data to model customer behavior)                                                 
- Optimal inventory levels (supply chain simulator, easier to build and define)                      
- NLP using Deep RL                                                                                      
                                                                                                     
## Papers                                                                                            
                                                                                                     
[Survey(RL), 1996](https://arxiv.org/abs/cs/9605103)                                                 
                                                                                                     
[Survey(Deep RL), 2017](https://arxiv.org/abs/1708.05866)                                            
                                                                                                     
[Survey(Deep RL, NLP), 2017](https://arxiv.org/pdf/1701.07274.pdf)                                   
                                                                                                     
[DeepMind Atari paper](https://storage.googleapis.com/deepmind-data/assets/papers/DeepMindNature14236Paper.pdf)   

[Reinforcement Learning for drug design](https://arxiv.org/ftp/arxiv/papers/1711/1711.10907.pdf)     
                                                                                                     
                                                                                                     
                                                                                                     
                                                                                                     
                                       
