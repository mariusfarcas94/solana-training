import * as anchor from "@coral-xyz/anchor";
import { Program, web3 } from "@coral-xyz/anchor";
import { Lab7 } from "../target/types/lab_7";
import { assert } from "chai";

// describe("lab_7", () => {
//   // Configure the client to use the local cluster.
//   anchor.setProvider(anchor.AnchorProvider.env());

//   const program = anchor.workspace.Lab7 as Program<Lab7>;

//   it("Is initialized!", async () => {
//     // Add your test here.
//     const tx = await program.methods.initialize().rpc();
//     console.log("Your transaction signature", tx);
//   });
// });

describe("lab_7", () => {

  // Use the cluster and the keypair specified in Anchor.toml
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const user = (provider.wallet as anchor.Wallet).payer;

  const program = anchor.workspace.Lab7 as Program<Lab7>;
  // You can skip this 'before' section if you're busy!
  // We don't need to airdrop if we're using the local cluster
  // because the local cluster gives us 85 billion dollars worth of SOL
  before(async () => {
  const balance = await provider.connection.getBalance(user.publicKey);
  const balanceInSOL = balance / web3.LAMPORTS_PER_SOL;
  const formattedBalance = new Intl.NumberFormat().format(balanceInSOL);

  console.log(`Balance: ${formattedBalance} SOL`);

  it("Saves a user's favorites to the blockchain", async () => {
    // Here's what we want to write to the blockchain
    const favoriteNumber = new anchor.BN(23);
    const favoriteColor = "purple";
    const favoriteHobbies = ["skiing", "skydiving", "biking"];

    await program.methods
    .setFavorites(favoriteNumber, favoriteColor, favoriteHobbies)
    .signers([user])
    .rpc();
    // No check everything matches
    const favoritesPdaAndBump = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("favorites"), user.publicKey.toBuffer()],
    program.programId
    );
    
    const favoritesPda = favoritesPdaAndBump[0];
    const dataFromPda = await program.account.favorites.fetch(favoritesPda);

    assert.equal(dataFromPda.color, favoriteColor);
    assert.equal(dataFromPda.number.toString(), favoriteNumber.toString());
    assert.deepEqual(dataFromPda.hobbies, favoriteHobbies);
    });
  });
})