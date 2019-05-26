import React,{Component} from "react"

import ReactDom from 'react-dom'
import Home from './page/home'
import '../public/asset/index.less'
class App extends Component{
    render(){
        return <div>
            <Home/>
        </div>
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);