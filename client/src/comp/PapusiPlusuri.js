import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PapusiPlusuri() {
  const [plusuris, setPlusuris] = useState([]);

  useEffect(() => {
    // Fetch items from the API endpoint
    axios.get('/api/plusuri')
      .then((response) => {
        setPlusuris(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <div id='home-header'>
      <div className='prodFete'>
        <section id="banner-pag-plusuri" className="text-banner-produse">
          <h1>Plusuri</h1>
          <h4>Rdeucere de <span>30%</span> pentru comenzile peste <span>500 Lei</span></h4>
        </section>
          {Array.isArray(plusuris) && plusuris.length > 0 ? (
            <ul className='produse-toate'>
              {plusuris.map((Plusuri) => (
                <li key={Plusuri._id} className='produse' onClick={() => window.location.href = `/produs?id=${Plusuri._id}&type=plusuri`}>
                  <img src={Plusuri.img} alt={Plusuri.nume} />
                  <div className='descriere-mica-produs'>
                    <h2>{Plusuri.nume}</h2>
                    <div className='star'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                    </div>
                    <h3>{Plusuri.pret} {Plusuri.moneda}</h3>
                  </div>
                  <a href='#'><i className='fa-solid fa-cart-shopping'></i></a>
                </li>
              ))}
            </ul>
          ) : (
            <h1>Error</h1>
          )}
      </div>
    </div>
  );
}

export default PapusiPlusuri;