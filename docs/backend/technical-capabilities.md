---
sidebar_position: 4
---

# Technical capabilities of our tool

Our tool uses the contract model as a way of specifying the correct interactions with the DApp.

Our tool currently only supports plutus-v1 scripts.

Our tool uses state-of-the-art Property Based Testing [LINK TO PBT?].

Our tool uses coverage to assess the quality of the testing campaign, to detect eventual blind spots in the testing campaign.

Our tool offers through the mandatory use of the certification object the automated check of several properties, as described in section [REF TO THE SECTION].

Our tool can use multiple backends for emulation or even the use of testnets as testing frameworks. We have experimented the use of MockChain and the emulator of Plutus apps.

Our tool offers the possibility to use symbolic tokens, UTxO, to facilitate the writing of the contract model.

Soon:

- Our tool offers automated negative testing to assess the quality of the contract-model and the testing campaign. This helps identifying valid ways to interact with the DApp that were not described in the contract model.
- Our tool supports plutus-v2 scripts
- Our tool supports plutus-v3 scripts