## How to deploy your own coinflip!

1. [download puzzle wallet](https://puzzle.online), create a wallet, and reference a private key for the command later
2. get some testnet credits from the [faucet](https://dev.puzzle.online/faucet) for deploying
3. change the program name in `program/program.json`
4. change the program name in `program/src/main.leo`
5. download and install [snarkos](https://github.com/aleonet/snarkos)
6. deploy your program with this command `snarkos developer deploy {program name} --private-key "{the aleo private key from step 1}" --query "https://testnet.puzzle.online" --path "./build" --broadcast "https://testnet.puzzle.online/testnet/transaction/broadcast" --priority-fee 0 --network 1`