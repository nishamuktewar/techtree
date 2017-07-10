Linear Programming is an optimization technique for solving problems where the objective function and decision variables have a linear relationship. If the decision variables can only be discrete (for example, decision to either build a plant or not), the optimization technique used is Integer Programming. Mixed Integer Programming is used when decision variables are both discrete and continuous.  Example problems are facility location and vehicle routing. MILPs much harder to solve than LP because they are NP Hard. 

[The problems usually are of the form](http://www.gurobi.com/resources/getting-started/mip-basics):

minimize cT x

A x = b (linear constraints)

l ≤ x ≤ u (bound constraints)

where some or all xj must take integer values (integrality constraints)

Commercial Solvers: IBM’s CPLEX, Gurobi and XPRESS.
Benchmarks http://plato.asu.edu/ftp/milpc.html

[Open source solvers](https://pdfs.semanticscholar.org/4946/08a6837147f8168e2bd371a4bb5ac0a54513.pdf): GLPK, LP_Solve, CLP, SCIP, SoPlex

Performance lag of open source solvers are documented here:  
http://www.gurobi.com/resources/switching-to-gurobi/open-source-solvers

There have been some algorithmic advances, but MILP is not a candidate for report
