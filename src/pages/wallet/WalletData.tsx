import { IconButton, InputLabel, Select, MenuItem} from "@material-ui/core";

import React,{useState}  from "react";
import useStyles from "../dashboard/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Graphs from "../../components/Grid/graphs";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import {dataLine,optionsLine} from '../../models/connected';
import cartCompareIcon from '../../assets/icon/cartCompareIcon.svg';
import CloseIcon from '@material-ui/icons/Close';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import digibyteIcon from '../../assets/icon/digibyte.svg';
import swipeimgIcon from '../../assets/icon/swipeP.svg';
import WhiteInformationIcon from '../../assets/icon/whiteInformationIcon.png';

import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';


export const Firststep = ({setFirstStep}) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.radioListing}>
       <FormControl component="fieldset">
          {/*<FormLabel component="legend">Gender</FormLabel>*/}
          <RadioGroup aria-label="gender" name="gender1">
            <div className={classes.informationTooltip}>
             <FormControlLabel value="1" onChange={()=>{setFirstStep(1)}} control={<Radio />} label="Safe follow (recommended)" />
             <Tooltip TransitionComponent={Zoom} title="This follows wallet movements as long as the wallet movement is in the top 30 SOL tokens by marketcap"><Button> <img src={WhiteInformationIcon} style={{width: '20px',}} /> </Button></Tooltip>
            </div> 
            <div className={classes.informationTooltip}>
              <FormControlLabel value="2" onChange={()=>{setFirstStep(2)}}  control={<Radio />} label="Auto follow" />
              <Tooltip TransitionComponent={Zoom} title="This is not recommended you will follow every move this wallet makes. Only use if you ABSOUTELY trust the wallet you are following"><Button> <img src={WhiteInformationIcon} style={{width: '20px',}} /> </Button></Tooltip>
            </div>
            <div className={classes.informationTooltip}>
              <FormControlLabel value="3" onChange={()=>{setFirstStep(3)}} control={<Radio />} label="Custom follow" />
              <Tooltip TransitionComponent={Zoom} title="customize your copy wallet by using indexes we have pre-made or even make your own."><Button> <img src={WhiteInformationIcon} style={{width: '20px',}} /> </Button></Tooltip>
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    </div>
    );
}
export const Secondstep= ({
	firstStep
}) => {
  const classes = useStyles();
  
  return (
    <div>
	{ (firstStep === 1 || firstStep === 2 )? 	
      <form noValidate autoComplete="off">
        <TextField  label="Portfolio Name" placeholder="Portfolio name" fullWidth  InputLabelProps={{shrink: true, }} />
        <TextField  label="Amount to Invest" placeholder="Amount to invest" fullWidth  InputLabelProps={{shrink: true, }} />
        <TextField  label="Risk tolerance (a percentage of daily buy to protect yourself)" placeholder="Risk tolerance" fullWidth  InputLabelProps={{shrink: true, }} />
      </form>
		:
      <div className={classes.portfolioMain}>
            <p className={classes.headingThirdstep}>This page is for portfolio makeup etc. </p>
            <form noValidate autoComplete="off">
              <TextField  label="Portfolio Name" placeholder="Portfolio name" fullWidth  InputLabelProps={{shrink: true, }} />
              <TextField  label="Amount to Invest" placeholder="Amount to invest" fullWidth  InputLabelProps={{shrink: true, }} />

              <div className={classes.radioListing}>
               <FormControl component="fieldset">
                  <FormLabel component="legend">Need to approve everey transaction</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1">
                   <FormControlLabel value="Yes"  control={<Radio />} label="yes" />
                    <FormControlLabel value="No"  control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <TextField  label="buying new token (either limit or need approval)" placeholder="Token" fullWidth  InputLabelProps={{shrink: true, }} />
            
            <div className={classes.radioListing}>
               <FormControl component="fieldset">
                  <FormLabel component="legend">Allow actions that follow certain strategies like market cap (yes or no</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1">
                   <FormControlLabel value="Yes"  control={<Radio />} label="yes" />
                    <FormControlLabel value="No"  control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

               <TextField  label="Whitelist/blacklist tokens / marketcaps / volume" placeholder="Whitelist/blacklist tokens / marketcaps / volume" fullWidth  InputLabelProps={{shrink: true, }} />

            </form>
      </div>
	}
    </div>
    );
}
export const Thirdstep= ({firstStep}) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.confirmationPage}>
		{ (firstStep === 1 || firstStep===2) ?
			<Typography variant="h5">
			  Confirmation page W/ disclaimer again 
			</Typography>
		:
        <Typography>
           by clicking continue you agree to the following terms and conditions - - <a href="https://synchrony.fi">Here</a>
        </Typography>
        }
      </div>
    </div>
    );
}

function getSteps() {
  return ['1', '2', '3'];
}

export const WalletData = () => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set<number>());
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();
  const[firstStep,setFirstStep]= useState(0);
  const totalSteps = () => {
    return getSteps().length;
  };

   const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const completedSteps = () => {
    return completed.size;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };
  const skippedSteps = () => {
    return skipped.size;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  


  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set<number>());
    setSkipped(new Set<number>());
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

 


  function isStepComplete(step: number) {
    return completed.has(step);
  }
 

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickLiquidity = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };



  const setFirstSteps = (val)=>{
	  setFirstStep(val);
	  handleNext();
  }

   const classes = useStyles();
    return (


      <div className={classes.TableAcrodSec}>
      <div className={classes.root} style={{paddingTop:0,}}>
      <div className={classes.firstBuilderbox}>
        <div className={classes.tabinnercontent} style={{marginTop:0,}}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <div className={classes.graphImg}>
                  <Graphs type={'Line'} data={dataLine} options={optionsLine} />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <div className={classes.rigthside_indexbox}>
                  <h5>Asset Summary</h5>
                  <p> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className={classes.divederTwobox}>
                  <h5>Price</h5>
                  <p>$3.21</p>
                </div>
                <div className={classes.divederTwobox}>
                  <h5>Market Cap</h5>
                  <p>$425,960.21</p>
                </div>
                <div className={classes.divederTwobox}>
                  <h5>Volume (24h)</h5>
                  <p>$425,960.21</p>
                </div>
                <div className={classes.divederTwobox}>
                  <h5>Nav</h5>
                  <p>$5,425,960.21</p>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className={classes.btnsBuilders}>
                  <div className={classes.btnsBuildersSpace}>
                    <Button className="transparent_buil_btn" variant="contained" color="primary" onClick={handleClickOpen}>Follow</Button>
                    <Button className="transparent_buil_btn" variant="contained" color="primary"><img src={cartCompareIcon} alt=""/>Add to basket</Button>
                    <Button className="buil_btn" variant="contained" color="primary" >More detail</Button>
                    
                    <div className={classes.modelhead}>
                       <Dialog
                          fullScreen={fullScreen}
                          open={open2}
                          onClose={handleClose2}
                          className={classes.modalDialog}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >

                        <div className={classes.modelhead}>
                          <DialogTitle id="alert-dialog-title">Add Liquidity</DialogTitle>
                          <CloseIcon onClick={handleClose2}/>
                        </div> 


                        

                        <div className={classes.mainswapboxed}>
                        <div className={classes.swaphead}>
                           <Typography>Add Liquidity</Typography>
                              <div className={classes.icongroup}>
                                <IconButton ><InfoOutlinedIcon/></IconButton>
                                <IconButton ><SettingsOutlinedIcon/></IconButton>
                              </div>
                        </div>
                        <div className={classes.swapboxed}>
                          <div className={classes.fromGroup}>
                            <InputLabel> Input  </InputLabel>
                            <div className={classes.frominside}>
                             <TextField type="number"
                             placeholder={'0'}
                             />
                             <Select >
                                <MenuItem >Select a Token</MenuItem>
                                <MenuItem > <img src={digibyteIcon} alt=""/>BTC</MenuItem>
                                <MenuItem > <img src={digibyteIcon} alt=""/>ETH</MenuItem>
                                <MenuItem > <img src={digibyteIcon} alt=""/>SOl</MenuItem>
                             </Select>
                             </div>
                             <small>Balance: - 0</small>
                           </div>

                           <div className={classes.swipeBtn}><img src={swipeimgIcon} alt=""/></div>

                           <div className={classes.fromGroup}>
                            <InputLabel> Input  </InputLabel>
                            <div className={classes.frominside}>
                             <TextField type="number"
                             placeholder={'0'}
                             />
                             <Select>
                                <MenuItem >Select a Token</MenuItem>
                                <MenuItem > <img src={digibyteIcon} alt=""/>BTC</MenuItem>
                                <MenuItem > <img src={digibyteIcon} alt=""/>ETH</MenuItem>
                                <MenuItem > <img src={digibyteIcon} alt=""/>SOl</MenuItem>
                             </Select>
                             </div>
                             <small>Balance: - 0</small>
                           </div>


                            <div className={classes.btnGroup}>
                              <Button onClick={handleClickOpen}>Enter an amount to swap</Button> 
                            </div>

                        </div>
                        </div>

                        </Dialog>
                    </div>


                    <div className={classes.modelhead}>
                      <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        className={classes.modalDialog}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                      >
                        <div className={classes.modelhead}>
                        <DialogTitle id="responsive-dialog-title"></DialogTitle>
                        <CloseIcon onClick={handleClose}/>
                        </div>

                          <Stepper alternativeLabel nonLinear activeStep={activeStep} className={classes.mainStepperclass}>
                                  {steps.map((label, index) => {
                                    const stepProps: { completed?: boolean } = {};
                                    const buttonProps: { optional?: React.ReactNode } = {};
                                    
                                    if (isStepSkipped(index)) {
                                      stepProps.completed = false;
                                    }
                                    return (
                                      <Step key={label} {...stepProps}>
                                        <StepButton
                                          onClick={handleStep(index)}
                                          completed={isStepComplete(index)}
                                          {...buttonProps}
                                        >
                                        
                                        </StepButton>
                                      </Step>
                                    );
                                  })}
                                </Stepper>
                                <div className={classes.middleContantBody}>
                                  {allStepsCompleted() ? (
                                    <div>
                                      <Typography className={classes.instructions}>
                                        All steps completed - you&apos;re finished
                                      </Typography>
                                      <Button onClick={handleReset}>Reset</Button>
                                    </div>
                                  ) : (
                                    <div>
                                      <Typography className={classes.instructions}>
										  { activeStep === 0 &&
											<Firststep setFirstStep={setFirstSteps}/>
										  }
										  { activeStep === 1 &&
											<Secondstep firstStep={firstStep}/>
										  }
										  { activeStep === 2 &&
											<Thirdstep firstStep={firstStep}/>
										  }
									  </Typography>
                                    </div>
                                  )}
                                </div>
                    
                        <div className={classes.modelFooterSection}>
                        <DialogActions>
                         
                          <Button variant="contained"
                                          color="primary"
                                          onClick={handleNext}
                                          className={classes.button}>
                            Submit
                          </Button>
                           
                        </DialogActions>
                        </div>

                      </Dialog>
                    </div>
                </div>
                </div>
              </Paper>
             </Grid>
          </Grid>
        </div>



      </div>
      </div>
      </div>
  );
};

