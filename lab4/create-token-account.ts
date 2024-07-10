import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

const connection = new Connection(clusterApiUrl("devnet"))

const sender = getKeypairFromEnvironment("SECRET_KEY")
console.log(` Sender: ${sender.publicKey.toBase58()}`)

const TOKEN_MINT = new PublicKey("FWSXfPphc3yUesrdsQ4bvpxJ6wR5pf83Fw5UpocNp35U");

console.log(sender.publicKey.toBase58())

const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, sender, TOKEN_MINT, sender.publicKey)

console.log(`Token Account created: ${tokenAccount.address}`)

