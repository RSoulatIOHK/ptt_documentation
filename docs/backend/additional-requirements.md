---
sidebar_position: 3
---

# Additional Requirements
## Nix
In order for the tool to build the project the nix flake needs to be exposed for the DApp. It is assumed that the flake is exposed to a variable called `iog.dapp`. In the minimal examples repo[link] the flake for the haskell project is called `rootProject`. The flake is exposed in the minimal example by the adding following code to `flake.nix`:

```nix
iog.dapp = rootProject;
})) // {
iog.dapp = self.legacyPackages.x86_64-linux;
```
It is only necessary for the DApp to be able to build on an x86_64 linux architecture.

## Cabal

It is assumed that there is cabal project called certification.cabal that is exposed by the flake. The certification project should simply expose a module containing the certificaiton object called certification that is to be run on the Plutus Testing Tool.

This is done for the escrow example using the following haskell code:
```haskell
module Certification (certification) where

import Spec.Escrow (certification)
```

The cabal file for this simply exposes this certification module:
```cabal
library
  exposed-modules:  Certification
  build-depends:
    , base
    , plutus-contract-certification
    , escrow
```

## IMPORTANT: How to depend on plutus-apps

The Plutus Testing Tool modifies the cabal.project file to remove the dependency on plutus-contract-certification. At the moment the source-repository-package definition needs to include the --sha256 definition above the subdir: definition. The dependency on plutus-contract-certification also needs to go at the end of the subdir: list. An example of this is shown below:

```cabal
source-repository-package
  type: git
  location: https://github.com/input-output-hk/plutus-apps.git
  tag: 5c54f209322f62b73d88150ecb5d781d515de746
  --sha256: krHvT653ngPWRaB0XVfupCkLUnohhmymjG6Vm9bawv0=
  subdir:
    cardano-node-emulator
    cardano-streaming
    freer-extras
    marconi-core
    marconi-chain-index
    pab-blockfrost
    plutus-chain-index
    plutus-chain-index-core
    plutus-contract
    plutus-pab
    plutus-ledger
    plutus-script-utils
    plutus-tx-constraints
    plutus-contract-certification
```