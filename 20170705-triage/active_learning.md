# Active Learning

## Overview

- There are attempts at formalizing active learning within a RL environment for
  use in chatbots and presumably actual robots
    - https://arxiv.org/abs/1611.09823 (chat bots)

- One big separating line in the field is whether the 'active' part is a
  human-in-the-loop type thing or environmental feedback (which is reinforcement
  learning).

### Human in the loop

- The major benefit to the human-in-the-loop variants are:
    - Augment small amount of labeled data and hopefully do it in a smart way as
      to reduce cost (https://arxiv.org/abs/1610.06106)
    - Feedback for tasks with no quantitative cost function (recommendations,
      summarization, clustering in general)
        - This is effectively what an A/B testing pipeline does

- Research in this field seems to be very sparse... I think the cost of
  approaching an active learning question is prohibitive

### Environment in the loop

This is _literally_ reinforcement learning!


## Thoughts

### Human in the loop

This is a really interesting field but it also isn't very well motivated in CS.
There isn't much infrastructure for doing these tasks nor is there a lot of
research done. That being said, it seems to be a very clear joining of fields
that we know about. I'm also very surprised there isn't more of an interplay
between Bayesian inference and active learning.

I think this is because of the prohibitive cost of running these systems,
especially when still doing model verification. There may also be issues about
data privacy in industry when attempting to use these methods, depending on
where the feedback is coming from.

### Environment in the loop

This is reinforcement learning!
