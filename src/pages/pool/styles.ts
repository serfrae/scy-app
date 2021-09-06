import {  makeStyles, createStyles } from '@material-ui/core/styles';
export default makeStyles((theme : any) => createStyles({
   poolname:{
      display: 'inline-block !important',
      width:'auto',
      float:'left',
      textAlign:'right',
     '& .coinIcons':{
         width:'25px',
         marginRight:'15px !important',
     }, 
   },
   twitterTable:{
      display: 'flex',
      alignItems:'center',
      '& h3':{
         fontSize:14,
         fontWeight:400,
         marginRight:10,
      },
      '& .MuiSvgIcon-root':{
         width:20,
      },
   },
}));
