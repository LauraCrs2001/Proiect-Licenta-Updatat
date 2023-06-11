import React from "react";

function Contact() {
    return(
        <div id="home-header">
            <section id="banner-pag-contact" className="text-banner-contact">
                <h1>Contactati-ne</h1>
                <h4>Lasati un mesaj daca sfaturile de la <span>Asistenta</span> nu va ajuta</h4>
            </section>  

            <section id="detalii-contact" className="partea1">
                <div className="detalii">
                    <h3>Date de contact</h3>
                    <ul className="contact-lista">
                        <li><b>Adresa:</b> Bucuresti Strada Ion Conea Nr.39</li>
                        <li><b>Telefon:</b>0770 587 523</li>
                        <li><b>Program:</b></li>
                        <p><b>Luni - Vineri:</b> 10:00 - 19:00</p>
                        <p><b>Sambata - Duminica:</b> 12:00 - 14:00</p>
                    </ul>
                </div>
                
                <div className="harta">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22802.173508838416!2d26.026161357835417!3d44.40707033041358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fff79a443cb1%3A0x23ff05b6b5137738!2sStrada%20Ion%20Conea%2039%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1683766536785!5m2!1sro!2sro"
                        allowfullscreen="" 
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                            
                </div>
            </section>   

            <section id="form-detalii">
                <div className="informatii">
                    <h3>Contactează-ne dacă:</h3>
                        <ul>
                            <li>Exista probleme la efectuarea comenzii.</li>
                            <li>Exista probleme la efectuarea platii.</li>
                            <li>Exista probleme cu produsul.</li>
                            <li>Site-ul nu functioneaza.</li>
                            <li>Informatii suplimentare.</li>
                            <li>Aveti sugestii/propuneri.</li>
                        </ul>
                </div>
                <form action="">
                    <h2>Lasati un mesaj</h2>
                    <input type="text" placeholder="Nume" required/>
                    <input type="text" placeholder="Prenume" required/>
                    <input type="text" placeholder="Email" required/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mesajul tau"required></textarea>
                    <button className="normal">Trimite</button>
                </form>    
            </section>               
        </div>                 
    )
}
export default Contact;