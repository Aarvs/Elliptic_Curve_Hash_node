const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");
const { getRandomBytesSync } = require("ethereum-cryptography/random.js");

function uint8ArrayToHexString(uint8Array) {
  return Array.from(uint8Array)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

const privateKey = getRandomBytesSync(32);
const publicKey = secp256k1.getPublicKey(privateKey);

const privateKeyHex = uint8ArrayToHexString(privateKey);
const publicKeyHex = uint8ArrayToHexString(publicKey);

console.log("Private Key:", privateKeyHex);
console.log("Public Key:", publicKeyHex);
