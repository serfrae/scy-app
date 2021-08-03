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


// @ts-ignore
import Wallet from '@project-serum/sol-wallet-adapter';
import { Connection,  clusterApiUrl } from '@solana/web3.js';

declare const window: any;
export default function WalletModal(props:any) {
  const classes = useStyles();


  //wallet
 
  const network = clusterApiUrl('devnet');
  const [providerUrl ] = useState('https://www.sollet.io');
  const [providerUrlPhantom ] = useState('https://phantom.app/');
    //phantom wallet
  const isPhantomInstalled = window.solana && window.solana.isPhantom
  const connection = useMemo(() => new Connection(network), [network]);
  const injectedWallet = useMemo(() => {
        try {
          return new Wallet(window.solana, network);
        } catch (e) {
          console.log(`Could not create injected wallet: ${e}`);
          return null;
        }
      }, [network]);
   const [selectedWallet, setSelectedWallet] = useState(injectedWallet);

  const urlWallet = useMemo(() => new Wallet(providerUrl, network), [
     providerUrl,
     network,
   ]);


   //phantom wallet
   const phantomWallet = useMemo(() => new Wallet(providerUrlPhantom, network), [
    providerUrlPhantom,
    network,
  ]);



   const object = props;
   useEffect(() => {
        if(selectedWallet !== undefined){
            if (selectedWallet) {
              selectedWallet.on('connect', () => {
                //setConnected(true);
                console.log('connected',selectedWallet.publicKey.toBase58())
                let  blockhash = connection.getRecentBlockhash();
                // console.log(blockhash,"Toke connected")
                localStorage.setItem('loggedInToken', selectedWallet.publicKey.toBase58());
              // console.log(selectedWallet.publicKet.toBase58())
                object.setOpen(false)
                object.setWalletConnected(true);
                // window.opener.postMessage({
                //   jsonrpc: '2.0',
                //    method: 'connected',
                //    params: {publicKey: selectedWallet.publicKey.toBase58()}}, 'http://localhost:3000/')
                // addLog('Connected to wallet ' + selectedWallet.publicKey.toBase58());
              });
              selectedWallet.on('disconnect', () => {
                 console.log('disconnected')
                 //localStorage.removeItem('loggedInToken');
              });
              selectedWallet.connect();
              return () => {
                selectedWallet.disconnect();
              };
            }
          }else{
            console.log('selectedwallet is undefined')
          }
          }, [selectedWallet]);


          const getProvider = () => {
            if ("solana" in window) {
              const provider = window.solana;
              if (provider.isPhantom) {
                return provider;
              }
            }
            window.open("https://phantom.app/", "_blank");
          };




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
                        <ListItem button onClick={()=>setSelectedWallet(urlWallet)}>
                        <ListItemText primary="Sollet" />
                        <ListItemIcon>
                                <img src={Sollet} alt=""/>
                        </ListItemIcon>
                        </ListItem>
                        <ListItem button onClick={()=>setSelectedWallet(phantomWallet)}>
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
