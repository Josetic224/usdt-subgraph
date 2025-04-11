import { Exchange } from "../generated/schema";
import { Transfer } from "../generated/TetherToken/TetherToken";

export function handleTransfer(event:Transfer):void{
  //load an event 
  let transferEvent = Exchange.load(event.transaction.hash.toHex());
  if(transferEvent === null){
    //if event doesn't exist create a new index on the database
    transferEvent = new Exchange(event.transaction.hash.toHex());
  }
  transferEvent.block = event.block.number;
  transferEvent.from = event.params.from.toHex();
  transferEvent.to = event.params.to.toHex();
  transferEvent.amount = event.params.value;

  transferEvent.save()
}