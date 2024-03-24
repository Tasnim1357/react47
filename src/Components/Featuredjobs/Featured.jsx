import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Job from '../Job/Job';

const Featured = props => {

    const [jobs,setJobs]= useState([]);
    // Show all data
    const [dataLength,setDataLength]=useState(4)

    useEffect(() =>{
        async function fetchData(){
            const res = await fetch('jobs.json');
            const data= await res.json()
           setJobs(data)
        }
        fetchData()
    },[])


    return (
        <div>
            <div>
                <h2 className='text-5xl text-center'>Featured Jobs {jobs.length}</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eum placeat accusantium vitae ut voluptates.</p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
            
            {
                jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
            </div>
            <div className={dataLength=== jobs.length && `hidden`}>
                <button onClick={()=>setDataLength(jobs.length)} className='btn btn-primary'>See All Jobs</button>
            </div>
            
        </div>
    );
};

Featured.propTypes = {
    
};

export default Featured;