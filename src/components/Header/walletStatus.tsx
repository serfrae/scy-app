export const disConnectWallet = (provider:any) =>{
    localStorage.removeItem('loggedInToken');
	if(provider.provider === "phantom"){ provider.providerObject.disconnect();}
}

export const  walletStatus = (localStorage.getItem('loggedInToken') !== null && localStorage.getItem('loggedInToken') !== 'null' )  ? true : false;

export const  provider_publicKey = (localStorage.getItem('provider_publicKey') !== null && localStorage.getItem('provider_publicKey') !== 'null' )  ? localStorage.getItem('provider_publicKey')  : false;