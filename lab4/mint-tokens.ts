import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"
import { Account, clusterApiUrl, Connection, Keypair, PublicKey } from '@solana/web3.js';
import { mintTo } from "@solana/spl-token";

const sender = getKeypairFromEnvironment("SECRET_KEY")
console.log(sender.publicKey.toBase58())

const MULTIPLICATION_FACTOR = Math.pow(10, 8);
const TOKEN_MINT = new PublicKey("FWSXfPphc3yUesrdsQ4bvpxJ6wR5pf83Fw5UpocNp35U");
const TOKEN_ACCOUNT = new PublicKey("G5J4dfg1Tw1qt9c8cTXADYZAZRBFP2jXdjtHAFFkfSN9")

const connection = new Connection(clusterApiUrl("devnet"))

const mintTx = await mintTo(connection, sender, TOKEN_MINT, TOKEN_ACCOUNT, sender, 100 * MULTIPLICATION_FACTOR )

console.log(`Mint tx hash: ${mintTx}`)