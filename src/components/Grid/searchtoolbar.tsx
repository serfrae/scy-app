import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {InputBase,Button, Grid, FormControl, InputLabel, Select, Slider} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FilterIcon from '../../assets/icon/filter_list.svg';
import useStyles from "./styles";
  export default function SearchToolBar (props: any){
        const classes = useStyles();
        const [openFilter,setOpenFilter]= useState(false);
        const marks = [
          {
            value: 0,
            label: '0%',
          },
          {
            value: 100,
            label: '100%',
          },
        ];
        
        const taogleSearchFilter = () =>{
         let cpenFilter = !openFilter;
          setOpenFilter(cpenFilter);
         }
        return (
          <Toolbar
            className={classes.searchToolbarGrid}
          >
             <Grid container>
                  <Grid item xs={8}>
                    <Typography className="title" variant="h6" id="tableTitle" component="div">
                       {props.title}
                    </Typography>
                    
                  </Grid>
                  <Grid item xs={4}>
                  <Tooltip title="Filter list">
                      <Button variant="contained" color="primary" aria-label="filter list" onClick={taogleSearchFilter}>
                      <img src={FilterIcon} className="filterIcons" alt=""/> Filter
                      </Button>
                    </Tooltip>
                    <div className={classes.search}>
                       <InputBase
                          placeholder="Search"
                          inputProps={{ 'aria-label': 'search' }}
                        />
                         <SearchIcon />
                    </div>
                  </Grid>
            { openFilter === true && 
            <Grid className={classes.searchFilter} container>
              <Grid item xs={4}>
              
                  <InputLabel htmlFor="filled-age-native-simple">Assets</InputLabel>
                  <FormControl variant="filled" className={classes.formControl}> 
                      <Select>
                        <MenuItem  value={10}>Ten</MenuItem >
                        <MenuItem  value={20}>Twenty</MenuItem >
                        <MenuItem  value={30}>Thirty</MenuItem >
                      </Select>
                    </FormControl>
                      
                  </Grid>
                  <Grid item xs={4} className="middlesection">
                 
                   <div>
                        <Typography id="track-inverted-range-slider" gutterBottom>
                          Inverted track range
                        </Typography>
                        <Slider
                          track="inverted"
                          aria-labelledby="track-inverted-range-slider"
                          defaultValue={[25,50]}
                          marks={marks}
                        />
                  </div>
                   
                  </Grid>
                  <Grid item xs={4}>
                    
                    <div>
                        <Typography id="track-inverted-range-slider" gutterBottom>
                        Performance (24h)
                        </Typography>
                        <Slider
                          track="inverted"
                          aria-labelledby="track-inverted-range-slider"
                          defaultValue={[25,50]}
                          marks={marks}
                        />
                     </div>
                   
                  </Grid>
               </Grid>
              }
             </Grid>
          </Toolbar>
        );
      };