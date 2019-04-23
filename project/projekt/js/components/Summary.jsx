import React from 'react';
import {SummaryFooter} from './SummaryFooter.jsx';
import { SummaryHeader } from './SummaryHeader.jsx';
import { SummaryTable } from './SummaryTable.jsx';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';



export class Summary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }




    render(){
        return (

        <div className="summary">
         <PrintProvider>

            <SummaryHeader />
            
            <SummaryTable />
            
            <SummaryFooter />
            </PrintProvider>

        </div>
        )
    }
}

