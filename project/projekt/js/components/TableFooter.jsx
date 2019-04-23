import React from 'react';
import {Sum} from './Sum.jsx'


const style = {
    fontWeight: 700
  }

export class TableFooter extends React.Component {
    render() {
        return (
            
                <tr style={style}>
                    <td></td>
                    <td></td>
                    <td colSpan="2"></td>
                    <td></td>
                    <td></td>
                    <td>RAZEM:</td>
                    <td><Sum items={this.props.items} /> zł</td>
                 
                </tr>
           
        );
    }
}