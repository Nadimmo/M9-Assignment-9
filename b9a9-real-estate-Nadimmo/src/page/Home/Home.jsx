/* eslint-disable react/no-unescaped-entities */
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import CartDetails from "../CartDetails/CartDetails";
import { Helmet } from "react-helmet";
import first from "../../assets/image/sign-up-icon.png";
import second from "../../assets/image/tell-us.png";
import third from "../../assets/image/publish.png";
const Home = () => {
  const carts = useLoaderData();
  console.log(carts);
  return (
    <div className="mx-4">
      <Helmet>
        {" "}
        <title>Home Page</title>
      </Helmet>
      <div className="pt-4">
        <Banner></Banner>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h1 className="text-2xl font-bold text-center">
          Tranquil Suburban Haven
        </h1>
        <p className="text-lg text-center mt-2">
          Embrace tranquility in our suburban haven. This charming residence
          offers comfort and elegance amidst lush surroundings. Enjoy spacious
          living areas, cozy fireplace nights, and expansive backyard
          gatherings. Conveniently located near amenities, it's the perfect
          balance of serenity and convenience. Experience suburban living at its
          finest - schedule a viewing today.
        </p>
        <br />
        <br />
        <div className=" lg:ml-6  grid grid-cols-1 lg:grid-cols-3 flex-col">
          {carts.map((cart) => (
            <CartDetails key={cart.id} cart={cart}></CartDetails>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="bg-base-200 p-10">
        <h1 className="text-6xl text-center font-bold">How it works</h1>
        <br />
        <br /> <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="card card-compact lg:w-72 bg-base-100 shadow-xl">
            <figure>
              <img src={second} className="w-[100px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Sign up on Rent.com

              </h2>
              <p className="text-gl">
              Easily register to start sharing your properties on our network of rental sites.

</p>
            </div>
          </div>
          <div className="card card-compact lg:w-72 bg-base-100 shadow-xl">
            <figure>
              <img src={first} className="w-[100px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tell us about your property
</h2>
              <p className="text-gl">
              Upload photos and details like the number of beds and bathrooms, amenities, pet policies, and more.


              </p>
            </div>
          </div>
          <div className="card card-compact lg:w-72 bg-base-100 shadow-xl">
            <figure>
              <img src={third} className="w-[100px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Publish your listing

              </h2>
              <p className="text-gl">
              After a review process, your listings will be shared with millions of potential renters.


              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1 className="text-6xl font-bold text-center">Frequency Ask Question?</h1><br />
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I manage and edit my listings?
          </div>
          <div className="collapse-content">
            <p>You can manage your listings via the Rent. dashboard. There, you’ll find numerous reports that you can use to view potential leads. You can also keep track of the number of leads and impressions your listings have received to gain insights into how well your properties are performing. Reporting is available for all property owners, regardless of the number of listings.
</p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How will potential renters contact me?
          </div>
          <div className="collapse-content">
            <p>Renters will be able to contact you in two ways: They may complete a short inquiry form which will be delivered to you via the email entered upon your listing registration. These leads will also be shown in your Rent. dashboard. To protect your privacy, potential renters may call you via a designated phone number we generate for your listings. All calls to this number will be forwarded to the phone number you provided upon registration.
</p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is the best way for me to post five or more listings?
          </div>
          <div className="collapse-content">
            <p>Please email the Rentals team at rentals@rent.com or call them at 866-730-7177. They will discuss options customized to your specific needs.
</p>
          </div>
        </div>
      </div><br /><br />
    </div>
  );
};

export default Home;
