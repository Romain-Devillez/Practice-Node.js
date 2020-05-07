const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rom.dev@live.fr',
        subject: "Welcome to the app, " . name
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rom.dev@live.fr',
        subject: "Sorry to see you leave the app, " . name
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

