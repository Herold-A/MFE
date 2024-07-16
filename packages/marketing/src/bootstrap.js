import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        // <h1>Hi! there</h1>,
        el
    )
};
//if we are in development and in isolation, 
//call mount imediately
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot){
        mount(devRoot);
    }
};



//we are running through container
// and we  should export the mount function
export { mount };

console.log('Hi from marketing bootstrap'); 