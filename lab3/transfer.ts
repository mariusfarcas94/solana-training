import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from '@solana/web3.js';
import { createMemoInstruction } from "@solana/spl-memo";

const sender = getKeypairFromEnvironment("SECRET_KEY")
const receiver = new PublicKey("7ex95SBsiEP11awST86WoEpfjy9CTANberhkJKM8nuMb");

console.log(sender.publicKey.toBase58())

const connection = new Connection(clusterApiUrl("devnet"))

const balanceInSol = await connection.getBalance(receiver);

console.log(`Receiver balance: ${balanceInSol / LAMPORTS_PER_SOL}`)

const tx = new Transaction();

const transferInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver,
    lamports: 0.1 * LAMPORTS_PER_SOL
});

const memoInstruction = createMemoInstruction( "Hello Solana World!")

tx.add(transferInstruction);
tx.add(memoInstruction);

const signature = await sendAndConfirmTransaction(connection, tx, [sender]);

console.log( `Transaction confirmed! Signature: ${signature}`);

const newBalanceInSol = await connection.getBalance(receiver);

console.log(`Receiver NEW balance: ${newBalanceInSol / LAMPORTS_PER_SOL}`)

