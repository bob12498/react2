import React from 'react'
import ReactDOM from 'react-dom'
import reactLogo from './images/logo.png'


function Header(){
    return(
        <div>
            <img src={reactLogo} width="60px"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

function Main(){
    return(
        <div>
            <h1>Reasons i'm excited to learn React</h1>
            <ol>
                <li>It's popularity</li>
                <li>It's more likeley to get a job as a developer ;) </li>
                <li>It's popularity</li>
                <li>It's more likeley to get a job as a developer ;) </li>
                <li>It's popularity</li>
                <li>It's more likeley to get a job as a developer ;) </li>
                <li>It's popularity</li>
                <li>It's more likeley to get a job as a developer ;) </li>
                <li>It's popularity</li>
                <li>It's more likeley to get a job as a developer ;) </li>
            </ol>
        </div>
    )
}

function Footer(){
    return(
        <smal>&copy; Copy write 2022 - all rights reserverd </smal>
    )
}


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