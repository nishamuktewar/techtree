# Reinforcement Learning

> The excitement and PR hype behind reinforcement learning is a bit disproportionate relative to the economic value it is creating today. It turns out that reinforcement learning is a type of machine learning whose hunger for data is even greater than supervised learning. It is really difficult to get enough data for reinforcement learning algorithms... There's more work to be done to translate this to businesses and practice. **-Andrew Ng**

## Overview

* Reinforcement learning is a type of learning framework that involves an agent, a set of states, a set of actions, and environment to act on.
* Learning requires the ability to interact with the environment, or some sort of model of the environment.
* Reinforcement learning is *not necessarily* deep learning, but recently deep learning techniques have been used to make great advances in RL.
* Two main approaches in deep RL: Deep Q learning and Policy Gradients
* RL works well for problems where sequential decision making is required, and rewards observed after many decisions.### Deep Q learning

### Deep Q learning

In deep Q learning, we attempt to approximate the Q function by training a neural network. The Q function takes in a state and an action at time t, and outputs the expected future rewards. Once you know Q, you can develop a policy by just picking the action that maximizes future rewards. Deep Q learning is evidently outdated and policy gradients seem to be the preferred approach. 	This is a so-called _off policy_ approach since it does not directly try to learn the optimal policy.

### Policy gradients

A neural network learns a function that maps current state to an action on the environment, i.e. a neural network is used to approximate the optimal "policy." This is a so-called _on policy_ approach since it involves directly learning the best policy. 


## Applications

* Playing games
* Teaching robots
* Google optimizes data center cooling using RL?? [link](https://environment.google/projects/machine-learning/)

## Good things

* RL is very general, and could concievably be applied to many problems
* AIs can teach themselves!
* Great for problems where a simulator is available and can be used to generate infinite data

## Bad things

* Need loads of data
* Need a clearly definable reward function
* It seems difficult to understand when to apply RL - i.e. when should I use RL over the many other options
* Computationally intensive
* Most applications and research are in playing games, which is not necessarily useful. Other applications are emerging, but seem a bit sparse.
* Need to be able to interact with an environment to collect new data, preferably as much as possible

## Prototype

Any prototype is probably going to need to build a environment or leverage an existing one. TODO

## Resources

* Practical applications of RL [link](https://www.oreilly.com/ideas/practical-applications-of-reinforcement-learning-in-industry)
* A survey of deep reinforcement learning (very helpful) [link](https://arxiv.org/pdf/1708.05866.pdf)