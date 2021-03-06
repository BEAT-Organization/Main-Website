const nodemailer = require('nodemailer')

require('dotenv').config()
const { WEBSITE_MAIL, TEST_MAIL, WEBSITE_MAIL_PASS } = process.env

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: WEBSITE_MAIL,
        pass: WEBSITE_MAIL_PASS,
    },
})

function mailOptions(feedback) {
    styles = 
        "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);"+
        "padding: 16px;"+
        "text-align: center;"+
        "background-color: #f1f1f1;"+
        "max-width: 600px;"+
        "margin:3vh auto;"

    generatedMail = {
        from: WEBSITE_MAIL,
        to: TEST_MAIL,
        subject: 'Contact-Us Feedback [BEAT Website]',
        text: `
            name : ${feedback.Name},
            email: ${feedback.Email},
            message: ${feedback.Message}
        `,
        html: `
            <h2 style="text-align:center;  "> Feedback </h2>
            <hr align=”center” color="#000c26">

            <p style=" font-size: 1.1em"> <b>Name</b>: ${feedback.Name}</p>
            <p style="display:inline; font-size: 1.1em"> <b>Email</b>:
            <p style="display:inline; font-size: 1.1em;">${feedback.Email} </p>

            <div
                style="${styles}">
                <h3 style="color:#2276e7">Message</h1>
                ${feedback.Message}
            </div>
        `,
    }
    return generatedMail;
}

exports.sendFeedbackMail = async (feedback) => {
    transporter.sendMail(mailOptions(feedback), function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('email sent')
        }
    })
}