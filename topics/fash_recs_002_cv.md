(transition from intro to collaborative filtering piece)
...

Collaborative filtering is a popular starting point for recommender systems. But how does user input work for the fashion industry, where there might be millions of unique products with a short shelf life and little to no interaction for smaller brands? Image recognition techniques can fill in information that allows products without any previous user interaction at all to get recommended. Pinterest notes, that recommendations "primarily generated from the 'curation graph' of users, boards, and Pins" are seriously held back by 'a long tail of less popular Pins without recommendations". Their solution? Visual search. 

There are a few different ways to approach the problem of automating a system to recognize images. Previous computer vision methods for the fashion industry focused on *segmentation*, requiring classification of every pixel of an image into a pre-defined label. Recent methods that utilize *detection*, set to classify items of interest within an auto-generated bounding box, are showing significant gains in accuracy. Specifically, using convolutional neural networks with deep architecture

Earlier papers that focus on fashion industry applications focused on the desire to understand clothing being worn on passerbys in shopping malls, and focused on surveillance camera footage in 2D [Yang 2011].  From there, a wealth of research in clothing recognition followed their lead, 

[ fill in more information from Pinterest paper notes]
P​interest​notes a less than 1% false positive rate for detecting items from images when their openly published computer vision techniques are used in combination with metadata about items.

Talk about the demo from Yamaguchi et al - Fashion Paper Dolls / closing parser demo. 

Deep Learning startups focused exclusively on this problem include Slyce and Cortexica. Both are powering emerging fashion apps, or retrofitting industry giants. 

[Talk about Slyce and Cortexica and try to figure out the difference between them. Cross compare products from their various app partnerships].

That means recommenders are getting much smarter about matching silhouettes, colors, and prints rather than relying on collaborative filtering alone. Some companies outsource deep learning and visual search to experts like S​lyce, ​while others develop solutions in-­house. Advances in visual browsing technology that delights the user is tricky for pleasing suppliers, however, when a luxury brand sees their $2000 handbag next to a visually identical option for $200.
...

[Talk about Looklet - everyone at the NYT OS Science Fair thought this was fascinating. - Theoretically you could build a system that accepts user input for visual search (or even simply finds matches for your existing data set) and then *change the outfits* on a per user basis (try to get a computational speed for the Looklet software).] 

