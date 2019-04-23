import React from 'react';


export class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <h4>WYKAZ ZAWIERAJĄCY INFORMACJE O ILOŚCI I RODZAJACH GAZÓW LUB PYŁÓW WPROWADZANYCH DO POWIETRZA, DANE, NA PODSTAWIE KTÓRYCH OKREŚLONO TE ILOŚCI ORAZ INFORMACJE O WYSOKOŚCI NALEŻNYCH OPŁAT ZA ROK 2019</h4>
                <div className="companyName">
                    <h6>Firma Trans</h6>
                    <h6>ul. Królewska 47</h6>
                    <h6>30-054 Kraków</h6>
                    <h6>NIP: 795-000-222-344</h6>
                </div>
            </div>
          
        )
    }
}