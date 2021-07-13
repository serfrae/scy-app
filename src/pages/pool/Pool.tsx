import React, { useState,useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
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
import avtarIcon from '../../assets/icon/Avatars.svg';
import learnIcon from '../../assets/icon/illustration_learn.svg';
import Container from '@material-ui/core/Container';
import WalletModal from '../dashboard/walletModal';
import {radiumAPI} from '../../api/api';
const PoolList = (props: RouteComponentProps) => {
   const classes = useStyles();
   const history = useHistory()
   const [openModal,setOpenModal] = useState(false);
   const [rows,setRowList] = useState([]);
   const columns:any = [
      ['Name','name',{
         options:{
               order:true,
               type:'link',
               
      },  
       
      }],
      ['Volume','liquidity'],
      ['Top assets','topassets'],
      ['All time','price',{
         options:{
               order:true,
               number:true,
           } 
       
      }
      ],
      ['24h','volume_24h',{
         options:{
               order:true,
               number:true,
           } 
       
      }],
      ['Last 7 days','volume_7d'],
   ];
   useEffect(() => {
      fetch(radiumAPI+'pairs')
      .then(response => response.json())
      .then(data => {
         if(data !== "undefined"){
             setRowList(data);
         }
      });
    }, []);

   return (
      <div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         <Container fixed>
         
       {/* Second Section*/}
        <Typography className={classes.subtitle} variant="h2">
        Featured Pools
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

         <SearchToolBar title={'Pools'}/>
         <TableGrid 
          columns ={columns}
          rows = {rows}
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

export default PoolList;
