const nodemailer = require('nodemailer');
nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
        host: 'us2.smtp.mailhostbox.com',
        port: 25,
        auth: {
            user: 'email@gmail.com', // generated ethereal user
            pass: 'passwprd' 
        }
    });  
    let mailOptions = {
        from: 'annonymous', // sender address
        to: 'abc@gmail.com', // list of receivers
        subject: 'Hello', // Subject line
        text: 'Hello world working', // plain text body
        html: '<b>Hello world?</b>' // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});