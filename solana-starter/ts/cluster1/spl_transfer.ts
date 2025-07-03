import { Commitment, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import wallet from "../turbin3-wallet.json"
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
const mint = new PublicKey("79SWXLtTfBcyRTePMMi4MPC4LymeSfQwxE3mXLnR5Emr");

// Recipient address
const to = new PublicKey("6tnG4t3b7pWogVSfFcAyzxPych5GyvpTKdz4ZCrTHx1S");

const token_decimals = 1_000_000;

(async () => {
    try {
        const ata_from = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, keypair.publicKey);
        const ata_to = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, to);

        const tx = await transfer(connection, keypair, ata_from.address, ata_to.address, keypair.publicKey, 100 * token_decimals);
        console.log(`Your transfer txid: ${tx}`);
    } catch (e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();

// Your transfer txid: 4rhNHUPdGsqSePxujj5GC2tcM6UXf8Bm5pNCZG5yXjuBgpKjjyFvibwjE9dje35i1y2cw9AH9fWBF2KDYxHHN4Tn