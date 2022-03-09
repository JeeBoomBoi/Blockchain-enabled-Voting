import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract'

const contractAbi = require("./contractABI.json")
declare var window: any;
@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private web3: Web3;
  private contract: Contract;
  private contractAddress: "0x6501799DDAf9f61b43E28B3708695DECA9DD5bcb"


  constructor() {
    if(window.web3) {
    this.web3 = new Web3(window.ethereum);
    this.contract = new this.web3.eth.Contract(
      contractAbi,
      this.contractAddress
    )

    window.ethereum.enable().catch((err) => {
      console.log(err);
    })

    } else {
      console.warn("Metamask not found. Install or enable Metamask.")
    }
  }
}