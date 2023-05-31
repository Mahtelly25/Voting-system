import Web3 from "web3";
import { abi } from "./abi";
export let web3 = new Web3(window.ethereum);
export const contract = new web3.eth.Contract(
  abi,
  "0x4c72800645065ff4907e637e7d78f1b47bf57c38"
);

export const login = async () => {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  return account;
};

export function isLoggedIn() {
  // Check if MetaMask is installed
  if (typeof window.ethereum !== "undefined") {
    // Check if the user is logged in to MetaMask
    if (window.ethereum.selectedAddress === null) {
      console.log("User is not logged in to MetaMask.");
      return false;
    } else {
      console.log("User is logged in to MetaMask.");
      console.log("Selected address:", window.ethereum.selectedAddress);
      return true;
    }
  } else {
    console.log("MetaMask is not installed.");
    return "not_installed";
  }
}

export function logout() {
  console.log(web3.currentProvider);
  if (typeof web3 !== "undefined" && web3.currentProvider) {
    // Clear the current user's account information
    // web3 = new Web3();
  } else {
    console.log("Web3 provider not found.");
  }
}
