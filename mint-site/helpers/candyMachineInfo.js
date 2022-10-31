export const candyMachineAddress = "0x49571fd36e485957177207fa5e76e08a0a648fc1fb690792405bc21ab22394dd";
export const collectionName = "Plzzzz"; // Case sensitive!
export const collectionCoverUrl = "ipfs://bafybeibs3c5hnddvcolmarndybtesc4xbxl4bopu7xu4olwgosqm2hqjnu";
export const mode = "test"; // "dev" or "test" or "mainnet"

export let NODE_URL;
export const CONTRACT_ADDRESS = "0xdf5c814388f4162f353e14f6123fcba8f39a958e4a2640e38e9e2c7cdfd2ac1d";
export const COLLECTION_SIZE = 10
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
