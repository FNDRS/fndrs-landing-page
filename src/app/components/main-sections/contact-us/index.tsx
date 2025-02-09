import ContactUsForm from "@/app/components/contact-us-form"
import { SplineViewer } from "@/app/components/spline-viewer"
import { sunAndMountains } from "@/app/utils/spline-scenes"

export default function ContactUs() {
  return (
    <section className="h-screen w-screen">
      <SplineViewer scene={sunAndMountains} className="absolute -z-10" />
      <div className="flex flex-col w-full h-screen xl:flex-row xl:justify-around xl:items-center justify-around">
        <div className="flex flex-col w-full xl:w-6/12 xl:border-r-[0.1rem] border-[#bcbcbca9] xl:h-5/6 justify-center items-center">
          <div className="flex flex-col gap-8 max-w-[340px]">
            <h1 className="text-7xl text-center xl:text-start">Tell us your new challenge</h1>
            <p className="text-xl text-center xl:text-start">We will contact you to discover your incredible project.</p>
          </div>
        </div>
        <div className="w-full xl:w-6/12 flex items-center justify-center px-12">
          <div className={"w-full md:w-10/12 2xl:w-6/12"}>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  )
}
