import { async } from "@firebase/util";
import axios from "axios"
import { getAuth } from "firebase/auth";
import '../config/firebase-config'


const api = async (endpoint, data,method)=>{
    var idToken =  getAuth().currentUser;
    if(idToken) idToken = await idToken.getIdToken();
    if(!idToken) idToken = "bearer";
    const mainUrl = process.env.REACT_APP_BACKEND_URL;
        const instance = axios.create({
            baseURL: mainUrl,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: idToken
            }
        })

        try{
            if(method === 'post') {
                // if(idToken === 'bearer') return {
                //     success: false
                // }
                const response = await instance.post(endpoint, data);
                return response;
            }
            else if(method === 'get') {
                const response = await instance.get(endpoint);
                return response;
            }
        }catch(err){
            console.log("error aaya h" + err);
            return {
                success: false
            };
        }

}


      
    


export const postUser = async (data)=> await api('/user/addUser', data, 'post');
export const getUserDetails = async ()=> await api('/user/userDetail', '', 'get');

export const getQuestion = async ()=> await api('/questions', '', 'get');

export default api;


// module.exports = {getRoommateListRespone};