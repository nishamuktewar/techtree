[**Edge Computing**](https://en.wikipedia.org/wiki/Edge_computing)

Performs data processing at the edge of the network, where data is closer to the source. This reduces the communication bandwidth between sensors (eg: mobile phones, IOT devices) and data center. Edge computing covers a wide range of technologies, including but not limited to wireless sensor networks, mobile data acquisition, grid/mesh computing. 

Not candidate for report topic; scope is too wide

**Distributed Learning**

Many ML problems involve massive amount of data distributed across multiple locations.  Each location has a piece of the data pie; data can be arbitrarily partitioned or can belong to the same distribution at each location. In distributed learning, the goal is to learn over the combined probabilistic distribution with the least amount of communication.  

Open Source: [MSFT open source toolkit](https://github.com/Microsoft/DMTK)

Some notable papers are mentioned [here](http://www.cs.cmu.edu/~avrim/ML07/distributed-ml.pdf)

Not candidate for report topic; important for real life applications but to demonstrate distributed learning we need massive data scattered across multiple locations. 

**Federated Learning** is [Google’s approach](https://research.googleblog.com/2017/04/federated-learning-collaborative.html)
 for decentralized training. Unlike traditional approaches with centralized training data, federated learning trains with local data (for example: on a mobile phone) and sends a small focused and encrypted update to the cloud. This update is averaged with other users’ to improve the shared model.

Algorithmic advances: 
* Because data has high latency and is unevenly distributed across millions of devices, Federated Averaging Algorithm was developed to train deep networks using 10-100x less communication. This is possible because the algorithm taps powerful processor on phones to compute higher quality updates instead of simple gradient steps. 
* Developed compression updates to overcome slow upload speeds
* Mini tensorflow (TensorFlow Lite)
* Secure Aggregation Protocol so server can only decrypt average update of 100 or 1000s of users have participated

Not candidate for report topic; data issues



