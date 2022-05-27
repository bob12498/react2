import React from 'react'
import ReactDOM from 'react-dom'

import "./style.css"

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'



function PageContent(){
    return(
        <div>
            <Header />
            <Main />
            <Footer /> 
        </div>
    )
}


ReactDOM.render(<PageContent/> , document.getElementById('root'));