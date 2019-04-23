import React from 'react';
import Button from 'react-bootstrap/Button';
import { motorMap } from "../motorMap";
import PrintProvider, { Print, NoPrint } from 'react-easy-print';


export class TableItems extends React.Component{
    
    render(){

        return this.props.items.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.year}</td>
                    <td colSpan="2">{motorMap[item.motor].text}</td>
                    <td>{item.fuel}</td>
                    <td>{item.price}</td>
                    <td>{(item.number * 0.000845).toFixed(2)}</td>
                    <td>{(item.number * item.price * 0.000845).toFixed(2)}</td>
                    <td>
                        <Button 
                            variant="danger" 
                            onClick={ () => this.props.handleOnClick(item.id) }
                            >Usuń
                        </Button>
                    </td>
                </tr>
            )
        })
    }
}