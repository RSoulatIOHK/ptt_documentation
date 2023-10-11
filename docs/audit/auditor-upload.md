---
sidebar_position: 1
---

# Audit Report

An auditor can chose to broadcast an audit report to the blockchain. Our tool allows a user to fill a form to have the on-chain and off-chain metadata filled. The user can then broadcast this transaction on-chain, linking it to its payment credentials, which can then be used for authentication.

:::note
In the future, the user will be able to directly broadcast this transaction from their in-browser wallet.
:::

## Basics

[CIP-0072](https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0072/) defines how a DApp can register on-chain.

A DApp is defined on-chain through the field subject. This subject value should be unique, and used throughout the DApp's lifecycle.

[CIP-0096](https://github.com/RSoulatIOHK/CIPs/blob/cip-certification-metadata/CIP-0096/README.md), currently in draft, defines how a DApp can have its audits or certificates on-chain.

The audit/certificate on-chain metadata also uses a subject field. The value provided in the certificate should be the same as in the DApp registration. This will be used by DApp aggregators or DApp store to link a registration to audits and certificates.

## Filling the form

Our tool provides a form to fill the metadata under the Audit Report Upload tab.

The user needs to fill the following information:

- Certification Information:

  - Certification Level: The level of certification of the DApp.
    :::caution
    The user is advised to use L0 at the moment (simple audit with no certification claim). L2 certification has not been defined yet.
    :::
  - Summary: A short summary of the audit/certificate.
  - Disclaimer: A disclaimer for the audit/certificate.

  - Subject: The subject of the audit/certificate. This should be the same as the DApp registration's subject.

- Auditor Information:

  - Name: The name of the auditor.
  - URL: A logo of the auditor company. This might be used by DApp store or aggregators.
  - Email: The contact email of the auditor.
  - Website: The website of the auditor.
  - GitHub: A GitHub account of the auditor.
  - Discord: A Discord channel of the auditor.
  - Twitter: A Twitter handle of the auditor.

- Audit Report:

  - Report URL: A URL to the audit report. This can be a link to a PDF or a JSON file. This report will be uploaded to IPFS, and the hash will be stored in the off-chain metadata.

- DApp scripts:

  - Script Hash: The hash of the DApp's script. This is used to link the audit/certificate to a particular version of the DApp. See CIP-0072 for more information.
  - Contract address: The address of the DApp's contract.
  - Smart Contract Information:
    :::info
    This information might be used to link to vulnerabilities discovered after the release and audit of the dapp.
    :::
    - Era: The era of the DApp's contract.
    - Compiler: The compiler used to compile the DApp's script.
    - Compiler version: The version of the compiler used to compile the DApp's script.
    - Optimizer: The optimizer used to further optimize the DApp's script.
    - Optimizer version: The version of the optimizer used to optimize the DApp's script.
    - Repository URL: The URL of the repository of the DApp.

## Downloading the Metadata

The user can download the metadata in JSON format. This JSON file can then be used to [broadcast the transaction on-chain with metadata](https://developers.cardano.org/docs/transaction-metadata/).

If succesful, a user can then fetch the metadata by using the 1304 metadata label, for example on:

- [Preview Cexplorer](https://preview.cexplorer.io/metadata)
- [Preprod Cexplorer](https://preprod.cexplorer.io/metadata)
- [Mainnet Cexplorer](https://cexplorer.io/metadata)