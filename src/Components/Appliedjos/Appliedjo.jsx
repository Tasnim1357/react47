import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { getStoreJob } from '../../utilis/localstorage';


const Appliedjo = props => {
    const jobs=useLoaderData();
    useEffect(()=>{
        const storeIds=getStoreJob();
        if(jobs.length>0){
            const jobsApply=jobs.filter(job=> storeIds.include(job.id))
            console.log(jobsApply)
        }
    },[jobs])
    return (
        <div>
           <h2>Jobs I applid</h2>

        </div>
    );
};

Appliedjo.propTypes = {
    
};

export default Appliedjo;