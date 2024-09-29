
import { MdOutlineLocationOn } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { RiHomeOfficeLine } from "react-icons/ri";
import "./index.css";
import { Link } from "react-router-dom";

/*
{
"id": "1e47d355-4000-4c27-a17a-ae55dd6df27d",
"title": "Fullstack Developer",
"rating": 4,
"company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
"location": "Hyderabad",
"job_description": "Google is and always will be an engineering company. We hire people with a broad set of technical skills who are ready to take on some of technology's greatest challenges and make an impact on millions, if not billions, of users. Google engineers are changing the world one technological achievement after another.",
"employment_type": "Internship",
"package_per_annum": "10 LPA"
}
*/

const DisplayAllJobs = (props) => {
    // console.log(props.jobsItem);

    const { jobsItem } = props;

    const { id, title, rating, company_logo_url, location, job_description, employment_type, package_per_annum } = jobsItem;


    return (
        <Link to={`/jobs/${id}`}>
            <li className="display-jobs-card">

                <div className="logo-rating-cont">
                    <img src={company_logo_url} style={{ width: "70px" }} />

                    <div className="title-rating-cont">
                        <h3>{title}</h3>
                        <FaStar style={{ color: "gold", marginRight: "10px" }} />
                        <span>{rating}</span>
                    </div>
                </div>

                <div className="locatn-intern-packge-cont">
                    <div className="locatn-intern-cont">
                        <div className="locatn-cont">
                            <MdOutlineLocationOn />
                            <span> {location} </span>
                        </div>
                        <div className="intern-cont">
                            <RiHomeOfficeLine />
                            <span> {employment_type} </span>
                        </div>
                    </div>

                    <div className="package-cont">
                        <span> <h5> {package_per_annum} </h5> </span>
                    </div>
                </div>

                <hr />

                <div>

                    <h5>Description</h5>
                    <br />
                    <p>
                        {job_description}

                    </p>
                </div>


            </li>
        </Link>
    )
}








export default DisplayAllJobs;