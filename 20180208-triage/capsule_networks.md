# Capsule networks / OO DL

CapsNets are NNs composed of capsules rather than neurons. Capsules are small groups of neurons that learn a particular task (i.e., unified in their function), e.g., detection of a particular object *including* pose parameters. The length of the output vector of a capsule encodes the probability that the object the capsule encodes is present while pose parameters are encoded in the orientation of the vector. Thus, capsules are equivariant.

CapsNets are organized in multiple layers, the lowest layer capsules are called primary capsules (cf. V1 in neuroscience) dedicated to detecting presence simple objects in small parts of the input image whilst higher capsules are dedicated to detecting larger and more complex objects.

Early layers are a combination of convolutions and a novel squashing layer (that compresses an output to 0 - 1 range representing probability) whilst a novel routing agreement algorithms "constructs" higher level objects based on how well combinations of lower level objects can "explain" all objects detected in the image (e.g., the answer to "Is this triangle part of a boat or a house?"" depends on other objects present in image). Basically, dynamic routing is an algorithm to iteratively explain away ambiguity. As a function of this algorithm, "hierarchies", i.e., which parts belong to which object, are encoded in the object "for free". Generally, one cool part of CapsNets is that one architecture is able to solve many vision tasks, unlike current CNNs often modified to perform well on specific tasks.

I copy from [here](https://www.oreilly.com/ideas/introducing-capsule-networks?twitter=@bigdata): Despite all their qualities, CapsNets are still far from perfect. Firstly, for now they don't perform as well as CNNs on larger images such as CIFAR10 or ImageNet. Moreover, they are computationally intensive, and they cannot detect two objects of the same type when they are too close to each other (this is called the "crowding problem," and it has been shown that humans have it, too).

*Object oriented DL* is similar in spirit, a "novel computational paradigm of deep learning". The tenet if OO DL is that we should increase interpretability of NNs is that objects / symbols form the basic building blocks in DL (so, somewhat related to PSL, in spirit). [Show](https://cbmm.mit.edu/publications/object-oriented-deep-learning) that OO DL generalizes better to objects with novel rotation (which shows the advantage of encoding something like a concept of rotation directly in NNs).

*Overall*: Too early and too limited in its applications (to date). Main advantage is data efficiency and better generalization (not enough for a report), main downside is computationally expensive, only images (so far). No novel capability over and above Deep Learning report. Though, what is exciting is the very general trend towards including more interpretable structure in newly fashionable approaches (cf. PSL).

- Awesome introduction CapsNets: https://www.oreilly.com/ideas/introducing-capsule-networks?twitter=@bigdata
 - Key paper CapsNets: https://arxiv.org/abs/1710.09829  
 - TF implementation CapsNets: https://github.com/ageron/handson-ml/blob/master/extra_capsnets.ipynb
 - OO DL key paper: https://cbmm.mit.edu/publications/object-oriented-deep-learning (very little else on this).

CapsNets make an awesome project and blog post, especially if applied to data sets outside of MNIST. Same for OO DL.
