import React from "react";
import { RouteComponentProps,useHistory } from "react-router-dom";
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
	 const defaultParam = {
		Indexname: '',
		CalculationMethod: '',
		EvalutaionTimeframe:'',
		RangeFrom:'',
		RangeTo:'',
		RebalanceInterval:'',
		//WhitelistedTokens:'',
		DeviationThreshold:'',
		minWeighting:'',
		maxWeighting:'',
		Summary:'',
		MaximumAssets:'',
		EvaluationRange:'',
      test : [''],
      WhitelistedTokens: [''],
      };
	  const history = useHistory();
      const [formData,setFormData] = React.useState(defaultParam);
      const handleSubmit = (event:any) => {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			};
			fetch('http://122.160.128.251/uploads/synchrony/postdata.php', requestOptions)
			.then(response => response.json())
			.then(data =>{ setFormData(defaultParam); localStorage.setItem("fromFollow","Yes"); history.push("/pools");});	
	  };



     // handle input change
      const handleInputChange = (e, index) => {
         e.preventDefault();
        const {  value } = e.target;
        const list = {...formData};
        list.WhitelistedTokens[index]= value;
        setFormData(list);
      };
       
      // handle click event of the Remove button
      const handleRemoveClick  = (e, index) => {
          e.preventDefault();
        const list = {...formData};
        list.WhitelistedTokens.splice(index, 1);
        setFormData(list);
      };
       
      //handle click event of the Add button
      const handleAddClick = (e, index) => {
          e.preventDefault();
          const list = {...formData};
          let newIndex = index+1;
          list.WhitelistedTokens[newIndex] = '';
          setFormData(list);
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
                          <Button className="buil_btn" variant="contained" color="primary" onClick={handleSubmit}>Publish</Button>
                      </div>
                   </Paper>
                 </Grid>
               </Grid>
              

               <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                     <TextField value={formData.Indexname}  label="Name" placeholder="Index name" fullWidth  InputLabelProps={{shrink: true, }}   onChange={(e)=>{setFormData({...formData,Indexname:e.target.value})}}/>
                  </Grid>
                  <Grid item xs={6}>

                  <FormControl className={classes.formControl}>
                     <InputLabel shrink htmlFor="age-native-label-placeholder">
                     Calculation Method
                     </InputLabel>
                     <NativeSelect
                     value={formData.CalculationMethod}
                     onChange={(e)=>{setFormData({...formData,CalculationMethod:e.target.value})}}
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
                     <InputLabel shrink htmlFor="age-native-label-placeholder">Evalutaion Timeframe </InputLabel>
                     <NativeSelect
                     value={formData.EvalutaionTimeframe} onChange={(e)=>{setFormData({...formData,EvalutaionTimeframe:e.target.value})}} placeholder="Choose Time Period" fullWidth
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
                     <TextField  label="Range" placeholder="6"  fullWidth  InputLabelProps={{shrink: true, }} onChange={(e)=>{setFormData({...formData,RangeFrom:e.target.value})}} value={formData.RangeFrom} />
                     <span>%</span>
                  </Grid>

                   <Grid className={classes.managePercentage} item xs={3}>
                     <TextField  label="&nbsp;" placeholder="20"  fullWidth  InputLabelProps={{shrink: true, }} onChange={(e)=>{setFormData({...formData,RangeTo:e.target.value})}} value={formData.RangeTo}/>
                      <span>%</span>
                  </Grid>

                   <Grid item xs={6}>

                   <FormControl className={classes.formControl}>
                     <InputLabel shrink htmlFor="age-native-label-placeholder">Rebalance Interval </InputLabel>
                     <NativeSelect
					 onChange={(e)=>{setFormData({...formData,RebalanceInterval:e.target.value})}}
                     value={formData.RebalanceInterval}  placeholder="Choose Rebalance Period" fullWidth
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
                     <TextField  onChange={(e)=>{setFormData({...formData,DeviationThreshold:e.target.value})}} label="Deviation Threshold" placeholder="Deviation Threshold" fullWidth  InputLabelProps={{shrink: true, }} value={formData.DeviationThreshold}/>
                  </Grid>

                  

                  <Grid className={classes.managePercentage} item xs={3}>
                     <TextField  label="Min/Max Weighting" placeholder="Min"  fullWidth  InputLabelProps={{shrink: true, }} onChange={(e)=>{setFormData({...formData,minWeighting:e.target.value})}} value={formData.minWeighting} />
                     
                  </Grid>

                   <Grid className={classes.managePercentage} item xs={3}>
                     <TextField  label="&nbsp;" placeholder="Max"  fullWidth  InputLabelProps={{shrink: true, }} onChange={(e)=>{setFormData({...formData,maxWeighting:e.target.value})}} value={formData.maxWeighting}/>
                      
                  </Grid>

                  <Grid item xs={6}>
                     <TextField  onChange={(e)=>{setFormData({...formData,EvaluationRange:e.target.value})}} label="Evaluation Range" placeholder="Evaluation Range" fullWidth  InputLabelProps={{shrink: true, }} value={formData.EvaluationRange} />
                  </Grid>

                  <Grid item xs={6}>
                     <TextField  onChange={(e)=>{setFormData({...formData,MaximumAssets:e.target.value})}} label="Maximum Number of Assets" placeholder="Index name" fullWidth  InputLabelProps={{shrink: true, }} value={formData.MaximumAssets} />
                  </Grid>
                 
                  
                 {/* <Grid item xs={6}> 
                  <FormControl className={classes.formControl}>
                     <InputLabel shrink htmlFor="age-native-label-placeholder">Set Maximum fees </InputLabel>
                     <NativeSelect
                     value={formData.age} onChange={handleChange} placeholder="Choose maximum fees" fullWidth
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

                  </Grid>*/}


                  
                  <Grid item xs={12}> 
                  <InputLabel>Summary</InputLabel>
                  <TextareaAutosize onChange={(e)=>{setFormData({...formData,Summary:e.target.value})}}  aria-label="empty textarea" placeholder="Enter Index Summary"  value={formData.Summary}/>
                  </Grid>

                   {formData.WhitelistedTokens.map((x, i) => {
                       return (
                        <Grid item xs={12} style={{position:'relative',}}>
                           <TextField onChange={e => handleInputChange(e, i)}  label="Whitelisted Tokens" placeholder="Whitelisted Tokens" fullWidth  InputLabelProps={{shrink: true, }} value={formData.WhitelistedTokens[i]} />
                           
                           {formData.WhitelistedTokens.length !== 1 &&     <Button className={classes.addmorefields}  onClick={(e) => handleRemoveClick(e,i)}>X</Button>}
                           {formData.WhitelistedTokens.length - 1 === i && <Button className={classes.addmorefields}  onClick={(e) => handleAddClick(e,i)}>Add More</Button>}
                        </Grid>
                       );
                     })}

                  {/*<Button className="buil_btn" variant="contained" color="primary" onClick={handleSubmit}>Add Index</Button>*/}
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
                  <Button className="buil_btn" variant="contained" color="primary" >Build Index</Button>
              </div>
            </div>
         </div>
     

         </Container>
         <Footer {...props}/>
      </div>
  );
};

export default BuilderList;
