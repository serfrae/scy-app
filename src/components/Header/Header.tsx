import React,{useState} from 'react';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import BarChartIcon from '@material-ui/icons/BarChart';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withRouter, RouteComponentProps, NavLink } from "react-router-dom";
import useStyles from "./styles";
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import StoreMallDirectoryOutlinedIcon from '@material-ui/icons/StoreMallDirectoryOutlined';
import logoIcon from '../../assets/icon/logo.svg';
import cartCompareIcon from '../../assets/icon/cartCompareIcon.svg';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import AddIcon  from '@material-ui/icons/Add';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import WalletModal from '../../pages/dashboard/walletModal';
import PersonIcon from '@material-ui/icons/Person';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import ActivitiesList from '../Grid/activities';
import {  Popper } from '@material-ui/core';
import {walletStatus,disConnectWallet} from './walletStatus';
import {activitiesData} from '../../models/activities';
import WtcIcon from '../../assets/icon/WTCWTCWTC.svg';
import BLTIcon from '../../assets/icon/BLT.svg';
import cryIcon from '../../assets/icon/cry.svg';
import trashIcon from '../../assets/icon/trash.svg';
import cry2Icon from '../../assets/icon/cry2.svg';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const Header = ({ history } : RouteComponentProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const [cartMoreAnchorEl, setCartMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openModal,setOpenModal] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isCartMenuOpen = Boolean(cartMoreAnchorEl);
  const [anchorElPopper, setAnchorElPopper] = React.useState(null);
  const[connectedWalletType,setConnectedWalletType] = useState({provider:'',providerObject:null})
  const[walletConnect,setWalletConnected] = useState(walletStatus);
  const [walletTrigger, setWalletTrigger] = useState(false);
  const open = Boolean(anchorElPopper);
  const id = open ? 'simple-popper' : undefined;
  
 // const [, setOpenNot] = React.useState(false);
  //const anchorRef:any = React.useRef(null);
  //const anchorRefNot:any = React.useRef(null);
 
 
  const handleClick = (event:any) => {
    setAnchorElPopper(anchorElPopper ? null : event.currentTarget);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setAnchorElPopper(null)
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const disconectWallet = () =>{
      disConnectWallet(connectedWalletType);
      //setWalletConnected(walletStatus);
      setAnchorEl(null);
      handleMobileMenuClose();
      setWalletConnected(false);
  }
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
    setAnchorElPopper(null)
  };
  const handleCartMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCartMoreAnchorEl(event.currentTarget);
    setAnchorElPopper(null)
  };
  const handleCartMenuClose = ()=>{
    setCartMoreAnchorEl(null); 
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
	  {walletConnect === false ?  
      <MenuItem onClick={()=>{setOpenModal(true)}}>Connect Wallet</MenuItem>
	  :
	<MenuItem onClick={disconectWallet}>Disconnect Wallet</MenuItem>
	  }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (

    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.mobileMenuTo}
    >
      <MenuItem>
         <NavLink className="navbar-item" to="/dashboard">
            <BarChartIcon /> Dashboard
          </NavLink>
      </MenuItem>
      <MenuItem>
      <NavLink className="navbar-item" to="/pools">
           <TrendingUpIcon/> Browser
          </NavLink>
      </MenuItem>
      
      <MenuItem onClick={handleProfileMenuOpen}>
      <NavLink className="navbar-item" to="/swap">
       <SwapVertIcon/> Swap
       </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink className="navbar-item" to="/builder">
           <AddIcon /> Builder
       </NavLink>
      </MenuItem>
      <MenuItem>
      <PermIdentityIcon /> My account {renderMenu}
      </MenuItem>

    </Menu>

   
  );

  const cartItemRender = (

    <Menu
      anchorEl={cartMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={'cart-item-data'}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isCartMenuOpen}
      onClose={handleCartMenuClose}
      className={classes.cartItemData}
    >
     <span className={classes.headerCart}>My basket</span>
      <MenuItem className={classes.cartMenu}>
          <img src={WtcIcon}  alt=""/> <span>Pool name</span> {isCartMenuOpen} 
          <i><img src={trashIcon} alt=""/></i>
      </MenuItem>
     <MenuItem className={classes.cartMenu}>
         <img src={BLTIcon}  alt=""/> <span>Pool name</span> {isCartMenuOpen}
         <i><img src={trashIcon} alt=""/></i>
      </MenuItem>
      <MenuItem className={classes.cartMenu}>
         <img src={cryIcon}  alt=""/> <span>Pool name</span> {isCartMenuOpen}
         <i><img src={trashIcon} alt=""/></i>
      </MenuItem>
      <MenuItem className={classes.cartMenu}>
         <img src={cry2Icon}  alt=""/> <span>Pool name</span> {isCartMenuOpen}
         <i><img src={trashIcon} alt=""/></i>
      </MenuItem>
      <MenuItem className={classes.cartlink}>
      <NavLink   to="/compare">
       Go to compare <NavigateNextIcon/>
      </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
        <div className={classes.logoIcon}>
            <img src={logoIcon} alt="Logo"/>
         
          <div className={classes.chipIcon}>
             <Chip className={classes.chipinner} size="small" label="App"/>
          </div>
          </div>
          <div className={classes.menuItem}>
          <List
            id="simple-menu" className={classes.innermenu}
           
          >
            <ListItem className={classes.menuactive}>
               <NavLink className="navbar-item" to="/dashboard">
                   <BarChartIcon /> Dashboard
               </NavLink>
            </ListItem>
            <ListItem className={classes.menuactive}>
               <NavLink className="navbar-item" to="/pools">
                   <TrendingUpIcon /> Browser
               </NavLink>
            </ListItem>
           
            <ListItem className={classes.menuactive}>
               <NavLink className="navbar-item"  to="/swap">
                   <SwapVertIcon /> Swap
               </NavLink>
            </ListItem>
            <ListItem className={classes.menuactive}>
               <NavLink className="navbar-item" to="/builder">
                   <AddIcon /> Builder
               </NavLink>
            </ListItem>
           
          </List>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           {walletConnect === false ?  
           <div className="nologin">
            <Chip className={classes.chipbtn}
              icon={<AccountBalanceWalletOutlinedIcon />}
              label="Connect Wallet"
              onClick={()=>{setOpenModal(true)}}
            />
           </div>
           :
           <div className="withlogin">
            <Chip className={classes.chipbtn}
              icon={<PersonIcon />}
              label="My Wallet"
              
            />
            
             <IconButton className={classes.watchicon}
           onClick={handleClick}>
             <QueryBuilderIcon />
           </IconButton>
          
            <Popper id={id} open={open} anchorEl={anchorElPopper} className={classes.activitiemain}>
              <ActivitiesList activitiesData= {activitiesData}/>
            </Popper>
          
           </div>
            }

            <div className={classes.rigthIconsHeader}>
              <span className={classes.mianHeaderIcon} onClick={handleCartMenuOpen}>
                <img src={cartCompareIcon}  alt=""/> 
                <span className={classes.countercartHeader}>4</span>
              </span>
              {cartItemRender}
			   {walletConnect === false &&
				<span className={classes.mianHeaderIcon}><ScheduleOutlinedIcon/></span>
			   }
              <span className={classes.mianHeaderIcon}>
                <IconButton className={classes.chipwallet}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <MoreHorizIcon />
            </IconButton>
              </span>
            </div>

           
           
          </div>

          {/*<div className={classes.headerIcons}>

            <img src={cartCompareIcon}/>
            <img src={timeIcons}/>

          </div>*/}

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <WalletModal 
            open ={openModal}
            setOpen = {setOpenModal}
            setWalletConnected = {setWalletConnected}
			walletTrigger = {walletTrigger}
			setWalletTrigger = {setWalletTrigger}
			setConnectedWalletType = {setConnectedWalletType}
         />
       
    </div>
  );
}

export default withRouter(Header);