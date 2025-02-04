"use client"

import React, { useState } from "react"
import { toast, Toaster } from "react-hot-toast"

import InputField from "./InputField"

export class InputData {
  value: string
  error: boolean

  constructor(value = "", error = false) {
    this.value = value
    this.error = error
  }
}

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: new InputData(),
    email: new InputData(),
    phoneNumber: new InputData(),
    subject: new InputData(),
    message: new InputData()
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: new InputData(value, false)
    }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const newErrors = {
      name: new InputData(formData.name.value, formData.name.value.trim() === ""),
      email: new InputData(
        formData.email.value,
        formData.email.value.trim() === "" || !/\S+@\S+\.\S+/.test(formData.email.value)
      ),
      phoneNumber: new InputData(formData.phoneNumber.value, formData.phoneNumber.value.trim() === ""),
      subject: new InputData(formData.subject.value, formData.subject.value.trim() === ""),
      message: new InputData(formData.message.value, formData.message.value.trim() === "")
    }

    setFormData(newErrors)

    if (Object.values(newErrors).some((field) => field.error)) {
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          phoneNumber: formData.phoneNumber.value,
          subject: formData.subject.value,
          message: formData.message.value
        })
      })

      if (response.ok) {
        setFormData({
          name: new InputData(),
          email: new InputData(),
          phoneNumber: new InputData(),
          subject: new InputData(),
          message: new InputData()
        })

        toast.success("¡Your message has been sent successfully, we will contact you soon!")
      }
    } catch (e) {
      toast.error("¡There was an error sending your message, please try again later!")
      console.error("Error sending form", e)
    }
  }

  return (
    <div>
      <Toaster position="top-center" />
      <form className="flex flex-col gap-8 p-8" onSubmit={handleSubmit}>
        <InputField label="Full name" type="text" id="name" handleChange={handleChange} inputData={formData.name} />
        <InputField label="Email" type="email" id="email" handleChange={handleChange} inputData={formData.email} />
        <div className="w-full flex flex-col gap-2">
          <label className="block text-xl" htmlFor="phoneNumber">
            Phone
          </label>
          <div className="flex flex-row gap-6 items-center flex-nowrap focus:outline-amber-100">
            <div className="text-xl">HN +504</div>
            <input
              type="text"
              value={formData.phoneNumber.value}
              className={`border border-white rounded-md p-2 bg-transparent flex-1 min-w-0 autofill:bg-transparent
                           ${formData.phoneNumber.error ? "border-red-500" : "border-white"}`}
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
            />
          </div>
        </div>
        <InputField label="Subject" type="text" id="subject" handleChange={handleChange} inputData={formData.subject} />
        <div className="w-full flex flex-col gap-4">
          <label className="block text-xl" htmlFor="message">
            Tell us a little about your project
          </label>
          <textarea
            value={formData.message.value}
            className={`w-full border rounded-md p-2 bg-transparent resize-none h-48 autofill:bg-transparent
                    ${formData.message.error ? "border-red-500" : "border-white"}`}
            id="message"
            name="message"
            onChange={handleChange}
          />
        </div>
        <button className="text-zinc-950 font-bold bg-white w-fit text-xl px-10 py-2 border rounded-xl">Send</button>
      </form>
    </div>
  )
}
