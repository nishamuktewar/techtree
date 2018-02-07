# TL;DR

Anomaly detection is a huge field, and may be too broad to cover in a single report. Techniques can vary drastically from problem to problem. There haven't been hugely significant breakthroughs, though deep learning is used more and more for time series anomaly detection. This is better broken into a more specific topic - like time series anomaly detection, or left for a survey blog post.

# Overview

Anomaly detection refers to the analysis of data to identify observations or collections of observations, that are anomalous, which generally means that they do not conform to the patterns in the observed dataset. This is not a new or emerging field and, consequently, has been extremely well studied. Applications are almost endless.

Almost any algorithm can be used for anomaly detection, since the goal of most algorithms are to find patterns in data, and anomalies can be thought of as any data that doesn't conform to the patterns. An extremely common way to do anomaly detection is to "compress" the data - e.g. PCA, Autoencoders, clustering - and use reconstruction error to identify anomalies.

The vast majority of recent research papers on anomaly detection use some type of autoencoder - VAE, RBM, Stacked AE, Recurrent AE - for data compression, and then use reconstruction error to identify anomalies. Most of this research pertains to applications with time series data, often specifically IOT and sensor data.

The toughest problem in anomaly detection are real time applications where the dynamics of the system are changing often. A metric may fundamentally change in a way that would have been identified as anomalous previously. A static algorithm might just output anomaly alerts every cycle since it does not understand and cannot adapt to this new normal. The difficulty lies, then, in being able to adapt to the "new normal" seamlessly, without intervention. This is a challenging problem that I would say still has not had a breakthrough.

Anomaly detection on IOT edge devices merges several topic possibilities and is another exciting part of this field.

# Resources

Deep learning for anomaly detection has become quite popular, as you might imagine.

[Here](https://www.safaribooksonline.com/library/view/strata-data-conference/9781491985373/video317242.html) is a recent talk about the founder of deep learning startup, Skymind, discussion deep learning (autoencoders) for anomaly detection. He also mentions that it is an incredibly popular application for their customers.

Here is a paper on using a Seq2Seq autoencoder for time series anomaly detection.
* Seq2Seq autoencoder for sensor anomaly detection. [link](https://arxiv.org/pdf/1607.00148v2.pdf)
* Founder of Skymind discusses deep autoencoders for anomaly detection. [link](https://www.safaribooksonline.com/library/view/strata-data-conference/9781491985373/video317242.html)
* Anodot, a company built around anomaly detection [link](https://www.anodot.com/product/anomaly-detection-oem/) (the white paper is surprisingly helpful)
* Autoencoder for time series anomaly on edge devices. [link](https://arxiv.org/pdf/1712.06343v1.pdf)
* Numenta's crazy Hiearchical Temporal Memory model for anomaly detection [link](https://arxiv.org/pdf/1607.02480v1.pdf)

# Criteria

1. Is it exciting to the team?
Yes, I think so.
2. Can it be framed as a strong capability (rather than an algorithm)
3. Is it a subject that is more possible now than in two years, and likely
   to be more possible/transformative still in a couple of years. That
   usually means some or all of the following things are true:
    - There is excitement (ideally including concrete breakthroughs) in the
      research community
    - Economic constraints (e.g. hardware) have lessened/disappeared
    - There has there been a commoditization of tooling
    - Data is available (especially to FFL!)
  I think this is the biggest shortcoming of the topic. There doesn't seem, to me, to be a big breakthrough in this topic. The question may not even be appropriate. A better question may be: "has there been a breakthrough in a specific area of anomaly detection (e.g. fraud detection)." I think the answer is still no. There seems to be a lot of activity around using deep learning (LSTM, Seq2Seq, Autoencoder) for anomaly detection on time series/sensor/IOT data. So, the "breakthrough" may be deep learning, but I am not sure that is the type of thing we're looking for here. Data would not really be a problem, since almost anything can be used for anomaly detection. Perhaps some sort of sensor/IOT data would be best.
4. Is it useful to our existing clients?
Yes, anomaly detection is ubiquitous. Every client either has or will have some sort of anomaly detection application. Because anomaly detection problems can be so different, this subject is difficult. Customers will appreciate having some guidance in this area.
5. It is appealing to potential clients?
Yes, for same reasons as above.
6. It it possible to build a prototype?
Yes, although I would worry that the prototype would be too specific to a particular type of problem that it may not be broadly appealing or relatable. Building a general purpose anomaly detection product would probably not be feasible. 

# Thoughts

Overall I think anomaly detection is too broad a topic. Solutions in this space are very problem specific, and it would be hard to cover all of the relevant methods. There doesn't seem to be a big breakthrough to focus on, though if I had to choose one I would look at deep learning encoding for time series or sensor data. That seems to be a hard problem which receives decent amounts of attention lately, and Seq2Seq/sequence based deep learning models seem to have spurred some promising developments. A prototype is not too hard to envision, perhaps something for detecting anomalies in web traffic or something for IOT data. I think it would be neat to do something with anomaly detection on edge devices for preventive maintenance, but that may be hard to prototype. 

That said, anomaly detection is an extremely important field and a tough problem, so there's value in it. It could be good to do a survey of techniques as a blog post or something. Focusing on the more difficult problem of real-time algorithms that adapt automatically to changing dynamics would be great going forward, something to keep an eye on. 


