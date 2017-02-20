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

Research into the use of behaviour for authentication on mobile devices is
picking up. In this post, we take a look at the current state of the art in
academia. We'll focus in particular on touch dynamics. Is is possible to grant
access based on the way a user interacts with a phone? This is gating
authentication. And can a system go further, and continuously monitor in the
background, once access is granted, requesting reauthentication through a
gating system when suspicious activity is detected? This is continuous
authentication.

## Data Acquisition

To use touch dynamics for authentication, you first have to establish a
benchmark of normal behaviour for a user. Current research does this by having
subjects type a fixed text on a smartphone. This is repeated a few times to
capture variation in behaviour. Some researchers run controlled experiments
while others try to mirror real life usage scenarios. 

The raw data obtained from the touch display can then be used directly or
massaged to obtain timing, spatial and motion features. The extracted features
are used to generate a unique user representation. Machine learning classifiers
are then used to authenticate a user. 
 
## Features

When a touch event occurs on virtual keyboard, the OS makes digital interrupts
accessible through its API. The API also reports timestamps, which can be
manipulated to provide information on dwell time (length of time the finger
stays on a virtual key) and flight time (time between presses).

The API also reports spatial features including touch size, pressure and
position. Touch size and pressure are normalized values and usually used
without manipulation. On the other hand, position can be used raw or
manipulated to provide information on speed, angle and distance. 

The phone's accelerometer and gyroscope provide yet more user-specific
information. The accelerometer measures movement in three dimensions, while the
gyroscope measures the rotation.

For gating authentication, many researchers use timing as the only feature, but
some combine timing with spatial and motion information. [Mario Frank and
collaborators](https://arxiv.org/abs/1207.6231) propose 30 features based on
strokes for continuous authentication. A stroke is a trajectory encoded as a
sequence of vectors with location, timestamp, pressure, area occluded by the
finger, orientation of the finger, and orientation of the phone. [Feng et
al.](http://ieeexplore.ieee.org/document/6459891/) complements strokes with
zooming motions and finger motion sensor data from a digital glove. 

    TODO: No links in headings. Where does this link go? [A little more on
    timing, spatial and motion
    features](http://dl.acm.org/citation.cfm?id=2933015)

## Machine Learning

Once the features have been collected, they can be used to train a machine
learning system and classify future users. [Gating authentication
research](http://dl.acm.org/citation.cfm?id=2933015) and [continuous
authentication research](http://ieeexplore.ieee.org/document/7503170/) use
algorithms such as cluster analysis, decision trees, Support Vector Machines
(SVMs), and neural networks. For example, [Mario Frank and
collaborators](https://arxiv.org/abs/1207.6231) used SVMs and cluster analysis,
specifically k nearest neighbor (kNN), as classifiers. During training, the
SVMs constructs a hyperplane to separate out the user and everyone else. The
hyperparameters of its radial basis function are tuned using standard
crossvalidation techniques. The kNN classifier looks at each new observation,
finds the k nearest training examples, and determines the label of the majority
of those k neighbors. The new observation is then assigned that label.

## Metrics

False acceptance rate (FAR) and false rejection rate (FRR) are the usual
performance metrics for probabilistic authentication systems. FAR is the
fraction of intruders that are incorrectly authenticated. FRR is the fraction
of authentic users that are incorrectly rejected. A system with high FAR is
very insecure while one with high FRR is overly sensitive. In a continuous
authentication system, high FRR means that valid users need to reauthenticate
too often. 

When tuned so that FAR and FRR are equal, the error rate is known as the Equal
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
datasets. Current datasets are small and proprietary, which makes progress slow
and difficult to measure. And it's time to start thinking about performance not
just in terms of accuracy but computational expense. If you thought your
phone's battery drained quickly, wait until you've got a neural network running
in the background all the time. Finally — and perhaps most interestingly — the
trade off between usability and security needs to be better understood from a
product and user point of view.
