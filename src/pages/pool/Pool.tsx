import React, { useState,useEffect } from "react";
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
import {radiumAPI,orcaAPI} from '../../api/api';
const PoolList = (props: RouteComponentProps) => {
   const classes = useStyles();
   //const history = useHistory()
   const [openModal,setOpenModal] = useState(false);
   const [rows,setRowList] = useState([]);
   const [filter,setFilter] = useState('Radium');
   const columns:any = [
      ['Name','name',{
         options:{
               order:true,
              
               
      },  
       
      }],
      ['Liquidity','liquidity'],
      ['Volume (24hrs)','volume_24h',{
         options:{
               order:true,
               number:true,
               hideZero:true,
           } 
       
      }],
      ['Volume (7d)','volume_7d',{
         options:{
               order:true,
               number:true,
               hideZero:true,
           } 
       
      }
      ],
      ['Fees (24hr)','fee_24h',{
         options:{
               order:true,
               number:true,
               hideZero:true,
           } 
       
      }],
      ['1y Fees / Liquidity','liquidity'],
   ];
   const [tableColumn,setTableColumn] = useState(columns);
   useEffect(() => {
      if(filter === 'Radium'){
         fetch(radiumAPI+'pairs')
         .then(response => response.json())
         .then(data => {
            if(data !== "undefined"){
               setRowList(data);
               setTableColumn(columns);
            }});
         }else if(filter === 'Orca'){
            fetch(orcaAPI+'allPools')
            .then(response => response.json())
            .then(data => {
               if(data !== "undefined"){
                let dataArray:any = [];
                for(let obj in data){
                   dataArray.push({name:data[obj].poolId,liquidity:data[obj].tokenAAmount,volume_24h:data[obj].apy.day,volume_7d:data[obj].apy.week,fee_24h:data[obj].apy.month});
                }
                const columnsOrca:any = [
                  ['Name','name',{
                     options:{
                           order:true,
                          
                           
                  },  
                   
                  }],
                  ['Liquidity','liquidity'],
                  ['Est. Fees','volume_24h',{
                     options:{
                           order:true,
                           number:true,
                           hideZero:true,
                       } 
                   
                  }],
                  ['Yearly ROI','volume_7d',{
                     options:{
                           order:true,
                           number:true,
                           hideZero:true,
                       } 
                   
                  }
                  ],
                 
               ];
                setRowList(dataArray);
                setTableColumn(columnsOrca);
             }});
         }

    }, [filter]);

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

         <SearchToolBar title={'Pools'} filter={filter} setFilter={setFilter}/>
         <TableGrid 
          columns ={tableColumn}
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
