import { nodemailerTransporter } from "@/app/utils/nodemailer-transport"

import { MailOptions } from "../model/MailOptions"

export async function sendEmail(mailOptions: MailOptions) {
  await nodemailerTransporter.sendMail(mailOptions)
}
