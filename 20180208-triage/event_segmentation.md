TL;DR: This topic seems really cool and applicable not only to videos but also actual robot navigation.  Alas, it's probably not a capability most companies need now.

What is it: Humans are able to effortlessly segment events in real life (and in videos).  Machine learning models can segment words and topics, but events are temporally (and sometimes spatially) sensitive.  These methods use machine learning to tease out non-labeled events in both text data (i.e. Twitter tweets) and video.  New advances can pull out multiple concurrent events in both text and video.

How it works:
Can be similar to summarization of text information but importantly contains a temporal component.  So, events are segmented either in text (which I didn’t find enough evidence for) or video.  Video is interesting because multiple events are happening at the same time.  
The methods differ based on data format and the group doing the work.  There are some interesting application to Twitter data or news data.

Recent advances:
ActivityNet released by Stanford group.  Allows for ‘dense-captioning’- which allows for multiple overlapping events to be recognized and a natural language description written about them.  

Where it’s being used:
No commercial applications yet
Could be used to provide natural language summaries for videos
Could be used to explain what’s seen by drones (IoT implications)

Papers:
https://link.springer.com/content/pdf/10.1023%2FA%3A1007506220214.pdf
http://maroo.cs.umass.edu/getpdf.php?id=14
https://www.aaai.org/ocs/index.php/ICWSM/ICWSM11/paper/viewFile/2745/3207
https://www.aaai.org/ocs/index.php/ICWSM/ICWSM13/paper/viewFile/6057/6346
https://www.sciencedirect.com/science/article/pii/S0004370207000665
https://www.cv-foundation.org/openaccess/content_iccv_2013/papers/Ramanathan_Video_Event_Understanding_2013_ICCV_paper.pdf
https://www.cv-foundation.org/openaccess/content_iccv_2015/papers/Ramanathan_Learning_Temporal_Embeddings_ICCV_2015_paper.pdf
http://ieeexplore.ieee.org/abstract/document/8258136/


Blogs:
https://cs.stanford.edu/people/ranjaykrishna/densevid/
