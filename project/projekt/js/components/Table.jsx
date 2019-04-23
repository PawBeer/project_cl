import React from 'react';
import { TableHeader } from './TableHeader.jsx';
import { TableItems } from './TableItems.jsx';
import { TableFooter } from './TableFooter.jsx';
import Button from 'react-bootstrap/Button';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';



export class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        this.getCars();
    }

    getCars() {
        fetch('http://localhost:3000/cars')
            .then(response => {
                if (response.ok) {
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

    refreshCars() {
        // console.log("powinno odświeżyć")
    }

    delCar(id, refreshCars) {
        fetch(`http://localhost:3000/cars/${id}`,
            {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    this.refreshCars();
                    // console.log(id);
                    this.getCars();
                } else {
                    throw new Error('Błąd połączenia');
                }
            })
            .catch(error => {
                console.log(error)
            });
    }

    handleOnDelete = (id) => {
        this.delCar(id, this.delCar);

    }

    handleOnAdd = () => {
        this.props.history.push('/form')
    }



    render() {
        return (
            <div>
         <PrintProvider>
                
                <Header />

                <table>
                    <tbody>
                        <TableHeader />
                        <TableItems items={this.state.cars} handleOnClick={this.handleOnDelete} />
                        <TableFooter items={this.state.cars} />
                           
                        <tr><td className="add">
                <NoPrint>
                        <Button variant="success"
                            className="add"
                            onClick={this.handleOnAdd}>
                            Dodaj pojazd
                    </Button>
                </NoPrint>
                    </td></tr>
                    </tbody>
                </table>

                <Footer />
                </PrintProvider>
            </div>
        )
    }
}

