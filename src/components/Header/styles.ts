import { fade, makeStyles,  createStyles } from '@material-ui/core/styles';

export default makeStyles((theme : any) => createStyles({
  header: {
    position:'fixed',
    top:"0",
    background: "#202232",
    '& .MuiListItem-root a':{
      display:'flex',
      fontSize:'14px',
      color:'rgba(255, 255, 255, 0.9)',
      alignItems:'center',
      textDecoration: 'none',
    },
    '& .MuiListItem-root a svg':{
      marginRight:'5px',
    },
    '& .MuiList-root':{
      '@media (max-width:768px)':{
        display:'none',
      },
    },
    '& img':{
      width:'125px',
      marginRight:"10px",
    },
  },
  withlogin:{
   '& svg':{
      background:'rgba(230, 231, 233, 0.04)',
      borderRadius:'4px',
   },
  },
  logoIcon:{
    flex:"0 0 27%",
    display:"flex",
    alignItems:'center',
  },
  menuItem:{
    flex:'0 0 46%',
  },
  innermenu:{
    display:'flex'
  },
  title:{
    marginLeft:'13px',
    marginRight:'8px',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems:'center',
    },
  },
  chipIcon:{
  '& Chip':{
   background:'#4A4DE6'
  }
  },
  chipinner:{
    background:"#4A4DE6",
    color:"#fff",
  },
  chipbtn:{
    background:'linear-gradient(270deg, #6231ED -9.12%, #4A4DE6 24.42%, #3A69DC 67.62%, #7ED6C4 122.3%)',
    color:"#fff", 
    fontSize:'14px',
    padding: '6px 12px',
    '& svg':{
      fill:'#fff',
      marginLeft:'0px',
      marginRight:'0px'
    },
    '& span':{
      paddingRight:'0px',
      paddingLeft:'6px',
      },
  },
  chipwallet:{
    // color:"#fff",
    //background:' rgba(230, 231, 233, 0.04)',
    width:'32px',
    height:'32px',
    padding:'4px',
    marginLeft:'-11px',
    //borderRadius:'4px'
  },
  listmenu:{
    paddingLeft:"10px",
    paddingRight:"10px",
    justifyContent:'center',
    '& svg':{
       marginRight:'5px',
    }
  },
  menuactive:{
    padding:'0',
   '& .navbar-item':{
      borderRadius:'4px',
      padding:'8px 16px',
    },
    '& .active':{
      background:"rgba(230, 231, 233, 0.08)",
    }
  },
  footer:{
    background:"#1A1A23",
    '& Button':{
    marginLeft:'0',
    marginRight:'0',
    fontSize:'14px',
    fontWeight:'normal',
    color:'rgba(255, 255, 255, 0.7)',
    textTransform:'initial',
  },
  '& .MuiToolbar-root':{
    '@media (max-width:768px)':{
      padding:'0',
      maxWidth:'100%',
    },
  },
  '& .MuiTypography-root':{
     '@media (max-width:768px)':{
      width:'100%',
      textAlign:'center',
    },
  },
  },
  footerinner:{
    width:'100%',
    maxWidth:'1280px',
    margin:'0 auto',
  },
  fttitle:{
    marginLeft:'0',
    marginRight:'0',
    fontSize:'14px',
    fontWeight:'normal',
    color:'rgba(255, 255, 255, 0.7)',
  },
  logotype: {
    color: "white",
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
    fontWeight: 500,
    fontSize: 18,
    whiteSpace: "nowrap",
  },
  appBar: {
    width: "100vw",
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
      
      '& .withlogin':{
          display:'flex',
          alignItems:'center',
      },
  },
  headerMenuButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5),
  },
  headerIcon: {
    fontSize: 28,
    color: "rgba(255, 255, 255, 0.35)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  notifications:{

  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    paper:{
      
    },
  },
  watchicon:{
    padding:'4px 4px',
    background:'rgba(230, 231, 233, 0.04)',
    borderRadius:'4px',
    marginLeft: '12px',
    marginRight: '12px',
    width:'32px',
    height:'32px',
    color:'rgba(255, 255, 255, 0.9)',
    '& svg':{
      width:'16px',
      height:'16px'
    }
  },
  activitieList:{
         background:'#1A1A23',
         border:'1px solid #242636',
         borderRadius:'8px',
         paddingTop:'20px',
         color:'#fff',
         '& .MuiListItem-root':{
          display:'inline-block',
          padding:'0 20px',
          borderBottom:'solid 1px #242636',
          paddingBottom:'18px',
          paddingTop:'12px',
         },
         '& .MuiListItem-gutters p':{
          paddingLeft:'0px',
         },
         '& .MuiTypography-body1':{
            paddingLeft:'20px',
         },
         '& .MuiListItem-root p':{
          fontSize:'14px',  
         },
         '& .MuiTypography-h4':{
            fontSize: '14px',
            margin:'8px 0 14px 0',
         },
         '& .MuiList-root':{
          paddingTop:'12px',
          paddingBottom:'0',
          scrollbarWidth:'thin',
          overflowY:'scroll',
          paddingRight:'0',
          height:'425px',
          display:'grid',
          alignItems:'center',
         },
         '& .MuiLink-root':{
          display:'flex',
          alignItems:'center',
          justifyContent: 'center',
          paddingTop:'10px',
          textDecoration: 'none',
          color:'#4A4DE6',
        },
        '& .MuiLink-root img':{
          marginLeft:'4px',
        },
        '& ::-webkit-scrollbar':{
           width: '4px', 
           borderRadius:'10px',
        },
        '& ::-webkit-scrollbar-track':{
          background:'#1A1A23',
        },
        '& ::-webkit-scrollbar-thumb':{
           background:'rgba(255, 255, 255, 0.32)', 
        },
        '& .nodata':{
         textAlign:'center',
         padding:'105px 0',
        },
    },
   
    topdate:{
      color:'rgba(255, 255, 255, 0.42)',
      '& small':{
         color:'rgba(255, 255, 255, 0.9)',
         float:'right',
         fontSize:'14px',
    },
    },

   iconList:{
      display: 'flex',
      alignItems:'center',
      '& img':{
        marginRight:'8px',
      },
   },
   droplink:{
    textAlign:'center',
    '& .MuiTypography-root':{
    color:'#4A4DE6',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    },
    '& img':{
      marginLeft:'5px',
    },
   },
    activitiemain:{
      width:"324px",
      marginTop:'8px',
      marginRight:'50px',
      zIndex: 9999,
    },

    rigthIconsHeader:{
      display:'flex',
      '& img': {
        width:'18px',
      },
    },
    mianHeaderIcon: {
        width:'32px',
        height:'32px',
        background: 'rgba(230, 231, 233, 0.04)',
        borderRadius: '4px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'10px',
        position: 'relative',
        cursor:'pointer',
      '& img': {
        marginRight:'0px',
      },
      '& svg.MuiSvgIcon-root':{
        width: '19px',
        height: '19px',
      },
    },
    countercartHeader:{
       background: '#FFA000',
        minWidth: '20px',
        height:'18px',
        color: '#181819',
        fontSize:'12px',
        position: 'absolute',
        borderRadius: '50px',
        textAlign: 'center',
        lineHeight: '18px',
        top: '-5px',
        right: '-6px',
    },
	cartItemList:{
		
	},
  headerCart:{
   padding:'0px 20px',
   marginBottom:12,
   display:'block',
  },
  cartMenu:{
    width:334,
    padding:'12px 20px',
    borderBottom:'solid 1px #242636',
    display:'block',
    '& span':{
       marginLeft:14,
       lineHeight:'32px',
       fontSize:14,
    },
    '& img':{
     float:'left',
    },
    '& i':{
      float:'right',
    },
  },
  cartItemData:{
    '& .MuiPopover-paper':{
      background:'#1A1A23',
      color:'#fff',
      top:'60px !important',
    },
    '& .MuiList-root':{
      paddingTop:20,
      paddingBottom:0,
    },
  },
  cartlink:{
    display:'flex',
      alignItems:'center',
      justifyContent:'center',
    padding:0,
    '& a':{
      fontSize:14,
      color:'#4A4DE6',
      marginTop:10,
       display:'flex',
      alignItems:'center',
      justifyContent:'center',
      textDecoration:'none',
      marginBottom:15,
    },
    '& .MuiSvgIcon-root':{
      width:18,
    },
  },
}));
