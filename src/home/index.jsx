
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Header from './../header'
import './index.css'



//const Home = () => {

    // const token = Cookies.get("jwtToken");
    // const navigate = useNavigate();

    // useEffect(()=>{

    //     if(token === undefined){
    //         navigate("/login");
    //     }

    // },[])

   // return

//}


const Home = () =>(

    <div className='home-cont'>
        <Header/>

        <div className='home-content-cont'>
            <h1 className='home-heading'> Find The Job That Fits Your Life </h1>
            <p> Millions of people are searching for jobs, sallary, information, company reviews.
                Find the jobs that fits your ability and your potential. </p>

            <Link to = "/jobs" >
            <button className='btn btn-primary home-btn'> Find Jobs </button>
            </Link>
        </div>
    </div>

)






export default Home;