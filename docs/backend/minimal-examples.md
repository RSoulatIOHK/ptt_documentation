---
sidebar_position: 1
---

# Minimal examples

The tool comes with several [minimal examples](https://github.com/Ali-Hill/minimal-ptt-examples) to help you in discovering the tool or setting up your own repository.

There are 7 different examples with their own specificities:

* The `main` or `Escrow` branch contains the Escrow example from the Plutus-apps repository.
It is a simple example that builds for the tool. All the Property Based Testing tests should fail quite easily in the first few iterations of each property. This allows the user to check what a failing test looks like and what is the feedback given by the tool.

* The `EscrowNoCoverage` branch contains the Escrow example from the Plutus-apps repository. It is a simple example that builds for the tool. All the Property Based Testing tests should fail. However it should require more tests than the `main` branch to fail the properties.

* The `Vesting` branch contains an example of a vesting contract from the Plutus-apps repository. All properties should pass, which enables the user to check what a passing test looks like. 

* The `auction-cooked` branch contains an auction contract example for cooked-validators. The online version of the tool does **not** support it at the moment. An interested user can contact us to get a demonstration of the testing tool on this contract.

<<<<<<< HEAD
* The `escrow-cooked` branch contains an escrow contract example for cooked-validators. It uses a certification object similarly to the other examples based on `plutus-apps`. The online version of the tool does **not** support it at the moment. An interested user can contact us to get a demonstration of the testing tool on this contract.
=======
* The `escrow-cooked` branch contains an escrow contract example for cooked-validators. It defines a `certification` object for `cooked-validators`. The online version of the tool does **not** support it at the moment. An interested user can contact us to get a demonstration of the testing tool on this contract.
>>>>>>> 9c0e789e8b40cce97fb12bf8691ceada40d4c96e

