import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';


export class Navigation extends Component {
    render() {
        return (
            <PrintProvider>
                <NoPrint>

                    <ul className="list">
                        <li className="point">
                            <Link checked to='/' replace>Tabela</Link>
                        </li>
                        <li className="point">
                            <Link to='/form' replace>Formularz</Link>
                        </li>
                        <li className="point">
                            <Link to='/sum' replace>Podsumowanie</Link>
                        </li>
                    </ul>
                </NoPrint>
            </PrintProvider>
        );
    }
}
