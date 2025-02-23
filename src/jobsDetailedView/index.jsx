
import { useParams } from 'react-router-dom';
import './index.css';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const JobsDetailedView = () => {

    // console.log(useParams());

    const { id } = useParams();
    const token = Cookies.get("jwtToken");

    useEffect(() => {

        const fetchJobsDetails = async () => {

            const api = ` https://apis.ccbp.in/jobs/${id}`;

            const options = {
                method: "Get",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const response = await fetch(api, options);
            const data = await response.json();

            console.log(data);

        }


        fetchJobsDetails();
    }, [])


    return <h1> Jobs Detailed View Section </h1>

}







export default JobsDetailedView;