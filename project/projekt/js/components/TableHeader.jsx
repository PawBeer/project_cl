import React from 'react';

const style = {
    fontWeight: 700,
  }

export class TableHeader extends React.Component{
   
    render(){
        return(
        <tr style={style}>
            <td>Marka samochodu</td>
            <td>Rok produkcji</td>
            <td colSpan="2">Silnik</td>
            <td>Rodzaj spalanego paliwa</td>
            <td>Cena za spalenie 1 Mg paliwa [zł]</td>
            <td>Waga zużytego paliwa [Mg]</td>
            <td>Wysokość opłaty [zł]</td>
        </tr>)
    }
}