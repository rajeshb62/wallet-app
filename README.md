# Aztec Box

This box is a one-stop-shop for Aztec that will deploy a minimal React page. You can use it as a boilerplate to start developing your own Aztec app in seconds!

## Getting Started

The easiest way to start is with a Github Codespaces, which has a generous free tier. Just click on this button:

[![One-Click React Starter](.devcontainer/assets/react_cta_badge.svg)](https://codespaces.new/AztecProtocol/aztec-packages?devcontainer_path=.devcontainer%2Freact%2Fdevcontainer.json)

## Using the `npx` command

The above method just uses the `npx` command, AKA "unboxing the box". This is a CLI command to quickly start developing on your own machine.

### Prerequisites

- Node >v18
- Docker

### Usage

Just open a terminal and write:

```bash
npx create-aztec-app
```

It should ask you some questions about your project, install and run the Sandbox (local developer network). You can also start, stop, update, and do other things on the sandbox through this script. Just run:

```bash
npx create-aztec-app sandbox --help
```
## Version incompatibility
Using versions of @aztec (accounts/aztec.js/builder/circuit-types) of 0.50.1 breaks codegen for the app with error:
yarn run v1.22.19
$ ${AZTEC_BUILDER:-aztec-builder} codegen src/contracts/target -o artifacts
aztec:builder: Error running command
aztec:builder: Error: Could not generate contract artifact for MinimalBox: Error: Selector must fit in 4 bytes (got value 4.165361705397761e+28).
    at generateContractArtifact (file:///root/workspace/node_modules/@aztec/types/dest/abi/contract_artifact.js:228:15)
    at loadContractArtifact (file:///root/workspace/node_modules/@aztec/types/dest/abi/contract_artifact.js:50:12)
    at generateFromNoirAbi (file:///root/workspace/node_modules/@aztec/builder/dest/contract-interface-gen/codegen.js:42:22)
    at async generateCode (file:///root/workspace/node_modules/@aztec/builder/dest/contract-interface-gen/codegen.js:20:26)
    at async Command.<anonymous> (file:///root/workspace/node_modules/@aztec/builder/dest/index.js:11:9)
    at async Command.parseAsync (/root/workspace/node_modules/@aztec/builder/node_modules/commander/lib/command.js:1092:5)
    at async main (file:///root/workspace/node_modules/@aztec/builder/dest/bin/cli.js:9:5)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


## More information

Visit the [Aztec Docs](https://docs.aztec.network) for more information on how Aztec works, and the [Awesome Aztec Repository](https://github.com/AztecProtocol/awesome-aztec) for more cool projects, boilerplates and tooling.
