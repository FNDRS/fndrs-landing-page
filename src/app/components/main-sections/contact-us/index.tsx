import ContactUsForm from "@/app/components/contact-us-form"
import { SplineViewer } from "@/app/components/spline-viewer"

export default function ContactUs() {
  return (
    <section className="h-screen relative">
      <SplineViewer />
      <div className="relative flex flex-row justify-around h-full items-center">
        <div className="flex flex-col w-6/12 border-r-[0.1rem] border-[#bcbcbca9] h-5/6 justify-center items-center">
          <div className="flex flex-col gap-8">
            <h1 className="max-w-[340px] text-7xl">Tell us your new challenge</h1>
            <p className="text-xl text-[#c4c4c4b1]">We are excited to hear from you.</p>
          </div>
        </div>
        <div className="w-6/12 h-full flex items-center justify-center px-12">
          <ContactUsForm />
        </div>
      </div>
    </section>
  )
}
