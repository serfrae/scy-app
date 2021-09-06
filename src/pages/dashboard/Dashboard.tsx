import React, { useState,useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import TableGrid from '../../components/Grid/Table';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import blIcon from '../../assets/icon/Bitcoin-illustration.svg';
import TextField from '@material-ui/core/TextField';
import comIcon from '../../assets/icon/Combined.svg';
import chartIcon from '../../assets/icon/Chart.svg';
import chartredIcon from '../../assets/icon/Vector.svg';
import waxtIcon from '../../assets/icon/WAX.svg';
import learnIcon from '../../assets/icon/illustration_learn.svg';
import Container from '@material-ui/core/Container';
import {dataColumn} from '../../models/toppools';
import {API_URL} from '../../api/api';
import WalletModal from './walletModal';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import {walletStatus} from '../../components/Header/walletStatus';
import {PoolDatas} from '../pool/pooldatas';
import {PoolName} from '../pool/PoolName';
import {TwitterFollowers} from '../pool/TwitterFollowers';
import Autocomplete from "@material-ui/lab/Autocomplete";
const Dashboard = (props: RouteComponentProps) => {
   const classes = useStyles();
   const [openModal,setOpenModal] = useState(false);
   
   const[walletConnect,setWalletConnected] = useState(walletStatus);
   console.log("walletStatus",walletConnect);
   const[searchFilter,setSearchFilter] = useState('');
   const[searchText,setSearchText] = useState('');
   const[dataRows,setDataRows] = useState([]);
   const[dataSingleRows,setDataSingleRows] = useState([{chart:[],chart24:[]}]);
   useEffect(() => {
		 let dataFiler:any = [];
		 if(searchFilter !== ''){ dataFiler.push("category="+searchFilter) }
		 if(searchText !== ''){ dataFiler.push("search="+searchText) }
		 let url = API_URL+'poolapi.php';
		 if(dataFiler.length > 0){ url += "?"+(dataFiler.join("&"));}
         fetch(url)
         .then(response =>response.json())
         .then(data => { for(var i=0;i<data.length;i++){data[i].twitter_followers = <TwitterFollowers followers={data[i].twitter_followers}/>; data[i].title =data[i].name; data[i].accordionData = <PoolDatas row={data[i]}/>; data[i].name = <PoolName name={data[i].name} image={data[i].logo}/>; } setDataRows(data);})
		 .catch(err =>{});
		/**************Solana********************/
		 fetch(API_URL+'solanaapi.php')
         .then(response =>response.json())
         .then(data => { setDataSingleRows(data);})
		 .catch(err =>{});

    },[searchFilter,searchText]);
		
	const filterSearch = (value,item)=>{
		setSearchText(item);
		console.log(item);
		
	}
   return (  
      <div className={classes.root} > {/* ok */}
         <Header {...props}/>
                 <Container fixed>
      {walletConnect === false &&  <Grid className={classes.welcomeContent}>
         <Grid item xs={12}>
            <Paper className={classes.paper}>
                <div className={classes.dashboardwelcome}>
                <div className={classes.dashboardcontetn}>
                  <Typography className={classes.title} variant="h1">
                      Welcome to Synchrony App
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
        </Grid>}
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
                    Learn with Synchrony, Coming soon
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

         <div className={classes.btnGroupWithserach}>
            <div className={classes.btnGroupLeft}>
				<Button className={searchFilter === 'All' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('All')}}>All</Button>
                <Button className={searchFilter === 'Lending' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('Lending')}}>Lending</Button>
                <Button className={searchFilter === 'Dexes' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('Dexes')}}>Dexes</Button> 
                <Button className={searchFilter === 'Derivatives' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('Derivatives')}}>Derivatives</Button> 
                <Button className={searchFilter === 'Payments' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('Payments')}}>Payments</Button> 
                <Button className={searchFilter === 'Assets' ? "connect-wallet activeBtn" : "connect-wallet"} variant="contained" color="primary" onClick={()=>{setSearchFilter('Assets')}}>Assets</Button>
            </div>
            <div className={classes.btnSearch}>
              <div className={classes.PoolsSec}>
                <div className={classes.searchPools}>
                <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
				onChange={filterSearch}
                options={dataRows.map((option:any) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search"
                    margin="normal"
                    variant="outlined"
					onChange={e => setSearchText(e.target.value)}
                    InputProps={{ ...params.InputProps, type: 'Search' }}
                  />
                )}
              />
              <SearchSharpIcon/>
              </div>
            </div>
            </div> 
         </div>
         <TableGrid 
          columns ={dataColumn}
          rows = {dataRows}
          tablePagination={true}
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
