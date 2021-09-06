import  React from "react";
import barNoDataIcon from '../../assets/icon/barnodata.svg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyles from "../../pages/dashboard/styles";
import { Bar, Doughnut, Line} from 'react-chartjs-2';
import noDataIcon from '../../assets/icon/nodata.svg';
const Graphs = (props: any) => {
    const classes = useStyles();
	const graphData = {"chart24":'24h',"chart":'7d',"chart30":'30d'};
	const setChartDatakey = (key)=>{
		let dataKey = "";
		if(key === "24h"){
			dataKey = "chart24";
		}else if(key === "7d"){
			dataKey = "chart";
		}else if(key === "30d"){
			dataKey = "chart30";
		}
		console.log(key,'key');
		console.log(dataKey,'dataKey');
		props.setChartData(dataKey);
	}
    return (
      <>
        {
            props.type === "Doughnut" &&
           <> {props.data.datasets.length === 0 ?
                <div className="nodata"><img src={noDataIcon} alt=""/><p>No Data</p></div>
               : 
               <> <Doughnut
                  data={props.data}
                  type={"doughnut"}
                  options= {
                        {responsive: true,
                        plugins: {
                        legend: {
                            position: 'bottom',
                            display: false,
                           
                        },
                        title: {
                            display: true,
                            
                        }
                        
                         }
                        }
                     }
                  />
                  <div className={classes.portfolioList}>
                  <List>
                     
                      { (props.data.labels.length <=4 )? props.data.labels.map((key:any,index:any)=>(
                             <ListItem key={index}>
                                 <small className={classes.redbg} style={{background:props.data.datasets[0].backgroundColor[index]}}></small>{key}
                            </ListItem>
                      ))
                        :
                       props.data.labels.map((key:any,index:number)=>(
                            <>{(index <= 2) && 
                            <ListItem key={index}>
                                <small className={classes.redbg} style={{background:props.data.datasets[0].backgroundColor[index]}}></small>{key}
                           </ListItem>
                           
                            }</>
                         ))

                       
                    }
                      
                     
                  </List>
              </div></>
            }
            
            
            </>

        }
        {
            props.type === "Bar" &&
                <>
                    {props.data.datasets.length === 0 ?
                    <div className="nodata"><img src={barNoDataIcon} alt=""/><p>No Data</p></div>
                    : 
                    <> <div className={classes.pullRight}>
                        <List className={classes.graphBtn}>
                        {props.data.datasets.map((key:any,index:any)=>(
                            <ListItem key={index}>
                                {key.label}
                            </ListItem>
                            ))}
                              
                        </List>
                    </div>
                    <div className={classes.clearfix}></div>
                    <Bar
                        data={props.data}
                        options={props.options}
                        type={"bar"}
                        />  <div className={classes.clearfix}></div> </>
                }
                </>

        }
          {
            props.type === "Line" &&
                <>
                    {props.data.datasets.length === 0 ?
                    <div className="nodata"><img src={noDataIcon} alt=""/><p>No Data</p></div>
                    : 
                    <> <div className={classes.pullRight}>
                        <List className={classes.graphBtn}>
                        {props.data.customLables.map((key:any,index:any)=>(
                            <ListItem className={ graphData[props.chartData] === key ? 'active':''} key={index} onClick= {()=> { setChartDatakey(key) }}>
                                {key}
                            </ListItem>
                            ))}
                              
                        </List>
                    </div>
                    <div className={classes.clearfix}></div>
                    <Line
                        data={props.data}
                        options={props.options}
                        type={"line"}
                        /></>
                }
                </>

        }

      </>
   );
 };
 
 export default Graphs;
 