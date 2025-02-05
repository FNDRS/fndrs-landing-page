import { nodemailerTransporter } from "@/app/utils/nodemailer-transport"

import { MailOptions } from "../model/MailOptions"

export async function sendEmail(mailOptions: MailOptions) {
  const info = await nodemailerTransporter.sendMail(mailOptions)
  console.log("Email sent: %s", info.messageId)
}
