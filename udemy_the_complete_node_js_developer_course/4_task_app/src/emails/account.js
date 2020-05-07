const sgMail = require("@sendgrid/mail")
const sendgridAPIKey = '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\n'

sgMail.setApiKey(sendgridAPIKey)

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

