import React, {useState, useEffect} from "react";
import Navbar from "./comp/Navbar";
import SideBar from "./comp/SideBar";
import Column from "./comp/Column";
import PapusiFete from "./comp/PapusiFete";
import PapusiBaieti from "./comp/PapusiBaieti";
import PapusiFigurine from "./comp/PapusiFigurine";
import PapusiPlusuri from "./comp/PapusiPlusuri";
import PapusiAccesorii from "./comp/PapusiAccesorii";
import Produs from "./comp/Produs";
import Login from "./comp/User/Login";
import Signup from "./comp/User/Signup";
import Mail from "./comp/User/Mail";
import Password from "./comp/User/Password";
import Contact from "./comp/Contact";
import Cos from "./comp/Cos";


function App() {

        const getCurrentRoute = () => {
            const path = window.location.pathname;
    
            if (path === "/fete") {
                return ( 
                <div>
                    <Navbar />
                    <SideBar />
                    <PapusiFete />
                </div> )
            } else if (path === "/baieti") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <PapusiBaieti />
                    </div> )
            } else if (path === "/figurine") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <PapusiFigurine />
                    </div> )
            } else if (path === "/plusuri") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <PapusiPlusuri />
                    </div> )
            } else if (path === "/accesorii") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <PapusiAccesorii />
                    </div> )
            } else if (path === "/produs") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <Produs />
                    </div> )
            }else if (path === "/recenzii") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                    </div> )
            } else if (path === "/asistenta") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                    </div> )
            } else if (path === "/contact") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <Contact />
                    </div> )
            } else if (path === "/login") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <Login />
                    </div> )
            } else if (path === "/signup") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <Signup />
                    </div> )
            } else if (path === "/reset-password") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <Mail />
                    </div> )
            } else if (path === "/confirm-reset-password") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <Password />
                    </div> )
            } else if (path === "/favorite") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                    </div> )
            }else if (path === "/cos") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <Cos />
                    </div> )
            }else {
                return (
                    <div>
                        <Navbar />
                        <SideBar />
                     <div id="home-header" className="galerie">
                         <h2 className="home-h2">
                             Păpușel&Păpușica - locul unde visele devin realitate 
                              <i className="fa-solid fa-wand-sparkles logo"></i>
                          </h2>
                          <p>
                              Pe acest site o să gasiți papuși atat cât pentru cei mici, fie ei fete sau băieți dar și figurine pentru cei mai mari.
                              Aici veți găsi o colecție minunată de papuși și figurine pentru toți colecționarii și iubitorii de jucării. 
                               Avem o varietate de produse, de la cele mai populare personaje din desene animate și filme, la cele mai rare și exclusiviste ediții limitate.
                               Sperăm sa va încantam cu produsele noastre și totodată vă rugam sa ne lasati un feedback pentru jucăriile achiziționate.
                          </p>
                          <h3 className="home-h3">
                            Avantaje:
                          </h3>
                          <section id="avantaje1" className="avantaje">
                                <div className="avantaje-casute">
                                    <img src="https://uploads-ssl.webflow.com/5ef27cb65411b70949a151e9/5fa67de01a8f78f5d9392f2e_Free%20shipping%20(2).png" alt=""></img>
                                    <h4>Livrare Gratuita</h4>
                                </div>
                                <div className="avantaje-casute">
                                    <img src="https://www.ncsc.gov.uk/images/Online%20Shopping%20-%20Copy.png?mpwidth=545&mlwidth=737&twidth=961&dwidth=635&dpr=2.625&width=412ve " alt=""></img>
                                    <h4>Comenzi Online</h4>
                                </div>
                                <div className="avantaje-casute">
                                    <img src="https://i.pinimg.com/736x/99/5a/d9/995ad90cbe454ca1fbe59d2a1c8e1c6f.jpg" alt=""></img>
                                    <h4>Economisire</h4>
                                </div>
                                <div className="avantaje-casute">
                                    <img src="https://img.freepik.com/premium-vector/flat-sale-background_23-2149050899.jpg" alt=""></img>
                                    <h4>Promotii</h4>
                                </div>
                                <div className="avantaje-casute">
                                    <img src="https://img.freepik.com/free-photo/charming-woman-astonishment-looks-camera-pink-background-portrait-woman-pink-top-white-t-shirt_197531-14927.jpg" alt=""></img>
                                    <h4>Zambete Gratuite</h4>
                                </div>
                                <div className="avantaje-casute">
                                    <img src="https://img.myloview.com/posters/pink-headphones-with-speech-bubble-chat-icon-isolated-on-pink-background-support-customer-service-hotline-call-center-faq-maintenance-minimalism-concept-3d-illustration-3d-render-700-177631121.jpg" alt=""></img>
                                    <h4>24/7 Suport</h4>
                                </div>
                          </section>
                          
                       </div>
                            <section id="banner" className="text-banner">
                                <h2>Servis pentru Jucării</h2>
                                <h5>Rdeucere de <span>80%</span> pentru produsele peste <span>300 Lei</span></h5>
                                <button className="normal">Detalii</button>
                            </section>
                            <Column />
                            <section id="produse-home" className="avantaje">
                                <h6 className="home-h6">
                                    Produse noi pe site
                                </h6>
                                {/* <div className="produse-noi">
                                    <div className="produse">
                                        
                                    </div>
                                </div> */}
                            </section>
                  </div>
                )
            }
        }
    
        return <div>{getCurrentRoute()}</div>;
    }

export default App;


