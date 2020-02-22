import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class HeaderCuenta extends Component {
        
        verificarUrl(){
            const url = window.location.href;
            if(url ==='https://ecommerce-mate.herokuapp.com/cuenta'){
                return "nav-link active"              
            }         
        }

        verificarUrl2(){
            const url = window.location.href;
            if(url ==='https://ecommerce-mate.herokuapp.com/info'){
                return "nav-link active"              
            }          
        }

    render() {

        return (
            <div>        
                <ul class="nav nav-pills nav-fill">
                <li class="nav-item ">
                    <Link to="/cuenta" className={this.verificarUrl()}>
                      Cuenta  
                    </Link>
                </li>

                <li class="nav-item">
                    <Link to="/info" className={this.verificarUrl2()}>
                      Informacion Personal   
                    </Link>
                </li>
                               
            </ul>
        </div>
        )
    }
}
export default HeaderCuenta ;