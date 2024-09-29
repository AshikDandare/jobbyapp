
import "./index.css";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";

const employmentTypeList = [
    {
        label: "Full Time",
        id: "FULLTIME"
    },
    {
        label: "Part Time",
        id: "PARTTIME"
    },
    {
        label: "Freelance",
        id: "FREELANCE"
    },
    {
        label: "Internship",
        id: "INTERNSHIP"
    },
]

const salaryRangesList = [
    {
        salaryId: '1000000',
        label: '10 LPA and above',
    },
    {
        salaryId: '2000000',
        label: '20 LPA and above',
    },
    {
        salaryId: '30000000',
        label: '30 LPA and above',
    },
    {
        salaryId: '4000000',
        label: '40 LPA and above',
    },
]

const FilterSection = (props) => {

    const {changeEmpType} = props;
    // console.log(changeEmpType);

    const [allValues, setValues] = useState({
        profileDetails: {}
    })

    const token = Cookies.get("jwtToken");

    useEffect(() => {

        const getProfileDetails = async () => {
            const apiUrl = 'https://apis.ccbp.in/profile'

            const options = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            }

            const response = await fetch(apiUrl, options);
            const data = await response.json();
            if (response.ok === true) {
                setValues({ ...allValues, profileDetails: data.profile_details })
            }
        }
        getProfileDetails();

    }, [])

    const renderEmploymentTypeList = () => {

        const onChangeEmpType = (e) => {
            // console.log(e.target.value);
            changeEmpType(e.target.value, e.target.checked);

            // console.log(e.target.checked);
        }

        return employmentTypeList.map(each => {

            return (
                <li className="filters-list-item" key={each.id}>
                    <input type="checkbox" className="checkbox-input" value={each.id} id={each.id} onChange={onChangeEmpType} />

                    <label htmlFor={each.id} className="filter-label" > {each.label} </label>
                </li>
            )
        })
    }

    const renderEmploymentTypes = () => (
        <>
            <h1 className="filter-heading"> Type of Employment </h1>
            <ul className="filter-list"> {renderEmploymentTypeList()} </ul>
        </>
    )

    const renderSalaryRangesList = () => {

        return salaryRangesList.map(each => {

            return (
                <li className="filters-list-item" key={each.salaryId}>
                    <input type="radio" className="checkbox-input" value={each.salaryId} id={each.salaryId} name="salary ranges" />

                    <label htmlFor={each.salaryId} className="filter-label" > {each.label} </label>
                </li>
            )
        })
    }

    const renderSalaryRangesTypes = () => (
        <>
            <h1 className="filter-heading"> Salary Range </h1>
            <ul className="filters-list"> {renderSalaryRangesList()} </ul>
        </>
    )

    const renderProfileDetails = () => (
        <div className="profile-details-container">
            <img src={allValues.profileDetails.profile_image_url} alt="profile" className="profile-image" />
            <h1 className="profile-name"> {allValues.profileDetails.name} </h1>
            <p className="profile-bio"> {allValues.profileDetails.short_bio} </p>
        </div>
    )

    return(
        <div className="filter-group-container">
            {renderProfileDetails()}
            {renderEmploymentTypes()}
            <hr className="separator" />
            {renderSalaryRangesTypes()}
        </div>
    )

}






export default FilterSection;