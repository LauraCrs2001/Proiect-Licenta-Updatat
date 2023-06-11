import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Produs() {
  const [product, setProduct] = useState(null);
  const [randomProducts, setRandomProducts] = useState([]);
  const [Tip, setTip] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const productType = urlParams.get('type');

    // Fetch product details based on the productId
    axios
      .get(`/api/fetes/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });

    axios
      .get(`/api/baietis/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });

    axios
      .get(`/api/figurines/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });

    axios
      .get(`/api/plusuris/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });

    axios
      .get(`/api/accesoriis/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });

    if (productType.includes('fete')) {
      // Fetch random products from the same category
      axios
        .get(`/api/fete`)
        .then((response) => {
          const products = response.data;
          // Filter out the selected product
          const filteredProducts = products.filter((prod) => prod._id !== productId);
          // Get a random subset of products
          const randomSubset = getRandomSubset(filteredProducts, 4);
          setRandomProducts(randomSubset);
          const tipp = 'fete';
          setTip(tipp);
        })
        .catch((error) => {
          console.error('Error fetching random products:', error);
        });
    } else if (productType.includes('baieti')) {
      axios
        .get(`/api/baieti`)
        .then((response) => {
          const products = response.data;
          // Filter out the selected product
          const filteredProducts = products.filter((prod) => prod._id !== productId);
          // Get a random subset of products
          const randomSubset = getRandomSubset(filteredProducts, 4);
          setRandomProducts(randomSubset);
          const tipp = 'baieti';
          setTip(tipp);
        })
        .catch((error) => {
          console.error('Error fetching random products:', error);
        });
    } else if (productType.includes('figurine')) {
      axios
        .get(`/api/figurine`)
        .then((response) => {
          const products = response.data;
          // Filter out the selected product
          const filteredProducts = products.filter((prod) => prod._id !== productId);
          // Get a random subset of products
          const randomSubset = getRandomSubset(filteredProducts, 4);
          setRandomProducts(randomSubset);
          const tipp = 'figurine';
          setTip(tipp);
        })
        .catch((error) => {
          console.error('Error fetching random products:', error);
        });
    } else if (productType.includes('plusuri')) {
      axios
        .get(`/api/plusuri`)
        .then((response) => {
          const products = response.data;
          // Filter out the selected product
          const filteredProducts = products.filter((prod) => prod._id !== productId);
          // Get a random subset of products
          const randomSubset = getRandomSubset(filteredProducts, 4);
          setRandomProducts(randomSubset);
          const tipp = 'plusuri';
          setTip(tipp);
        })
        .catch((error) => {
          console.error('Error fetching random products:', error);
        });
    } else if (productType.includes('accesorii')) {
      axios
        .get(`/api/accesorii`)
        .then((response) => {
          const products = response.data;
          // Filter out the selected product
          const filteredProducts = products.filter((prod) => prod._id !== productId);
          // Get a random subset of products
          const randomSubset = getRandomSubset(filteredProducts, 4);
          setRandomProducts(randomSubset);
          const tipp = 'accesorii';
          setTip(tipp);
        })
        .catch((error) => {
          console.error('Error fetching random products:', error);
        });
    }
  }, []);

  // Function to get a random subset of items from an array
  const getRandomSubset = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  if (!product) {
    return <h1>Loading...</h1>;
  }

  const handleClick = (index) => {
    const smallImg = document.getElementsByClassName('poza-mica');
    const ImgMare = document.getElementById('prima-img');

    ImgMare.src = smallImg[index].src;
  };

  return (
    <div id="home-header" className="produss">
      <section id="prod-detalii" className="detalii">
        <div className="poze">
          <img src={product.img} width="100%" id="prima-img" alt={product.nume} />
          <div className="poze-mici">
            <div className="poze-mici-col">
              <img
                src={product.img2}
                width="100%"
                height="100%"
                className="poza-mica"
                onClick={() => handleClick(0)}
              />
            </div>
            <div className="poze-mici-col">
              <img
                src={product.img3}
                width="100%"
                height="100%"
                className="poza-mica"
                onClick={() => handleClick(1)}
              />
            </div>
            <div className="poze-mici-col">
              <img
                src={product.img4}
                width="100%"
                height="100%"
                className="poza-mica"
                onClick={() => handleClick(2)}
              />
            </div>
            <div className="poze-mici-col">
              <img
                src={product.img5}
                width="100%"
                height="100%"
                className="poza-mica"
                onClick={() => handleClick(3)}
              />
            </div>
          </div>
        </div>
        <div className="detalii-produs">
          <h1>{product.nume}</h1>
          <p>
            {product.pret} {product.moneda}
          </p>
          <select>
            <option>Selecteaza cadou</option>
            <option>Breloc</option>
            <option>Sticker</option>
            <option>Magnet</option>
            <option>Pix</option>
          </select>
          <input type="number" defaultValue={1}></input>
          <button className="normal">Adauga in Cos</button>
          <p>Descriere Produs:</p>
          <h2>{product.descriere}</h2>
        </div>
      </section>
      <h4>Produse Propuse</h4>
      <ul className="random">
        {randomProducts.map((randomProduct) => (
          <li
            key={randomProduct._id}
            className="produse-random"
            onClick={() =>
              (window.location.href = `/produs?id=${randomProduct._id}&type=${Tip}`)
            }
          >
            <img src={randomProduct.img} alt={randomProduct.nume} />
            <div className="descriere-mica-produs">
              <h2>{randomProduct.nume}</h2>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h3>
                {randomProduct.pret} {randomProduct.moneda}
              </h3>
            </div>
            <a href="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produs;
