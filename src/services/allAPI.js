import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


// uploading video
export const uploadVideo = async (body)=>{
    // call post http request to http://localhost:4000/video to add video in joson server return respondse to add component 
    return await commonAPI("POST",`${serverURL}/videos`,body) 
    
}

// get All videos video
export const getAlldVideos = async ()=>{
    // call get http request to http://localhost:4000/video to add video in joson server return rsepondse to add component 
    return await commonAPI("GET",`${serverURL}/videos`,"") 
    
}


// get a single video
export const getdVideo = async (id)=>{
    // call get http request to http://localhost:4000/video to add video in joson server return respondse to video card component 
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"") 
    
}


// delete a single video
export const deleteAdVideo = async (id)=>{
    // call delete http request to http://localhost:4000/video to add video in joson server return respondse to add component 
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{}) 
    
}


// store video watchijg history to json server
export const addHistory = async (videoHistory)=>{
    // call post http request to http://localhost:4000/video to add video in joson server return respondse to videoCard component 
    return await commonAPI("POST",`${serverURL}/historry`,videoHistory) 
    
}


// store video watching history to json server
export const getHistory = async ()=>{
    // call delete http request to http://localhost:4000/video to add video in joson server return respondse to watch History component 
    return await commonAPI("GET",`${serverURL}/historry`,"") 
    
}


// delete video watching history from json server
export const deleteHistory = async (id)=>{
    // call delete http request to http://localhost:4000/video to add video in joson server return respondse to watch History component 
    return await commonAPI("DELETE",`${serverURL}/historry/${id}`,{}) 
    
}


// add category to json server
export const saveCategory = async (body)=>{
    // call post http request to http://localhost:4000/catogories to add video in joson server return respondse to catogory component 
    return await commonAPI("POST",`${serverURL}/caregories`,body) 
    
}

// get cotegory from json server
export const getAllCategory = async ()=>{
    // call post http request to http://localhost:4000/catogories to get all category from joson server return respondse to catogory component 
    return await commonAPI("GET",`${serverURL}/caregories`,"") 
    
}


// delete cotegory from json server
export const deleteCategory = async (id)=>{
    // call post http request to http://localhost:4000/catogories to delete category from joson server return respondse to catogory component 
    return await commonAPI("DELETE",`${serverURL}/caregories/${id}`,{}) 
    
}


// Upate category cotegory from json server
export const updateCategory = async (id,body)=>{
    // call post http request to http://localhost:4000/catogories to update category from joson server return respondse to catogory component 
    return await commonAPI("PUT",`${serverURL}/caregories/${id}`,body) 
    
}

