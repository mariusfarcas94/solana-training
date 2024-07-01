import "dotenv/config"
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js"
import { airdropIfRequired } from "@solana-developers/helpers"

const connection = new Connection(clusterApiUrl("devnet"))

console.log("Connected to devnet!")
console.log("Devnet url: " + connection.rpcEndpoint)


const wallet = "DmqtCniQKuEJ7WEfEiXmJuPiUkL6AXo91FkVuyo2CLYR";
const publicKey = new PublicKey(wallet);

await airdropIfRequired(connection, publicKey, 1 * LAMPORTS_PER_SOL, 3 * LAMPORTS_PER_SOL);

const balanceInLamport = await connection.getBalance(publicKey);
const balanceInSol = balanceInLamport / LAMPORTS_PER_SOL;

console.log("Balance: " + balanceInSol + " SOL");