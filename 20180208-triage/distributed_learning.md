# Distributed Learning

- Much of the hype has been around federated learning and async SGD which
  could serve as a good way to pin the report to something new
- In general, there are many methods around distributed learning
- Mature field with new innovations... Applicability to any client who works at
  scale or with many customers or with a cluster
- Useful for clients who want to focus on:
    - performance of using a cluster
    - edge-node computation
    - privacy
- This is starkly different from PARALLEL computing. Here, updates need to be
  asynchronous and should handle updates that come in at arbitrary times
- This report would have a good potential for OS contributions that are also
  valuable to cloudera
- Could end up being a zoo of methods


## Papers

- https://research.googleblog.com/2017/04/federated-learning-collaborative.html
    - federated learning
- https://arxiv.org/abs/1605.09721
    - general learning algorithm for a larger family of ML algorithms
        - least squares
        - SGD
        - graph eignvectors
        - matrix completion
        - 
- https://arxiv.org/abs/1609.08326
    - async SGD
- https://msp.org/camcos/2010/5-1/p04.xhtml
    - distributed MCMC

## Conclusions

- This could be super interesting but would need to be scoped properly
- A lot of really cool papers, but not many implementations outside of the NN
  context.
- Very useful for cloudera as a whole
