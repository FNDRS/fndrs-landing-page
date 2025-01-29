import {MailOptions} from "../model/MailOptions";
import {nodemailerTransporter} from "../utils/nodemailer-transport";

export async function sendEmail(mailOptions: MailOptions) {
    const info = await nodemailerTransporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId)
}
