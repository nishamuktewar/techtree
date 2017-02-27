---
layout: post
title: Authentication in Mobile
date: 
preview_image: 
feature: false
author: Shioulin
author_link: 
---

As mobile devices permeate the fabric of our personal and professional lives, there is increased scrutiny on security since mobile devices are prone to lost and theft. Effort to find an improved authentification method versus using passcode and fingerprint has led to research using behaviour for authentication. The overarching goal is to have a non-intrusive and easy-to-use authentication method. Further, users must be comfortable with the type of behaviour being tracked.
[//]: # (NOTE FROM KH: Add one or two more sentences to this paragraph to say why we care. Ok, it's picking up - why is that interesting? What does this mean for the security community or what does it mean for machine learning research? From what you say later on, it seems like the thesis here is that researchers are applying ML to the authentication problem. How was this solved in the past? Do you think user behavior is the best form of IAM? Why? NOTE FROM KH: Add a transition sentence to go from intro to the blog post. Maybe something about the security and privacy concerns affiliated with this problem? NOTE FROM KH: Do you have a reference here? Can you expand by citing an experiment? Are any companies including these in their products to collect data - don't have to go into depth, but would be nice to have one sentence. NOTE FROM KH: define "digital interrupts". NOTE FROM KH: Define "radial basis function" for our readers. Do some interpretation of the different ML approaches: which one works the best? Why? Expand this paragraph not only to say what classifiers they use, but how performance varies. NOTE FROM KH: Where would those data sets come from? Device companies? Do you think people will be slow to adopt IAM systems because they do not want biometric monitoring? Should companies be obliged to educate users? Can you mention one or two security techniques (maybe functional encryption) that will be helpful in solving the balance?)

In this post, we survey the current state of the art in academia, focusing on touch dynamics. Research in this field addresses two problems. Gating authentication asks: is it possible to grant access based on the way a user interacts with a phone? Continuous authentication goes further and asks: once access is granted, can a system continuously monitor use in the background, requesting reauthentication through a gating system when suspicious activity is detected? 

## Data Acquisition

To use touch dynamics for authentication, you first have to establish a
benchmark of normal user behavior. Current research does this by having
subjects type a fixed text or perform gestures on a smartphone. This is repeated a few times to
capture variation in behavior. Some researchers run controlled experiments
while others try to mirror real life usage scenarios. As an example, [Tao Feng and collaborators](http://ieeexplore.ieee.org/document/6459891/) recruited 40 subjects to perform common gestures such as zooming and spread.

The raw data obtained from the touch display can then be used directly or
massaged to obtain timing, spatial and motion features. The extracted features
are used to generate a unique user representation. Machine learning classifiers
are then used to authenticate a user. 
 
## Features

When a touch event occurs on a screen, the operating system records various sensor information. These can be accessed through  the phone's API. The API also reports timestamps, which can be manipulated to provide information on [dwell time (length of time the finger stays on a virtual key) and flight time (time between presses)](http://dl.acm.org/citation.cfm?id=2933015).

Sensor information available via API include spatial features such as touch size, pressure, and
position. Touch size and pressure are normalized values and usually used
without manipulation. On the other hand, position can be used raw or
manipulated to provide information on speed, angle, and distance. 

The phone's accelerometer and gyroscope provide yet more user-specific
information. The accelerometer measures movement in three dimensions, while the
gyroscope measures the rotation.

For gating authentication, many researchers use timing as the only feature, but
some combine timing with spatial and motion information. [Mario Frank and
collaborators](https://arxiv.org/abs/1207.6231) propose 30 features based on
strokes for continuous authentication. A stroke is a trajectory encoded as a
sequence of vectors with location, timestamp, pressure, area occluded by the
finger, orientation of the finger, and orientation of the phone. [Tao Feng and collaborators](http://ieeexplore.ieee.org/document/6459891/) complement strokes with
zooming motions and finger motion sensor data from a digital glove. 

## Machine Learning

Collected features can then be used to train a machine
learning system and classify future users. [Gating authentication
research](http://dl.acm.org/citation.cfm?id=2933015) and [continuous
authentication research](http://ieeexplore.ieee.org/document/7503170/) use
algorithms like cluster analysis, decision trees, Support Vector Machines
(SVMs), and neural networks. For example, [Mario Frank and
collaborators](https://arxiv.org/abs/1207.6231) used SVMs and cluster analysis,
specifically k nearest neighbor (kNN), as classifiers. During training, the
SVMs constructs a hyperplane to separate out the user and everyone else. The
hyperparameters of its radial basis function (a real-valued function which measures distance) are tuned using standard
crossvalidation techniques. The kNN classifier looks at each new observation,
finds the k nearest training examples, and determines the label of the majority
of those k neighbors. The new observation is then assigned that label. The kNN is robust and fast; requires no explicit training phase but stores all training observation and labels. The SVM, on the other hand, only relies on the decision hyperplane after training. Experimental results show that the SVM generally outperforms the kNN for this use case. 


## Metrics

False acceptance rate (FAR) and false rejection rate (FRR) are the usual
performance metrics for probabilistic authentication systems. FAR is the
fraction of intruders that are incorrectly authenticated. FRR is the fraction
of authentic users that are incorrectly rejected. A system with high FAR is
very insecure while one with high FRR is overly sensitive. In a continuous
authentication system, high FRR means that valid users need to reauthenticate
too often. 

The point where FAR and FRR are equal is known as the Equal
Error Rate (ERR). Ideally both FAR and FRR should be low but when that's not
possible, you can tune the classifier to prioritise one or the other, depending
on the application. 

## What's next?

It's currently possible to build a touch-based authentication system with an
ERR of less than 5% (see reviews by [Teh et
al.](http://dl.acm.org/citation.cfm?id=2933015) and [Patel et
al.](http://ieeexplore.ieee.org/document/7503170/)). For gating authentication
purposes this is too high, but it could be appropriate for continuous
authentication. 

We think the most useful next step would be the release of large, public
datasets. Current datasets are small and mostly proprietary which makes progress slow
and difficult to measure. Large datasets could come from either a large scale academia experiment or from collaboration between academia and wireless providers. And it's time to start thinking about performance not
just in terms of accuracy but also computational expense. If you think your
phone's battery drains quickly today, wait until you've got a neural network running
in the background all the time! Finally — and perhaps most interestingly — the
trade off between usability, security and privacy needs to be better understood from a
product and user point of view. 

