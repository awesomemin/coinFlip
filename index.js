import Caver from "caver-js";
const caver = new Caver('https://api.baobab.klaytn.net:8651/');

const CONTRACT_ADDRESS = "0xA6B03bca14CE79750D5F98190b3ad6BC482bD9e8";

const login = (e) => {
  const privateKey = document.querySelector(".login");
  console.log(privateKey);
  const keyring = caver.wallet.keyring.createFromPrivateKey(privateKey);
  caver.wallet.add(keyring);
}

const form = document.querySelector(".login");
form.addEventListener('submit', login);