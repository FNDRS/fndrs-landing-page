"use client"

import InputField from "@/app/components/input-field"
import PhoneField from "@/app/components/phone-field"
import TextAreaField from "@/app/components/text-area-field"

import React from "react"
import { useForm } from "react-hook-form"
import { toast, Toaster } from "react-hot-toast"

interface ContactFormData {
  name: string
  email: string
  phoneNumber: string
  subject: string
  message: string
}

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        reset()
        toast.success("Your message has been sent successfully!")
      }
    } catch (e) {
      toast.error("There was an error sending your message. Please try again later!")
      console.error("Error sending form", e)
    }
  }

  return (
    <div>
      <Toaster position="top-center" />
      <form className="flex flex-col gap-4 p-8" onSubmit={handleSubmit(onSubmit)}>
        <InputField label="Full name" type="text" id="name" register={register} errors={errors} required />
        <InputField
          label="Email"
          type="email"
          id="email"
          register={register}
          errors={errors}
          required
          pattern={{ value: /\S+@\S+\.\S+/, message: "Invalid email format" }}
        />
        <PhoneField label={"Phone"} id={"phoneNumber"} register={register} errors={errors} required />
        <InputField label="Subject" type="text" id="subject" register={register} errors={errors} required />
        <TextAreaField
          label={"Tell us a little about your project"}
          register={register}
          errors={errors}
          id={"message"}
          required
        />
        <button className="text-zinc-950 font-bold bg-white w-fit text-xl px-10 py-2 border rounded-xl">Send</button>
      </form>
    </div>
  )
}
