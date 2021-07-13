import React,{useState} from "react";
import useStyles from "../dashboard/styles";
import CloseIcon from '@material-ui/icons/Close';
import swipeIcon from '../../assets/icon/swipe.svg';
import ethIcon from '../../assets/icon/eth.svg';
import swipeimgIcon from '../../assets/icon/swipeP.svg';
import waxtIcon from '../../assets/icon/WAX.svg';
import GcheckIcon from '../../assets/icon/greenCheck.svg';
import GrcheckIcon from '../../assets/icon/Gcheck.svg';
import flashIcon from '../../assets/icon/icon1.svg';
import CryIcon from '../../assets/icon/icon2.svg';
import bitIcon from '../../assets/icon/icon3.svg';
import XemIcon from '../../assets/icon/icon4.svg';
import lineIcon from '../../assets/icon/line.svg';
import {Drawer,Tab,Tabs,AppBar,Typography,Box,TextField,InputLabel,Button,
        Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,List,ListItem}   from '@material-ui/core';
import SwapModal from "./swapModal";
const SwapSubscribe = (props: any) => {
	const [value, setValue] = React.useState(0);
	const [open, setOpen] = React.useState(false);
	const[walletConnected,setWalletConnected] = useState(false);
	const[enterAmount,setEnterAmount] = useState(false);
	const[swapCreate,setSwapCreate] = useState(false);
	const[convertedSuccess,setConvertedSuccess] = useState(false);
	const[startConverting,setSartConverting] = useState(false);
	const[swapModalOpen,setSwapModalOpen]= useState(false);
	const classes = useStyles();
    interface TabPanelProps {
		children?: React.ReactNode;
		index: any;
		value: any;
	  }
	 
	  const statrConvesion = () =>{
		setSartConverting(true);
		setTimeout(() =>setConvertedSuccess(true), 6000);
	  }
	  function TabPanel(props: TabPanelProps) {
		const { children, value, index, ...other } = props;
	  
		return (
		  <div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		  >
			{value === index && (
			  <Box p={3}>
				<Typography  component={"div"}>{children}</Typography>
			  </Box>
			)}
		  </div>
		);
	  }
	  function a11yProps(index: any) {
		
		return {
		  id: `simple-tab-${index}`,
		  'aria-controls': `simple-tabpanel-${index}`,
		};
	  }
	  
	  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		handleClose();	
		setValue(newValue);
	  };
	    
	const setEnterAmountManual = ()=>{
		setEnterAmount(true);
		setSwapCreate(true);
	}
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
   		 setOpen(false);
		setWalletConnected(false);
		setEnterAmount(false);
		setConvertedSuccess(false);
		setSwapCreate(false);
		setSartConverting(false);
		
  };
	return (
		<React.Fragment  key={'right'} >
    	  	<Drawer className={classes.drawerSlider} anchor={'right'} open={props.state} onClose={(e)=>{props.toggleDrawer(false,e)}}>    
				<div className={classes.drawerhead}>Subscribe <CloseIcon  onClick={(e)=>{props.toggleDrawer(false,e)}}/></div>
				<div className={classes.tabssection}>
					<AppBar position="static">
						<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
							<Tab label="Create" {...a11yProps(0)} />
							<Tab label="Redeem" {...a11yProps(1)} />
							<Tab label="Swap" {...a11yProps(2)} />
						</Tabs>
					</AppBar>
					<TabPanel value={value} index={0}>
						 <div className={classes.fromGroup}>
							<InputLabel>
							Receive
							</InputLabel>
							<div className={classes.frominside}>
							<TextField
							type="number"
							placeholder={'0.00'}
							/>
							<Typography className={classes.labelImg}><img src={ethIcon} alt="" />ETH</Typography>
							</div>
							<small>Balance: 0.00</small>
						</div>
						<div className={classes.assetform}>
							<InputLabel>
								Froms
							</InputLabel>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={waxtIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
								<small className={classes.redError}>Insufficient balance</small>
							</div>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={GcheckIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
							</div>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={flashIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
								<small className={classes.redError}>Insufficient balance</small>
							</div>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={CryIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
							</div>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={bitIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
							</div>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={XemIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
							</div>

						</div>
						<div className={classes.btnGroup}>
						{walletConnected === false && 
						<><Button  onClick={()=>{setWalletConnected(true)}}>Connect Wallet</Button>
							<Typography className={classes.asseetNote}>Unlock all the features by connecting your wallet.</Typography>
						</>}	
						</div>
						{ (walletConnected === true && enterAmount === false) && 
							<><Button className={classes.cmnBtn}  onClick={()=>{setEnterAmountManual()}}>Enter an Amount</Button></>
						}
						{ swapCreate === true && 
							<><Button className={classes.cmnBtn}  onClick={handleClickOpen}>Swap and Create</Button>
							<div className={classes.swapUsdc}>
								<Typography>
								Swap USDC {'->'} Asset name
								<span>0.01823 USDC</span>
								</Typography>
								<Typography>
								Swap USDC {'->'} Asset name
								<span>0.11843 USDC</span>
								</Typography>
							</div>
							</>
						}
					</TabPanel>
					<TabPanel value={value} index={1}>
					  <div className={classes.fromGroup}>
							<InputLabel>
							Receives
							</InputLabel>
							<div className={classes.frominside}>
							<TextField
							type="number"
							placeholder={'0.00'}
							/>
							<Typography className={classes.labelImg}><img src={ethIcon} alt="" />ETH</Typography>
							</div>
							<small className={classes.redError}>Insufficient balance</small>
						</div>
						<div className={classes.assetform}>
							<InputLabel>
								Froms
							</InputLabel>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={waxtIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
								
							</div>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={GcheckIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
							</div>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={flashIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
								
							</div>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={CryIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
							</div>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={bitIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
							</div>
							<div className={classes.assetgroup}>
								<div className={classes.frominside}>	
									<span className={classes.assetLable}><img src={XemIcon} alt=""/> Asset name</span>
									<TextField
									type="number"
									placeholder={'0.00'}
									/>
								</div>
							</div>

						</div>
						<div className={classes.btnGroup}>
						 { walletConnected === false &&	<Button onClick={()=>{setWalletConnected(true)}}>Connect Wallet</Button> }
						 { (walletConnected === true && enterAmount === false) &&	<Button onClick={()=>{setEnterAmount(true)}}>Enter an amount </Button> }
						 { (walletConnected === true && enterAmount === true) &&	<Button>Redeem</Button> }
						</div>
                     <div className={classes.separator30}></div>
					</TabPanel>
					<TabPanel value={value} index={2}>
						 <div className={classes.fromGroup}>
							<InputLabel>
							Send
							</InputLabel>
							<div className={classes.frominside}>
							<TextField
							type="number"
							placeholder={'0.00'}
							/>
							<Typography><img src={ethIcon} alt="" />ETH</Typography>
							</div>
							<small>Balance: 0.00</small>
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
							/>
							<Typography>Index_name</Typography>
							</div>
							<small>Balance: 0.00</small>
						</div>
						<div className={classes.btnGroup}>
						{ walletConnected === false &&	<><Button onClick={()=>{ setWalletConnected(true)}}>Connect Wallet</Button> <Typography>Unlock all the features by connecting your wallet.</Typography></> }
						{ walletConnected === true &&		<Button onClick={()=>{setSwapModalOpen(true)}}>Swap</Button> }
						{ walletConnected === true &&	
						<div className={classes.swapUsdc}>
								<Typography>
								Liquidity Provider Fee
								<span>0.01823 USDC</span>
								</Typography>
								
							</div>
						}
						</div>	
					</TabPanel>
				</div>
      		</Drawer>
			<SwapModal open ={swapModalOpen} setOpen={setSwapModalOpen}/>						
        	<Dialog
		        open={open}
		        onClose={handleClose}
		        className={classes.modalDialog}>
			    <div className={classes.modelhead}>
	             <DialogTitle> {convertedSuccess === false && <>Confirm</> } Create </DialogTitle>
	             <CloseIcon onClick={handleClose} />
	            </div>
				
		        <DialogContent>
		          <DialogContentText >
				  {convertedSuccess === false  && 
		           <div className={classes.confirList}>
		            <List>
		                <ListItem>
		                  <Typography><img src={waxtIcon} alt=""/> Asset name</Typography>
		                  <span>1.2356</span>
		                </ListItem>
		                <ListItem>
		                  <Typography><img src={GcheckIcon} alt=""/> Asset name</Typography>
		                  <span>1.1253</span>
		                </ListItem>
		                <ListItem>
		                  <Typography><img src={flashIcon} alt=""/> Asset name</Typography>
		                  <span>0.8923</span>
		                </ListItem>
		                <ListItem>
		                  <Typography><img src={CryIcon} alt=""/> Asset name</Typography>
		                  <span>0.5283</span>
		                </ListItem>
		                <ListItem>
		                  <Typography><img src={bitIcon} alt=""/> Asset name</Typography>
		                  <span>0.1234</span>
		                </ListItem>
		                <ListItem>
		                  <Typography><img src={XemIcon} alt=""/> Asset name</Typography>
		                  <span>0.0456</span>
		                </ListItem>
		            </List>
		          </div>
				  }
					</DialogContentText>
					
		        </DialogContent>
			
		        <DialogActions className={classes.listFooter}>
				{(startConverting === false) &&
				  <><Typography>Receive <small>5.1643  ETH</small></Typography>
		          <Button className={classes.fullPrimarybtn} onClick={statrConvesion}>Confirm Create</Button>
					</>
				}
					{(convertedSuccess === false && startConverting === true) &&
					<div className={classes.loadingSwap}>
						<div className={classes.customloader}>
						   <div className={classes.customloaderbox}></div>
						   <img src={lineIcon} alt=''/>
						</div>
						<Typography>Please confirm this transaction<br/>in your wallet</Typography>
					</div>
					}
					{ convertedSuccess === true &&
						<div className={classes.swapLaststeap}>
						<img src={GrcheckIcon} alt="" />
						<Typography>Transaction Confirmed</Typography>
						<div className={classes.lastCalcswap}>
							<Typography>Received</Typography>
							<Typography><img width={24} src={ethIcon} alt=""/>10.00 DIGIBYTE</Typography>
						</div>
					</div>
					}
		        </DialogActions>
		      </Dialog>
      	 </React.Fragment>	
		)
}
export default SwapSubscribe;