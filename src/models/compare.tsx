import chartIcon from '../assets/icon/Chart.svg';
import chartredIcon from '../assets/icon/Vector.svg';
import ethereumIcon from '../assets/icon/ethereum.svg';
import zcashIcon from '../assets/icon/zcash.svg';
import dashDashIcon from '../assets/icon/dash-dash.svg';
import vertcoinIcon from '../assets/icon/vertcoin.svg';
import digibyteIcon from '../assets/icon/digibyte.svg';
import litecoinIcon from '../assets/icon/litecoin.svg';
import ethereumClassicIcon from '../assets/icon/ethereum-classic.svg';
import bitcoinIcon from '../assets/icon/bitcoin.svg';
import WTCIcon from '../assets/icon/WTCWTCWTC.svg';
import trashIcon from '../assets/icon/trash.svg';
import BLTIcon from '../assets/icon/BLT.svg';
import cenniIcon from '../assets/icon/cenni.svg';
import chIcon from '../assets/icon/ch.svg';
import PoolName from '../pages/compare/PoolName';
 export const comparecolumns:any = [
    ['Name','name',{
       options:{
             
         } 
     
    }],
    ['Price','price',{
       options:{
             order:true,
         } 
     
    }],
    ['Volume','volume',{
       options:{
             order:true,
         } 
     
    }],
    ['Martket','martket',{
       options:{
             order:true,
         } 
     
    }],
    ['Dominance','dominance',{
       options:{
             order:true,
         } 
     
    }],
    ['Volatility','volatility',{
       options:{
             order:true,
         } 
     
    }],
    ['','blank',{
       options:{
            
         } 
     
    }],
    
 ];
 export const compoolsrows:any = [
    {
          "name":<PoolName image={WTCIcon} name={'Pool name'} />,
          "price":'$0.05',
          "volume":'$425,960.21',
          "martket":'$425,960.21',
          "dominance":'$425,960.21',
          "volatility":'0.057',
          "blank":<><img src={trashIcon} alt=""/></>,

    },
     {
          "name":<PoolName image={BLTIcon} name={'Pool name'} />,
          "price":'$0.05',
          "volume":'$425,960.21',
          "martket":'$425,960.21',
          "dominance":'$425,960.21',
          "volatility":'0.057',
          "blank":<><img src={trashIcon} alt=""/></>,
          
    },

    {
          "name":<PoolName image={cenniIcon} name={'Pool name'} />,
          "price":'$0.05',
          "volume":'$425,960.21',
          "martket":'$425,960.21',
          "dominance":'$425,960.21',
          "volatility":'0.057',
          "blank":<><img src={trashIcon} alt=""/></>,
          
    },

    {
          "name":<PoolName image={chIcon} name={'Pool name'} />,
          "price":'$0.05',
          "volume":'$425,960.21',
          "martket":'$425,960.21',
          "dominance":'$425,960.21',
          "volatility":'0.057',
          "blank":<><img src={trashIcon} alt=""/></>,
          
    },
 ];
