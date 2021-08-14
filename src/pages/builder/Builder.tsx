import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import useStyles from "../dashboard/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {dataLine,optionsLine} from '../../models/connected';
import Graphs from "../../components/Grid/graphs";
import dashIcon from '../../assets/icon/dash-dash.svg';
import TextField from '@material-ui/core/TextField'; 
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import vertcoinIcon from '../../assets/icon/vertcoin-right.svg';
import emptyBoxIcon from '../../assets/icon/emptyBox.svg';
import editIcon from '../../assets/icon/edit-white.svg';
import cartCompareIcon from '../../assets/icon/cartCompareIcon.svg';
import Container from '@material-ui/core/Container';
const BuilderList = (props: RouteComponentProps) => {
   const classes = useStyles();
      const [state] = React.useState({
      age: '',
      name: 'age',
      });
      const handleChange = (event:any) => {
   
  };
   return (
      <div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         <Container fixed>
                {/* Second Section*/}
     
         <div className={classes.builder_header}>
            <Typography className={classes.subtitle} variant="h2">
            My Index
            </Typography>
            <Button className="buildindex_btn" variant="contained" color="primary"
            >Build Index</Button>
         </div>

         <div className={classes.firstBuilderbox}>
         <div className={classes.tabinnercontent}>
          <Grid container spacing={6}>
           <Grid item xs={6}>
             <Paper className={classes.paper}>
                <div className={classes.graphImg}>
                   
                   <div className={classes.titlewithImg}>
                      <img src={dashIcon} alt=""/>
                      <img src={vertcoinIcon} alt=""/>
                      <h2>Index name</h2>
                   </div>

                  <Graphs type={'Line'} data={dataLine} options={optionsLine} />
               </div>
             </Paper>
           </Grid>
           <Grid item xs={6}>
             <Paper className={classes.paper}>
                <div className={classes.btnsBuilders}>
                    <Button className="transparent_buil_btn" variant="contained" color="primary"><img src={editIcon} alt=""/>Edit</Button>
                    <Button className="transparent_buil_btn" variant="contained" color="primary"><img src={cartCompareIcon} alt="Icon Compare"/>Compare in basket</Button>
                    <Button className="buil_btn" variant="contained" color="primary">More details</Button>
                </div>

                <div className={classes.rigthside_indexbox}>
                   <h5>Asset Summary</h5>
                   <p>
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                   </p>
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
          </Grid>
          </div>
          </div>

         <div className={classes.secondBuilderbox}>
            <div className={classes.tabinnercontent}>
               <Grid container spacing={2}>
                 <Grid item xs={6}>
                   <Paper className={classes.paper}>
                      <div className={classes.titlewithImg}>
                      <h2 className={classes.headingSecondtext}>Index name</h2>
                   </div>
                   </Paper>
                 </Grid>
                 <Grid item xs={6}>
                   <Paper className={classes.paper}>
                      <div className={classes.btnsBuilders}>
                          <Button className="transparent_buil_btn" variant="contained" color="primary">Save</Button>
                          <Button className="transparent_buil_btn" variant="contained" color="primary"><img src={cartCompareIcon} alt=""/>Compare in basket</Button>
                          <Button className="buil_btn" variant="contained" color="primary">Publish</Button>
                      </div>
                   </Paper>
                 </Grid>
               </Grid>
              

               <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                     <TextField  label="Name" placeholder="Index name" fullWidth  InputLabelProps={{shrink: true, }} />
                  </Grid>
                  <Grid item xs={6}>

                  <FormControl className={classes.formControl}>
                     <InputLabel shrink htmlFor="age-native-label-placeholder">
                     Calculation Method
                     </InputLabel>
                     <NativeSelect
                     value={state.age}
                     onChange={handleChange}
                     placeholder="Choose calculation method"
                     fullWidth
                     inputProps={{
                     name: 'age',
                     id: 'age-native-label-placeholder',
                     }}
                     >
                     <option value="">Choose calculation method</option>
                     <option value={10}>Ten</option>
                     <option value={20}>Twenty</option>
                     <option value={30}>Thirty</option>
                     </NativeSelect>
                     </FormControl>

                  </Grid>

                  <Grid item xs={6}>
                     <FormControl className={classes.formControl}>
                     <InputLabel shrink htmlFor="age-native-label-placeholder">Time Periodc </InputLabel>
                     <NativeSelect
                     value={state.age} onChange={handleChange} placeholder="Choose Time Period" fullWidth
                     inputProps={{
                     name: 'age',
                     id: 'age-native-label-placeholder',
                     }}
                     >
                     <option value="">Choose calculation method</option>
                     <option value={10}>Ten</option>
                     <option value={20}>Twenty</option>
                     <option value={30}>Thirty</option>
                     </NativeSelect>
                     </FormControl>
                     
                  </Grid>

                  <Grid className={classes.managePercentage} item xs={3}>
                     <TextField  label="Range" placeholder="6"  fullWidth  InputLabelProps={{shrink: true, }} />
                     <span>%</span>
                  </Grid>

                   <Grid className={classes.managePercentage} item xs={3}>
                     <TextField  label="&nbsp;" placeholder="20"  fullWidth  InputLabelProps={{shrink: true, }} />
                      <span>%</span>
                  </Grid>

                   <Grid item xs={6}>

                   <FormControl className={classes.formControl}>
                     <InputLabel shrink htmlFor="age-native-label-placeholder">Rebalance Period </InputLabel>
                     <NativeSelect
                     value={state.age} onChange={handleChange} placeholder="Choose Rebalance Period" fullWidth
                     inputProps={{
                     name: 'age',
                     id: 'age-native-label-placeholder',
                     }}
                     >
                     <option value="">Choose calculation method</option>
                     <option value={10}>Ten</option>
                     <option value={20}>Twenty</option>
                     <option value={30}>Thirty</option>
                     </NativeSelect>
                     </FormControl>
                  </Grid>
                 
                  
                  <Grid item xs={6}> 
                  <FormControl className={classes.formControl}>
                     <InputLabel shrink htmlFor="age-native-label-placeholder">Set Maximum fees </InputLabel>
                     <NativeSelect
                     value={state.age} onChange={handleChange} placeholder="Choose maximum fees" fullWidth
                     inputProps={{
                     name: 'age',
                     id: 'age-native-label-placeholder',
                     }}
                     >
                     <option value="">Choose calculation method</option>
                     <option value={10}>Ten</option>
                     <option value={20}>Twenty</option>
                     <option value={30}>Thirty</option>
                     </NativeSelect>
                     </FormControl>

                  </Grid>
                  
                  <Grid item xs={12}> 
                  <InputLabel>Summary</InputLabel>
                  <TextareaAutosize  aria-label="empty textarea" placeholder="Enter Index Summary"  />
                  </Grid>
                 
                  </Grid>
               </form>
          
              
            </div>
         </div>

         <div className={classes.secondBuilderbox}>
            <div className={classes.tabinnercontent}>
              <div className={classes.emptyBuilder}>
                 <img src={emptyBoxIcon} alt=""/>
                 <Typography variant="h3">
                    You don’t have any index yet.
                 </Typography>
                  <Button className="buil_btn" variant="contained" color="primary">Build Index</Button>
              </div>
            </div>
         </div>
     

         </Container>
         <Footer {...props}/>
      </div>
  );
};

export default BuilderList;
