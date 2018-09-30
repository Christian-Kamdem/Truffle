var hello_world = artifacts.require('./test_contract.sol');
module.exports = function(deployer){
	deployer.deploy(hello_world);
}