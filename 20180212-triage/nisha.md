# countering adversarial attacks

The idea is to spend 3-4 hours looking deeper. You should have in mind both the technical focus of a report, and the prototype.

One thing that came to my mind is that if we give some random noise as input to a classifier it will classify it to one of the classes, right? So there's no 

## What is the technical focus of the report? 
### Are there one or perhaps two algorithms to hang the report on or to focus on in the prototype? 

The report should demonstrate two things:
1. Demonstrate how one can exploit the sensitivity of ML algorithms and cause them to behave differently. For instance, make them classify a car as a toaster, when from a human vision it still appears as a car. This can be achieved by demonstrating two types of attacks:
    - non-targeted, where the attacker simply wants to misclassify the image
    - targeted, when the attacker wants to classify the image as a specific class
This can be achieved by Fast Stochastic Gradient descent technique demonstrated [here](https://github.com/Lextal/adv-attacks-pytorch-101) using a PyTorch library
2. Then show how to counter them. There are several approaches discussed as Friderike/Brian pointed out:

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
