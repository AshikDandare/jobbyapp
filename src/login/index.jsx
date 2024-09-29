import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
import Cookies from 'js-cookie';


const Login = () => {

    const [allValues, setValues] = useState({
        username : "",
        password : "",
        errorMsg : ""
    })

    const navigate = useNavigate();
    const token = Cookies.get("jwtToken");

    console.log(token);


    const onSubmitUserDetails = async (e) => {

        e.preventDefault();

        //console.log( allValues.username);

        const api = "https://apis.ccbp.in/login";

        const userDetails = {
            username : allValues.username,
            password : allValues.password,
            errorMsg : ""
        }

        

        const options = {
            method: "post",
            body: JSON.stringify(userDetails)
        }

       try {

        const response = await fetch(api, options);
        const data = await response.json();

        if(response.ok === true){
            
            setValues({...allValues, errorMsg : ""})
            navigate("/");
            Cookies.set("jwtToken", data.jwt_token);
            //console.log(data.jwt_token);

        }else{
                setValues({...allValues, errorMsg : data.error_msg})
        }

       } catch (error) {
        console.log(error);        
       }

        // console.log(response);
        // console.log(data);

    }

    const onChangeuser = (e) => {

        setValues({ ...allValues, username: e.target.value })

    }

    const onChangePassword = (e) => {

        setValues({ ...allValues, password: e.target.value })

    }

    useEffect(()=>{

        if(token !== undefined){
            navigate("/");
        }

    },[]);

    return (

        <div className='login-main-cont'>

            <form className='my-form' onSubmit={onSubmitUserDetails}>
                <div className='web-logo-cont'>

                    <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" className='w-25' />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">UserName</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={onChangeuser} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        onChange={onChangePassword} />
                </div>

                <button type="submit" className="btn btn-primary form-control mb-3">Submit</button>
               
                <p className='text-danger'> {allValues.errorMsg} </p>
            </form>

        </div>

    );
};





export default Login;