/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';
import {useLoaderData, useParams} from 'react-router-dom'
const ViewDetails = () => {
    const carts = useLoaderData()
    const {id} = useParams()
    const IDInt = parseInt(id)
    const cart = carts.find(cart => cart.id === IDInt)

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
        nearby_attractions
      } = cart;
    // console.log(carts, id, IDInt, cart)
    
    
    return (
        <div className=" lg:card-side bg-base-100 shadow-xl">
          <Helmet> <title>View Details</title></Helmet>
        <figure><img src={image} alt="loading.." title={estate_title} className=' lg:ml-20 lg:w-[1000px]'/></figure>
        <div className="card-body lg:mx-16">
          <h2 className="card-title font-bold text-2xl">{estate_title}</h2>
          <p className='text-xl mt-2'>{description}</p><br />
          <div className='grid md:grid-cols-2 lg:grid-cols-4'>
            <div>
                <ul>
                    <h3 className="text-2xl font-bold">Facilities</h3>
                    <br />
                    <li>{facilities[0]}</li>
                    <li>{facilities[1]}</li>
                    <li>{facilities[2]}</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h3 className="text-2xl font-bold">Nearby Attraction</h3>
                    <br />
                    <li>{nearby_attractions[0]}</li>
                    <li>{nearby_attractions[1]}</li>
                    <li>{nearby_attractions[2]}</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h3 className="text-2xl font-bold">Others Facilities</h3>
                    <br />
                    <li>Bedrooms: {bedrooms}</li>
                    <li>Bathrooms: {bathrooms}</li>
                    {
                        garage?
                        <li>Garage: {garage}</li>:
                        <li>Garage: Non</li>
                    }
                </ul>
            </div>
            <div>
            <ul>
                <h3 className="text-2xl font-bold">Details For Buy</h3>
                <br />
              <li>Price: {price}</li>
              <li>Status: {status}</li>
              <li>Location: {location}</li>
              <li>Area: {area}</li>
            </ul>
          </div>
          </div>
          
          <div className="card-actions justify-end">
            <button className="btn btn-success">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ViewDetails;