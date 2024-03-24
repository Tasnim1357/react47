 const getStoreJob=()=>{

    // const store =localStorage.getItem('jobapplication');
    // console.log(store)
    // if(store){
    //     return JSON.parse(store);
    // }
    // return []
    console.log('value')
}

 const saveJob =id=>{
    const store=getStoreJob();
    const exists=store.find(jobId => jobId === id )
    if(!exists){
        store.push(id);
        localStorage.setItem('jobapplication',JSON.stringify(store));
    }                                                                                                                                                                                                                                                                                                                     )

}
export {saveJob,getStoreJob}



