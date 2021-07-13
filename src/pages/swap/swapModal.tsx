import { Typography,Button,DialogContentText,DialogTitle,Dialog} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../dashboard/styles";
import ethIcon from '../../assets/icon/eth.svg';
import digibyteIcon from '../../assets/icon/digibyte.svg';
import GcheckIcon from '../../assets/icon/Gcheck.svg';
import dropDIcon from '../../assets/icon/drop.svg';
import rightIcon from '../../assets/icon/right.svg';
import lineIcon from '../../assets/icon/line.svg';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
const SwapModal = (props: any) => {
const classes = useStyles();
const [startSwapping,setStarSwapping]= useState(false);
const [startInProgress,setStartInProgress]= useState(false);
const [successTransaction,setSuccessTransaction]= useState(false);

const handleClose = () => {
    props.setOpen(false);
};
const setStarSwappingCurrency = (type:any)=>{
setStarSwapping(type);
setTimeout(() =>setStartInProgress(true), 2000);
setTimeout(() =>setSuccessTransaction(true), 6000);
}


return (
   <Dialog
      open={props.open}
      onClose={handleClose}
      className={classes.modalDialog}>
       <div className={classes.modelhead}>
        <DialogTitle > {startSwapping === false  && <>Confirm</> } Swap</DialogTitle>
        <CloseIcon onClick={()=>{props.setOpen(false)}}/>
       </div>
      <MuiDialogContent className={classes.swapModel}>
        <DialogContentText>
       { successTransaction === false   ?
       <>  <div className={classes.calcswap}>
           <div className={classes.innercalc}>
             <img src={ethIcon} alt=""/>
             <Typography>0.608245</Typography>
           </div>
           <div className={classes.innerethcalc}><Typography>ETH</Typography></div>
        </div>
        <div className={classes.downcalc}>
           <img src={dropDIcon} alt="" />
        </div>
        <div className={classes.calcswap}>
           <div className={classes.innercalc}>
             <img width={24} src={digibyteIcon} alt=""/>
             <Typography>10.00</Typography>
           </div>
           <div className={classes.innerethcalc}><Typography>DIGIBYTE</Typography></div>
        </div>
        {(startSwapping === false ) ? <>
        <Typography className={classes.notecalc}>Input is estimated. You will sell at most 0.608245 ETH or the transaction will revert.</Typography>
        
         <div className={classes.confirmSwap}>
         <div className={classes.swapbalancemodel}>
                <div className={classes.swapbalanceChild}>
                <Typography>Price</Typography>
                <Typography>Maximum sold</Typography>
                <Typography>Price Impact</Typography>
                <Typography>Liquidity Provider Fee</Typography>
                </div>
                <div className={classes.swapbalanceChild2}>
                <Typography>16.4409 DIGIBYTE / ETH</Typography>
                <Typography>0.6112 ETH</Typography>
                <Typography>0.01%</Typography>
                <Typography>0.00018 ETH</Typography>
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
    
)
}
export default SwapModal;