import { Keypair, PublicKey, Connection, Commitment } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';
import wallet from "../turbin3-wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

const token_decimals = 1_000_000;

// Mint address
const mint = new PublicKey("79SWXLtTfBcyRTePMMi4MPC4LymeSfQwxE3mXLnR5Emr");

(async () => {
    try {
        // Create an ATA
        const ata = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, keypair.publicKey);
        console.log(`Your ata is: ${ata.address.toBase58()}`);

        // Mint to ATA
        const mintTx = await mintTo(connection, keypair, mint, ata.address, keypair.publicKey, 1000 * token_decimals);
        console.log(`Your mint txid: ${mintTx}`);
    } catch (error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()


// Your ata is: GKVd1aefsH96QWiLj5ahzYXbsMNVz4h7rCW6uewZCPWu
// Your mint txid: 3Pz391DcGgHqwkcfThtKBj5QWf9zfbB1jtJf7esD1djGsjKz3i1je5etFAdBczCwjh5BVBgjF2tM8u9GvFRTWz9C