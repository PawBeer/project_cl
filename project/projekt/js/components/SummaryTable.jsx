import React from 'react';
import {Sum} from './Sum.jsx'

const style = {
    textAlign: 'center',
  }
  
export class SummaryTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }
    
    componentDidMount() {
        this.getCars();
    }

    getCars(){
        fetch('http://localhost:3000/cars')
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('Błąd połączenia');
                }
            })
            .then(response => {
                this.setState({
                    cars: response
                });
            })
            .catch(error => {
                console.log(error)
            });
    }



    render(){
        return (

            <table className="table table-bordered">
                <tbody>
                <tr>
                        <th colSpan="3" rowSpan="2">Zbiorcze zestawienie informacji o zakresie korzystania ze środowiska oraz o wysokości należnych opłat</th>
                        <th style={style} colSpan="3" rowSpan="2">rok: 2019</th>
                    </tr>
                    <tr>

                    </tr>
                    <tr>
                        <td colSpan="6" style={style}>Podmiot korzystający ze środowiska</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Nazwa: Firma Trans</td>
                        <td colSpan="3">Adres: ul. Królewska 47, 40-054 Kraków</td>
                    </tr>
                    <tr>
                        <td colSpan="2">REGON: 883-44-4-2</td>
                        <td colSpan="1">NIP: 795-000-17-85</td>
                        <td colSpan="3">Telefon: 533-442-542</td>
                    </tr>
                    <tr>
                        <th style={style}>L.p</th>
                        <th colSpan="2">Rodzaj korzystania ze środowiska</th>
                        <th>Kod tabeli:</th>
                        <th style={style} colSpan="2">Wysokość opłaty:</th>
                    </tr>
                    <tr>
                        <td style={style}>1</td>
                        <td colSpan="2">Wprowadzanie gazów lub pyłów do powietrza</td>
                        <td></td>
                        <td style={style} colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={style}>1.1</td>
                        <td colSpan="2">Źródła powstawania substancji wprowadzanych do powietrza</td>
                        <td style={style}>A</td>
                        <td style={style} colSpan="2">-</td>
                    </tr>
                    <tr>
                        <td style={style}>1.2</td>
                        <td colSpan="2">Przeładunek benzyn silnikowych</td>
                        <td style={style}>B</td>
                        <td style={style} colSpan="2">-</td>
                    </tr>
                    <tr>
                        <td style={style}>1.3</td>
                        <td colSpan="2">
                            Kotły o nominalnej mocy cieplnej do 5 MW opalane węglem
                            kamiennym, koksem, drewnem, olejem lub paliwem gazowym, dla
                            których nie jest wymagane pozwolenie na wprowadzanie gazów lub
                            pyłów do powietrza albo pozwolenie zintegrowane
                        </td>
                        <td style={style}>C</td>
                        <td style={style} colSpan="2">-</td>
                    </tr>
                    <tr>
                        <td style={style}>1.4</td>
                        <td colSpan="2">Silniki spalinowe</td>
                        <td style={style}>D</td>
                        <td style={style} colSpan="2"><Sum items={this.state.cars} /> zł</td>
                    </tr>
                    <tr>
                        <td style={style}> 1.5</td>
                        <td colSpan="2">Chów lub hodowla drobiu</td>
                        <td style={style}>E</td>
                        <td style={style} colSpan="2">-</td>
                    </tr>
                    <tr>
                        <td style={style}>I</td>
                        <td colSpan="3">Wysokość opłaty za wprowadzanie gazów lub pyłów do powietrza ogółem 4)</td>
                        <td style={style} colSpan="2">-</td>
                    </tr>
                    <tr>
                        <td style={style}>2</td>
                        <td colSpan="2">Składowanie odpadów</td>
                        <td></td>
                        <td style={style} colSpan="2">-</td>
                    </tr>
                    <tr>
                        <td style={style}>2.1</td>
                        <td colSpan="2">Odpady składowane selektywnie</td>
                        <td style={style}>A</td>
                        <td style={style} colSpan="2">-</td>
                    </tr>
                    <tr>
                        <td style={style}>2.2</td>
                        <td colSpan="2">Odpady składowane nieselektywnie</td>
                        <td style={style}>A</td>
                        <td style={style} colSpan="2">-</td>
                    </tr>
                    <tr>
                        <th style={style}>II</th>
                        <th colSpan="2">Wysokość opłaty za składowanie odpadów ogółem 4)</th>
                        <th></th>
                        <th colSpan="2"></th>
                    </tr>
                    <tr>
                        <th colSpan="4">Suma opłat ogółem:</th>
                        <th style={style} colSpan="2"><Sum items={this.state.cars} /> zł</th>
                    </tr>
                    <tr>

                    </tr>
            </tbody>
        </table>
        )
    }
}