import { Container, Grid, Paper,IconButton,Typography,InputLabel,TextField,Button,Select,MenuItem,
         DialogActions,DialogContentText,DialogTitle,Dialog,FormControl,FormLabel,
         RadioGroup,Radio,FormControlLabel} from "@material-ui/core";
import React, { useState,useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/footer';
import useStyles from "../dashboard/styles";
import ethIcon from '../../assets/icon/eth.svg';
import swipeimgIcon from '../../assets/icon/swipeP.svg';
import digibyteIcon from '../../assets/icon/digibyte.svg';
import GcheckIcon from '../../assets/icon/Gcheck.svg';
import dropDIcon from '../../assets/icon/drop.svg';
import rightIcon from '../../assets/icon/right.svg';
import lineIcon from '../../assets/icon/line.svg';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import InfoTooltip from "./InfoTooltip";
import WalletModal from '../../pages/dashboard/walletModal';
import {serumAPI} from '../../api/api';
const SwapPool = (props: any) => {
	const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openWallet, setOpenWallet] = React.useState(false);
  const [openSettings, setSettingsOpen] = React.useState(false);
  const [sendMoney,setMoney]= useState(0.0); 
  const [recMoney,setRecMoney]= useState(0.0); 
  const [walletConnected]= useState(true);
  const [startSwapping,setStarSwapping]= useState(false);
  const [startInProgress,setStartInProgress]= useState(false);
  const [successTransaction,setSuccessTransaction]= useState(false);
  const [sendCurrency,setSendCurrency]= useState('SOL');
  const [recCurrency,setRecCurrency]= useState('0');
  const [recCurrencyList,setRecCurrencyList]= useState([]);
  const [currencyList,setCurrencyList]= useState({});

const [price,setPrice] = useState("0")
const [balance , setBalance] = useState(0)
const [CurrencyConversionSend,setCurrencyConversionSend]=useState(0);
const [CurrencyConversionRecieve,setCurrencyConversionRecieve] = useState(0);


  const handleClickOpen = (money:any) => {
    setOpen(true);
    setStarSwapping(false)
    setStartInProgress(false)
    setSuccessTransaction(false);
console.log(sendMoney + " "+ recMoney + ""+ sendCurrency + ""+recCurrency )

// https://serum-api.bonfida.com/trades/ETHUSDT
/*Serumget all pairs api integration*/
console.log(serumAPI+'trades/'+sendCurrency+recCurrency)
fetch(serumAPI+'trades/'+sendCurrency+recCurrency)
      .then(response => response.json())
      .then(data => {
         if(data !== "undefined"){

            console.log("All pairs data",data.data[0])
var priceData= data.data[0].price+" "+data.data[0].market
console.log(priceData)
           setPrice(priceData)
            }
         }
      )
/*Serumget all pairs api integration*/


/*Salona acount check api integration*/
const data = localStorage.getItem('loggedInToken');
console.log("called",data)
      fetch('https://api.devnet.solana.com/', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
          "jsonrpc":"2.0",
          "id":1,
           "method":"getBalance", 
           "params":[data]}
         )
        }).then(response => response.json())
        .then(data => {
           console.log(data.result.value)
           setBalance(data.result.value)
           if(sendMoney > data.result.value){
              alert("Insufficient Balance in your account")
           }
        })
/*Salona acount check api integration*/

  };



  const setReceiveMoney =  (money:any)=>{
    setRecMoney(money);
    
   
   }
  const setSendMoney = (money:any)=>{
      setMoney(money);
  }
  const setRecCurrencyData = (currency:any)=>{
   setRecCurrency(currency);

}
  
  const handleClose = () => {
    setOpen(false);
  };
  const setStarSwappingCurrency = (type:any)=>{
   setStarSwapping(type);
   setTimeout(() =>setStartInProgress(true), 2000);
   setTimeout(() =>setSuccessTransaction(true), 6000);
  }
  const [value, setValue] = React.useState('0.1%');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const setSendCurrencyData = (currency:any) =>{
   setSendCurrency(currency);
   setRecCurrencyList(currencyList[currency]);
   //console.log("currencyList[currency]",currencyList[currency]);
  }
   useEffect(() => {
      fetch(serumAPI+'pairs')
      .then(response => response.json())
      .then(data => {
         if(data !== "undefined"){
            let currency = {};
            for(let i = 0; i<data.data.length;i++){
               let splitCurr = data.data[i].split("/");
               
               if(currency[splitCurr[0]] === undefined){
                  currency[splitCurr[0]] = [];
               }
               currency[splitCurr[0]].push(splitCurr[1])
            }
            setCurrencyList(currency);
         }
      });
    }, []);


const handleConversion =(money:any)=>{

   // if(e.target != undefined){
      console.log(money+""+sendCurrency.toLowerCase()+""+recCurrency.toLowerCase())
      setSendMoney(money)
      

      fetch(`https://api.coingecko.com/api/v3/simple/price?ids=serum,bonfida,bitcoin,solana,raydium&vs_currencies=${sendCurrency.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
         console.log(data)
         setCurrencyConversionSend(data.serum.btc)
      }
         )


         fetch(`https://api.coingecko.com/api/v3/simple/price?ids=serum,bonfida,bitcoin,solana,raydium&vs_currencies=${recCurrency.toLowerCase()}`)
         .then(response => response.json())
         .then(data => {
            console.log(data)
            setCurrencyConversionRecieve(data.serum.btc)
         }
            )


            if(CurrencyConversionSend != 0 && CurrencyConversionRecieve!= 0){
               var dataConverted = (CurrencyConversionSend/CurrencyConversionRecieve)

               setReceiveMoney(dataConverted)
            }


}


	return (
		<div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         <Container fixed>
         <Paper className={classes.swapmainbox}>
         <Grid className={classes.welcomeContent}>
         <Grid item xs={6}>
            <Paper className={classes.paper}>
            <div>
               <div className={classes.swaphead}>
                  <Typography>Swap</Typography>
                  <div className={classes.icongroup}>
                     <IconButton className={"infoTooltip"}><InfoOutlinedIcon/></IconButton>
                        <div className={"infotooltipbox"}> <InfoTooltip {...props}/></div>
                     <IconButton onClick={()=>{setSettingsOpen(true)}}><SettingsOutlinedIcon/></IconButton>
                  </div>
               </div>
               <div className={classes.swapboxed}>
                   <div className={classes.fromGroup}>
                     <InputLabel>
                     Send 
                     </InputLabel>
                     <div className={classes.frominside}>
                     <TextField
                     type="number"
                     onChange={(e)=>{handleConversion(e.target.value)}}
                     value={sendMoney}
                     placeholder={"0.00"}
                     />
                  
                     <Select
                      value={sendCurrency}
                      onChange={(e)=>{setSendCurrencyData(e.target.value)}}
                     >
                        {(currencyList) && Object.keys(currencyList).map((obj,index)=>(
                           <MenuItem value={obj} key={index}><img src={ethIcon} alt="" /> {obj}</MenuItem>
                        ))}
                     </Select>
                     </div>
                     <small>Balance: - {balance}</small>
                  </div>
                  <div className={classes.swipeBtn}><img src={swipeimgIcon} alt=""/></div>
                  <div className={classes.fromGroup}>
                     <InputLabel>
                     Receive
                     </InputLabel>
                     <div className={classes.frominside}>
                     <TextField
                     type="number"
                     placeholder={'0.00'}
                     value={recMoney}
                     onChange={(e)=>{setReceiveMoney(e.target.value)}}
                     />
                     <Select
                     value={recCurrency}
                     onChange={(e)=>{setRecCurrencyData(e.target.value)}}
                     >
                     <MenuItem value={'0'}>Select a Token</MenuItem>
                     {recCurrencyList.length > 0 && recCurrencyList.map((obj,index)=>(
                        <MenuItem value={obj} key={index}> <img src={digibyteIcon} alt=""/>{obj}</MenuItem>
                     ))}
                   
                     </Select>
                     </div>
                     <small>Balance: {recMoney}</small>
                  </div>
                  <div className={classes.btnGroup}>
                     { walletConnected === false && <> 
                        <Button  onClick={()=>{setOpenWallet(true)}}>Connect Wallet</Button>
                         <Typography>Unlock all the features by connecting your wallet.</Typography>
                        </>
                      } 
                  { walletConnected === true &&   <> { (sendMoney !== 0 && recMoney !== 0) ?
                            <>   <Button  onClick={handleClickOpen}>Swap</Button>
                             <div className={classes.swapbalance}>
                                 <div className={classes.swapbalanceChild}>
                                 <Typography>Price</Typography>
                                 <Typography>Maximum sold</Typography>
                                 <Typography>Price Impact</Typography>
                                 <Typography>Liquidity Provider Fee</Typography>
                                 </div>
                                 <div className={classes.swapbalanceChild2}>
                  <Typography>{price}</Typography>
                  <Typography>{`${sendMoney} ${sendCurrency}`}</Typography>
                                 <Typography>0.01%</Typography>
                  <Typography>{`0.00018 ${sendCurrency}`}</Typography>

                                 </div>
                              </div>
                             </>
                           :
                           <Button onClick={handleClickOpen}>Enter an amount to swap</Button>  
                      } </> }
                     
                  </div>
                 
               </div>
            </div>
            </Paper>
			</Grid>
			</Grid>
         </Paper>
         </Container>
         <Dialog
           open={openSettings}
           onClose={()=>{setSettingsOpen(false)}}
           className={classes.modalDialog}>
           <div className={classes.settingPop}>
            <div className={classes.modelhead}>
             <DialogTitle> Settings </DialogTitle>
             <CloseIcon onClick={()=>{setSettingsOpen(false)}}/>
            </div>
           <MuiDialogContent className={classes.swapModel}>
             <DialogContentText>
                <FormControl>
                <FormLabel>Slippage tolerance</FormLabel>
                 <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="0.1%" control={<Radio />} label="0.1%" />
                    <FormControlLabel value="0.5%" control={<Radio />} label="0.5%" />
                    <FormControlLabel value="1%" control={<Radio />} label="1%" />
                    <div className={classes.customTol}>
                    <TextField placeholder="1.00" />
                    <span>%</span>
                 </div>
                 </RadioGroup>
                </FormControl>
             </DialogContentText>
             <DialogActions>
              <Button onClick={()=>{setSettingsOpen(false)}}  aria-label="outlined primary button group">
                Cancel
              </Button>
              <Button onClick={()=>{setSettingsOpen(false)}}  color="primary">
                Confirm
              </Button>
            </DialogActions>
            </MuiDialogContent>
            </div>
         </Dialog>    
         <Dialog
           open={open}
           onClose={handleClose}
           className={classes.modalDialog}>
            <div className={classes.modelhead}>
             <DialogTitle > {startSwapping === false  && <>Confirm</> } Swap</DialogTitle>
             <CloseIcon onClick={()=>{setOpen(false)}}/>
            </div>
           <MuiDialogContent className={classes.swapModel}>
             <DialogContentText>
            { successTransaction === false   ?
            <>  <div className={classes.calcswap}>
                <div className={classes.innercalc}>
                  <img src={ethIcon} alt=""/>
            <Typography>{sendMoney}</Typography>
                </div>
            <div className={classes.innerethcalc}><Typography>{sendCurrency}</Typography></div>
             </div>
             <div className={classes.downcalc}>
                <img src={dropDIcon} alt="" />
             </div>
             <div className={classes.calcswap}>
                <div className={classes.innercalc}>
                  <img width={24} src={digibyteIcon} alt=""/>
            <Typography>{recMoney}</Typography>
                </div>
            <div className={classes.innerethcalc}><Typography>{recCurrency}</Typography></div>
             </div>
             {(startSwapping === false ) ? <>
             <Typography className={classes.notecalc}>{`Input is estimated. You will sell at most ${sendMoney} ${sendCurrency} or the transaction will revert.`}</Typography>
             
              <div className={classes.confirmSwap}>
              <div className={classes.swapbalancemodel}>
                     <div className={classes.swapbalanceChild}>
                     <Typography>Price</Typography>
                     <Typography>Maximum sold</Typography>
                     <Typography>Price Impact</Typography>
                     <Typography>Liquidity Provider Fee</Typography>
                     </div>
                     <div className={classes.swapbalanceChild2}>
             <Typography>{price}</Typography>
             <Typography>{`${sendMoney} ${sendCurrency}`}</Typography>
                     <Typography>0.01%</Typography>
                     <Typography>{`0.00018 ${sendCurrency}`}</Typography>
                     </div>  
                     <Button className={classes.fullPrimarybtn} onClick={()=>{setStarSwappingCurrency(true)}}>Confirm Swap</Button>
                  </div>
              </div> </>
               :

              <div className={classes.loadingSwap}>

                <div className={classes.customloader}>
                   <div className={classes.customloaderbox}></div>
                   <img src={lineIcon} alt=''/>
                </div>
                {startInProgress === false ? 
                   <Typography>Please confirm this transaction in your wallet</Typography>
                  :
                 <> 
                <Typography>Transaction in progress</Typography>
                <Typography className={classes.notecalc}>It might take a few seconds, please be patient.</Typography>
                </>
               }
             </div>
            }
           </> 
               :
              <div className={classes.swapLaststeap}>
                 <img src={GcheckIcon} alt="" />
                 <Typography>Transaction Confirmed</Typography>
                 <div className={classes.lastCalcswap}>
                    <Typography><img src={ethIcon} alt=""/> 0.608245 ETH</Typography>
                    <img src={rightIcon} alt=""/>
                    <Typography><img width={24} src={digibyteIcon} alt=""/>10.00 DIGIBYTE</Typography>
                 </div>
              </div>
               }
             </DialogContentText>
           </MuiDialogContent>
         </Dialog>
         <WalletModal 
            open ={openWallet}
            setOpen = {setOpenWallet}
         />
         <Footer {...props}/>
      </div>
	)
}
export default SwapPool;