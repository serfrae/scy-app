import React,{useState}  from "react";
import useStyles from "../dashboard/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Graphs from "../../components/Grid/graphs";
import Link from '@material-ui/core/Link';
import {optionsLine} from '../../models/connected';

export default function ResponsiveDialog() {
  
}

export const PoolDatas = ({row}) => {
   const classes = useStyles();
    let graphData:any = {
	  labels: [],
	  customLables:['24h','7d','30d'],
	  datasets: [
		{
		  label: '# of Votes',
		  data: [],
		  fill: false,
		  background: 'linear-gradient(180deg, rgba(118, 136, 201, 0.4) 0%, rgba(27, 28, 33, 0) 61.85%)',
		  borderColor: '#4A4DE6',
		},
		
	  ],
	};
	
	if(row.chart24 !== null){
	for(let i = 0; i <= row.chart24.length; i++  ){
			if(row.chart24[i]){
				graphData['datasets'][0]['data'].push(row.chart24[i][1]);
				graphData['labels'].push(row.chart24[i][0]);
			}
		}
	}
	const[chartData,setChartDatas] = useState('chart24');
	let graphData24:any = {
	  labels: [],
	  customLables:['24h','7d','30d'],
	  datasets: [
		{
		  label: '# of Votes',
		  data: [],
		  fill: false,
		  background: 'linear-gradient(180deg, rgba(118, 136, 201, 0.4) 0%, rgba(27, 28, 33, 0) 61.85%)',
		  borderColor: '#4A4DE6',
		},
		
	  ],
	};
	
	
	const[filterGraphData,setFilterGraphData] = useState(graphData24);
	const setChartData = (key)=>{
		setChartDatas(key);
		if(row[key] !== null){
		for(let i = 0; i <= row[key].length; i++  ){
				if(row[key][i]){
					graphData24['datasets'][0]['data'].push(row[key][i][1]);
					graphData24['labels'].push(row[key][i][0]);
				}
			}
		}
		setFilterGraphData(graphData24);
	}
    return (
      <div className={classes.TableAcrodSec}>
      <div className={classes.root} style={{paddingTop:0,}}>
      <div className={classes.firstBuilderbox}>
        <div className='tabinnercontent tabTableInner' style={{marginTop:0,}}>
          <Grid container>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                  <div className={classes.rigthside_indexbox}>
                    <h5>Key Stats</h5>
                  </div>
                  <div className={classes.divederTwobox}>
                    <h5>Total Value </h5>
                    <p>{row.total_value_locked} USD</p>
                  </div>
                  <div className={classes.divederTwobox}>
                    <h5>Locked</h5>
                    <p>Locked</p>
                  </div>
                  <div className={classes.divederTwobox}>
                    <h5>24H</h5>
                    <p>{row.price_24_h} %</p>
                  </div>
                </Paper>

                 <Paper className={classes.paper} style={{marginTop:20, borderRadius:4,}}>
                  <div className={classes.rigthside_indexbox}>
                    <h5>Ecosystem Links</h5>
                  </div>
                  <div className={classes.divederTwobox}>
					{row.ecosystem_links && row.ecosystem_links.map((obj,key)=>(
						<Link href= {obj.links} key={key}>{obj.name}</Link>
					 ))}
                    
                  </div>
                  
                </Paper>
                 <Paper className={classes.paper} style={{marginTop:20, borderRadius:4,}}>
                  <div className={classes.rigthside_indexbox}>
                    <h5>Smart Contracts</h5>
                  </div>
                  <div className={classes.divederTwobox} style={{width:'100%',}}>
					  {row.contract_address}
                   </div>
                </Paper>
				 <Paper className={classes.paper} style={{marginTop:20, borderRadius:4,}}>
                  <div className={classes.rigthside_indexbox}>
                    <h5>White Papper</h5>
                  </div>
                  <div className={classes.divederTwobox} style={{width:'100%',}}>
					  {row.white_paper}
                   </div>
                </Paper>
            </Grid>
            <Grid item xs={9} className={classes.tableDetailToggle}>
              <Paper>
              <div className={classes.valuetogglehead}>{row.name} &nbsp; Price Chart </div>
                <div className={classes.graphImg}>
				  <div className ={ chartData === '24h' ? 'hidegraph':'showgraph' }>
					 {chartData === "chart24" ?
					 <>
					{row.chart24 !== null && row.chart24.length !== 0 && 	
					  <Graphs type={'Line'} data={graphData} options={optionsLine} setChartData={setChartData}  chartData={chartData}/>
					}</>
					:
					<Graphs type={'Line'} data={filterGraphData} options={optionsLine} setChartData={setChartData}  chartData={chartData}/>
					}
                </div>
                </div>
              </Paper>
              <div className={classes.stateKey}>
               <div dangerouslySetInnerHTML={{__html: row.overview}} />
              </div>
			   <div className={classes.stateKey}>
					<h2>It's Like</h2>
					<div dangerouslySetInnerHTML={{__html: row.itslike}} />
              </div>
            </Grid>
           
          </Grid>
        </div>



      </div>
      </div>
      </div>
  );
};

