---
layout: post
title: Authentication in Mobile
date: 
preview_image: 
feature: false
author: Shioulin
author_link: 
---

[//]: # (I reached for my phone as I was rushing home one day only to realize,
with horror, that I had left it on the subway. Paranoia thoughts of someone
gaining unfettered access washed over me. After being somewhat comforted that
the phone is secured via fingerprint and passcode, I started to wonder if it is
possible to have a system which recognizes the user via biometrics only without
explicitly requiring a passcode; continuously monitors in the background even
after access is granted, and asks for a recertification when suspicious
activity is detected. Given the plethora of sensors available on mobile
devices, it would seem that machine learning could work its magic. Research
online led to one approach explored in academia - touch dynamics. Such a system
would perform a gating authentication using touch and continuously monitor for
intruders using a combination of touch and gestures in the background.)

In this post we look at using machine learning and biometric behavioral
features as a way to authenticate users on mobile devices. We focus on touch
dynamics and explore whether it is possible to grant a one-time access based on
the way a user interacts with the phone. Further, can such a system
continuously monitor in the background, once access is granted, and force a
recertification when suspicious activity is detected? In the remaining of the
post we use the term gating authentication to denote granting a one-time
access; we use the term continuous authentication to describe a system
dynamically running in the background after the user has been granted access. 

## Data Acquisition

The first step for using touch dynamics is data acquisition. Most research
papers acquire their own datasets by asking subjects (usually less than 50) to
perform some activity on a commercial off the shelf smartphone. Example
activities include reading and typing a predefined set of alphanumeric input
strings. The length of the input strings range from single digits to the length
of a text segment. The acquisition process is repeated over a window of time to
capture primary experimental variances. Some researchers run controlled
experiments while others mirror real life usage scenarios. 

## Features

The raw data obtained is either used directly or massaged to obtain timing,
spatial and motion features. For gating authentication, some research papers
use timing as a singular feature, others fuse timing with spatial and/or
motion. In his paper on continuous authentication, [Frank et
al.](https://arxiv.org/abs/1207.6231) proposes 30 features based on strokes. A
stroke is a trajectory encoded as a sequence of vectors with location x, y,
time stamp, pressure on screen, the area occluded by the finger, the
orientation of the finger, and the orientation of the phone (landscape or
portrait). [Feng et al.] (http://ieeexplore.ieee.org/document/6459891/)
complements swipes (or strokes) with zooming motions and finger motion sensor
data from a digital glove. The extracted features are used to generate a unique
user representation. Binary classifiers are then used to authenticate a user.   
 
### [A little more on timing, spatial and motion features](http://dl.acm.org/citation.cfm?id=2933015)

When a touch event occurs on virtual keyboard, digital interrupts are generated
and can be detected via mobile OS API. These function calls also return a time
stamp which can be manipulated to provide information on dwell time (length of
time the finger stays on a virtual key) and flight time (latency of the presses
and/or lifts between keys). Both features can be extracted for a single key
(uni-graph) or multiple keys (di-graph or n-graph). Uni-graphs and di-graphs
are more useful compared to higher order feature lengths since the information
is more granular.

Spatial features including touch size, pressure and position are also returned
via API. Touch size and pressure are normalized values and usually used without
manipulation. On the other hand, touch position can be used raw or manipulated
to provide information on speed, angle and distance. 

More interesting user-specific motion information can be obtained using the
accelerator and gyroscope. The accelerator measures the linear movement rate
across the x, y, and z axis. The gyroscope measures the rotation rate around
the x,y and z axis. Due to sensitivity to tiny movements, sensor values are
sometimes combined into a vector of features instead of being used
independently. 

### A little more on Machine Learning Techniques

[Gating authentication research](http://dl.acm.org/citation.cfm?id=2933015) and
[continuous authentication
research](http://ieeexplore.ieee.org/document/7503170/) use techniques such as
probabilistic modeling, cluster analysis, decision tree, Support Vector Machine
(SVM), and neural network to make decisions. As an example, [Frank et
al.](https://arxiv.org/abs/1207.6231) explored using both SVM and cluster
analysis, specifically k nearest neighbor (kNN), as classifiers. SVM constructs
a hyperplane to separate out the user and everyone else. A Gaussian
radial-basis function (rbf) is chosen as the kernel. The two relevant
parameters γ and C of the rbf-SVM is tuned by five-fold cross-validation on the
training data. The kNN classifier looks at each new observation, finds k
nearest training data, and determines the label of the majority of the k
neighbors. The new observation is then assigned that label. Euclidean distance
is used and the parameter k (odd numbers between 1 and 7 to avoid ties) is
tuned via cross validation on the training data. 

## Metrics

To evaluate the authentication system false acceptance rate (FAR) and false
rejection rate (FRR) are used. FAR is the percentage of intruders that are let
in while FRR is the percentage of authentic users that are rejected. Plotted
against sensitivity on the x axis, these two metrics intercept at a particular
value of x. In the literature this value is known as the equal error rate
(ERR). A system with high FAR is very insecure while one with high FRR is
overly sensitive. In the context of a continuous authentication system, high
FRR would mean that the user, seen as an intruder, needs to perform gating
authentication too often. Systems can be tuned to locate FAR and FRR in the
"application-appropriate" region.  

## Results and Open Issues

Results from various research papers, as reviewed by [Teh et
al.](http://dl.acm.org/citation.cfm?id=2933015) and [Patel et
al.](http://ieeexplore.ieee.org/document/7503170/) show that it is possible to
design a system with an ERR of less than 5%. For gating authentication purposes
this is not acceptable, but it could be feasible for use in continuous
authentication. Similar to how passcode is the fall back in fingerprint
authentication systems, one would use touch dynamics to continuously monitor in
the background after access is granted and throw an exception (require
fingerprint/passcode) when suspicious activity is detected. For such a system
to be mass deployed, the following needs to happen. Research results need to be
based on large publicly available datasets. Benchmarks (to include computation
load and algorithm speed) for judging classification model performance need to
be defined. In addition, from a user adoption point of view, the trade off
between usability vs. security needs to be better understood. 

 – Shioulin
