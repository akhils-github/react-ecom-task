import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";

const Products = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // destructure product
  const { id, images, category, title, price } = product;
  console.log(product);
  // return <Slideshow images={images} />;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="  group-hover:scale-110 transition duration-300"
              src={images[0]}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-teal-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category, title & price */}
      <div>
        <div className="tex-sm capitalize text-gray-500 mb-1">
          {category?.name}
        </div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        <h2 className="font-semibbold">$ {price}</h2>
      </div>
    </div>
  );
};

// export default Product;

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  // destructure product
  const { id, images, category, title, price } = product;
  console.log(images, colors);
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images?.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className="slideshow">
        <div className="border border-[#e4e4e4] relative overflow-hidden group transition">
          <div
            className="slideshowSlider relative"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {images.map((backgroundColor, index) => (
              <div className="slide rounded" key={index}>
                <img src={backgroundColor} alt="" className="rounded" />
              </div>
            ))}
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-teal-500">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>

        <div className="relative my-2">
          <div className="tex-sm capitalize text-gray-500 mb-1 text-center">
            {category?.name}
          </div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1">{title}</h2>
          </Link>

          <h2 className="font-semibbold">$ {price}</h2>
        </div>
      </div>
      {/* <div>
        <div className="tex-sm capitalize text-gray-500 mb-1">
          {category?.name}
        </div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        <h2 className="font-semibbold">$ {price}</h2>
      </div> */}
    </>
  );
}
export default Product;
