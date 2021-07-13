export const disConnectWallet = () =>{
    localStorage.removeItem('loggedInToken');
    console.log(localStorage.getItem('loggedInToken'));
}
console.log(localStorage.getItem('loggedInToken'));
export const  walletStatus = (localStorage.getItem('loggedInToken') !== null && localStorage.getItem('loggedInToken') !== 'null' )  ? true : false;
