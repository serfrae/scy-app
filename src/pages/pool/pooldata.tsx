import React  from "react";
import useStyles from "../dashboard/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Graphs from "../../components/Grid/graphs";
import Button from '@material-ui/core/Button';
import dashIcon from '../../assets/icon/dash-dash.svg';
import vertcoinIcon from '../../assets/icon/vertcoin-right.svg';
import {columnsVault,columnsReturn,rowsVault,rowsReturn,dataLine,optionsLine} from '../../models/connected';
import editIcon from '../../assets/icon/edit-white.svg';
import cartCompareIcon from '../../assets/icon/cartCompareIcon.svg';
export const PoolData = () => {
   const classes = useStyles();
    return (
      <div className={classes.TableAcrodSec}>
      <div className={classes.root} style={{paddingTop:0,}}>
      <div className={classes.firstBuilderbox}>
        <div className={classes.tabinnercontent} style={{marginTop:0,}}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <div className={classes.graphImg}>
                  <Graphs type={'Line'} data={dataLine} options={optionsLine} />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <div className={classes.rigthside_indexbox}>
                  <h5>Asset Summary</h5>
                  <p> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className={classes.divederTwobox}>
                  <h5>Price</h5>
                  <p>$3.21</p>
                </div>
                <div className={classes.divederTwobox}>
                  <h5>Market Cap</h5>
                  <p>$425,960.21</p>
                </div>
                <div className={classes.divederTwobox}>
                  <h5>Volume (24h)</h5>
                  <p>$425,960.21</p>
                </div>
                <div className={classes.divederTwobox}>
                  <h5>Nav</h5>
                  <p>$5,425,960.21</p>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className={classes.btnsBuilders}>
                  <div className={classes.btnsBuildersSpace}>
                    <Button className="transparent_buil_btn" variant="contained" color="primary"><img src={cartCompareIcon} />Add to basket</Button>
                    <Button className="buil_btn" variant="contained" color="primary">More detail</Button>
                </div>
                </div>
              </Paper>
             </Grid>
          </Grid>
        </div>
      </div>
      </div>
      </div>
  );
};

