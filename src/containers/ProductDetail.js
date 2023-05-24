import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      dispatch(selectedProduct(response.data));
    } catch (err) {
      console.log("Err", err);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]);

  return (
    <div className='py-16 px-16'>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className='flex gap-10'>
          <div className='w-1/2'>
            <div className='w-full h-[465px]'>
              <img src={image} alt={title} className='object-contain w-full h-full'/>
            </div>
          </div>

          <div className='w-1/2 flex flex-col '>
            <div className='text-2xl font-semibold mb-4'>{title}</div>
            <div className='text-white text-xl bg-vintage w-24 text-center rounded-r-full mb-4'>$ {price}</div>
            <div className='bg-gray-200 py-1 text-center text-gray-500 capitalize mb-2'>{category}</div>
            <div className='text-gray-600 mb-5'>{description}</div>
            <button className='bg-vintage text-white py-2 w-40 hover:bg-purple hover:ease-in hover:transition hover:duration-300'>ADD CHART</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
