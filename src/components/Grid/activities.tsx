import  React from "react";
import { List, ListItem,Typography } from "@material-ui/core";
import useStyles from "../../components/Header/styles";
import nodata from '../../assets/icon/nodata.svg';
import downIcon from '../../assets/icon/down.svg';
const ActivitiesList = (props: any) => {
    const classes = useStyles();
    const [page] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);
    return (
        <div className={classes.activitieList}> <Typography>Activities</Typography>
        <List>
            { props.activitiesData.length > 0 ?
                <> 
                {props.activitiesData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((obj:any,index:any)=>(
                   <ListItem key={index}>
                        <Typography className={classes.topdate}>{obj.date} <small>{obj.shares}</small></Typography>
                        <Typography variant="h4">{obj.title} </Typography>
                        <Typography className={classes.iconList}> <img src={obj.icons} alt=""/> {obj.price}</Typography>
                   </ListItem>
                    ))}
                </>
            :
             <div className="nodata"><img src={nodata} alt=""/><p>No Data</p></div>
            }

             { (props.activitiesData.length > 3 && rowsPerPage < props.activitiesData.length) &&
                <ListItem  className={classes.droplink} onClick={(e)=>{setRowsPerPage(rowsPerPage+3)}}>
                     <Typography>Load more <img src={downIcon} alt=""/></Typography>
                </ListItem> 
            }   
        </List>    
        </div>
    )
}  

export default ActivitiesList;