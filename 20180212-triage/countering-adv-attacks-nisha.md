# Countering adversarial attacks

Adversarial examples show that many modern machine learning algorithms can be broken in surprising ways. These failures of machine learning demonstrate that even simple algorithms can behave very differently from what their designers intend. For instance, make them classify a car as a toaster, when for a human eye it still appears as a car. 

## What is the technical focus of the report? 
The report should demonstrate two things:

### 1. Exploit the sensitivity of ML algorithms that cause them to behave differently 

Types of attacks:
   - non-targeted, where the attacker simply wants to misclassify the image
   - targeted, when the attacker wants to classify the image as a specific class

Types of threat models:
   - black-box: the attacker does not have access to the classification model parameters
   - white-box: the attacker has complete access to the model architecture and parameters, i.e., network architecture and weights including potential defense mechanisms
   - gray-box: the attacker knows everything about the network and defense, except the parameters
    
Approaches to generating adversarial images:
   - FSGM (Fast Gradient Sign Method): The core idea is to add some weak noise on every step of optimization, drifting towards the desired class or away from the correct one. Sometimes one will have to limit the amplitude of noise to keep the attack subtle The amplitude might mean the intensity of a pixel’s channel — limiting it ensures that the noise will be almost imperceptible
   - Iterative-FSGM: A stronger variant
   - Deeploop: In the first two approaches one is optimizing the error, here the L2 distance is optimized. It tries to find the nearest hyperplane that separates the original class and any other class. It generates stronger attack than FGSM and I-FGSM.
   - Carlini-Wagner (CW) attack

Library: [FB Research](https://github.com/facebookresearch/adversarial_image_defenses) & [CleverHans](https://github.com/tensorflow/cleverhans)

### 2. Counter adversarial attacks 

Defensive, proactive strategy: Focus on the last 3 items in the report

1. Adversarial training: 
    - augment the training dataset with adversarial examples
    - examples are generated using one or more chosen attack models and added to the training set
    - increased robustness, but does not perform as well when a different attack strategy is used
    - tends to make the model more robust to white-box attacks than to black-box attacks due to gradient masking
    - library: CleverHans [repo](https://github.com/tensorflow/cleverhans), a Python library to benchmark machine learning systems' vulnerability to adversarial examples

2. Defensive distillation:
    - Distillation is a training procedure initially designed to train a DNN using knowledge transferred from a different DNN, the motivation here is to make DNNs work in a resource constrained environment
    - Now defensive distillation, instead of transferring knowledge between different architectures use the knowledge extracted from a DNN to improve its own resilience to adversarial samples by reducing the amplitude of the n/w gradients
    - The idea is to smooth the model learned by a DNN architecture during training by helping the model generalize
better to samples outside of its training dataset making it difficult for attackers to generate adversarial examples
    - effective against white-box attacks, it fails to adequately protect against black-box attacks transferred from other networks
  
3. [Input transformations](https://arxiv.org/pdf/1711.00117.pdf): 
    - Implements image quilting, total variation minimization, JPEG compression, pixel quantization
    - Deals with black-box and gray-box attacks
    - [FB research library](https://github.com/facebookresearch/adversarial_image_defenses)
    
4. [MagNet](https://arxiv.org/pdf/1705.09064.pdf): 
    - Consists of two components: 
      i) detector: that uses autoencoder to train and produces a high reconstruction error if the input is drawn from a different set. The images with high reconstruction error are rejected
      ii) reformer: again a similar approach as the detector when trying to reconstruct a test input but not part of the training process
    - Deals with gray-box attacks
    - Library: https://github.com/Trevillie/MagNet
    
5. [Defense-GANS](https://openreview.net/pdf?id=BkJ3ibb0-): 
    - Leverages GANs to diminish the effect of the adversarial perturbation by projecting input images onto the range of the GAN’s generator prior to feeding them to the classifier
    - We know in a GAN framework, the generative model models the input data distribution and the discriminative model predicts whether a certain input came from real data or was artificially created. The idea is that the mapping G produced by the generative model can help decipher legitimate samples vs adversarial samples. Furthermore, “projecting” the adversarial examples onto the range of the generator G can have the desirable effect of reducing the adversarial perturbation. The projected output, computed using Gradient Descent (GD), is fed into the classifier instead of the original (potentially adversarially modified) image
    - Deals with black-box and untargeted white-box attacks
    - Library: Intend to make their software implementation publicly available after the ICLR 2018 review process

## What could the prototype be? 

   - The first application that came to my mind was related to depositing bank checks through apps where one distorts may be the $ amount or something else. Although I am not sure, if this is an area that predominantly is dictated by OCR. More research needed here. Plus, we may need to generate some data ourselves.
   - We can demonstrate something in the self driving car vision area. For instance, incorrectly identifying a human or a traffic light on the road? The INRIA person dataset is available [here](http://pascal.inrialpes.fr/data/human/)

## Criteria for evaluation: 

   - we can build in 2-4 months - yes
   - that feels like a useful/profitable product - yes, especially the AI security aspect 
   - that exhibits the capability and the algorithmic innovations we're discussing - yes
   - and, if data is necessary, that data should be available and we should be able to share it with our clients - it's possible

## Conclusion: 

IMHO this topic will make a good report. It not only covers the ML security aspect but also to think of it - making ML models more robust?   
concerns (no necessarily bad):
   - it's an emerging area
   - success rates in strength can differ based on the attack methods (which could be evolving). The best method working in one scenario may not work well in another.
   - May want to wait for the Defens-GANS library/API

## Helpful reads:
https://blog.openai.com/adversarial-example-research/   
http://cs229.stanford.edu/proj2017/final-reports/5241871.pdf   
http://blog.ycombinator.com/how-adversarial-attacks-work/   
FGSM demonstrated [here](https://github.com/Lextal/adv-attacks-pytorch-101)   
