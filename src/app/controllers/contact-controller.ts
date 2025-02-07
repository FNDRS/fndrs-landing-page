import { ContactFormDTO } from "@/app/dtos/ContactFormDTO"
import { MailOptions } from "@/app/model/MailOptions"
import { sendEmail } from "@/app/services/send-email-service"

import { validate } from "class-validator"

export async function handleContactSubmission(body: ContactFormDTO) {
  const errors = await validate(body)

  if (errors.length > 0) {
    const validationErrors = errors.map((err) => ({
      property: err.property,
      constraints: err.constraints
    }))
    return { status: 400, errors: validationErrors }
  }

  const mailOptions = new MailOptions(
    "FNDRS Info <info@thefndrs.com>",
    ["carlos.pineda@thefndrs.com", "marlon.castro@thefndrs.com", "jorge.torres@thefndrs.com"],
    `New email from user ${body.name} ${body.email} ${body.phoneNumber}.`,
    body.message,
    `<p>${body.message}</p>`
  )

  await sendEmail(mailOptions)

  console.log("Form submission processed:", body)

  return { status: 200, message: "Form submitted successfully!" }
}
