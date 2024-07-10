import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"
import { clusterApiUrl, Connection } from '@solana/web3.js';
import { createMint } from "@solana/spl-token";

const connection = new Connection(clusterApiUrl("devnet"))

const sender = getKeypairFromEnvironment("SECRET_KEY")

console.log(` Sender: ${sender.publicKey.toBase58()}`)

const mintSig = await createMint(connection, 
    sender, 
    sender.publicKey, 
    sender.publicKey, 
    8);

console.log(`Token Mint Address: ${mintSig}`)