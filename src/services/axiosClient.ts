import axios from 'axios';
const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});
const services = {
    sendMail:'send-mail'
}
type contact = {
    email:string;
    message:string;
    phoneNumber:number;
    subject:string;
    name:string;
}
async function sendMail(data:contact){
    try{
       const response = await client.post(services.sendMail, data);
       return response;
    }
    catch(err){
        console.log(err);
        throw new Error('failed');
    }
}
export {sendMail}