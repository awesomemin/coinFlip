const Caver = require('caver-js');
const caver = new Caver('https://api.baobab.klaytn.net:8651/');

const CONTRACT_ADDRESS = "0xA6B03bca14CE79750D5F98190b3ad6BC482bD9e8";

const login = () => {
  const privateKey = document.getElementById
  const keyring = caver.wallet.keyring.createFromPrivateKey(privateKey);
  caver.wallet.add(keyring);
}

/*
async function testFunction() {
  const keystore = fs.readFileSync("./keystore.json", 'utf-8');

  const keyring = caver.wallet.keyring.decrypt(keystore, 'password');

  caver.wallet.add(keyring);

  const testContract = caver.contract.create(contractInfo.abi, "0x08A65E074AA123Fb10E118570Dd00617DeFbE2C0");

  const value = testContract.send({
    from: keyring.address,
    gas: 15000000,
  }, "set", "name", "honaldo").then(console.log);

  testContract.call({
    from: keyring.address,
    gas: 1500000,
  }, "get", "name").then(console.log);
}*/