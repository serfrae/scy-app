import React  from "react";
import useStyles from "../dashboard/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Graphs from "../../components/Grid/graphs";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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


import dashIcon from '../../assets/icon/dash-dash.svg';
import vertcoinIcon from '../../assets/icon/vertcoin-right.svg';
import {columnsVault,columnsReturn,rowsVault,rowsReturn,dataLine,optionsLine} from '../../models/connected';
import editIcon from '../../assets/icon/edit-white.svg';
import cartCompareIcon from '../../assets/icon/cartCompareIcon.svg';



export const Firststep= () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.radioListing}>
       <FormControl component="fieldset">
          {/*<FormLabel component="legend">Gender</FormLabel>*/}
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel value="Safe follow (recomanded)"  control={<Radio />} label="Safe follow (recomanded)" />
            <FormControlLabel value="Auto follow "  control={<Radio />} label="Auto follow" />
            <FormControlLabel value="custom follow"  control={<Radio />} label="Custom follow" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
    );
}
export const Secondstep= () => {
  const classes = useStyles();
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField  label="Portfolio Name" placeholder="Portfolio name" fullWidth  InputLabelProps={{shrink: true, }} />
        <TextField  label="Amount to Invest" placeholder="Amount to invest" fullWidth  InputLabelProps={{shrink: true, }} />
        <TextField  label="Risk tolerance (a percentage of daiyly buy to protect yourself)" placeholder="Risk tolerance" fullWidth  InputLabelProps={{shrink: true, }} />
      </form>

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

    </div>
    );
}
export const Thirdstep= () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.confirmationPage}>
        <Typography variant="h5">
          Confirmation page W/ disclaimer again 
        </Typography>

        <p className={classes.confirmapageDetails}>
          Dynamic stop loss

          We want to have a stoploss that moves with take profit points
          E.g. TP(take profit) is at +20% from entry and SL(Stop Loss) is -20%
          When TP is hit SL is raised to the original buy-in location. 
          SL can be moved less proportionally e.g. SL is set for -10% from buy-in 
          instead of at buy in. 
        </p>
      </div>
    </div>
    );
}

function getSteps() {
  return ['1', '2', '3'];
}
function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Firststep/>;
    case 1:
      return <Secondstep/>;
    case 2:
      return <Thirdstep/>;
    default:
      return 'Unknown step';
  }
}

export const PoolData = () => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set<number>());
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

   const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const isStepOptional = (step: number) => {
    return step === 1;
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
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  };

  function isStepComplete(step: number) {
    return completed.has(step);
  }
  const [value, setValue] = React.useState('female');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                    <Button className="transparent_buil_btn" variant="contained" color="primary"><img src={cartCompareIcon} />Add to basket</Button>
                    <Button className="buil_btn" variant="contained" color="primary">More detail</Button>
                    <div className={classes.modelhead}>
                      <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        className={classes.modalDialog}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                      >
                        <div className={classes.modelhead}>
                        <DialogTitle id="responsive-dialog-title">Choose one</DialogTitle>
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
                                          {label}
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
                                      <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                    </div>
                                  )}
                                </div>
                    
                        <div className={classes.modelFooterSection}>
                        <DialogActions>
                          <Button disabled={activeStep === 0} onClick={handleBack} className={classes.transparent_cancel_btn}>
                                          cancel
                                        </Button>
                          <Button variant="contained"
                                          color="primary"
                                          onClick={handleNext}
                                          className={classes.button}>
                            confirm
                          </Button>
                           {isStepOptional(activeStep) && !completed.has(activeStep) && (
                                          <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSkip}
                                            className={classes.button}
                                          >
                                            Skip
                                          </Button>
                                        )}
                                         {activeStep !== steps.length &&
                                          (completed.has(activeStep) ? (
                                            <Typography variant="caption" className={classes.completed}>
                                              Step {activeStep + 1} already completed
                                            </Typography>
                                          ) : (
                                            <Button variant="contained" color="primary" onClick={handleComplete}>
                                              {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                            </Button>
                                          ))}
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

