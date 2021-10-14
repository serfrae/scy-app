import React, { useEffect, useMemo,useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {Grid,Button,
  TextField
} from "@material-ui/core";
import useStyles from "./styles";
// @ts-ignore
import Wallet from '@project-serum/sol-wallet-adapter';
import {  clusterApiUrl } from '@solana/web3.js';


declare const window: any;

const Login = (props : RouteComponentProps) => {
  var classes = useStyles();
   var [loginValue] = useState("");
  var [passwordValue] = useState("");

  const network = clusterApiUrl('devnet');
  const [providerUrl] = useState('https://www.sollet.io');
  //const connection = useMemo(() => new Connection(network), [network]);

  const urlWallet = useMemo(() => new Wallet(providerUrl, network), [
    providerUrl,
    network,
  ]);


  const injectedWallet = useMemo(() => {
    try {
      return new Wallet(window.solana, network);
    } catch (e) {
      console.log(`Could not create injected wallet: ${e}`);
      return null;
    }
  }, [network]);


  const [selectedWallet, setSelectedWallet] = useState(injectedWallet);
  const [, setConnected] = useState(false);

  useEffect(() => {
if(selectedWallet !== undefined){
    if (selectedWallet) {
      selectedWallet.on('connect', () => {
        setConnected(true);
        console.log('connected')
        // addLog('Connected to wallet ' + selectedWallet.publicKey.toBase58());
      });
      selectedWallet.on('disconnect', () => {
        setConnected(false);
        // addLog('Disconnected from wallet');
        console.log('disconnected')
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







  return (
    <Grid container className={classes.root}>
   
     
            <React.Fragment>
             
                <TextField
                id="email"
                value={loginValue}
                margin="normal"
                placeholder="Username"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                value={passwordValue}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className="">
                 <Button
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
              </div>

              <div className="">
                 <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => setSelectedWallet(urlWallet)}
                    // onClick={()=>alert("hello")}
                  >
                    Login With urlWallet
                  </Button>
              </div>
              <div className="">
                 <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => setSelectedWallet(injectedWallet)}
                    // onClick={()=>alert("hello")}
                  >
                    Login with injectedWallet
                  </Button>
              </div>
              <div className="">
                 <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => alert(1)}
                    // onClick={()=>alert("hello")}
                  >
                    Disconnect
                  </Button>
              </div>



            </React.Fragment>
      
    </Grid>
  );
}

export default withRouter(Login);