// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract coinFlip {
  address owner;

  event Deposit(address who, uint amount);
  event Win(address who, uint balance);
  event Lose(address who, uint balance);

  constructor() {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "Only owner can call this function");
    _;
  }

  receive() external payable {
    emit Deposit(msg.sender, msg.value);
  }

  fallback() external payable {
    emit Deposit(msg.sender, msg.value);
  }

  function getBalance() public view returns (uint) {
    return address(this).balance;
  }

  function gamble() public payable {
    require(msg.value == 10 ** 18); // 1 KLAY
    if(block.number % 2 == 0) {
      (bool sent,) = msg.sender.call{value: 2 * 10 ** 18} ("");
      emit Win(msg.sender, getBalance());
      require(sent, "Failed to send KLAY");
    } else {
    emit Lose(msg.sender, getBalance());
    }
  }

  function withdraw() public onlyOwner {
    (bool sent,) = owner.call{value: getBalance()} ("");
    require(sent, "Failed to send KLAY");
  }
}