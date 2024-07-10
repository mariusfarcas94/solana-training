import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

const connection = new Connection(clusterApiUrl("devnet"))

const sender = getKeypairFromEnvironment("SECRET_KEY")
console.log(sender.publicKey.toBase58())

const RECEIVER = new PublicKey("7ex95SBsiEP11awST86WoEpfjy9CTANberhkJKM8nuMb");

const MULTIPLICATION_FACTOR = Math.pow(10, 8);
const TOKEN_MINT = new PublicKey("FWSXfPphc3yUesrdsQ4bvpxJ6wR5pf83Fw5UpocNp35U");
const TOKEN_ACCOUNT = await getOrCreateAssociatedTokenAccount(connection, sender, TOKEN_MINT, sender.publicKey);

const receiverTokenAccount = await getOrCreateAssociatedTokenAccount(connection, sender, TOKEN_MINT, RECEIVER);

console.log(`Receiver token account: ${receiverTokenAccount}`);

const transferTx = await transfer(connection, sender, TOKEN_ACCOUNT.address, receiverTokenAccount.address, sender, 2 * MULTIPLICATION_FACTOR);

console.log(`Transfer tx: ${transferTx}`)