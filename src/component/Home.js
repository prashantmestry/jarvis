import React, { useContext , useState , useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

const Home = (props) =>{

    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        {field: 'make', filter: true},
        {field: 'model', filter: true},
        {field: 'price'}
      ]);

      useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
      }, []);

    return(
        <div  className="text-3xl font-bold underline">
            Home page
            <div className="ag-theme-alpine" style={{width: '100%', height: 500}}>
                <AgGridReact        
                    rowData={rowData} // Row Data for Rows
                    columnDefs={columnDefs} // Column Defs for Columns      
                    animateRows={true} // Optional - set to 'true' to have rows animate when sorted            
                />
            </div>
        </div>
    )
}

export default Home;