# Multi-Dimensional Neural Networks

Verdict - No


## Overview

- There doesn’t seem to be much “new” in the general development of the field. Though there are several applied use cases these are very focused and don’t seem easily extensible to other industries to provide wide general interest - particularly those in robotics, medical scans, and similar. The advancements in these areas seem to be the tricks to be able to enable use of CNNs (in the case of EEG data) or a planner structure to support physical 3D motion capabilities (in the case of robotics). -brian

- There does seem to be some inconsistency in how the terminology, “multi-dimensional” is used which might be interesting to help clarify - for example the recent article on 11-dimensional NN structures found in the brain vs other papers which seem to be focused just on the dimensions of the physical world. Similarly, there seems to be some approaches more aimed at reducing the dimensionality of the data. -brian

- this seems very niche and only applicable to people with a) 3d data, b) point
  clouds c) very strong graph structures

- the graph NN stuff seems very interesting and learning on graph structures has
  been a reoccurring theme in client work.

- immature field


## Prototype ideas - if we were to go this route:

- identifying company similarity using normalized corporate data
- creating a more accurate biometric (?)
- bot detection from graph analysis
- object detection from lidar data


## Papers

[Path Planner - robotics, 2017](https://www.researchgate.net/publication/319362017_Design_method_for_an_multidimensional_neuronet_based_extrapolating_path_planner)

[Cliques of Neurons, 2017](https://www.frontiersin.org/articles/10.3389/fncom.2017.00048/full)

[Multidimensional mutual ordering of patterns, 2017](http://iopscience.iop.org/article/10.1088/1742-6596/803/1/012083/pdf)

[Multidimensional Outliers, 2017](http://www.boletintecnico.com/index.php/bt/article/download/1348/1351)

- https://arxiv.org/abs/1707.06719
    - no affiliation?
    - sparse pointclouds
- https://www.youtube.com/watch?v=WUOSmAfeXIw
    - point cloud object detection
    - converts to a grid :-/
- https://arxiv.org/abs/1704.08165
    - unstructured convolution
    - works on a graph structure
    - ie: molecular structure
- https://arxiv.org/abs/1711.06396
    - 3d convolutions using voxels
    - good for brain imagery

