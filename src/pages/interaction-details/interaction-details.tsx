import { RouteComponentProps } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import useStyles from "../dashboard/styles";
import Container from '@material-ui/core/Container';
import Graphs from '../../components/Grid/graphs';
import {graphdata,graphFunddata} from '../../models/connected';
import { Typography,Box } from "@material-ui/core";
import ActivitiesList from '../../components/Grid/activities'
import { activitiesData } from "../../models/activities";

const InteractionDetails = (props: RouteComponentProps) => {
   const classes = useStyles();
   
   return (
      <div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         <Container fixed className={classes.interactionBox}>
         <Grid className={classes.secondBox} container>
            <Grid item xs={4}>
                    <Typography className={classes.interactionHead}>Empty</Typography>
                    <Paper>
                     <ActivitiesList activitiesData = {[]}/>
                        </Paper>
             </Grid>
             <Grid item xs={4}>
             <Typography className={classes.interactionHead}>Normal</Typography>
             <Paper>
              <div ><ActivitiesList activitiesData = {activitiesData}/></div>
                        </Paper>
             </Grid>
             <Grid item xs={4}>
             <Typography className={classes.interactionHead}>Load more - can scroll</Typography>
             <Paper>
              <div ><ActivitiesList activitiesData = {activitiesData}/></div>
                        </Paper>
             </Grid>
          </Grid>
          <div className={classes.poolsInterction}>
          <Grid className={classes.secondBox} container>
          <Grid item xs={4} className={classes.portfolio}>
          <Typography className={classes.interactionHead}>Normal</Typography>
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
            <Grid item xs={4} className={classes.portfolio}>
            <Typography className={classes.interactionHead}>Hover</Typography>
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
            <Grid item xs={4} className={classes.portfolio}>
            <Typography className={classes.interactionHead}> <small></small>  </Typography>
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
          <Grid className={classes.secondBox} container>
          <Grid item xs={4} className={classes.portfolio}>
            <Typography className={classes.interactionHead}>A lot of funds</Typography>
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
            <Grid item xs={4} className={classes.portfolio}>
            <Typography className={classes.interactionHead}>A lot of funds - hover</Typography>
                 <Paper className={classes.boxgrid}>
                 <Typography className={classes.prottitle} variant="h3">
                       Portfolio Allocation
                  </Typography>
                  <div className={classes.boxSec}>
                  <Graphs
                   type="Doughnut"
                   data={graphFunddata}
                  />
                  </div>
              
                  </Paper>
            </Grid>
             <Grid item xs={4}>
             
             </Grid>
          </Grid>      
         </div>
         <Box m="8rem" />
         </Container>
         <Footer {...props}/>
      </div>
  );
};

export default InteractionDetails;
