---
sidebar_position: 6
---

# Getting a certificate

After a successful testing campaign, the user will have the possibility to generate the certificate metadata for your DApp. They can do so by simply click on "Review Certification Metadata".

A form appears and is prefilled with the information contained in the user profile and in the DApp profile.
The user needs to compute the script hashes of each on-chain script used by the DApp or refer to its CIP-0072 registration information and fill the form accordingly.

:::note
See [CIP-72](https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0072/) for more information.
:::

The user can then fill the rest of the form and click on "Send report".

The user will get two files, one containing the on-chain metadata, and one containing the off-chain metadata. Those files are [CIP-0096](https://github.com/RSoulatIOHK/CIPs/blob/cip-certification-metadata/CIP-0096/README.md) compliant. The user will then be able to broadcast the on-chain metadata on the blockchain, and upload the off-chain metadata on IPFS. All links have been precalculated for ease of use.