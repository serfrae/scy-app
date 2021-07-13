const RenderCell = ({ title=""}) => {

    return (
      <>
        {title}
      
      </>
    );
  
  };
export default function renderTableCell(param:any){
    if (param) {
        return(
          <RenderCell 
            title={param.value} 
           
          />
        );
   
    }
    return (param:any) => (param.field);
  };