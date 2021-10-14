import React, { FC, useCallback, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    getLedgerWallet,
    getPhantomWallet,
    getSlopeWallet,
    getSolflareWallet,
    getSolletExtensionWallet,
    getSolletWallet,
    getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,

    WalletMultiButton,
 
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';

import useStyles from "../../pages/dashboard/styles";
// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

 const LoginButton: FC = () => {
    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = WalletAdapterNetwork.Mainnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
    // Only the wallets you configure here will be compiled into your application
    const wallets = useMemo(() => [
        getPhantomWallet(),
        getSlopeWallet(),
        getSolflareWallet(),
        getTorusWallet({
            options: { clientId: 'Get a client ID @ https://developer.tor.us' }
        }),
        getLedgerWallet(),
        getSolletWallet({ network }),
        getSolletExtensionWallet({ network }),
    ], [network]);
   
    return (
       
                <WalletModalProvider>
                    <WalletDisconnectButton2/>
                    
                   </WalletModalProvider>
          
    );
};


export default LoginButton;

export const WalletDisconnectButton2 = () => {
    const classes = useStyles();
    //var { children, disabled, onClick } =  props = (["children", "disabled", "onClick"]);
    const { wallet, disconnect, disconnecting,connected,publicKey,connecting,connect } = useWallet();
    const handleClick = useCallback((event) => {
        console.log(connected);
        if (!event.defaultPrevented)
            disconnect().catch(() => { });
            
    }, [disconnecting, wallet,connected,disconnect,connecting,connect]);
    const handleClickCoonect  = useCallback(
        (event) => {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            if (!event.defaultPrevented) connect().catch(() => {});
        },
        [connect]
    );
    const content = useMemo(() => {
		console.log("account---",connected);
        connect().catch((e) => { console.log(e.message) });
        const base58 =  publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58();
        console.log("publicKey",base58)
        if (connected === false)
          return 'Disconnect';
        if (wallet){
           
            return 'Disconnect';
        }else{   
            
            return 'Disconnect Wallet';
        }
    }, [disconnecting, wallet,connected,disconnect,connecting,connect]);
    return (<>{connected !== false ? <button className={classes.disconnectBtn} onClick={handleClick}>{content}</button> : <WalletMultiButton className={classes.connectBtn} />} </>);
};