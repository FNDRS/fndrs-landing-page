import ContactUsForm from "@/app/components/contact-us-form"

import Script from "next/script"

export default function ContactUsPage() {
  return (
    <>
      <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"></Script>
      <div className="relative w-full h-screen overflow-hidden">
        <spline-viewer
          className="absolute top-0 left-0 w-full h-full z-0"
          url="https://prod.spline.design/lewYIb3uYgH-SpcE/scene.splinecode"></spline-viewer>
        <div className="relative flex flex-row justify-around h-screen items-center z-10">
          <div className={"flex flex-col w-6/12 border-r-[0.1rem] border-white h-5/6 justify-center items-center"}>
            <div className="flex flex-col gap-8 h-fit w-fit items-center">
              <div className="flex flex-col gap-3">
                <div className="text-7xl">Tell us</div>
                <div className="text-7xl">your new</div>
                <div className="text-7xl">challenge</div>
              </div>
              <div>
                <div className="text-xl">We will contact you</div>
                <div className="text-xl">to discover your incredible project.</div>
              </div>
            </div>
          </div>
          <div className="w-6/12 h-fit px-32">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </>
  )
}
