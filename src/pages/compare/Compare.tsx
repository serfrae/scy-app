import React, { useState,useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import TableGrid from '../../components/Grid/Table';
import useStyles from "./styles"; 
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {comparecolumns,compoolsrows} from '../../models/compare';
import CartGraphData from './comparedata';
import {dataColumn} from '../../models/toppools';
import {API_URL} from '../../api/api';
import {TwitterFollowers} from '../pool/TwitterFollowers';
import {PoolDatas} from '../pool/pooldatas';
import {PoolName} from '../pool/PoolName';
const CompareList = (props: RouteComponentProps) => {
   const classes = useStyles();
   let oldColumn = comparecolumns;
   const[columns,setColumns] = useState(comparecolumns);
   const[editColumn,setEditColumns] = useState(false);
   const[searchFilter,setSearchFilter] = useState('');
   const[searchText,setSearchText] = useState('');
   const[dataRows,setDataRows] = useState([]);
   const[chartData,setChartData] = useState([]);
   const[dataSingleRows,setDataSingleRows] = useState([{chart:[],chart24:[]}]);
   useEffect(() => {
		 let dataFiler:any = [];
		 if(searchFilter !== ''){ dataFiler.push("category="+searchFilter) }
		 if(searchText !== ''){ dataFiler.push("search="+searchText) }
		 let url = API_URL+'synchronyapi.php';
		 if(dataFiler.length > 0){ url += "?"+(dataFiler.join("&"));}
         fetch(url)
         .then(response =>response.json())
         .then(data => { for(var i=0;i<data.result.length;i++){data.result[i].twitter_followers = <TwitterFollowers followers={data.result[i].twitter_followers}/>; data.result[i].title =data.result[i].name; data.result[i].accordionData = <PoolDatas row={data.result[i]}/>; data.result[i].name = <PoolName name={data.result[i].name} image={data.result[i].logo}/>; } setDataRows(data.result);
			setChartData(data.chart);
		 })
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
   const setEditColumn = (status) =>{
	   if(status === true){
	   let newColumn = ['','blank'];
		oldColumn.push(newColumn);
		setColumns(oldColumn);
	   }else{
		   oldColumn.pop();
		   
	   }
	   setEditColumns(status);
	   setColumns(oldColumn);
	   
   }
   return (
      <div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         <Container fixed>
         
       {/* Second Section*/}
        <Typography className={classes.subtitle} variant="h2">
        My basket
        </Typography>
         <div className={classes.tabinnercontent}>
          <div className={classes.compareTable}>
            <Grid container>
              <Grid item xs={6}>
               <Typography>
                  List
               </Typography>
              </Grid>
              <Grid  item xs={6} className={classes.compareBtnGroup}>
			 {editColumn === false ? 
			   <div className={classes.btnEditTB}>
				<Button variant="contained" onClick={()=>{setEditColumn(true)}}><EditIcon/>Edit</Button>
               </div>
			   :
               <div className={classes.btnsBuilders}>
                          
                          <Button className="transparent_buil_btn" variant="contained" color="primary" onClick={()=>{setEditColumn(false)}}>Cancel</Button>
                          <Button className="buil_btn" variant="contained" color="primary">Save</Button>
                      </div>
			 }
              </Grid>
            </Grid>
          </div>
          </div>



		<TableGrid 
          columns ={dataColumn}
          rows = {dataRows}
          tablePagination={false}
		    accordion={true}
         />

        <div className={classes.graphPrice}>
         <div className={classes.tabinnercontent}>
          <div className={classes.compareTable}>
            <Grid container>
              <Grid item xs={6}>
               <Typography className={classes.pricehead}>
                  Price <ArrowDropDownIcon/>
               </Typography>
              </Grid>
              <Grid  item xs={6} className={classes.compareBtnGroup}>
               <MenuList className={classes.graphBtn}>
                  <MenuItem>24h</MenuItem>
                  <MenuItem>7d</MenuItem>
                  <MenuItem>1m</MenuItem>
                  <MenuItem>3m</MenuItem>
                  <MenuItem>6m</MenuItem>
                  <MenuItem>1y</MenuItem>
               </MenuList>
              </Grid>
            </Grid>
          </div>
		   <CartGraphData data={chartData}/>
		  
         <div className={classes.chartFt}>
             <span><i style={{background:'#DD425A'}}></i> Solana</span>
             <span><i style={{background:'#FF7B43'}}></i> Raydium</span>
             <span><i style={{background:'#4CAF50'}}></i> Bonfida</span>
             <span><i style={{background:'#4A4DE6'}}></i>  Akash Network</span>
          </div>
          </div>
          </div>
         </Container>
         <Footer {...props}/>
      </div>
  );
};

export default CompareList;
