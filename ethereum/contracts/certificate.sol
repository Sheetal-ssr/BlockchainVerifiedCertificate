pragma experimental ABIEncoderV2;
pragma solidity ^0.4.25;

contract Certificate {
    
    struct Register{
        string firstName;
        string lastName;
        string aadharCardNumber;
        string eventName;
    } 
    
    
    address public manager;
    Register[] public register;
    mapping(bytes32 => bool) public generated;
    bytes32 public hash;
    uint public output;
    
    constructor() public {
        manager = msg.sender;
    }
    
    function registerNew(string fName,string lName,string AadharCardNumber, string eName) public returns(bytes32) {
        hash = keccak256(AadharCardNumber,fName,lName,eName);
        require(!generated[hash]);
        
        Register memory newRegister = Register({
            firstName: fName,
            lastName: lName,
            aadharCardNumber: AadharCardNumber,
            eventName: eName
        });
        
        
        generated[hash] = true;
        register.push(newRegister);
        
        return hash;
    }
    
    
    function validateByHash(bytes32 hashvalue) public returns(uint){
        if(generated[hashvalue]){
            output=1;
        }
        else{
            output=0;
        }
        return output;
    }
    
    function validateByDetails(string fName,string lName,string AadharCardNumber, string eName) public returns(uint){
        hash = keccak256(AadharCardNumber,fName,lName,eName);
        if(generated[hash]){
            output = 1;
        }
        else{
            output = 0;
        }
        return output;
    }
    
    
    function getSummary() public view returns(Register[]) {
        return register;
    }
    
}
