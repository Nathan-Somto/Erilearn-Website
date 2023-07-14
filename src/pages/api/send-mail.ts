import type { NextApiRequest, NextApiResponse } from 'next'
import nodeEmailer from 'nodemailer'
type Data = {
  success:string
}
|{error:string}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const message ={
        from:process.env.EMAIL_ADDRESS,
        to:req.body.email,
        subject:req.body.subject,
        html:`
        <p>Name : ${req.body.name}</p>
        <p>Phone Number : ${req.body.phoneNumber}</p>
        <p>${req.body.message}</p>
        `
    }
    let transporter = nodeEmailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL_ADDRESS,
            pass:process.env.EMAIL_PASSWORD
        }
    })
    if (req.method === 'POST') {
        transporter.sendMail(message, (err, info) => {
    
          if (err) {
            res.status(404).json({
                error: `${err.message}`
            });
          } else {
            res.status(202).json({
                success: `Message delivered to ${info.accepted}`
            });
          }
        });
      }
}