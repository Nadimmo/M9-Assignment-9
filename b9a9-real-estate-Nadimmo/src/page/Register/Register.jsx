import { useContext, useState} from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";


const Register = () => {
  const { register, updateUserProfile } = useContext(AuthContext);
  const [show,setShow] = useState(false)


  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name,email,password,image)
    // Password verification
    if(password.length < 6){
      alert('Password must be 6 character or longer')
      return
    }
    else if(! /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      alert('Password must contain at least one uppercase letter, one lowercase letter');
      return;
    }

  
    register(email, password)
      .then(result => {
        updateUserProfile(name,image)
        console.log(result.user);
        alert("User created successfully");
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="hero">
      <Helmet> <title>Register Page</title></Helmet>
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input name="photo" type="url" placeholder="Photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type={show ? 'text':"password"} placeholder="Password" className="input input-bordered" required />
              <span onClick={() => setShow(!show)} className="absolute mt-12 ml-52  text-2xl">
                  {show ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>Already have an account? <Link to={'/login'} className="text-green-500">Login</Link></p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
