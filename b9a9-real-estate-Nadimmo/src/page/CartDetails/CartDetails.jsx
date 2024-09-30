/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CartDetails = ({ cart }) => {
//   console.log(cart);
  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    bedrooms,
    garage,
    year_built,
    Lot_size,
    bathrooms,
    id
  } = cart;
  return (
    <div>
      <div className="card card-compact w-[320px] mt-2 bg-base-100 shadow-xl h-[560px] p-5 border-2 hover:shadow-stone-500 ">
        <figure >
          <img src={cart.image} alt="loading.."/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>
          <div>
            <ul className="text-lg font-bold grid grid-cols-2 gap-5">
              <li>Price: {price}</li>
              <li>Status: {status}</li>

              <li>Location: {location}</li>
              <li>Area: {area}</li>
            </ul>
          </div>
          <div className="card-actions ">
            <Link to={`carts/${id}`} className="btn btn-info justify-start">View Details</Link>
          </div>
        </div>
      </div><br /><br />
    </div>
  );
};

export default CartDetails;
