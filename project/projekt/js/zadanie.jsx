import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App.jsx';
// import {CarForm} from './components/Form.jsx'



document.addEventListener('DOMContentLoaded', function(){
    fetch('https://api.ipify.org').then( r => r.text() ).then( ip => {
  console.log('Moje IP:', ip);
});
    ReactDOM.render(
        <App />,
        // <CarForm />,
        document.getElementById('app')
    );
});