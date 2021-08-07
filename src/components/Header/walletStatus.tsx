export const disConnectWallet = (provider:any) =>{
    localStorage.removeItem('loggedInToken');
    console.log(localStorage.getItem('loggedInToken'));
	if(provider.provider === "phantom"){ alert(1); provider.providerObject.disconnect();}
}
console.log(localStorage.getItem('loggedInToken'));
export const  walletStatus = (localStorage.getItem('loggedInToken') !== null && localStorage.getItem('loggedInToken') !== 'null' )  ? true : false;
