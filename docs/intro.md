---
sidebar_position: 1
---

# Overview

This page will describe the main features of the tool and link to the various other pages in the tutorial.

## What is the Plutus Testing Tool?

The Plutus Testing Tool is a tool that allows you to test your Plutus contracts in a simulated environment. It is a web application that you can access at [Plutus Testing Tool](https://dapps-certification-web.scdev.aws.iohkdev.io/).
Plutus Testing Tool is based on Property Based Testing (PBT). Property-Based-Testing is a testing methodology that allows you to test your code by specifying properties that should hold for all inputs. A tool based on PBT will then generate random actions and check that the properties hold for all of them. If the tool finds that a property does not hold, it will generate a counterexample that will help you debug your code.

The tool comes with a set of predefined properties that you can use to test your contracts. You can find more information about them in the Properties part of the [Certification Object](/docs/backend/certification-object.md) section.

## How to use the Plutus Testing Tool?

### Prerequisites

A few prerequisites are necessary to use the Plutus Testing Tool. You will find the related information in the this section and in the [Additional Requirements](/docs/backend/additional-requirements.md) section.

### Certification object

In the spirit of "certification", you will need to fill a certification object. This will allow the tool to test your DApp. You will find more information about the certification object in the [Certification Object](/docs/backend/certification-object.md) section.

### Features

The user is assumed to have familiarity with either the [Plutus contract model](https://plutus-apps.readthedocs.io/en/latest/plutus/tutorials/contract-models.html) or [cooked-validators](https://github.com/tweag/cooked-validators). Our tool supports both of the testing and emulation backends.

At the moment some features of the tool are only available on a specific backend. However, we are working on having all of the features available for all of the backends. 

:::note
The tool accessible online currently does not support cooked-validators. However, you can access it with the [minimal-ptt-examples](https://github.com/Ali-Hill/minimal-ptt-examples/) repository. It will be integrated into the tool for the next release.
:::

Here is a table with each feature and their respective availability:

| Feature | Plutus apps | Cooked-validators |
| ------- | ----------- | ----------------- |
| ------- | ----------- | ----------------- |
| Unit tests | ✅ | ✅ |
| Property Based Testing | ✅ | ✅ |
| Negative testing* | Soon | Soon |
| Coverage | ✅ | Soon |
| ------- | ----------- | ----------------- |
| Symbolic UTxO | ✅ | ✅ |
| Symbolic tokens | ✅ | ✅ |
| ------- | ----------- | ----------------- |
| Double Satisfaction Vulnerability check | Soon | ✅ |
| Locked Funds Vulnerability check | ✅ | Soon |
| Resilience to crash | ✅ | 2024 |
| Whitelist | ✅ | ✅ |
| ------- | ----------- | ----------------- |
| Plutus-v1 | ✅ | ✅ |
| Plutus-v2 | 2024 | 2024 |
| Plutus-v3 | 2024 | 2024 |
| UPLC testing | 2024 | 2024 |

A more detailed view of the vulnerabilities we address can be found in the [Vulnerabilities](/docs/backend/list-vulnerabilities.md) section.

:::note
Some of those features can be demonstrated on request but are not yet integrated in the tool. Please contact us if you are interested in seeing them.
:::

### Quickstart

[Minimal Examples](/docs/backend/minimal-examples.md) repository offers a great way for new users to check the capabilities of the tool. The repository contains a wide range of examples that covers all the different aspects of the testing tool.

They can be used as examples for the contract model, either with Plutus apps or cooked-validators. The examples can be used for a starting point of a DApp that builds for the tool.

The different libraries used for these examples are cached, which means the build time should be minimal.

### Generating certificates

After a succesful test run, the tool will offer to generate a CIP-0096 compliant certificate. The tool currently generates a level 0 certificate (simple audit) with attached the full Json file of the test run. 
### Support & Feedback

If you need support, you should have received a link to a Slack channel when subscribing. If that is not the case, please send an email to: support.

If you have any feedback on the tool, please reach to us in the dedicated Slack channel.

For any bug that you might encounter, we would be grateful if you could fill a bug report in the dedicated Slack channel.

For any feature request, please reach to us in the dedicated Slack channel.