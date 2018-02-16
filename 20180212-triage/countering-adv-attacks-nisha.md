# Countering adversarial attacks

The idea is to spend 3-4 hours looking deeper. You should have in mind both the technical focus of a report, and the prototype.

One thing that came to my mind is that if we give some random noise as input to a classifier it will classify it to one of the classes, right? So there's no 

## What is the technical focus of the report? 
### Are there one or perhaps two algorithms to hang the report on or to focus on in the prototype? 

The report should demonstrate two things:
#### 1. Exploiting the sensitivity of ML algorithms that cause them to behave differently 

For instance, make them classify a car as a toaster, when from a human vision it still appears as a car. 

Types of attacks:
    - non-targeted, where the attacker simply wants to misclassify the image
    - targeted, when the attacker wants to classify the image as a specific class

Types of threat models:
    - black box: the attacker does not have access to the classification model parameters
    - white box: the attacker has complete access to the model architecture and parameters, including potential defense mechanisms
    - gray box: the attacker knows everything about the network and defense, except the parameters
    
Approaches to generating adversarial images:
    - FSGM (Fast Gradient Sign Method): The core idea is to add some weak noise on every step of optimization, drifting towards the desired class or away from the correct one. Sometimes one will have to limit the amplitude of noise to keep the attack subtle The amplitude might mean the intensity of a pixel’s channel — limiting it ensures that the noise will be almost imperceptible
    - Iterative-FSGM: A stronger variant
    - Deeploop: In the first two approaches one is optimizing the error, here the L2 distance is optimized. It tries to find the nearest hyperplane that separates the original class and any other class. It generates stronger attack than FGSM and I-FGSM.
    - Carlini-Wagner (CW) attack

Library: [FB Research](https://github.com/facebookresearch/adversarial_image_defenses) & [CleverHans] (https://github.com/tensorflow/cleverhans)

#### 2. Countering adversarial attacks 

Defensive, proactive strategy: Focus on the last 3 items in the report

1. Adversarial training: 
    - augment the training dataset with adversarial examples
    - examples are generated using one or more chosen attack models and added to the training set
    - increased robustness, but does not perform as well when a different attack strategy is used
    - tends to make the model more robust to white-box attacks than to black-box attacks due to gradient masking
    - library: CleverHans [repo](https://github.com/tensorflow/cleverhans), a Python library to benchmark machine learning systems' vulnerability to adversarial examples

2. Defensive distillation:
    - trains the classifier in two rounds using a variant of the distillation method. This has the desirable effect of learning a smoother network and reducing the amplitude of gradients around input points, making it difficult for attackers
to generate adversarial examples
    - effective against white-box attacks, it fails to adequately protect against black-box attacks transferred from other networks
  
3. [Input transformations](https://arxiv.org/pdf/1711.00117.pdf): Deals with back and gray box attacks
    - Implements image quilting, total variation minimization, JPEG compression, pixel quantization
    - [FB research library](https://github.com/facebookresearch/adversarial_image_defenses)
    
4. [MagNet](https://arxiv.org/pdf/1705.09064.pdf): Deals with gray-box attacks
    - Consists of two components: 
      i) detector: that uses autoencoder to train and produces a high reconstruction error if the input is drawn from a different set. The images with high reconstruction error are rejected
      ii) reformer: again a similar approach as the detector when trying to reconstruct a test input but not part of the training process
    - Library: https://github.com/Trevillie/MagNet
    
5. [Defense-GANS](https://openreview.net/pdf?id=BkJ3ibb0-): Deals with black and untargeted white box attacks


Note: At this stage you probably won't have a chance to get them up and running or test them, but ideally you should have them in mind by the end of your deeper dive.


## What could the prototype be? 
- The first application that came to my mind was related to depositing bank checks through apps where one distorts may be the $ amount or something else. Although I am not sure, if this is an area that predominantly is dictated by OCR. More research needed here. Plus, we may need to generate some data ourselves.
- We can demonstrate something in the self driving car vision area. For instance, incorrectly identifying a human or a traffic light on the road? The INRIA person dataset is available [here](http://pascal.inrialpes.fr/data/human/)

## Criteria for evaluation: 
We're not looking for a single definitive answer at this stage, but but a a few concrete ideas would be very useful. If these are hard to come up with, that may be evidence of a problem with the topic. We're looking for something that
- we can build in 2-4 months - yes
- that feels like a useful/profitable product - yes, especially the AI security aspect 
- that exhibits the capability and the algorithmic innovations we're discussing - yes
- and, if data is necessary, that data should be available and we should be able to share it with our clients - it's possible

If a specific concern about your topic came up during our discussions, please be sure to dig into that. Please review the notes for your topic from the previous round and, if they were written by someone other than you, feel free to speak with the author to get their thoughts in more detail, or with anyone who had suggestions about a topic during our meetings.

Remember to document what you find. Negative results become great advice to clients, blog posts and newsletters!

## Conclusion: 

Adversarial examples show that many modern machine learning algorithms can be broken in surprising ways. These failures of machine learning demonstrate that even simple algorithms can behave very differently from what their designers intend.

## Helpful reads:
https://blog.openai.com/adversarial-example-research/
http://cs229.stanford.edu/proj2017/final-reports/5241871.pdf
http://blog.ycombinator.com/how-adversarial-attacks-work/
FGSM demonstrated [here](https://github.com/Lextal/adv-attacks-pytorch-101) using a PyTorch library
