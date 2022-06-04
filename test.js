const nodemailer = require('nodemailer');

const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "15aa46ce0169cf",
      pass: "f3e363e73032ae"
    }
}

const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option,(error,info) => {
        if(error){
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    })
};

let email_data = {
    from : 'yungsu2391@gmail.com',
    to : 'yungsu2391@gmail.com',
    subject : '테스트 메일',
    text : 'nodejs로 한시간 만에'
}

send(email_data)