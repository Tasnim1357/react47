
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { saveJob } from '../../utilis/localstorage';

const Jobdet =() => {
    const jobs =useLoaderData()
    const {id} =useParams();
    // id er integer form nite hobe
    const job=jobs.find(job=>job.id == id)
    console.log(job)

    const applyjob=(id)=>{
        // saveJob(id)
        toast('You have applied successfully')
    }
    return (
        <div>
           
            <div className='grid md:grid-cols-4 gap-4'>
                    <div className='border md:col-span-3'>
                    <h2>Job Details of:{job.job_title}</h2>
                    <h2 className="text-4xl">Details coming here</h2>
                    <p>{job.company_name}</p>
                    </div>
                    <div className='border md:col-span-1'>
                        <h2 className="text-2xl">Side Things</h2>
                        <button onClick={()=>applyjob(id)} className='btn btn-primary w-full'>Apply Now</button>
                    </div>
            </div>
            <ToastContainer />
        </div>
    );
};

Jobdet.propTypes = {
    
};

export default Jobdet;