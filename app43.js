const express=require('express');
const mailer=require('nodemailer');
const app43=express();

let transporter=mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'congdkph20053@fpt.edu.vn',
        pass: 'yilj buna krqq ffnq'
    }
});

let mailOption={
    from: 'congdkph20053@fpt.edu.vn',
    to: 'congtay24@gmail.com',
    subject: 'Thông báo quan trọng',
    text: 'Đây là gmail gửi cho bạn vào ngày 17/7'
};

transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log("Thanh cong: ",info.messageId);
    }
});

app43.listen(3002,()=>{
    console.log("server dang chay o cong 3002");
});