// Receiver of the shield.
const railgunAddress = '0zk123...456';

// The shieldPrivateKey enables the sender to decrypt
// the receiver's address in the future.
const wallet = new Wallet(pKey);
const shieldSignatureMessage = getShieldPrivateKeySignatureMessage();
const shieldPrivateKey = keccak256(
    await wallet.signMessage(shieldSignatureMessage),
);

// Formatted wrapped token amount.
// Tokens will shield as ETH and auto-wrap into wETH.
const wrappedERC20Amount: RailgunERC20Amount = {
    tokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // wETH
    amountString: '0x10', // hexadecimal amount
};

// Public wallet to shield from.
const fromWalletAddress = '0xab5801a7d398351b8be11c439e05c5b3259aec9b';

const {gasEstimateString, error} = await gasEstimateForShieldBaseToken(
    NetworkName.Ethereum,
    railgunAddress,
    shieldPrivateKey,
    wrappedERC20Amount,
    fromWalletAddress,
);
if (error) {
    // Handle gas estimate error.
}

const gasEstimate = BigNumber.from(gasEstimateString);