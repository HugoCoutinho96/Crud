import "./nav.css"
import React from "react"
import {Link} from "react-router-dom"


export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <h4><i className="fa fa-home mr-2"></i>Inicio</h4>
            </Link>
            <Link to="/users">
                <h4><i className="fa fa-users mr-2"></i>Usuários</h4>
            </Link>
        </nav>
    </aside>