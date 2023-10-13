import axios from 'axios';

export const commonAPI =async (httpMethod,url,reqBody)=>{
    console.log(reqBody);
    const reqConfign={
        method:httpMethod,
        url,
        data:reqBody,
        headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios (reqConfign).then(
        (result)=>{
            return result
        }
    ).catch((err)=>{
        return err
    })
}
