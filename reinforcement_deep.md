
## What is RL

In RL, an agent (controlled by an ML algorithm), observes a state s_t at time
t. The agent takes an action a_t at timestep t and transitions into a new state
s_t+1 based on the current state and chosen action. The agent then receives a
reward r_t+1. The goal of the agent is to learn a policy (pi) that maximises the
expected return (cumulative, discounted reward) over time.

We do not know the transition dynamics in RL (transitional probabilities for the
states). To find the optimal policy, the quality function Q^pi^(s,a) is
used. Q^pi^(s,a) denotes the expected reward when starting in state s, having
taken action a and following policy pi onwards. This is similar to the value
function V(s) used in dynamic programming except that the function is defined
for a particular action. The best policy can be found by choosing an action that
to maximize Q(s,a) at every state.

## Technical focus - algos for prototype/write in report
There are 3 main approaches for finding the best policy.
Deep RL uses deep neural nets to approximate the optimal policy and or the Q function.

### Learn Q

This approach relies on approximating(learning) the Q function.

* NFQ(neural fitted Q iteration): trained a neural net to return the Q value given a
state-action pair.

* [DQN(deep Q
network)](https://web.stanford.edu/class/psych209/Readings/MnihEtAlHassibis15NatureControlDeepRL.pdf),
2015: this is the algorithm that ignited deep RL. Before DQN, it is well known
that RL is unstable action value function is approximated with a nonlinear
function like neural networks. DQN addressed the instability problem by using i)
experience replay ii) target networks.

* [Double Q learning](https://arxiv.org/abs/1509.06461): uses two estimators and
  the available target network from DQN.

* [Duelling DQN with prioritised experience
  replay](https://arxiv.org/abs/1511.05952): state of the art techniques in
  discrete action settings.

* [NAF](https://arxiv.org/abs/1603.00748): state of the art in continous control problems

### Policy Search

This approach finds policies directly (without using value functions) by means
of gradient free or gradient based methods. Policies are generally probabilistic
distributions. Discrete actions could be represented by aa multinomial
distribution, for example. To evaluate any policy we need to compute the
expected return. For a typical RL setting, the transition probabilities are not
known, so we need to use Monte Carlo methods to estimate the expected return. If we had the
transition probabilities, we would just use total probability theorem to compute the
expected return across all states.

* Gradient Estimator

Using Monte Carlo methods to estimate expected return is a challenge since
gradients cannot pass through these samples of a stochastic funcion. Techniques
like REINFORCE(which builds an estimator of the gradient) enable these gradients
to be computed. [Stochastic Value
Gradients(SVG)](https://arxiv.org/abs/1510.09142) is an example algorithm that
allows backprogation through stochastic functions

* Local minima

To avoid local minima while searching for a policy represented by a neural net,
trust regions are used. Each gradient update is contrained by the
Kullback-Liebler(KL) divergence between the current and proposed policy so that
the udpated policy does not deviate too much from previous policies. The
newest(2017) algorithm is proximal policy optimization
[(PPO)](https://arxiv.org/abs/1707.06347))

### Actor Critic Methods (combination)

Actor critic methods combines policy
search with learned value functions. Most popular algorithm is [asynchronous
advantage actor-critic (A3C) algorithm](https://arxiv.org/abs/1602.01783). There
are various blog posts describing/implementing A3C.


## Prototype (data)
* Optimal policy for sales agents. Need customer response data. How did customer respond when sales agent undertook a particular action? (is this data in salesforce?)
* Marketing - Need customer response data. We need to know how customers responded to marketing action when they are in a particular state. 
* Supply Chain: Optimal inventory levels. Use anylogic to simulate supply chain. 

### More reading
[A3C post](https://cgnicholls.github.io/reinforcement-learning/2017/03/27/a3c.html)
[more A3C](https://jaromiru.com/2017/03/26/lets-make-an-a3c-implementation/)
