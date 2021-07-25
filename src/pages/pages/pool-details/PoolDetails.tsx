import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import {Button, Chip}  from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import useStyles from "../dashboard/styles";
import Typography from '@material-ui/core/Typography';
import TableGrid from '../../components/Grid/Table';
import waxtIcon from '../../assets/icon/WAX.svg';
import vcoinIcon from '../../assets/icon/vertcoin.svg';
import copyIcon from '../../assets/icon/copy.svg';
import arrowupIcon from '../../assets/icon/arrowUP.svg';
import arrowdownIcon from '../../assets/icon/arrowdown.svg';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Breadcrumbs,Link,Select,MenuItem } from "@material-ui/core";
import {columnsVault,columnsReturn,rowsVault,rowsReturn,dataLine,optionsLine} from '../../models/connected';
import WalletModal from '../dashboard/walletModal';
import SwapSubscribe from "../swap/subscribe";
import Graphs from "../../components/Grid/graphs";
const PoolDetails = (props: RouteComponentProps) => {
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
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
          <Typography component={"div"}>{children}</Typography>
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
   const classes = useStyles();
   const [openModal,setOpenModal] = useState(false);
   const [value, setValue] = React.useState(0);
   const [state, setState] = React.useState(false);
   const toggleDrawer = (open:any,e:any) => {
      e.preventDefault();
      setState(open);
  };
   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
       setValue(newValue);
     };

   return (
      <div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         <div className={classes.breadcrumbsBar}>
         <div className={classes.breadcrumbsinner}>
         <Breadcrumbs  separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" href="/pools" onClick={handleClick}>
             Pools
            </Link>
            <Typography color="textPrimary">This is a Fund name</Typography>
         </Breadcrumbs>
         <Button className="subscribed" variant="contained" color="primary"
                  onClick={(e)=>{toggleDrawer(true,e)}}
                   >Subsribe</Button>
         </div>
         </div>
         <Container fixed>
         <Grid className={classes.poolDetailsbar}>
         <Grid item md={6}>
         <Typography variant="h1">This is a Fund name</Typography>
         <div><Chip className={classes.lightgreen} label="Long/Short"/>
         <Chip className={classes.opcitygreen} label="124 deposers"/>
         </div>
         <div className={classes.sharePrice}>
            <Typography>$0.52
             <span className={classes.greatervalue}><img src={arrowupIcon} alt=""/>12.27%</span>
            </Typography>
              <Select
                value={10}
              >   
                <MenuItem value={10}>Share Price</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
         </div>
         </Grid>
         <Grid item md={6}>
         <div className={classes.poolDetailsbox}>
            <Typography>Average Monthly Return <small>-12.27%</small></Typography>
            <Typography>Assets Under Management <small className={classes.colorwhite}>$3,141,761</small></Typography>
         </div>
         </Grid>
        </Grid>
 {/* Second Section*/}
         <div className={classes.graphImg}>
            <Graphs type={'Line'} data={dataLine} options={optionsLine} />
         </div>
         {/* Pool Table data*/}
         <Grid container className={classes.vaultTable}>
         <Grid item md={9}>
         <Typography className={classes.tableTitle}>Vault</Typography>
         <Paper>
            <TableGrid
             columns ={columnsVault}
             rows = {rowsVault}
             tablePagination={false}
             moreLinkText={"All assets"}
             link="/pools"
            />
            </Paper>
         </Grid>
         <Grid item md={3}>
         <Typography className={classes.tableTitle}>Returns</Typography>
         <Paper>
            <TableGrid 
             columns ={columnsReturn}
             rows = {rowsReturn}
             tablePagination={false}
             moreLinkText={"All time"}
             link="/pools"
            />
         </Paper>
         </Grid>
         </Grid>

       <div className={classes.tabssection}>
         <AppBar position="static" >
           <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
             <Tab label="Factsheet" {...a11yProps(0)} />
             <Tab label="Financials" {...a11yProps(1)} />
             <Tab label="Fees" {...a11yProps(2)} />
           </Tabs>
         </AppBar>
         <TabPanel value={value} index={0}>
           <div className={classes.tabcontent}>
            <div className={classes.tabinnercontent}>
            <Grid container>
               <Grid item md={6}>
                  <Typography>
                     <small>Name</small>Fund name
                  </Typography>
               </Grid>
               <Grid item md={6}>
                  <Typography>
                     <small>Manager ID</small><Link href="#"> Manager</Link>
                  </Typography>
               </Grid>
            </Grid>
            <Grid container>
               <Grid item md={6}>
                  <Typography component={"div"}>
                     <small>Strategies</small><Chip className={classes.lightgreen} label="Long/Short"/>
                     <Chip className={classes.lightgreen} label="Multi-Strategy"/>
                  </Typography>
               </Grid>
               <Grid item md={6}>
                  <Typography>
                     <small>Inception Date</small>Mon, 15 Mar 2021 09:54 GMT
                  </Typography>
               </Grid>
            </Grid>
            <Grid container className={classes.descrptiontab}>
               <Grid item md={12}>
                  <Typography>
                     <small>Description</small>
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit.
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit.
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit.
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit
                     aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                  </Typography>
               </Grid>
            </Grid>
            </div>
           </div>
           <div className={classes.tabcontent}>
            <Grid container className={classes.descrptiontab}>
               <Grid item md={12} className={classes.smContract}>
                  <Typography>Smart Contract</Typography>
                  <div className={classes.tabinnercontent}>
                  <div className={classes.smcontractBox}>
                     <Grid container>
                        <Grid item md={6}>
                        <Typography><small>Vault</small></Typography>
                        <Typography className={classes.copytext}>0xded69068a94776a23f5bdafc6b4c6894bc88e82c <img src={copyIcon} alt=""/></Typography>
                        </Grid> 
                        <Grid item md={6}>
                        <Typography><small>Comptroller</small></Typography>
                        <Typography className={classes.copytext}>0xded69068a94776a23f5bdafc6b4c6894bc88e82c <img src={copyIcon} alt=""/></Typography>
                        </Grid> 
                     </Grid>
                     <Grid container>
                        <Grid item  md={6}>
                             <Typography><small>Deployer</small></Typography>
                             <Typography className={classes.copytext}>0xded69068a94776a23f5bdafc6b4c6894bc88e82c <img src={copyIcon} alt=""/></Typography>
                        </Grid> 
                     </Grid> 
                  </div>
                  </div>
               </Grid>
            </Grid>
           </div>
         </TabPanel>
         <TabPanel value={value} index={1} >
           <div className={classes.tabcontent}>
           <div className={classes.tabinnercontent}>
            <Grid container>
               <Grid item md={6}>
                  <Typography>
                     <small>Gross Asset Value (GAV)</small>
                  </Typography>
                    <div className={classes.valueGroup}>
                     <img src={waxtIcon} alt=""/>
                     <Typography>
                        3,354,313.5585 USDC<small>$ 3,337,430.69</small>
                        </Typography>
                     </div>
                  
               </Grid>
               <Grid item md={6}>
                  <Typography>
                     <small>Net Asset Value (NAV)</small>
                  </Typography>
                  <div className={classes.valueGroup}>
                     <img src={waxtIcon} alt=""/>
                     <Typography>
                        3,354,313.5585 USDC<small>$ 3,337,430.69</small>
                        </Typography>
                     </div>
                  
               </Grid>
            </Grid>
            <Grid container>
               <Grid item md={6}>
                  <Typography>
                     <small>Share Supply</small>
                  </Typography>
                  <div className={classes.valueGroup}>
                     <Typography>
                       2,446,139.7580 shares
                        </Typography>
                     </div>
               </Grid>
               <Grid item md={6}>
                  <Typography>
                     <small>Share Price</small>
                  </Typography>
                  <div className={classes.valueGroup}>
                   <img src={vcoinIcon} alt=""/>
                  <Typography>
                        1.3712 USDC<small>$ 1.36</small>
                        </Typography>
                     </div>
               </Grid>
            </Grid>
            </div>
            </div>
            <div className={classes.tabcontent}>
            <Typography className={classes.subtitleTab}>
            Return Metrics<i></i><small>Track record for 5 months</small>
            </Typography>
            <div className={classes.tabinnercontent}>
            <Grid container className={classes.descrptiontab}>
               <Grid item md={3}>
                  <Typography>
                     <small>Return Month-to-Date</small>
                      <span className={classes.lessvalue}><img src={arrowdownIcon} alt=""/>-4.34%</span>
                  </Typography>
               </Grid>
               <Grid item md={3}>
                <Typography>
                     <small>Return Quarter-to-Date</small>
                      <span className={classes.greatervalue}><img src={arrowupIcon} alt=""/>4.65%</span>
                  </Typography>
               </Grid>
               <Grid item md={3}>
                  <Typography>
                     <small>Return Year-to-Date</small>
                      <span className={classes.greatervalue}><img src={arrowupIcon} alt=""/>36.53%</span>
                  </Typography>
               </Grid>
               <Grid item md={3}>
                 <Typography>
                     <small>Return Inception-to-Date</small>
                      <span className={classes.greatervalue}><img src={arrowupIcon} alt=""/>36.53%</span>
                  </Typography>
               </Grid>
            </Grid>
            <Grid container className={classes.descrptiontab}>
               <Grid item md={3}>
                  <Typography>
                     <small>Average Month</small>
                      <span className={classes.greatervalue}><img src={arrowupIcon} alt=""/>7.01%</span>
                  </Typography>
               </Grid>
               <Grid item md={3}>
                <Typography>
                     <small>Best Month</small>
                      <span className={classes.greatervalue}><img src={arrowupIcon} alt=""/>26.22%</span>
                  </Typography>
               </Grid>
               <Grid item md={3}>
                  <Typography>
                     <small>Worst Month</small>
                      <span className={classes.lessvalue}><img src={arrowdownIcon} alt=""/>-4.90%</span>
                  </Typography>
               </Grid>
               <Grid item md={3}>
                 <Typography>
                     <small>Positive Months</small>
                      <span>3 of 5 months</span>
                  </Typography>
               </Grid>
            </Grid>
            </div>
            </div>
            <div className={classes.tabcontent}>
            <Typography className={classes.subtitleTab}>
            Risk Metrics<i></i><small>Trailing 30 Days</small>
            </Typography>
            <div className={classes.tabinnercontent}>
            <Grid container className={classes.descrptiontab}>
               <Grid item md={6}>
                  <Typography>
                     <small>Annualised Volatility</small>
                      <span>Annualised Volatility</span>
                  </Typography>
               </Grid>
               <Grid item md={6}>
                <Typography>
                     <small>Sharpe Ratio</small>
                      <span className={classes.greatervalue}>0.01</span>
                  </Typography>
               </Grid>
             </Grid>
            </div>
            </div>
            <div className={classes.separator30}></div>
         </TabPanel>
         <TabPanel value={value} index={2} >
           <div className={classes.tabcontent}>
           <div className={classes.tabinnercontent}>
            <Grid container>
               <Grid item md={6}>
                  <Typography>
                     <small>Management Fee</small>
                     <span>Rate: 0.5%</span>
                  </Typography>                  
               </Grid>
               <Grid item md={6}>
                  <Typography>
                     <small>Performance Fee</small>
                     <span>Rate: 0.5%<br/>Crystallization Period: 30.0 days</span>
                  </Typography>
               </Grid>
            </Grid>
            </div>
            </div>
            <div className={classes.tabcontent}>
            <Typography className={classes.subtitleTab}>Unpaid Vault Fees</Typography>
            <div className={classes.tabinnercontent}>
            <Grid container className={classes.descrptiontab}>
               <Grid item md={6}>
                <Typography>
                     <small>Unpaid Management Fees</small>
                      <span>15.17746798 shares  <b>|  $ 21.08</b></span>
                  </Typography>
               </Grid>
               <Grid item md={6}>
                  <Typography>
                     <small>Unpaid Performance Fees</small>
                      <span>0.00000000 shares  <b>|  $ 0.00</b></span>
                  </Typography>
               </Grid>
            </Grid>
            <Grid container className={classes.descrptiontab}>
               <Grid item md={6}>
                <Typography>
                     <small>Total Unpaid Fees</small>
                      <span>15.17746798 shares  <b>|  $ 21.08</b></span>
                  </Typography>
               </Grid>
            </Grid>
            </div>
            </div>
            <div className={classes.separator30}></div>
         </TabPanel>
       </div>
     
         <WalletModal 
            open ={openModal}
            setOpen = {setOpenModal}
         />
         <SwapSubscribe state={state} toggleDrawer={toggleDrawer}/> 
         </Container>
         <Footer {...props}/>
      </div>
  );
};

export default PoolDetails;
