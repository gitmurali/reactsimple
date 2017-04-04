/**
 *  Created by mprasanth on 24/03/2017.
 */


const { createElement } = React
const { render } = ReactDOM

const style = {
    background: 'orange',
    color: 'white'
}

const title = createElement(
    'h1', {id:'title', className: 'header', style:style},
    'Murali prasanth'
)

render(
    title,
    document.getElementById('react-container')
);

/*
render(
    <div id=murali style={style}>
        Murali Again
    </div>,
    document.getElementById('react-container1')
);
 */

// copy the above script and transpile in to javascript using babel.js which returns the below code.
 render(React.createElement(
     'div',
     { id: 'murali', style: style },
     'Murali Again'
 ), document.getElementById('react-container1'));


// Renders this based on babel.js loaded above in script tag.
 render(
     <div id='murali1' style={style}>
         Murali Again
     </div>,
     document.getElementById('react-container2')
 );
