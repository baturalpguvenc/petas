// Kontrat ve Ethereum JSON-RPC sağlayıcısı
const contractAddress = "0x9F9Cc720BF33c737152Cf5b5EC5b5a5E8C2097D0"; // kontratın adresi
const contractABI = [[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
	{
		"inputs": [],
		"name": "getVacationDays",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
				"name": "",
				"type": "address"
			}
		],
		"name": "requestCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requestCountLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_days",
				"type": "uint256"
			}
		],
		"name": "requestVacation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "requests",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "whitelist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]]; // kontratın ABI'si
const provider = new ethers.providers.JsonRpcProvider(); // Ethereum JSON-RPC sağlayıcısı
const signer = provider.getSigner(); // İşlem imzalamak için kullanılacak hesap
const contract = new ethers.Contract(contractAddress, contractABI, signer); // Kontrat nesnesi

// Kontrat fonksiyonları
async function requestVacation(days) {
  await contract.requestVacation(days);
}

async function getVacationDays() {
  const days = await contract.getVacationDays();
  return days.toString();
}

async function approveVacation(employee) {
  await contract.approveVacation(employee);
}

// Arayüz
const requestForm = document.getElementById("request-form");
const requestButton = document.getElementById("request-button");
const approveForm = document.getElementById("approve-form");
const approveButton = document.getElementById("approve-button");
const vacationDays = document.getElementById("vacation-days");

requestForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const days = requestForm.elements.days.value;
  await requestVacation(days);
});

approveForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const employee = approveForm.elements.employee.value;
  await approveVacation(employee);
});

requestButton.addEventListener("click", () => {
  requestForm.style.display = "block";
  approveForm.style.display = "none";
});

approveButton.addEventListener("click", () => {
  requestForm.style.display = "none";
  approveForm.style.display = "block";
});

async function updateVacationDays() {
  const days = await getVacationDays();
  vacationDays.textContent = days;
}

updateVacationDays();
setInterval(updateVacationDays, 5000);
