// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VacationRequest {
address public manager;
mapping(address => uint) public requests;
mapping (address => uint) public requestCount;
mapping (address => bool) public whitelist;
uint public requestCountLimit = 10;

   constructor() {
    manager = msg.sender;
}

function requestVacation(uint _days) public {
    require(_days > 0, "Days must be greater than 0");
    require(requestCount[msg.sender] < requestCountLimit, "Too many requests");
    require(whitelist[msg.sender] == true, "Not authorized");
    requests[msg.sender] = _days;
    requestCount[msg.sender]++;
}

function approveVacation(address employee) public {
    require(msg.sender == manager, "Only the manager can approve vacations");
    uint _days = requests[employee];
    require(_days > 0, "No vacation request found for this employee");
    requests[employee] = 0;
    requestCount[employee]--;
}

function getVacationDays() public view returns (uint) {
    return requests[msg.sender];
}
}

