import React from 'react';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';
import Datetime from 'react-datetime';

export class Footer extends React.Component{
    
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <span className="date">
                        <Moment format="YYYY/MM/DD">
                        </Moment>
                    </span>
                    <span>...........................................................</span>
                </div>
                <div className="container">
                    <span className="underDate">(data)</span>
                    <span>(podpis osoby wypełniającej)</span>
                </div>                       
            </div>
          
        )
    }
}