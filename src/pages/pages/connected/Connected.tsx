import  { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import useStyles from "../dashboard/styles";
import Typography from '@material-ui/core/Typography';
import TableGrid from '../../components/Grid/Table';
import SearchToolBar from '../../components/Grid/searchtoolbar';
import comIcon from '../../assets/icon/Combined.svg';
import chartIcon from '../../assets/icon/Chart.svg';
import chartredIcon from '../../assets/icon/Vector.svg';
import waxtIcon from '../../assets/icon/WAX.svg';
import learnIcon from '../../assets/icon/illustration_learn.svg';
import Container from '@material-ui/core/Container';
import WalletModal from '../dashboard/walletModal';
import {columns,rows,graphdata,bardata,baroptions} from '../../models/connected';
import {toppoolscolumns,toppoolsrows} from '../../models/toppools';
import Graphs from '../../components/Grid/graphs';
const ConnectedPool = (props: RouteComponentProps) => {
   const classes = useStyles();
   const [openModal,setOpenModal] = useState(false);
   
   return (
      <div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         <Container fixed>
         <Grid className={classes.secondBox} container>
            <Grid item xs={8} className={classes.graphtitle}>
            <Typography className={classes.subtitle}>
                    My Investment
               </Typography>
            <Paper className={classes.boxgrid}>
             <div className={classes.pullLeft}>
               <Typography className={classes.bttitle}>
                    My Portfolio
               </Typography>
             
               <Typography className={classes.valuefolio} variant="h2">
                        $2,212.05 <small>12.27%</small>
                  </Typography>
               </div>
               
              
               <Graphs
                   data={bardata}
                   options={baroptions}
                   type={"Bar"}
                  />
              
            </Paper>     
            </Grid>
            
            <Grid item xs={4} className={classes.portfolio}>
                 <Paper className={classes.boxgrid}>
                 <Typography className={classes.prottitle} variant="h3">
                       Portfolio Allocation
                  </Typography>
                  <Graphs
                   type="Doughnut"
                   data={graphdata}
                  />
                  
              
                  </Paper>
            </Grid>
            </Grid>  
            <div className={classes.clearfix}></div>
            <Grid className={classes.mb30} container>
            <Grid item xs={12}>    
               <TableGrid 
               columns ={columns}
               rows = {rows}
               tablePagination={false}
               />
            </Grid>
            </Grid>   
 {/* Second Section*/}
        <Typography className={classes.subtitle} variant="h2">
         Market Overview
        </Typography>
        <Grid className={classes.secondBox} container>
            <Grid item xs={4}>
            <Paper className={classes.boxgrid}>
                   <Typography className={classes.typograph}>
                           Highest volume (24h)
                           <span className={classes.topprice}>
                               12.27%
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
            <Paper className={classes.boxgrid}>
                    <Typography className={classes.typograph}>
                         Most visited (24h)
                         <span className={classes.topprice}>
                               12.27%
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
         <SearchToolBar title={'Top Pools'}/>
         <TableGrid 
          columns ={toppoolscolumns}
          rows = {toppoolsrows}
          tablePagination={false}
          moreLinkText = {"View All Pools"}
          link="/pools"
         />
         <WalletModal 
            open ={openModal}
            setOpen = {setOpenModal}
         />
         </Container>
         <Footer {...props}/>
      </div>
  );
};

export default ConnectedPool;
