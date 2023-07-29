import React  from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate,useParams } from 'react-router-dom';


function UpdateEmployee() {

  const param = useParams()
  

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const createEmployee = async (data) => {

    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/updateUser/${param.id}` ,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    console.log("FORM RESPONSE......", savedUserResponse);

    navigate("/")
  };

  return(
    <div>
      <form onSubmit={handleSubmit(createEmployee)}>
        <div >
          <div>
            <label
              htmlFor="name"
             
            >
              {" "}
              Employee Name{" "}
            </label>
            <div >
              <input
               
                type="text"
                placeholder="Enter You Full Name"
                {...register("name")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
             
            >
              {" "}
              Employee Email Id{" "}
            </label>
            <div >
              <input
                
                placeholder="Enter Your Email"
                {...register("email")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="title"
             
            >
              {" "}
              Employee Title{" "}
            </label>
            <div>
              <input
                
                type="text"
                placeholder="Enter Your Employee Title"
                {...register("title")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="department"
             
            >
              {" "}
              Employee Department{" "}
            </label>
            <div className="mt-2.5">
              <input
              
                type="text"
                placeholder="Enter Your Employee Department"
                {...register("department")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="role"
           >
              {" "}
              Employee Role{" "}
            </label>
            <div className="mt-2.5">
              <input
                
                type="text"
                placeholder="Enter Your Employee Role"
                {...register("role")}
              ></input>
            </div>
          </div>

          <div>
            <button
              type="submit"
             className='bg-red-500'
            >
              Create Employeee
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateEmployee