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
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
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
const PoolList = (props: RouteComponentProps) => {
   const classes = useStyles();
   
  const [state] = React.useState({
    checkedB: true,
    checkedC: false,
    checkedD: true,
    checkedE: false,
    checkedF: true,
    checkedG: false,
    checkedH: true,
    checkedI: false,
    checkedJ: true,

    checked1: true,
    checked2: false,
    checked3: true,
    checked4: false,
    checked5: true,
    checked6: false,

    checked7: true,
    checked8: false,
    checked9: true,
    checked10: false,
  });
  const top100Films = [
  { title: 'Suggestions', },
  { title: 'Raydium', },
  { title: 'xxxx',  },
  { title: 'xxxx',  },
  { title: 'xxxx',  },
  { title: 'xxxx',  },
   ];
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState2({ ...state2, [event.target.name]: event.target.checked });
  };
  const [state2, setState2] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });
  const handleChange2 = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state2;
    setState2({
      ...state2,
      [name]: event.target.value,
    });
  };

   //const history = useHistory()
   const [openModal,setOpenModal] = useState(false);
   const [rows,setRowList] = useState([]);
   const [filter,setFilter] = useState('Orca');
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
      ['Name','pool_name',{
         options:{
               order:true,
              
               
      }}
	  ]];
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
                setRowList(dataArray);
                setTableColumn(columnsOrca);
             }});
            })
         }

    }, [filter]);

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
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  />
                  }
                  label="All"
               />

               <FormControlLabel
                  control={
                  <Checkbox
                  checked={state.checkedC}
                  onChange={handleChange}
                  name="checkedC"
                  />
                  }
                  label="Synchrony Index"
               />

               <FormControlLabel
                  control={
                  <Checkbox
                  checked={state.checkedD}
                  onChange={handleChange}
                  name="checkedD"
                  />
                  }
                  label="Yield farm"
               />
               <FormControlLabel
                  control={
                  <Checkbox
                  checked={state.checkedE}
                  onChange={handleChange}
                  name="checkedE"
                  />
                  }
                  label="Liquidity Pool"
               />
               <FormControlLabel
                  control={
                  <Checkbox
                  checked={state.checkedF}
                  onChange={handleChange}
                  name="checkedF"
                  />
                  }
                  label="Lending"
               />

               <FormControlLabel
                  control={
                  <Checkbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                  />
                  }
                  label="Tokens"
               />

               <FormControlLabel
                  control={
                  <Checkbox
                  checked={state.checkedH}
                  onChange={handleChange}
                  name="checkedH"
                  />
                  }
                  label="User Generated"
               />

                <FormControlLabel
                  control={
                  <Checkbox
                  checked={state.checkedI}
                  onChange={handleChange}
                  name="checkedI"
                  />
                  }
                  label="My Drafts"
               />
               <FormControlLabel
                  control={
                  <Checkbox
                  checked={state.checkedJ}
                  onChange={handleChange}
                  name="checkedJ"
                  />
                  }
                  label="My Published Products"
               />
            </FormGroup>
         </div>
         <div className={classes.filterbox}>
          <Typography>
             Performance
          </Typography>
            <FormControl className={classes.selectSidebar}>
              <InputLabel >Highest return</InputLabel>
              <Select
                native
                value={state2.age}
                onChange={handleChange2}
                inputProps={{
                  name: 'age',
                }}
              >
                <option value={10}>Highest return</option>
              </Select>
            </FormControl>

            <FormControl className={classes.selectSidebar}>
              <InputLabel>in the last 7 days</InputLabel>
              <Select
                native
                value={state2.age}
                onChange={handleChange2}
                inputProps={{
                  name: 'age',
                }}
              >
                <option value={10}>Highest return</option>
              </Select>
            </FormControl>
         </div>

         <div className={classes.filterbox}>
          <Typography>
             Platform
          </Typography>
            <FormGroup row>
              

               <FormControlLabel
                  control={
                  <Checkbox
                  checked={ filter === "Radium" ? true : false}
                  onChange={()=>{setFilter('Radium');}}
                  name="checkedC"
                  />
                  }
                  label="Raydium"
               />

               <FormControlLabel
                  control={
                  <Checkbox
				  checked={ filter === "Orca" ? true : false}
                  onChange={()=>{setFilter('Orca');}}
                  name="Orca"
                  />
                  }
                  label="Orca"
               />
			   <FormControlLabel
                  control={
                  <Checkbox
				  checked={ filter === "Synchrony" ? true : false}
                  onChange={()=>{setFilter('Synchrony');}}
                  name="Synchrony"
                  />
                  }
                  label="Synchrony"
               />
               
            </FormGroup>
         </div>

         <div className={classes.filterbox}>
          <Typography>
             Advanced Performance
          </Typography>
           <Grid container>
           <Grid item xs={12}>
               <FormControl className={classes.selectSidebar}>
                 <InputLabel>Up</InputLabel>
                 <Select
                   native
                   value={state2.age}
                   onChange={handleChange2}
                   inputProps={{
                     name: 'age',
                   }}
                 >
                   <option value={10}>Highest return</option>
                 </Select>
               </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.calcSidebar} style={{marginBottom:10,}}>
               <TextField  id="" label="" defaultValue="14" />
               <span>%</span>
            </Grid>
            </Grid> 
             <FormControl className={classes.selectSidebar}>
              <InputLabel >in the last 7 days</InputLabel>
              <Select
                native
                value={state2.age}
                onChange={handleChange2}
                inputProps={{
                  name: 'age',
                }}
              >
                <option value={10}>in the last 7 days</option>
              </Select>
            </FormControl>
         </div>

          <div className={classes.filterbox}>
          <Typography>
             Community Ranking
          </Typography>
          <div className={classes.ratingStar}>
             <StarRateSharpIcon/>
             <StarRateSharpIcon/>
             <StarRateSharpIcon/>
             <StarRateSharpIcon/>
             <StarRateSharpIcon className={classes.unactive} />
             <span>4+</span>
          </div>
         </div>
       </Paper>
       </Grid>
       <Grid item xs={9} className={classes.PoolsSec}>
	  
       <div className={classes.searchPools}>
	    <Typography component="h1">{filter} Pools</Typography>
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
         <TableGrid 
          columns ={tableColumn}
          rows = {rows}
          accordion={true}
         />

        
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

export default PoolList;
