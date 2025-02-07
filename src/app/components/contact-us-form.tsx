"use client"

import InputField from "@/app/components/input-field"
import TextAreaField from "@/app/components/text-area-field"

import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

interface ContactFormData {
  name: string
  email: string
  phoneNumber: string
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
      toast.loading("Sending message...")
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        reset()
        toast.dismiss()
        toast.success("Your message has been sent successfully!")
      }
    } catch (e) {
      toast.dismiss()
      toast.error("There was an error sending your message. Please try again late.")
      console.error("Error sending form", e)
    }
  }

  return (
    <form className="flex flex-col gap-2 w-[380px]" onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Name" type="text" id="name" register={register} errors={errors} required />
      <InputField
        label="Email"
        type="email"
        id="email"
        register={register}
        errors={errors}
        required
        pattern={{ value: /\S+@\S+\.\S+/, message: "Invalid email format" }}
      />
      <InputField label={"Phone"} type="text" id={"phoneNumber"} register={register} errors={errors} required />
      <TextAreaField label={"Tell us about your idea"} register={register} errors={errors} id={"message"} required />
      <button className="text-black font-bold bg-white w-fit text-xl px-20 py-2 border rounded-xl">Send</button>
    </form>
  )
}
