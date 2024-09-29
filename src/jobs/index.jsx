
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

import './index.css'
import Header from '../header';
import DisplayAllJobs from '../displayAllJobs';
import FilterSection from '../filterSection';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';


const Jobs = () => {

    // const token = Cookies.get("jwtToken");
    // const navigate = useNavigate();

    // useEffect(()=>{

    //     if(token === undefined){
    //         navigate("/login");
    //     }

    // },[]);

    const [allValues, setValues] = useState({

        jobsArr: [],
        emptypeList: [],
        minPackage: "",
        userInput: ""

    });

    const token = Cookies.get("jwtToken");

    useEffect(() => {

        const onFetchUserData = async () => {

            const { emptypeList, minPackage, userInput } = allValues;

            console.log(emptypeList);

            const api = `https://apis.ccbp.in/jobs?employment_type=${emptypeList}&minimum_package=${minPackage}&search=${userInput}`;

            const options = {
                method: "Get",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            try {

                const response = await fetch(api, options);
                const data = await response.json();

                // console.log(data);

                if (response.ok === true) {

                    setValues({ ...allValues, jobsArr: data.jobs });

                }


            } catch (error) {
                console.log(error);

            }
            // console.log(data);


        }

        onFetchUserData();

    }, [allValues.userInput, allValues.emptypeList])

    const onChangeSearchIn = (e) => {
        // console.log(e.target.value);
        if (e.key === "Enter") {
            setValues({ ...allValues, userInput: e.target.value });
        }
    }

    const onChangeEmpType = (value, isChecked) => {
        // console.log( isChecked );
        if (isChecked === true) {
            setValues({ ...allValues, emptypeList: [...allValues.emptypeList, value] });
        }
        else {
            setValues({ ...allValues, emptypeList: allValues.emptypeList.filter(each => each !== value) });
        }

    }



    return (
        <div>
            <Header />

            <div className='all-jobs-filter-cont'>

                <div className='filter-cont'>
                    <FilterSection changeEmpType={onChangeEmpType} />
                </div>

                <div className='all-jobs-cont'>

                    <input onKeyUp={onChangeSearchIn} type="search" className="form-control w-75 mb-3" />

                    <ul>
                        {
                            allValues.jobsArr.map(each => <DisplayAllJobs key={each.id} jobsItem={each} />)
                        }
                    </ul>

                </div>

            </div>
        </div>
    )
}





export default Jobs;