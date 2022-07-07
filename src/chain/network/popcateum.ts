import { ethers } from 'ethers'
import { popcateumRPC } from './rpc'

const popcateumProvider = new ethers.providers.JsonRpcProvider(popcateumRPC)

const getBlockNumber = async () => {
  const blockNumber = await popcateumProvider.getBlockNumber()
  return blockNumber
}

export {
  getBlockNumber
}