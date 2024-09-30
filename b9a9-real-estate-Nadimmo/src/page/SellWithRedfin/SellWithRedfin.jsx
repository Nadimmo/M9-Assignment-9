/* eslint-disable react/no-unescaped-entities */
import logo from "../../assets/image/redfin.jpg";
import logo2 from "../../assets/image/poster.jpg";
import logo3 from "../../assets/image/man.jpg";
import logo4 from "../../assets/image/home.jpg";
import first from '../../assets/image/first.png'
import second from '../../assets/image/second.png'
import third from '../../assets/image/third.png'
import { Helmet } from "react-helmet";
const SellWithRedfin = () => {
  return (
    <div>
      <Helmet> <title>Sell With Redfin</title></Helmet>
      <div>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={logo} className="rounded-lg lg:w-[50%] lg:h-[80%] shadow-2xl" />
            <div>
              <h1 className="text-4xl font-bold ">
                Sell for top dollar and save thousands on fees
              </h1>
              <p className="py-6 opacity-[0.7]">
                Our agents have the experience to price, market, and sell your
                home for the best price possible, all for half the fee other
                brokerages often charge.
              </p>
              <p className="py-6 opacity-[0.7]">
                Plus, you can ask your agent about selling directly to a buyer
                to save tens of thousands of dollars in fees.
              </p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />{" "}
              <button className="btn btn-error text-lg">Next</button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="bg-base-200 lg:p-20 p-10">
          <h1 className="text-4xl font-bold text-center">Why sell with Redfin?</h1>
            <br /><br />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card card-compact lg:w-72 bg-base-100 shadow-xl">
                    <figure>
                    <img
                        src={second}
                    />
                    </figure>
                    <div className="card-body">
                    <h2 className="card-title">We have the best agents in your market</h2>
                    <p>Redfin agents are among the most experienced in the industry.</p>
                    
                    </div>
                </div>
                <div className="card card-compact lg:w-72 bg-base-100 shadow-xl">
                    <figure>
                    <img
                        src={first}
                    />
                    </figure>
                    <div className="card-body">
                    <h2 className="card-title">Reach more buyers</h2>
                    <p>Redfin is the #1 brokerage website, with five times more traffic than the next closest competitor.</p>
                    
                    </div>
                </div>
                <div className="card card-compact lg:w-72 bg-base-100 shadow-xl">
                    <figure>
                    <img
                        src={third}
                    />
                    </figure>
                    <div className="card-body">
                    <h2 className="card-title">Save with a listing fee as low as 1%</h2>
                    <p>When you buy and sell with us, you’ll pay half the fee other brokerages often charge.</p>
                    
                    </div>
                </div>
            </div>
        </div>
        <br /><br />
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
            <img src={logo2} className="rounded-lg lg:w-[50%] lg:h-[80%] shadow-2xl" />
            <div>
                <div>
                    <h1 className="text-4xl font-bold ">
                    More eyes on your home
                    </h1>
                    <p className="py-6 opacity-[0.7]">
                    When you list with Redfin, your home will get 70% more views, increasing the chances you’ll find interested buyers.
                    </p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold ">
                    Preferred placement in search results
                    </h1>
                    <p className="py-6 opacity-[0.7]">
                    For the first week your listing is live, it will show at the top of buyers’ searches across the Redfin site and app.
                    </p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold ">
                    Digital marketing campaigns

                    </h1>
                    <p className="py-6 opacity-[0.7]">
                    Every Redfin listing gets a digital marketing campaign targeted to active buyers.
                    </p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold ">
                    Interactive 3D tours
                    </h1>
                    <p className="py-6 opacity-[0.7]">
                    Every home listed with Redfin gets a stunning 3D tour so buyers can tour them from anywhere.</p>
                </div>
            </div>
          </div>
        </div>
        <br /><br />
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={logo4} className="rounded-lg lg:w-[50%] lg:h-[80%] shadow-2xl" />
            <div>
              <h1 className="text-4xl font-bold ">
              Selling a high-end home?              </h1>
              <p className="py-6 opacity-[0.7]">
              You may be eligible for Redfin Premier, our highest level of service from our best agents. You'll be paired with a local expert who has years of experience selling luxury homes.
              </p>
              <button className="btn btn-error text-lg">Learn more</button>
            </div>
          </div>
        </div>
        <br /><br />
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
            <img src={logo3} className="rounded-lg lg:w-[50%] lg:h-[80%] shadow-2xl" />
            <div>
              <h1 className="text-4xl font-bold ">
              Ready to get started?
              </h1>
              <p className="py-6 opacity-[0.7]">
              We can connect you with an agent today who will help you understand your options for selling and answer all your questions.

              </p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />{" "}
              <button className="btn btn-error text-lg">Next</button>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default SellWithRedfin;
