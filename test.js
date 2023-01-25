// this file is a template for unit testing smart contract in js
// for testing you need first to import you contract, make attention to the name of your contracts


// here we import our contracts
const contractname = artifacts.require("contractname"); 
const contractname2 = artifacts.require("contractname2"); 

// here we define let to used them for catching revert
let tryCatch = require("./exceptions.js").tryCatch;
let errTypes = require("./exceptions.js").errTypes;

// then we create an instance of the contract that we want to test, let's say contractname2

contract("contractname2", accounts =>{

    //here we create accounts, basically addresses that can interact with uor contrcat for test puproses
    const user0 = accounts[0]; 
    const user1 = accounts[1];

    //so now we can implement a test
    // we gonna test if the contract deploys proprely
    it("Should deploy the contract", async ()=>{
        // contract1 doesn't have constructor arguments
        const contract1 = await contractname.new(); 
        // we check that it deploys properly
        assert.isTrue(contract1 != null, "contract1 deployement failed"); 
        // we do the same for contract 2 but with constructor arguments : 
        const contract2 = await contractname2.new(arg1, arg2)
        assert.isTrue(contract2 != null, "contract2 deployement failed"); 
    }); 

    // let say that we want to test function
    it("this function should work", async ()=>{
        // we deploy the contract
        const contract2 = await contractname2.new(arg1, arg2)
        assert.isTrue(contract2 != null, "contract2 deployement failed"); 
        // then we call the function
        const functionResult = contract2.function(arg1,arg2, {from : accounts[0]}); 
        // and we check that it worked properly 
        // to do this we look at the receipt, which is at JSON format and look for status
        // status is a bool that is True if the execution run ok 
        assert.isTrue(functionResult.receipt.status, "function failed")

    }); 

    // let's say that we want to check that a function call revert properly
    // this can be usefull to check that only allowed address can mint or do a thing

    it("this function should revert", async ()=>{
        //we deploy the contract
        const contract2 = await contractname2.new(arg1, arg2)
        assert.isTrue(contract2 != null, "contract2 deployement failed"); 

        // and then we catch the revert
        await tryCatch(contract2.revertfunction(arg1, {from: accounts[0]}), errTypes.revert);
    }); 

    // if we want to test the balance of an address, there is a specific way to do it
    it("balance shoud be > 0", async ()=>{
        const contract1 = await contractname.new(); 
        assert.isTrue(contract1 != null, "contract1 deployement failed"); 

        const contract2 = await contractname2.new(arg1, arg2)
        assert.isTrue(contract2 != null, "contract2 deployement failed"); 
        
        const balance = await contract1.balanceOf.call(contract2.address); 
        // we have to use big number comparator, gt, eq, lt
        assert.isTrue(balance.gt(0), "balance is 0"); 
    });

})