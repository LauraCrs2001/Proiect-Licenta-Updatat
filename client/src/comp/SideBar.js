import React from "react";

function SideBar() {
    return (
        <aside id="side-menu">
            
                <a href="/"><i className="fa-solid fa-house logoMeniu"></i>Home</a>  
                <a href="#"><i className="fa-solid fa-gift logoMeniu"></i>Categorii:
                    <div id="subMeniu">
                        <a href="/fete" className="subMeniuCategorii">Fete</a>
                        <a href="/baieti"className="subMeniuCategorii">Băieți</a>
                        <a href="/figurine"className="subMeniuCategorii">Figurine</a>
                        <a href="/plusuri"className="subMeniuCategorii">Plușuri</a>
                        <a href="/accesorii"className="subMeniuCategorii">Accesorii</a>
                    </div> 
                </a>
                <a href="/recenzii"><i className="fa-solid fa-ranking-star logoMeniu"></i>Recenzii</a>
                <a href="/asistenta"><i className="fa-solid fa-clipboard-question logoMeniu"></i>Asistență</a>
                <a href="/contact"><i className="fa-solid fa-phone logoMeniu"></i>Contact</a>
            
            </aside>
    )
}
export default SideBar;