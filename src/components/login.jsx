import { Link } from "react-router-dom"
import { useState } from 'react'
//import  { useRouter }  from "react-router-dom"
import { useNavigate } from 'react-router-dom';


const testToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDE5NDkxNzYxIiwibmFtZSI6IkVsYWhlIiwibGFzdE5hbWUiOiJLZXlraG9zcmF2aSIsImlhdCI6MTUxNjIzOTAyMn0.wuaOqYGLCfsFpaxhyhgCAz5bThfZufix3jcc1XBvzYA";
const arrayToken = testToken.split('.');
const tokenPayload = JSON.parse(atob(arrayToken[1]));
console.log(tokenPayload)



let data = { message: "success", token: testToken }



export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [formData, setFormData] = useState({});
  //const router = useRouter()
  const navigateTo = useNavigate();

  function submitUser(event) {
    event.preventDefault()

    if (data.message === "success") {
      localStorage.setItem("jwt-token", data.token)
      setUsername('')
      setPassword('')
      navigateTo("/Mainpage");
    } else {
      alert(data.message)
    }
    
    
  } 
  


  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setFormData({
      ...formData, 
      [name]: value 
    });
  }
  


  return (
    <>

      <div className="flex h-screen ">
        <div className="h-screen bg-yellow-400 basis-2/3 flex flex-col justify-center ">
          <h2 className="text-5xl font-bold mx-auto ml-8  ">Login</h2>
          <h3 className="text-sm ml-8 mt-5 "> please enter your username and password
          </h3>



        </div>

        <div className="basis-1/3 h-screen flex items-center">
          <div className="m-auto border-2 size-80 p-5">
            <div>
              <h1 className="text-2xl font-bold">Welcome back!</h1>

              <h2 className="text-base">Hello again</h2>
            </div>

            <div className="size-auto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">username</label>
              <input className="shadow appearance-non border rounded w-full py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="username" type="text" name="username" onChange={handleInputChange}
                
              />


              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">password</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                 id="password" type="text" name="password" onChange={handleInputChange} />
              </div>
              <div className="transition duration-0 hover:duration-150 flex items-ceter justify-between">


                <Link
                  className="bg-black hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  "
                  type="button" onClick={submitUser}  >

                  Sign In
                </Link>
                <Link className=" font-bold text-sm text-black hover:text-yellow-400 border-2 py-2 px-4 " to="/register">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )

}

export default Login