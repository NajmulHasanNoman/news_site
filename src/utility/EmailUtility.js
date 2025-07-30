import nodemailer from 'nodemailer';
export async function SendEmail(EmailTo,EmailText,EmailSubject){
   let Transport= nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:25,
        secure:false,
        auth:{user:"noman.cse.eu@gmail.com", pass:"vdyd oynb emmq lvsf"},
        tls:{rejectUnauthorized:false}
    })
    let MailOption={
       from:"Next JS News Portal <noman.cse.eu@gmail.com>",
       to:EmailTo,
       subject:EmailSubject,
       text:EmailText
    }
    return await Transport.sendMail(MailOption)
}
