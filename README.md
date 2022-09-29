# Commit-by-commit breakdown of "Build a Blockchain & Cryptocurrency | Full-Stack Edition"

This is a commit-by-commit breakdown of "Build a Blockchain & Cryptocurrency | Full-Stack Edition".
This will help anyone stuck on a particular lecture. Compare your code to the relevant commit here.

## References:
* [Course link, Build a Blockchain & Cryptocurrency | Full-Stack Edition](https://www.udemy.com/course/build-blockchain-full-stack)
* [original repository](https://github.com/15Dkatz/cryptochain)

## Commits
- [Section 2: Blocks | The Blockchain Backend](#section-2-blocks--the-blockchain-backend)
- [Section 3: The Chain | the Blockchain Backend](#section-3-the-chain--the-blockchain-backend)
- [Section 4: Proof of Work | the Blockchain Backend](#section-4-proof-of-work--the-blockchain-backend)
- [Section 5: API and Network | the Blockchain Backend](#section-5-api-and-network--the-blockchain-backend)
- [Section 6: Wallets, Keys, and Transactions | the Blockchain Backend](#section-6-wallets-keys-and-transactions--the-blockchain-backend)
- [Section 7: Transaction Pool | The Blockchain and Cryptocurrency Backend](#section-7-transaction-pool--the-blockchain-and-cryptocurrency-backend)
- [Section 8: Mine Transactions | The Blockchain and Cryptocurrency Backend](#section-8-mine-transactions--the-blockchain-and-cryptocurrency-backend)
- [Section 10: The Frontend Blockchain](#section-10-the-frontend-blockchain)
- [Section 11: The Frontend Cryptocurrency](#section-11-the-frontend-cryptocurrency)
- [Section 12: Deploying to Production and Full-Stack Improvements](#section-12-deploying-to-production-and-full-stack-improvements)

#### Section 2: Blocks | The Blockchain Backend
* [Set Up the Blockchain Application](https://github.com/15Dkatz/cryptochain_commits/commit/efe4df233fd91e1e06ee5d7e84bd33e08c494478)
* [Create the Block Class](https://github.com/15Dkatz/cryptochain_commits/commit/365c23e3c6d5431f78ff463341b6e8ab41c291ee)
* [Create the Block Class | TDD Style](https://github.com/15Dkatz/cryptochain_commits/commit/521b49df3a126b6a740ee7010015c8798060c3ae)
* [The Genesis Block | Tests](https://github.com/15Dkatz/cryptochain_commits/commit/0e70fb03fd19e10f5cece686961d06069e834d32)
* [The Genesis Block | Code](https://github.com/15Dkatz/cryptochain_commits/commit/8e2e4c74cb1ad628008b90f189dfb6903eed8db8)
* [Mine Blocks](https://github.com/15Dkatz/cryptochain_commits/commit/78902ce4f5becc9d3db6e27a0e1a92d61ad578be)
* [Crypto Hash and SHA-256](https://github.com/15Dkatz/cryptochain_commits/commit/0bb5df6bce3d341046220b951b1c565baaed3cfa)
* [Hash in MineBlock](https://github.com/15Dkatz/cryptochain_commits/commit/0bb5df6bce3d341046220b951b1c565baaed3cfa)

#### Section 3: The Chain | the Blockchain Backend
* [The Blockchain Class](https://github.com/15Dkatz/cryptochain_commits/commit/b291dc2d48e2ba807009ccbb90a20795f793db2d)
* [Chain Validation | Tests](https://github.com/15Dkatz/cryptochain_commits/commit/f99b2fbfb2711f71c507f917bad983d51f64c75a)
* [Chain Validation | Code](https://github.com/15Dkatz/cryptochain_commits/commit/80db7bee453020c06fccd28a36ec906e533ccaa6)
* [Chain Replacement](https://github.com/15Dkatz/cryptochain_commits/commit/9749e8f860164c7b239e9a51d9190f972a907229)
* [Stub Console Output in Tests](https://github.com/15Dkatz/cryptochain_commits/commit/116724d81ad64fea75d266ae1a444325d7ab785c)

#### Section 4: Proof of Work | the Blockchain Backend
* [Difficulty and the Nonce Value | Tests](https://github.com/15Dkatz/cryptochain_commits/commit/ac9cda91d4393271c6348590d1f7c8c2b67ea0ac)
* [Difficulty and the Nonce Value | Code](https://github.com/15Dkatz/cryptochain_commits/commit/55fc961757165e38c0d55b1b42d6d10dbf70ac6a)
* [Dynamic Difficulty and the Mine Rate](https://github.com/15Dkatz/cryptochain_commits/commit/0dbb85d7c5aa3b7703213f9aafd4cc03540f9519)
* [Adjust the Difficulty in MineBlock](https://github.com/15Dkatz/cryptochain_commits/commit/3a468eb93db7c8bcd1a979e0afd51786836d7299)
* [Improve the Proof of Work System | Average Work Script](https://github.com/15Dkatz/cryptochain_commits/commit/cd653dc33bbf8dc64a2c66eb7a14bfb993664f1d)
* [Improve the Proof of Work System | Binary hashes](https://github.com/15Dkatz/cryptochain_commits/commit/ef4522f256daa5e8fbb4b6cff0b3d58a37b1f6c6)
* [Prevent Difficulty Jumps](https://github.com/15Dkatz/cryptochain_commits/commit/e926c95e57cbafb082df453dbebc5552654db7a7)

#### Section 5: API and Network | the Blockchain Backend
* [Setup Express API](https://github.com/15Dkatz/cryptochain_commits/commit/a80a085e32da1c5324ab794f5421f7ae6dcb820b)
* [Post Request to Mine a Block](https://github.com/15Dkatz/cryptochain_commits/commit/4bdd08e5143de6dfc5882b5ab90aea3b80e2cac7)
* [Redis Publisher/Subscriber Class](https://github.com/15Dkatz/cryptochain_commits/commit/21a9121cfdd4b8d77df4656cbb64ef2f8dc0f66c)
* [PubNub: a Non-Redis Pub/Sub Alternative](https://github.com/15Dkatz/cryptochain_commits/commit/dcf93548d8eb6b8d702ed02957de70c20a828d96)
* [Broadcast Chain](https://github.com/15Dkatz/cryptochain_commits/commit/7ab6d761aae67e0558e1929d451af80108b7489c)
* [Start Peers and Broadcast Chain on API Mine](https://github.com/15Dkatz/cryptochain_commits/commit/15f348b00d928e410b0e5bbfe20f1b42d0cc5152)
* [Sync Chain on Connect](https://github.com/15Dkatz/cryptochain_commits/commit/b896d9747a4713bce08a3779221ccee1c5a606b2)
* [Avoid Redundant Interactions](https://github.com/15Dkatz/cryptochain_commits/commit/5b3442eeb87f1f32bb7740d1fc1d8d51eaafc55e)

#### Section 6: Wallets, Keys, and Transactions | the Blockchain Backend
* [Code Organization](https://github.com/15Dkatz/cryptochain_commits/commit/2518b0521a0ae5894708f899f971bde94abb6b41)
* [Create and Test Wallet Class](https://github.com/15Dkatz/cryptochain_commits/commit/72b316fa9396588d77246817a19b7cf586d4f947)
* [Key Pair and Public Key Addresses](https://github.com/15Dkatz/cryptochain_commits/commit/a5a06c75b3a2a3af08b8e462dad428de95af3e4a)
* [Sign Data and Verifying Signatures](https://github.com/15Dkatz/cryptochain_commits/commit/ebefd843adab1a91e57c320f08f76171bf5f6553)
* [Transaction Objects and the Output Map | Tests](https://github.com/15Dkatz/cryptochain_commits/commit/8223bc29dc37c996d0c3ebc1caefd39837b95bc2)
* [Transaction Objects and the OutputMap | Code](https://github.com/15Dkatz/cryptochain_commits/commit/ba67d3f6e864cb69606140e408f2f8354230a9eb)
* [Transaction Inputs](https://github.com/15Dkatz/cryptochain_commits/commit/3a28efce750d352301fd1d3143e60ea4461f4c84)
* [Cohesive Utility](https://github.com/15Dkatz/cryptochain_commits/commit/15bad87e4630a7290440c859e9ffdafaf5045ee2)
* [Validate Transaction](https://github.com/15Dkatz/cryptochain_commits/commit/0957bef789238ac68e73e1408e2bba95369e04a0)
* [Wallet Create Transaction](https://github.com/15Dkatz/cryptochain_commits/commit/861c391a648a4b323f2073485ee0a75987c38212)
* [Update Transactions with Multiple Outputs](https://github.com/15Dkatz/cryptochain_commits/commit/621d28692eb296a4946b246c9a85579f24349d76)
* [Improve the CryptoHash](https://github.com/15Dkatz/cryptochain_commits/commit/6a820b18d273b8f5795fbeb66d04d9a5fb2a5da0)
* [Transaction Update Edge Cases](https://github.com/15Dkatz/cryptochain_commits/commit/0bde7b7fbe37c1f4101e9e38de4039c191a2f4ec)

#### Section 7: Transaction Pool | The Blockchain and Cryptocurrency Backend
* [Create the Transaction Pool and Set Transactions](https://github.com/15Dkatz/cryptochain_commits/commit/10b89b9ee8a6099fe9a7c3e37340ac1914f652d4)
* [API Transactions and Main Transaction Pool](https://github.com/15Dkatz/cryptochain_commits/commit/a538a3926ec12912c3b2b3c2c482957317808122)
* [Handle Invalid Transactions](https://github.com/15Dkatz/cryptochain_commits/commit/2c25613f01168bee227b1ea68a4d2336b119ee1a)
* [Transaction Updates in the API](https://github.com/15Dkatz/cryptochain_commits/commit/b103ab4fc9c11897e2940c4094c7bf4df525a2ca)
* [Broadcast Transaction](https://github.com/15Dkatz/cryptochain_commits/commit/ca8a5b77cef1f4eab7f703c2592e232f50b079bc)
* [Sync Transaction Pool Map on Connect](https://github.com/15Dkatz/cryptochain_commits/commit/bf1850a6eab1508c64333bebe9ee83427f5f5abd)

#### Section 8: Mine Transactions | The Blockchain and Cryptocurrency Backend
* [Transaction Miner Class](https://github.com/15Dkatz/cryptochain_commits/commit/b399bf5729b52bdf58672ef5193a5e594f1ee8ae)
* [Grab Valid Transactions](https://github.com/15Dkatz/cryptochain_commits/commit/17c57ba81b2ba57babf0eae00ac2fd1d4912321c)
* [Reward Transaction](https://github.com/15Dkatz/cryptochain_commits/commit/7185319db8e1f7133b27858d3167118b6704af96)
* [Clear Blockchain Transactions](https://github.com/15Dkatz/cryptochain_commits/commit/d7fbf2a40761c617b656e687d8d122b7d2ee63e4)
* [Mine Transactions Endpoint](https://github.com/15Dkatz/cryptochain_commits/commit/3b0aca730be173a6183d15a8ddec66181162878d)
* [Clear Recorded Transactions on Successful Replace](https://github.com/15Dkatz/cryptochain_commits/commit/178f3518f4062099d8987a3b0c507873b33353f5)
* [Calculate the Wallet Balance](https://github.com/15Dkatz/cryptochain_commits/commit/a756dd5cabd5e9a2c23c88fc5bcc7f17c74f8383)
* [Calculate the Balance before each Transaction](https://github.com/15Dkatz/cryptochain_commits/commit/261c875e25b6a3332977d4e49a07b2c0dbb92a56)
* [Wallet Balance from Recent Transaction](https://github.com/15Dkatz/cryptochain_commits/commit/640e55b66b87e087966c2348f38e33839931da26)
* [Wallet-Info Request](https://github.com/15Dkatz/cryptochain_commits/commit/21e0c702ebd2494495e84dfe58667974ad68ea2e)
* [Valid Transaction Data | Tests](https://github.com/15Dkatz/cryptochain_commits/commit/4bda317fb2db333ce4eb21de4ad297cf821e36f9)
* [Valid Transaction Data | Code](https://github.com/15Dkatz/cryptochain_commits/commit/5167c4de895ee0fc36f60bbfeb5b42873c258876)
* [Validate Input Balances](https://github.com/15Dkatz/cryptochain_commits/commit/6c5fc2c57c1db8699e4a1fb7ff844069df2d28ae)
* [Prevent Duplicate Transactions in Block](https://github.com/15Dkatz/cryptochain_commits/commit/4d98221e2e7ea0830b3549ce7647896268df4f63)
* [Validate Transaction Chain](https://github.com/15Dkatz/cryptochain_commits/commit/d85179e0b6d0f2ab48e18f91dd9aca4582d8e512)

#### Section 10: The Frontend Blockchain
* [Serve a Frontend Page](https://github.com/15Dkatz/cryptochain_commits/commit/98f865de40c4df9a6c82c78a9b217b9463f2e3f0)
* [Add JavaScript to the Frontend](https://github.com/15Dkatz/cryptochain_commits/commit/6949091eb4ee206de1cbff58e693b3a6acc07745)
* [Build React into the Frontend](https://github.com/15Dkatz/cryptochain_commits/commit/f5c382e2cffb70bf60b6a7ad51024f1574c07de7)
* [Frontend Development Workflow](https://github.com/15Dkatz/cryptochain_commits/commit/a492c16739b53a1a3e0206d6ef458dde961255e1)
* [App component](https://github.com/15Dkatz/cryptochain_commits/commit/ee71aae4b60233b66584dc84d2ca2fb370d98b69)
* [Fetch and Display Wallet-Info](https://github.com/15Dkatz/cryptochain_commits/commit/6028dcb884ad1bbaa68a4f28967bdad7297d53bf)
* [Visualize the Blocks](https://github.com/15Dkatz/cryptochain_commits/commit/282cd2d0f893e87a933bb36bf6493b59a3d3955c)
* [Seed the Backend with Data](https://github.com/15Dkatz/cryptochain_commits/commit/823eba3a9d12912b0997d7172ab9d0d88336ed84)
* [Stylize the Application](https://github.com/15Dkatz/cryptochain_commits/commit/80d8b411474edde78dc99bafecc210aac2980e12)
* [Make a Block Component with Props](https://github.com/15Dkatz/cryptochain_commits/commit/5b97dbd9bd7520e6cfaea77ae77ab592eff2bd02)

#### Section 11: The Frontend Cryptocurrency
* [Toggle Transaction Displays](https://github.com/15Dkatz/cryptochain_commits/commit/a80890af249d9851217ebd23438997654ff0fa34)
* [Transaction Component](https://github.com/15Dkatz/cryptochain_commits/commit/b5f6660837f3b095d64d46362bea234d45fe0bc9)
* [React Router](https://github.com/15Dkatz/cryptochain_commits/commit/5f4ffe47fd025370f227fcc4a02ff717676c3b96)
* [Conduct Transaction Component](https://github.com/15Dkatz/cryptochain_commits/commit/d09fc26de595857c047d1cdbd20c5050b52bd3b2)
* [Post Transaction with Component](https://github.com/15Dkatz/cryptochain_commits/commit/295b5d5aa5302514c98e96d4010164f44235d536)
* [Transaction Pool Component](https://github.com/15Dkatz/cryptochain_commits/commit/3babb1b2a96fb3aae65f3d48ff07db3eaf3d692d)
* [Poll the Transaction Pool](https://github.com/15Dkatz/cryptochain_commits/commit/7f26e9e79c24d28b8758d677b03cb4d2eb235ef5)
* [Mine a Block of Transactions through the Frontend](https://github.com/15Dkatz/cryptochain_commits/commit/0dddecf3bb02202bba9a9fafeda3e534f32588dd)

#### Section 12: Deploying to Production and Full-Stack Improvements
* [Configure Production Code](https://github.com/15Dkatz/cryptochain_commits/commit/e1791c5e22c04b8d2bc3d33285a0685ffb2f8e87)
* [Known Adresses | Backend](https://github.com/15Dkatz/cryptochain_commits/commit/3581f482678e0b087339e065b591b04d0ca1e3e7)
* [Known Adresses | Frontend](https://github.com/15Dkatz/cryptochain_commits/commit/4a9ef451d41cdfd2e462a151907009f0c73e3960)
* [Blocks Pagination | Backend](https://github.com/15Dkatz/cryptochain_commits/commit/c943c72972cc44e026052d3146e1044075fa176e)
* [Blocks Pagination | Frontend](https://github.com/15Dkatz/cryptochain_commits/commit/b4deaf6bb76f1058969e2cbf48d48e367f30e204)
