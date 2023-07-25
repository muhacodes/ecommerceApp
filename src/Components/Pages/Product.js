import React, { useState, useContext, useEffect } from 'react';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header';
import ProductItem from '../ProductItem';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import { CartContext } from '../context/CartContext';

function Product() {

  const {id} = useParams();
  const [productNo, setProductNo] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState([]);
  const [relatedProduct, SetRelatedProducts] = useState([]);
  const { cartItems, addItemToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  let isMounted = false;
  let fetchedProduct = false;

  const fetchSingleProduct = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`);
    const data = await response.json();
    setProduct(data.product);
    fetchSingleProduct = true;
    // console.log(data);
  };

  const fetchRelatedProducts = async () => {
    // const response = await fetch(`http://127.0.0.1:8000/api/products/category/${product.category_id}`);
    const response = await fetch(`http://127.0.0.1:8000/api/products/category/1`);
    // alert(product.category_id);
    const data = await response.json();
    SetRelatedProducts(data.products);
    console.log(data.products);
    alert(product.category_id);
    alert('this should be the last one');
    // alert(relatedProduct.length)
  }

  const fetchData = async () => {
    try {
      await fetchSingleProduct();
      await fetchRelatedProducts();
      alert('g');
    
    } catch (error) {
      // Handle any errors that occur during fetching
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isMounted) {
      fetchData();
    }
    
  
    window.scrollTo(0, 0);
    return () => {
      // Cleanup function
      isMounted = true;
    };
  }, []);


  const images = [
    product.photo,
    product.photo1
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const addToCart =() => {
    setLoading(true);
    const productItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: productNo,
      image: product.photo,
    };

    if(cartItems.length >=10){
      alert('You can nolonger add the same item in your cart');
      return;
    }

    addItemToCart(productItem);

    setLoading(false);

  }

  return (
    <Fragment>
      {loading && ( // Display loading indicator only if loading is true
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
        
      </div>
      )}
      
      <div className='flex flex-col  md:flex-row mt-5 md:justify-center gap-20'>
        <div className='w-full md:w-1/4 h-[350px] md:h-[500px]'>
          <div className='relative h-full'>
            <img className='w-full h-full object-cover' src={images[currentSlide]} alt={`Image ${currentSlide + 1}`} />

            <button
              className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full'
              onClick={prevSlide}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full'
              onClick={nextSlide}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className='flex flex-col px-4 sm:px-0  gap-6 items-start'>
          <h3 className='text-black font-bold text-xl'> {product.name} </h3>
          <label className='text-gray-400'>SKU: AB1609456789</label>
          <p className='text-lg font-bold'> ${product.price} </p>
          <p className='text-left'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.
          </p>

          <div className='flex'>
            <div className='flex flex-row gap-4 border border-gray-400 px-6 py-2'>
              <button
                onClick={() => {
                  setProductNo(productNo < 10 ? productNo + 1 : productNo);
                }}
              >
                <FontAwesomeIcon size='sm' icon={faPlus} />
              </button>
              <label>{productNo}</label>
              <button
                onClick={() => {
                  setProductNo(productNo > 1 ? productNo - 1 : productNo);
                }}
              >
                <FontAwesomeIcon size='xsm' icon={faMinus} />
              </button>
            </div>

            <button onClick={addToCart} className='bg-black w-40 text-white font-medium'>Add to Cart</button>
            <button></button>
          </div>

          {/* <Link
            to="/blog"
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            <a className="text-gray-700 hover:text-gray-900 hover:underline">
              Blog
            </a>
          </Link> */}

          <Link className='bg-black w-[100%] sm:w-[70%] text-white p-4 font-medium' to="/cart"> <button className=''>Buy Now</button> </Link>
          {/* <button className='bg-black w-[100%] sm:w-[70%] text-white p-4 font-medium'>Buy Now</button> */}
        </div>
      </div>

      <div className='my-40'>
        <ul className="flex md:flex justify-center text-xl font-semibold my-10 space-x-10">
          <li><a onClick={() => {setActiveTab('description')}} className="text-gray-700 cursor-pointer hover:text-gray-900 hover:underline">Description</a></li>
          <li><a onClick={() => {setActiveTab('information')}}  className="text-gray-700 cursor-pointer hover:text-gray-900 hover:underline">Informaton</a></li>
          <li><a onClick={() => {setActiveTab('review')}}  className="text-gray-700 cursor-pointer hover:text-gray-900 hover:underline">Reviews</a></li>
        </ul>
        <div className={activeTab !== 'information' ? 'hidden' : 'justify-start w-[75%] flex m-auto '}>
          {/* hidden justify-start w-[75%] flex m-auto */}
          <table class=" table-auto w-[65%] mt-10">
            <tbody>
              <tr>
                <td class="border px-4 py-2 font-bold">Weight</td>
                <td class="border px-4 py-2">Content 1</td>
              </tr>
              <tr>
                <td class="border px-4 py-2 font-bold">Color</td>
                <td class="border px-4 py-2">Content 2</td>
              </tr>
              <tr>
                <td class="border px-4 py-2 font-bold">Dimensions</td>
                <td class="border px-4 py-2">Content 3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={activeTab !== 'description' ? 'hidden' : 'flex flex-col items-start gap-4  text-left justify-start w-[75%] m-auto '}>
          {/* hidden justify-start w-[75%] flex m-auto */}
          <h3 className='text-xl'> introduction </h3>
          <p className='text-sm text-gray-600'>With ultralight, quality cotton canvas, the JanSport Houston backpack is ideal for a life-on-the-go. This backpack features premium faux leather bottom and trim details, padded 15 in laptop sleeve and tricot lined tablet sleeve </p>

          <h3 className='text-lg'> Features </h3>
          <p> Fully padded back panel, web hauded handle
        Internal padded sleeve fits 15″ laptop & unique fabric application
        Internal tricot lined tablet sleeve
        One large main compartment and zippered
        Premium cotton canvas fabric   </p>
        
        </div>

        <div className={activeTab !== 'review' ? 'hidden' : 'flex items-start gap-4  text-left justify-start w-[75%] m-auto '}>
          {/* hidden justify-start w-[75%] flex m-auto */}
          <p className='flex justify-center m-auto p-10 items-center text-center'> Will work on it </p>
        
        </div>
      </div>

      <div className='lg:mx-40'>
        <h2 className='text-xl font-semibold text-black'> Related Products </h2>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-1'>
        {relatedProduct?.map((product) => (
            <Link style={{ textDecoration: 'none' }} to={`/products/${product.id}`} key={product.id}>
              <ProductItem product={product} />
            </Link>
          ))}
          {/* <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem /> */}

        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Product;
