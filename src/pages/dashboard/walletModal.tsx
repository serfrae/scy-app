import React, { useState , useMemo,useEffect} from "react";
import useStyles from "./styles";
import CloseIcon from '@material-ui/icons/Close';
import {Button, Dialog,Typography,DialogTitle,Chip}  from '@material-ui/core';
import List from '@material-ui/core/List';
import MuiDialogContent from '@material-ui/core/DialogContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Sollet from '../../assets/icon/image 2.svg';
import Phantom from '../../assets/icon/image 1.svg';
import SolFlare from '../../assets/icon/icon.svg';
import Mathwallet from '../../assets/icon/image 3.svg';
import LedgerIcon from '../../assets/icon/ledger.svg';
import bonfidaIcon from '../../assets/icon/bonfida.svg';
import {
  Connection,
  PublicKey,
  Transaction,
  clusterApiUrl
} from "@solana/web3.js";

// @ts-ignore
import Wallet from '@project-serum/sol-wallet-adapter';


declare const window: any;
type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";
interface ConnectOpts {
  onlyIfTrusted: boolean;
}
interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  autoApprove: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<void>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<any>;
}
const getProvider = (): PhantomProvider | undefined => {
	  if ("solana" in window) {
		const provider = (window as any).solana;
		if (provider.isPhantom) {
		  return provider;
		}
	  }
	  window.open("https://phantom.app/", "_blank");
	};
export default function WalletModal(props:any) {
  const classes = useStyles();
  const provider = getProvider();

  //wallet
 
  const network = clusterApiUrl('devnet');
  const [providerUrl ] = useState('https://www.sollet.io');
  const [providerUrlPhantom ] = useState('https://phantom.app/');
    //phantom wallet
  //const isPhantomInstalled = window.solana && window.solana.isPhantom
  const connection = useMemo(() => new Connection(network), [network]);
  const injectedWallet = useMemo(() => {
        try {
          return new Wallet(window.solana, network);
        } catch (e) {
          console.log(`Could not create injected wallet: ${e}`);
          return null;
        }
      }, [network]);
   const [selectedWallet, setSelectedWallet] = useState({wallet:injectedWallet, status:false,type:''});

  const urlWallet = useMemo(() => new Wallet(providerUrl, network), [
     providerUrl,
     network,
   ]);


   //phantom wallet
   const phantomWallet = useMemo(() => new Wallet(providerUrlPhantom, network), [
    providerUrlPhantom,
    network,
  ]);
	const phantomWalletTrigger = (walletObj:any)=>{
		//if(walletObj.type === "phantom" && provider){alert(provider.publicKey);}
	   if(walletObj.type === "phantom" && provider){ 
			 provider.connect();
			 object.setOpen(false);
			 //console.log(provider.publicKey,'provider.publicKey');
			  props.setConnectedWalletType({provider:'phantom',providerObject:provider})
			  provider.on("connect", () => {
				  let key = provider.publicKey?.toBase58();
				  
				   if(key && key !== null){
					    object.setWalletConnected(true);
						localStorage.setItem('loggedInToken', (key).toString());
				   }
					console.log("Connected to wallet " + provider.publicKey?.toBase58());
				});
			
			 return;
		 }
	   else{setSelectedWallet(walletObj)}
	}
	
	
   const object = props;
   useEffect(() => {
	   if(selectedWallet.status === false){ return ;}
	  
        if(selectedWallet.wallet !== undefined){
            if (selectedWallet.wallet) {
              selectedWallet.wallet.on('connect', () => {
				  
                //setConnected(true);
                console.log('connected',selectedWallet.wallet.publicKey.toBase58())
                let  blockhash = connection.getRecentBlockhash();
                // console.log(blockhash,"Toke connected")
                localStorage.setItem('loggedInToken', selectedWallet.wallet.publicKey.toBase58());
              // console.log(selectedWallet.publicKet.toBase58())
                object.setOpen(false)
                object.setWalletConnected(true);
				 object.setConnectedWalletType({provider:'salona',providerObject:blockhash})
                // window.opener.postMessage({
                //   jsonrpc: '2.0',
                //    method: 'connected',
                //    params: {publicKey: selectedWallet.publicKey.toBase58()}}, 'http://localhost:3000/')
                // addLog('Connected to wallet ' + selectedWallet.publicKey.toBase58());
              });
              selectedWallet.wallet.on('disconnect', () => {
                 console.log('disconnected')
                 //localStorage.removeItem('loggedInToken');
              });
              selectedWallet.wallet.connect();
              return () => {
                selectedWallet.wallet.disconnect();
              };
            }
          }else{
            console.log('selectedwallet is undefined')
          }
          }, [selectedWallet,object,connection]);






   return (
      <Dialog 
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modalDialog}
        open={props.open}
        onClose={()=>{props.setOpen(false)}}
      >   <div className={classes.modelhead}>
          <DialogTitle id="simple-dialog-title">Connect to your Solona wallet</DialogTitle>
          <CloseIcon onClick={()=>{props.setOpen(false)}}/>
          </div>
          <MuiDialogContent>
                <List component="nav" aria-label="main mailbox folders" className={classes.modelbody}>
                        <ListItem button onClick={()=>setSelectedWallet({wallet:urlWallet, status:true,type:'salona'})}>
                        <ListItemText primary="Sollet" />
                        <ListItemIcon>
                                <img src={Sollet} alt=""/>
                        </ListItemIcon>
                        </ListItem>
                        <ListItem button onClick={()=>phantomWalletTrigger({wallet:phantomWallet, status:true,type:'phantom'})}>
                        <ListItemText primary="Phantom" />
                        <ListItemIcon>
                                <img src={Phantom} alt=""/>
                        </ListItemIcon>
                        </ListItem>
                        <ListItem button>
                        <ListItemText primary="SolFlare" />
                        <ListItemIcon>
                                <img src={SolFlare} alt=""/>
                        </ListItemIcon>
                        </ListItem>
                        <ListItem button>
                        <ListItemText primary="Mathwallet" />
                        <ListItemIcon>
                                <img src={Mathwallet} alt=""/>
                        </ListItemIcon>
                        </ListItem>
                        <ListItem button>
                        <ListItemText primary="Ledger"  />
                        <Chip label="Comming Soon"/>
                        <ListItemIcon>
                                <img src={LedgerIcon} alt=""/>
                        </ListItemIcon>
                        </ListItem>
                        <ListItem button>
                        <ListItemText primary="Bonfida" />
                        <Chip label="Comming Soon"/>
                        <ListItemIcon>
                                <img src={bonfidaIcon} alt=""/>
                        </ListItemIcon>
                        </ListItem>
                </List>
        </MuiDialogContent>
      <div className={classes.modelfooter}>
      <Typography className={classes.brfullbtn}>
      Browse without connecting
      </Typography>
         <Typography className={classes.modelfooterlink}>
              Don't have a Solana wallet?
              <Button>Create a new wallet</Button>
        </Typography>
      </div>
      </Dialog >
   );
}
