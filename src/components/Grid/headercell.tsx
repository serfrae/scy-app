const HeaderCell = ({ title=""}) => {
    
  
    return (
      <>
        {title}
      
      </>
    );
  
  };
export default function renderHeaderCell(option:any){
    if (option) {
      if (typeof option.search !== 'undefined') {
        return (param:any) => (
          <HeaderCell 
            title={param.field} 
           
          />
        );
      }
    }
    return (param:any) => (param.field);
  };