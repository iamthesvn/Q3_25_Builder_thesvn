import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createSignerFromKeypair, signerIdentity, generateSigner, percentAmount } from "@metaplex-foundation/umi"
import { createNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";

import wallet from "../turbin3-wallet.json"
import base58 from "bs58";

const RPC_ENDPOINT = "https://api.devnet.solana.com";
const umi = createUmi(RPC_ENDPOINT);

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const myKeypairSigner = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(myKeypairSigner));
umi.use(mplTokenMetadata())

const mint = generateSigner(umi);

(async () => {
    let tx = createNft(umi, {
        mint,
        name: `thesvn's rug`,
        symbol: "SVNR",
        uri: "https://gateway.irys.xyz/EBHxNZnv6d3MTmbb2jhL22wzc1CvqBjzJJ8gW87GKSAB",
        sellerFeeBasisPoints: percentAmount(5), // 5% royalty
    });

    let result = await tx.sendAndConfirm(umi);
    const signature = base58.encode(result.signature);

    console.log(`Succesfully Minted! Check out your TX here:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`)

    console.log("Mint Address: ", mint.publicKey);
})();

// Succesfully Minted! Check out your TX here:
// https://explorer.solana.com/tx/3RCgKwm2mSTcyYhVgrMnFpyC66obZ9gDdtrhmCUyH43Z6rQ6gHM1YKTeNYLGNhLgYSLm9TGmHRcVDyzgyz5bpyTK?cluster=devnet
// Mint Address:  C3b5XPnAB1xEwtrGV6awRpSMRk2zVCe7ynkJFRPFRUkx