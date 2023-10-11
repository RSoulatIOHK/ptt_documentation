---
sidebar_position: 2
---

# Uploading an audit report

An auditor has the possibility to upload an audit report and generate the [CIP-0096](https://github.com/RSoulatIOHK/CIPs/blob/cip-certification-metadata/CIP-0096/README.md) compliant metadata for the certification of a DApp.

The user can chose the level of certification and needs to fill the form with all the mandatory information. See [CIP-0096](https://github.com/RSoulatIOHK/CIPs/blob/cip-certification-metadata/CIP-0096/README.md) for more information about the content of the fields.
The user can then upload the audit report as a PDF, or JSON file.

After clicking on "Send report", the report and the off-chain metadata are sent on IPFS to be forever accessible, and the user will get two files, one containing the on-chain metadata, and one containing the off-chain metadata. The user needs then to broadcast a transaction with the on-chain file as metadata.