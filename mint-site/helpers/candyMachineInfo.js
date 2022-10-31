export const candyMachineAddress = "0x777da46692da4c46ddb4cac7bfecb2702104fb46e955d8829f6ff59ec72d6737";
export const collectionName = "Plzzzz"; // Case sensitive!
export const collectionCoverUrl = "ipfs://bafybeibs3c5hnddvcolmarndybtesc4xbxl4bopu7xu4olwgosqm2hqjnu";
export const mode = "test"; // "dev" or "test" or "mainnet"

export let NODE_URL;
export const CONTRACT_ADDRESS = "0x481efbf0c3cbec627b5f5674287d4ae6ee770da5949dcfe698a8520108236a33";
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
