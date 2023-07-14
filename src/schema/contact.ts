import * as Yup from 'yup';
 const ContactSchema = Yup.object().shape({
    email:Yup.string().email().required("Email is required"),
    name: Yup.string().min(2,"Name cannot be less than 2 chars").max(255,"Name cannot be more than 255 chars").required("Name is required"),
    subject: Yup.string().min(2).max(255).required(),
    phoneNumber: Yup.number().required(),
    message: Yup.string().min(2).required()
 })
export default ContactSchema