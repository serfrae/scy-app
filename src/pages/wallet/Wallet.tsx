import React, { useState,useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import useStyles from "../dashboard/styles";
import Typography from '@material-ui/core/Typography';
import TableGrid from '../../components/Grid/Table';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import {toppoolscolumns,toppoolsrows,walletcolumns,walletrows,allColumnPool} from '../../models/toppools';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import WalletModal from '../dashboard/walletModal';
import {radiumAPI,orcaAPI} from '../../api/api';
import {PoolData} from './pooldata';
export const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
const Wallet = (props: RouteComponentProps) => {
   const classes = useStyles();
  const [filterType,setFilterType] = useState('Wallet');
  const top100Films = [
  { title: 'Suggestions', },
  { title: 'Raydium', },
  { title: 'xxxx',  },
  { title: 'xxxx',  },
  { title: 'xxxx',  },
  { title: 'xxxx',  },
   ];
  const handleChange = (filterName) => {
		setFilterType(filterName);
  };
   //const history = useHistory()
   const [openModal,setOpenModal] = useState(false);
   const [rows,setRowList] = useState([]);
   const [filter] = useState('Orca');
   const columnData:any = [
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
   const syncColumnData:any = [
                  ['Name','pool_name'],
                  ['Liquidity','liquidity'],
                  ['Est. Fees','estfees',{
                     options:{
                           order:true,
                           number:true,
                           hideZero:true,
                       } 
                   
                  }],
                  ['24h','hours24',{
                     options:{
                           order:true,
                           number:true,
                           hideZero:true,
                       } 
                   
                  }],
                  ['7D','week',{
                     options:{
                           order:true,
                           number:true,
                           hideZero:true,
                       } 
                   
                  }
                  ],
                 
               ];
   const [tableColumn,setTableColumn] = useState(columnData);
   useEffect(() => {
      if(filter === 'Radium'){
         fetch(radiumAPI+'pairs')
         .then(response => response.json())
         .then(data => {
            if(data !== "undefined"){
               setRowList(data);
               setTableColumn(columnData);
            }});
         }else  if(filter === 'Synchrony'){
         fetch('http://122.160.128.251/uploads/synchrony/poolapi.php')
         .then(response => response.json())
         .then(data => {
            if(data !== "undefined"){
               setRowList(data);
               setTableColumn(syncColumnData);
            }});
         }else  if(filter === 'All'){
			 let commonRowsData:any = [];
			 fetch('http://122.160.128.251/uploads/synchrony/poolapi.php')
			 .then(response => response.json())
			 .then(data => {
				if(data !== "undefined"){
				   for(var i = 0; i < data.length; i++ ){
					   commonRowsData.push({name:data[i].pool_name,liquidity:data[i].liquidity,fee_24h:data[i].estfees,accordionData: <PoolData/>});
				   }
				   //
				}
				fetch(radiumAPI+'pairs')
				 .then(response => response.json())
				 .then(data => {
					if(data !== "undefined"){
					    for(var i = 0; i < data.length; i++ ){
						commonRowsData.push({name:data[i].name,liquidity:data[i].liquidity,fee_24h:data[i].fee_24h,accordionData: <PoolData/>});
						}
					}
					 fetch(radiumAPI+`coin/price`)
            .then(response => response.json())
            .then(data => {
				let priceArray : any = [];
				priceArray = data;


            fetch(orcaAPI+'allPools')
            .then(response => response.json())
            .then(data => {
               if(data !== "undefined"){
                let liquidValue:any = "";
                let currencyPrice : any  = "";
                let calCoinPrice : any = "";
                let calCoinPrice_scd : any = "";
                for(let obj in data){
        
					currencyPrice = obj.split('/')

					for (let data in priceArray){
					   
					if(currencyPrice[0] === data){

					calCoinPrice = priceArray[currencyPrice[0]]
					calCoinPrice_scd = priceArray[currencyPrice[1]]
					}
					}

					if(calCoinPrice !== ""){
					if(currencyPrice[0] === "USDT"|| currencyPrice[1] === "USDC"){
					   liquidValue = Math.round((calCoinPrice*(data[obj].tokenAAmount/1000000))+(data[obj].tokenBAmount/1000000)).toLocaleString()
					}
					else{
					   liquidValue = Math.round((calCoinPrice*(data[obj].tokenAAmount/1000000))+(data[obj].tokenBAmount/1000000)*calCoinPrice_scd).toLocaleString()

					}
					if(liquidValue === "NaN") { liquidValue= 0; }
                   commonRowsData.push({name:data[obj].poolId,liquidity:liquidValue,fee_24h:`${Math.round((data[obj].apy.day) * 100).toFixed(1)} %`,accordionData: <PoolData/>});
                     }     }
					setRowList(commonRowsData);
					setTableColumn(allColumnPool);
             }});
            })	
				});
			 });
			 
         }else if(filter === 'Orca'){
            
            fetch(radiumAPI+`coin/price`)
            .then(response => response.json())
            .then(data => {
				let priceArray : any = [];
				priceArray = data;


            fetch(orcaAPI+'allPools')
            .then(response => response.json())
            .then(data => {
               if(data !== "undefined"){
                let dataArray:any = [];
                let liquidValue:any = "";
                let currencyPrice : any  = "";
                let calCoinPrice : any = "";
                let calCoinPrice_scd : any = "";
                for(let obj in data){
                  
					currencyPrice = obj.split('/')

					for (let data in priceArray){
					   
					if(currencyPrice[0] === data){

					calCoinPrice = priceArray[currencyPrice[0]]
					calCoinPrice_scd = priceArray[currencyPrice[1]]
					}
					}


					if(calCoinPrice !== ""){

					if(currencyPrice[0] === "USDT"|| currencyPrice[1] === "USDC"){
					   liquidValue = Math.round((calCoinPrice*(data[obj].tokenAAmount/1000000))+(data[obj].tokenBAmount/1000000)).toLocaleString()
					}
					else{
					   liquidValue = Math.round((calCoinPrice*(data[obj].tokenAAmount/1000000))+(data[obj].tokenBAmount/1000000)*calCoinPrice_scd).toLocaleString()

					}





				
					if(liquidValue === "NaN") { liquidValue= 0; }
                   dataArray.push({name:data[obj].poolId,liquidity:liquidValue,volume_24h:`${data[obj].apy.day}`,volume_7d:`${Math.round((data[obj].apy.week) * 100).toFixed(1)} %`,fee_24h:`${Math.round((data[obj].apy.day) * 100).toFixed(1)} %`,accordionData: <PoolData/>});
                     }     }
                const columnsOrca:any = [
                  ['Name','name'],
                  ['Liquidity','liquidity'],
                  ['Est. Fees','volume_24h',{
                     options:{
                           order:true,
                           number:true,
                           hideZero:true,
                       } 
                   
                  }],
                  ['24h','fee_24h',{
                     options:{
                           order:true,
                           number:true,
                           hideZero:true,
                       } 
                   
                  }],
                  ['7D','volume_7d',{
                     options:{
                           order:true,
                           number:true,
                           hideZero:true,
                       } 
                   
                  }
                  ],
                 
               ];
			   console.log("dataArray",dataArray);
                setRowList(dataArray);
                setTableColumn(columnsOrca);
             }});
            })
         }

    }, [filter,columnData,syncColumnData]);

   return (
      <div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         <Container fixed>
         
       {/* Second Section*/}
       <Grid className={classes.poolsParent} container>
       <Grid item xs={3} className={classes.sideBarPool}>
       <Typography className={classes.subtitle} variant="h2">
          Browser
       </Typography>
       <Paper>
         <Typography className={classes.headfilter}>
            <span>
               Filter
            </span>
         </Typography>
         <div className={classes.filterbox}>
          <Typography>
             Type
          </Typography>
            <FormGroup row>
               <FormControlLabel
                  control={
                  <Checkbox
                  checked={filterType === "Wallet" ? true: false}
                  onChange={(e)=>{handleChange('Wallet')}}
                  name="checkedD"
                  />
                  }
                  label="Wallet"
               />
            </FormGroup>
         </div>
        
       </Paper>
       </Grid>
       <Grid item xs={9} className={classes.PoolsSec}>
		<Typography component="h1" className="synHead">Wallet Profile</Typography>
      <div className={classes.searchPools}>
	    
        <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'Search' }}
          />
        )}
      />
      <SearchSharpIcon/>
      </div>
        {/*<Typography className={classes.subtitle} variant="h2">
        Featured Pools
        </Typography>
        <Grid className={classes.secondBox}>
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
         </Grid>*/}
         {/* Pool Table data*/}

        {/*<SearchToolBar title={'Pools'} filter={filter} setFilter={setFilter}/>*/}
		{filterType === "Wallet" ?
		
		 <TableGrid 
          columns ={walletcolumns}
          rows = {walletrows}
          tablePagination={false}
		  accordion={true}
		 />
		
		
		:
		
		<>{filterType === "SynchronyIndex" ?
		
          <TableGrid 
          columns ={toppoolscolumns}
          rows = {toppoolsrows}
          tablePagination={false}
		 />
		:
			<TableGrid 
			  columns ={tableColumn}
			  rows = {rows}
			  accordion={true}
			 />
		}</>
		}
        </Grid>
         <WalletModal 
            open ={openModal}
            setOpen = {setOpenModal}
         />
         </Grid>
         </Container>
         <Footer {...props}/>
      </div>
  );
};

export default Wallet;
