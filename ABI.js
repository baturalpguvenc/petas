const contractAddress = '0x9F9Cc720BF33c737152Cf5b5EC5b5a5E8C2097D0'; // kontratın adresi
const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "manager",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "employee",
        "type": "address"
      }
    ],
    "name": "approveVacation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
]
