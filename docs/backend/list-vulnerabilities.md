---
sidebar_position: 3
---
# Vulnerabilities checked by Plutus Testing Tool

Plutus Testing Tool aims at reducing the risk of a vulnerability present in the on-chain code. The vulnerabilities mentioned in this section references the list of vulnerabilities defined by the Certification Working Group at: [PR11](https://github.com/input-output-hk/Certification-working-group/pull/11). We've included the list in this documentation for ease of read but the reader should always refer to the official list of vulnerabilities.

Our tool contributes to the reduction of the risk of:

- [Multiple Satisfaction](#cpv-2023-017-multiple-satisfaction) through the automated checks produced by the certification object
- [Locked Ada](#cpv-2023-018-locked-ada) through the automated checks produced by the certification object against a user-defined strategy
- [Locked Token](#cpv-2023-019-locked-non-ada-values) through the automated checks produced by the certification object against a user-defined strategy
- [Insufficient Test](#cpv-2023-025-insufficient-tests) through the requirement of large coverage and the use of a large number of tests done by Property-Based-Testing
- [Incorrect Documentation](#cpv-2023-026-incorrect-documentation) through the use of the contract model which can be seen as a form of documentation
- [Insufficient Documentation](#cpv-2023-027-insufficient-documentation) through the use of the contract model which can be seen as a form of documentation
- Resilience to crash
- Whitelist
