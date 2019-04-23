import React from 'react';
import Button from 'react-bootstrap/Button';
import Form, {Control, Label, Group} from 'react-bootstrap/Form';
import { motorMap } from "../motorMap"

const MAX_CAR_YEAR = 90;


export class CarForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: {
                placeholder: 'np. Volvo',
                value: '',
                name: 'name',
                type: 'text',
                required: true

            },
            year: {
                value: '',
                name: 'year',
                type: 'number',
                required: true

            },
            motor: {
                value: '',
                name: 'motor',
                type: 'text',
                required: true

            },
            fuel: {
                value: '',
                name: 'fuel',
                type: 'text',
                required: true

            },
            price: {
                value: '',
                name: 'price',
                type: 'number',
                required: true

            },
            number: {
                placeholder: '',
                value: '',
                name: 'number',
                type: 'number',
                required: true
            },
        }
    }

    changePrice = (motorValue) => {
        const input = Object.assign(this.state.price);
        input.value = motorMap[motorValue].price;
        this.setState({
            price: input
        })
    }

    getMotorControl() {
        const result = [];
        result.push(<option key="-" value="-">-</option>);
        Object.keys(motorMap).forEach((motor,index) => result.push(<option key={index} value={motorMap[motor].value}>{motorMap[motor].euro}</option>))

        return result
    }

    handleOnChange = (nameInput, value) => {
        const input = Object.assign(this.state[nameInput]);
        input.value = value;
        this.setState({
            [nameInput]: input
        });
    }

    onSubmit = (e) => {
        let result = {};
        for (let item in this.state) {
            result[item] = this.state[item].value
        }
        e.preventDefault();
        fetch('http://localhost:3000/cars', {
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result)
            })
            .then(data => {
                if (data.ok) {
                    this.props.history.push('/')
                }
            })
    }

    getDateElement() {
        const currentYear = new Date().getFullYear();
        const years = ['-'];

        for (let i = currentYear; i > currentYear - MAX_CAR_YEAR; i--) {
            years.push(i);
        }

        return years.map((year, index) => <option key={index} value={year}>{year}</option>)
    }

    render() {
        return (
            <div className="formCar">
            <Form onSubmit={this.onSubmit} className="form">
                <Group controlId="exampleForm.ControlInput1">
                            <Label>Nazwa samochodu: </Label>  
                            <Control
                                {...this.state.name}
                                onChange={ e => this.handleOnChange(this.state.name.name, e.target.value ) }
                            />
                            <Label>Rok produkcji: </Label>  
                            <Control as="select"
                                {...this.state.year}
                                onChange={ e => this.handleOnChange(this.state.year.name, e.target.value) } >
                                {this.getDateElement()}
                            </Control>

                            <Label>Rodzaj silnika: </Label>  
                            <Control as="select"
                                {...this.state.motor}
                                onChange={ e => {
                                    this.changePrice(e.target.value)
                                    this.handleOnChange(this.state.motor.name, e.target.value) 
                                }}
                            >
                               {this.getMotorControl()}
                            
                                
                            </Control>
                            
                            <Label>Rodzaj paliwa: </Label>  
                            <Control as="select"
                                {...this.state.fuel}
                                onChange={ e => this.handleOnChange(this.state.fuel.name, e.target.value) }>
                                <option key="1" value="-">-</option>
                                <option key="2" value="olej napędowy ON">olej napędowy ON</option>
                                <option key="3" value="biodisel BD">biodisel BD</option>
                                <option key="4" value="sprężony gaz ziemny CNG (silniki przebudowane)">sprężony gaz ziemny CNG (silniki przebudowane)</option>
                            </Control>
                            <Label>Cena za spalenie 1 Mg paliwa [PLN]: </Label>  
                            <Control
                                {...this.state.price}
                                step="0.01"
                                onChange={ e => this.handleOnChange(this.state.price.name, e.target.value) }
                            />
                            <Label>Zużucie paliwa [l]: </Label>  
                            <Control
                                {...this.state.number}
                                step="0.01"
                                onChange={ e => this.handleOnChange(this.state.number.name, e.target.value) }
                            />
                    </Group>
                <Button variant="success" type="submit">Dodaj</Button>
                
            </Form>  
            </div>

        );
    }
}

