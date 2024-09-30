/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4">Explore Your Dream Home - Find Your Perfect Residence Today. Experience Luxury Living with Our Premium Selection of Residential Properties. Start Your Journey Now!"</p>
            <div className="flex items-center">
              <a href="#" className="mr-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mt-6 md:mt-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="mb-4">
              <li className="mb-2">Address: 123 Main St, City, State, 12345</li>
              <li className="mb-2">Phone: 555-555-5555</li>
              <li className="mb-2">Email: info@example.com</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="mb-4 lg:flex">
            <div>
            <li className="mb-2"><a href="#">Properties</a></li>
              <li className="mb-2"><a href="#">Services</a></li>
              <li className="mb-2"><a href="#">Testimonials</a></li>
              <li className="mb-2"><a href="#">FAQ</a></li><br />
            </div>
             
              <div className="lg:ml-16">
                <li className="mb-2"><a href="#">Mortgage Calculator</a></li>
                <li className="mb-2"><a href="#">Neighborhood Guide</a></li>
                <li className="mb-2"><a href="#">Blog</a></li>
                <li className="mb-2"><a href="#">Terms and Conditions</a></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
