# Turbin3 Rust Prerequisites Project

This repository contains the Rust code for completing the Turbin3 prerequisites challenge on Solana devnet. The project demonstrates various Solana blockchain interactions including wallet management, SOL transfers, and NFT minting.

## Project Overview

This project is a collection of Rust functions that interact with the Solana blockchain, specifically:

- Generating and managing Solana keypairs
- Converting between different wallet formats (JSON, Base58)
- Requesting SOL airdrops on devnet
- Transferring SOL between wallets
- Submitting the Turbin3 prerequisites challenge transaction

## Getting Started

### Prerequisites

- Rust and Cargo installed
- Solana CLI tools (optional but recommended)

### Installation

1. Clone this repository
2. Install dependencies:
```bash
cargo build
```

### Setting Up Your Wallet

Before running the tests, you'll need to create a wallet file. You can use the `keygen` test to generate a new wallet:

```bash
cargo test keygen -- --nocapture
```

Save the output bytes to a file named `dev-wallet.json` in the project root.

Alternatively, if you have a Base58 private key, you can convert it to the wallet format:

```bash
cargo test base58_to_wallet -- --nocapture
```

## Running the Tests

Each functionality is implemented as a test that can be run individually:

```bash
# Request an airdrop of SOL on devnet
cargo test airdrop -- --nocapture

# Transfer SOL to another address
cargo test transfer_sol -- --nocapture

# Empty your wallet (transfer all SOL)
cargo test empty_wallet -- --nocapture

# Submit the Turbin3 prerequisites challenge
cargo test submit_rs -- --nocapture
```

## Security Note

This repository is configured to ignore wallet files (*.json) to prevent accidentally committing private keys. If you need to share wallet configurations, use example files with dummy keys.

## License

This project is for educational purposes as part of the Turbin3 prerequisites challenge.
