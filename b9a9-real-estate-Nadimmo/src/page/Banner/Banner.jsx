import "../Home/style.css";
const Banner = () => {
  return (
    <div className="carousel w-[100%] relative bottom-0 " id="home">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src="https://i.ibb.co/chhBx1F/06.jpg" className="w-[100%] " />
        <div className="absolute  transform -translate-y-1/2 left-5 right-5 ">
          <div className="pt-[500px] flex justify-between">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <h1 className="text-xl lg:text-6xl mt-20 lg:mt-20 text-center text-white font-bold">
              Signle Family House
            </h1>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/3Cv8M9d/02.jpg" className="w-full " />
        <div className="absolute  transform -translate-y-1/2 left-5 right-5 ">
          <div className="pt-[500px] flex justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <h1 className="text-xl lg:text-6xl mt-20 lg:mt-20 text-center text-sky-500 font-bold">
              Capital City House
            </h1>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/vQ2TMqp/04.jpg" className="w-full " />
        <div className="absolute  transform -translate-y-1/2 left-5 right-5 ">
          <div className="pt-[500px] flex justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <h1 className="text-xl lg:text-6xl mt-20 lg:mt-20 text-center text-orange-500  font-bold">
              {" "}
              Family Apartment House
            </h1>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/DkCXkZ0/03.jpg" className="w-full " />
        <div className="absolute  transform -translate-y-1/2 left-5 right-5 ">
          <div className="pt-[500px] flex justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <h1 className="text-xl lg:text-6xl mt-20 lg:mt-20 text-center text-lime-500 font-bold">
              Vacation Rentals
            </h1>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/k0dJ6GK/05.jpg" className="w-full " />
        <div className="absolute  transform -translate-y-1/2 left-5 right-5 ">
          <div className="pt-[500px] flex justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <h1 className="text-xl lg:text-6xl mt-20 lg:mt-20 text-center  font-bold">
              Student House
            </h1>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
