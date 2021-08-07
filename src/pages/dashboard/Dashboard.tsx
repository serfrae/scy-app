import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import TableGrid from '../../components/Grid/Table';
import SearchToolBar from '../../components/Grid/searchtoolbar';
import blIcon from '../../assets/icon/Bitcoin-illustration.svg';
import comIcon from '../../assets/icon/Combined.svg';
import chartIcon from '../../assets/icon/Chart.svg';
import chartredIcon from '../../assets/icon/Vector.svg';
import waxtIcon from '../../assets/icon/WAX.svg';
import learnIcon from '../../assets/icon/illustration_learn.svg';
import Container from '@material-ui/core/Container';
import {toppoolscolumns,toppoolsrows} from '../../models/toppools';
import WalletModal from './walletModal';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import {walletStatus} from '../../components/Header/walletStatus';
const Dashboard = (props: RouteComponentProps) => {
   const classes = useStyles();
   const [openModal,setOpenModal] = useState(false);
   const[walletConnect,setWalletConnected] = useState(walletStatus);
   return (  
      <div className={classes.root} > {/* ok */}
         <Header {...props}/>
                 <Container fixed>
         <Grid className={classes.welcomeContent}>
         <Grid item xs={12}>
            <Paper className={classes.paper}>
                <div className={classes.dashboardwelcome}>
                <div className={classes.dashboardcontetn}>
                  <Typography className={classes.title} variant="h1">
                      Welcome to Muon App
                   </Typography>
                   <Typography className={classes.typograph} >
                   A brief introduction, Unlock all the features by connecting your wallet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                   </Typography>
                   {walletConnect === false && <Button className="connect-wallet" variant="contained" color="primary"
                   onClick={()=>{setOpenModal(true)}}
                   >Connect Wallet</Button> }
                   </div>
                   <div className={classes.blicon}>
                   <img src={blIcon} alt="" />
                   </div>
                </div>
            </Paper>
        </Grid>
        </Grid>
 {/* Second Section*/}
        <Typography className={classes.subtitle} variant="h2">
         Market Overview
        </Typography>
        <Grid className={classes.secondBox} container>
            <Grid item xs={4} className={classes.highestvol}>
            <Paper className={classes.boxgrid}>
                   <Typography className={classes.typograph}>
                           Highest volume (24h)
                           <span className={classes.topprice}>
                           <ArrowDropUpIcon/>  12.27%
                           </span>
                   </Typography>
                   <Typography className={classes.tname} >
                   <img src={comIcon} alt=""/>Token name
                   </Typography>
                   <Typography className={classes.total} >
                            $368,262.78 <img src={chartIcon} alt=""/>
                   </Typography>
                   </Paper>     
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.boxgridMid}>
                    <Typography className={classes.typograph}>
                         Most visited (24h)
                         <span className={classes.topprice}>
                         <ArrowDropDownIcon/> -0.56%
                           </span>
                   </Typography>
                   <Typography className={classes.tname}>
                    <img src={waxtIcon} alt=""/>Token name
                   </Typography>
                   <Typography className={classes.total} >
                          $238,212.05 <img src={chartredIcon} alt=""/>
                   </Typography>
                   </Paper>     
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.commingsec}>
                  <div className={classes.commingcontent}>
                    <Typography className={classes.commingtitle}>
                    Learn with Muon, Coming soon
                   </Typography>
                   <Typography className={classes.typograph} >
                         Amet minim mollit non deserunt est sit aliqua dolor do amet sint. 
                   </Typography>
                   </div>
                   <img src={learnIcon} alt=""/>
             </Paper>    
            </Grid>
         </Grid>
         {/* Pool Table data*/}

         <SearchToolBar title={"Top Pools"}/>
         <TableGrid 
          columns ={toppoolscolumns}
          rows = {toppoolsrows}
          tablePagination={false}
          moreLinkText = {"View All Pools"}
          link="/pools"
		  accordion={true}
         />
         <WalletModal 
            open ={openModal}
            setOpen = {setOpenModal}
            setWalletConnected= {setWalletConnected}
			
         />
         </Container>
         <Footer {...props}/>
      </div>
  );
};

export default Dashboard;
