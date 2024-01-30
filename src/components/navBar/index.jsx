import React from "react";
import cartwidget from "../cartwidget"

export const navBar = () => {
    return ( 
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav__limk" href="#">MiMarca</a>
                </div>
                <ul className="nav__link">
                    <li>
                        <a className="nav__link" href="#">Categoria 1</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Categoria 2</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">
                            <cartwidget />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
     );     
}

export default navBar;