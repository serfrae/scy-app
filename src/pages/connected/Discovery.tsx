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
import Graphs from '../../components/Grid/graphs';
import {toppoolscolumns,toppoolsrows,walletcolumns,walletrows,allColumnPool} from '../../models/toppools';
const Discovery = (props: RouteComponentProps) => {
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
                   Discovery
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
              
 {/* Second Section*/}
       
         <Grid  container>
            <Grid item xs={12} >
          <TableGrid 
          columns ={walletcolumns}
          rows = {walletrows}
          tablePagination={false}
		  accordion={true}
		 />
		</Grid>
		</Grid>
        
         </Container>
         
      </div>
  );
};

export default Discovery;
