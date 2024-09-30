import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { Helmet } from "react-helmet";

const auth = getAuth(app)
const Update = () => {
    const {updateUserProfile, setUser} = useContext(AuthContext)
    const { displayName, email, photoURL} = auth.currentUser
    // console.log(authInfo.user)
    
    const handlerUpdate = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.photo.value;
        console.log(name,image)

        updateUserProfile(name,image)
        .then(()=> {
             setUser(name,image)
            })
        .catch(error => {
          alert(error.message)
          console.log(error.message)
        } )

    }
  return (
    <div className="mx-4">
      <Helmet> <title>Update Profile</title></Helmet> 
      <div className="hero lg:p-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left  lg:w-[600px]">
            <img src={photoURL} alt="loading.." className="w-[100px] h-[100px] rounded-[50%] ml-[140px]"  />
            <h1 className="text-xl lg:text-4xl font-bold mt-4">Name: {displayName}</h1>
            <p className="py-3 ">
                {email ? <p>Email: {email}</p>: <p>Email not found</p>}
            </p>
            <p className="py-3">
             Phot URL: {photoURL}
            </p>
          </div>
          <div className="card shrink-0 w-[320px] lg:w-full lg:max-w-sm shadow-2xl bg-base-100 mr-10 lg:mr-0 ">
            <form onSubmit={handlerUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                name="photo"
                  type="url"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
