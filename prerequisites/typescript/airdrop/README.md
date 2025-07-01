# Turbin3 Prerequisites - TypeScript Implementation

This repository serves as proof of work for completing the Turbin3 prerequisite tasks using TypeScript and Solana blockchain. The project demonstrates fundamental Solana development skills required for the Turbin3 builders program.

## Project Accomplishments

This project demonstrates completion of the following Turbin3 prerequisite tasks:

1. **Wallet Setup**: Generated Solana keypairs and managed wallet files
2. **Devnet Interaction**: Successfully requested and received SOL from Solana devnet
3. **Token Transfer**: Implemented precise SOL transfers between wallets with fee calculation
4. **NFT Minting**: Successfully minted an NFT to verify enrollment in the Turbin3 builders program

## Implementation Details

### Wallet Generation (`keygen.ts`)
Implemented wallet generation using Solana Web3.js:
- Created new Solana keypairs
- Generated and stored wallet secret keys

### SOL Airdrop (`airdrop.ts`)
Implemented devnet SOL acquisition:
- Connected to Solana devnet
- Requested 2 SOL airdrop to development wallet
- Verified transaction success via Solana Explorer

### Token Transfer (`transfer.ts`)
Implemented advanced SOL transfer with fee optimization:
- Calculated exact transaction fees
- Transferred maximum possible SOL amount (balance minus fees)
- Used Solana's SystemProgram for transfer instructions
- Confirmed transaction success via Solana Explorer

### Program Enrollment (`enroll.ts`)
Implemented NFT minting for program enrollment:
- Created Program Derived Addresses (PDAs) for account management
- Minted an NFT to the Turbin3 collection
- Successfully enrolled in the builders program

## Technical Stack

- **Language**: TypeScript
- **Blockchain**: Solana (Devnet)
- **Libraries**:
  - @solana/web3.js: Core Solana interactions
  - @coral-xyz/anchor: Framework for Solana program interaction
- **Key Concepts**:
  - Transaction signing and confirmation
  - Program Derived Addresses (PDAs)
  - NFT minting
  - Fee calculation

## Project Structure

- `keygen.ts` - Wallet generation implementation
- `airdrop.ts` - SOL airdrop request implementation
- `transfer.ts` - SOL transfer with fee calculation
- `enroll.ts` - NFT minting and program enrollment
- `programs/Turbin3_prereq.ts` - Program IDL for Anchor interaction

## Security

This project contains sensitive wallet files that are excluded from Git tracking via `.gitignore`. 

## License

MIT
