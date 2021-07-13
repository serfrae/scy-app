import  React from "react";
import avtarIcon from '../assets/icon/Avatars.svg';
import chartIcon from '../assets/icon/Chart.svg';
import chartredIcon from '../assets/icon/Vector.svg';
import waxIcon from '../assets/icon/WAX.svg';
import {Chip,Typography}  from '@material-ui/core';
export const columns:any = [
    ['Name','name',{
       options:{
             order:true,
         } 
     
    }],
    ['All Time','alltime'],
    ['This month','thismonth'],
    ['Last 7 days','lastdays'],
    ['My Shares','myshares',{
       options:{
             order:true,
             number:true,
         } 
     
    }],
    ['Share Price','shareprice'],
 ];
 export const rows:any = [
    {
          "name":'Fund name',
          "alltime":'12.27%',
          "thismonth":'12.27%',
          "lastdays":<img src={chartIcon} alt=""/>,
          "myshares":0.65,
          "shareprice":'$5,425,960.21',
    },
    {
       "name":'Tund name',
       "alltime":'12.65',
       "thismonth":2.65,
       "lastdays":<img src={chartIcon} alt=""/>,
       "myshares":2.65,
       "shareprice":'$5,425,960.21',
 },
 {
  "name":'Fund name',
  "alltime":'12.27%',
  "thismonth":'12.27%',
  "lastdays":<img src={chartIcon} alt=""/>,
  "myshares":0.65,
  "shareprice":'$5,425,960.21',
},
{
"name":'Tund name',
"alltime":'12.65',
"thismonth":2.65,
"lastdays":<img src={chartIcon} alt=""/>,
"myshares":2.65,
"shareprice":'$5,425,960.21',
}
 ];
 export const topcolumns:any = [
    ['Name','name',{
       options:{
             order:true,
         } 
     
    }],
    ['Volume','volume'],
    ['Top assets','topassets'],
    ['All time','alltime',{
       options:{
             order:true,
             number:true,
         } 
     
    }
    ],
    ['24h','hours',{
       options:{
             order:true,
             number:true,
         } 
     
    }],
    ['Last 7 days','lastdays'],
 ];
 export const toprows:any = [
    {
          "name":'Fund name',
          "volume":'$5,425,960.21',
          "topassets":<img src={avtarIcon} alt=""/>,
          "alltime":'12.27',
          "hours":2.65,
          "lastdays":<img src={chartIcon} alt=""/>
    },
    {
       "name":'Tund name',
       "volume":'$5,425,960.21',
       "topassets":<img src={avtarIcon} alt=""/>,
       "alltime":'.26',
       "hours":.65,
       "lastdays":<img src={chartredIcon} alt=""/>
 },
 {
    "name":'Fund name',
    "volume":'$5,425,960.21',
    "topassets":<img src={avtarIcon} alt=""/>,
    "alltime":'10.01',
    "hours":2.65,
    "lastdays":<img src={chartIcon} alt=""/>
},
{
 "name":'Tund name',
 "volume":'$5,425,960.21',
 "topassets":<img src={avtarIcon} alt=""/>,
 "alltime":'.12',
 "hours":.65,
 "lastdays":<img src={chartredIcon} alt=""/>
}
 ];
 export const graphdata:any = {
    labels: ['A longng fund name...', 'Fund name', 'Fund name',
             'A longng fund name...'],
    precision:2,
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#FF7B43',
          '#DD425A',
          '#FFCA28',
          '#29B5F2'
        ],
        hoverBackgroundColor: [
            '#FF7B43',
            '#DD425A',
            '#FFCA28',
            '#29B5F2'
        ],
        
        data: [100, 75, 20, 20]
      }
    ]
  }
  export const graphFunddata:any = {
    labels: ['A longng fund name...', 'Fund name', 'Fund name',
             'A longng fund name...','A longng fund name...','A longng fund name...','A longng fund name...'],
    precision:2,
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#FF7B43',
          '#DD425A',
          '#FFCA28',
          '#29B5F2',
          '#DD425A',
          '#FFCA28',
          '#29B5F2'
        ],
        hoverBackgroundColor: [
            '#FF7B43',
            '#DD425A',
            '#FFCA28',
            '#29B5F2',
            '#DD425A',
            '#FFCA28',
            '#29B5F2'
        ],
        
        data: [100, 75, 20, 20]
      }
    ]
  }
 
 const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
  labels: ['1', '2', '3', '4', '5', '6', '7', '8','9','10','11','12'],
  datasets: [
   {
      type: 'line',
      label: '24h',
      borderColor: `#00BDCB`,
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand(),rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: '7d',
      backgroundColor: `#202232`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(),rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: '#202232',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: '1m',
      backgroundColor: `#202232`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(),rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: '3m',
      backgroundColor: `#202232`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(),rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: '6m',
      backgroundColor: `#202232`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(),rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: '1y',
      backgroundColor: `#202232`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(),rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
});

export const baroptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
        },
      },
    ],
  },
  responsive: true,
   plugins: {
     legend: {
              position: 'bottom',
              display: false,
        },
      title: {
              display: true,
        }
    }
                        
};

export const bardata = genData();
export const columnsVault:any = [
    ['Name','name'],
    ['Balance','balance',{
       options:{
             order:true,
         } 
     
    }],
    ['Price','price',{
       options:{
             order:true,
         } 
     
    }],
    ['Value','value',{
       options:{
             order:true,
         } 
     
    }],
    ['24h','24h',{
       options:{
             order:true,
             number:true,
         } 
     
    }],
    ['Allocation','allocation',{
       options:{
             order:true,
         } 
     
    }],
 ];
 export const columnsReturn:any = [
    ['Time','time'],
    ['Return','return',{
       options:{
            number:true,
         } 
     
    }],
 ];
export default function AssetsData(){
    return(
        <><div className='namesValut'><img src={waxIcon} alt="" />
        <Typography>Asset name <small>Description</small></Typography>
        <Chip className='opcitygreen' label="Asset"/></div></>
        )

}
 export const rowsVault:any = [
      {
        "name":<AssetsData />,
        "balance":7.3869,
        "price":'$2,409.55',
        "value":'$1,077,290.12',
        "24h":0.56,
        "allocation":'34.31%'
      },
      {
        "name":<AssetsData />,
        "balance":7.3869,
        "price":'$2,409.55',
        "value":'$1,077,290.12',
        "24h":0.56,
        "allocation":'34.31%'
      },
      {
        "name":<AssetsData />,
        "balance":7.3869,
        "price":'$2,409.55',
        "value":'$1,077,290.12',
        "24h":0.56,
        "allocation":'34.31%'
      },
   ];

 export const rowsReturn:any = [
      {
        "time":'1 Day',
        "return":0.56,
      },
      {
        "time":'2 Days',
        "return":0.76,
      },
      {
        "time":'3 Days',
        "return":1.00,
      },
      {
        "time":'1 Week',
        "return":2.00,
      },
   ];
 export const  dataLine = {
  labels: ['May 23, 9:00 AM','May 23, 10:00 AM' ,'May 23, 11:00 PM','May 23, 12:00 AM','May 23, 11:00 PM','May 24, 06:00 AM','May 24, 11:00 AM', 'May 24, 12:00 AM', 'May 24, 1:00 PM'],
  customLables:['24h','7d','1m','3m','6m','1y'],
  datasets: [
    {
      label: '# of Votes',
      data: [0.75,1.00,0.50,1.00,1.15,0.70,0.54,1.35,1.10],
      fill: false,
      background: 'linear-gradient(180deg, rgba(118, 136, 201, 0.4) 0%, rgba(27, 28, 33, 0) 61.85%)',
      borderColor: '#4A4DE6',
    },
    
  ],
};

export const optionsLine = {
 
  scales: {
    y: {
      max: 1.5,
      min: 0,
      ticks: {
          stepSize:.50
      }
    }
    
  },
  responsive: true,
   plugins: {
     legend: {
              position: 'bottom',
              display: false,
        },
      title: {
              display: true,
        }
    } 
};