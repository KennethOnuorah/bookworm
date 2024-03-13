'use client'

import { FormEvent, useState } from "react"
import FooterSection from "./FooterSection"
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLinkedinIn as LinkedIn,
  FaGithub as Github,
  FaChevronRight as Submit,
} from "react-icons/fa"
import { FaXTwitter as Twitter } from "react-icons/fa6"

export default function Footer() {
  const [activeAccordion, setActiveAccordion] = useState("")

  return (
    <footer
      className="flex flex-col justify-between text-amber-950 px-4 py-8 font-light lg2:flex-row lg2:px-20"
      style={{
        backgroundColor: "#F4F2E9",
      }}>
      <div className="flex flex-col gap-0 justify-center text-center lg2:justify-start lg2:text-left md:flex-row md:gap-24">
        <FooterSection 
          title="Quick Help"
          listClassName="columns-2 md:columns-1 inline-block"
          items={["Help Center","Shipping & Returns","Store Pickup","Order Status","Product Recalls","Giftcards"]}
          itemClassName="text-sm hover:underline decoration-1 mb-2 w-max"
          accordionState={[activeAccordion, setActiveAccordion]}
        />
        <FooterSection 
          title="Work With Us"
          listClassName="columns-2 md:columns-1"
          items={["Authors", "Advertise", "Blog", "API"]}
          itemClassName="text-sm hover:underline decoration-1 mb-2 w-max"
          accordionState={[activeAccordion, setActiveAccordion]}
        />
        <FooterSection
          title="Follow Us"
          listClassName="flex justify-center gap-2 md:justify-start"
          items={[
            <Facebook color="white" size={16}/>,
            <Twitter color="white" size={16}/>,
            <Instagram color="white" size={16}/>,
            <LinkedIn color="white" size={16}/>,
            <Github color="white" size={16}/>,
          ]}
          itemClassName="transition-colors cursor-pointer w-max p-2 rounded-full bg-amber-900/20 hover:bg-amber-900/30"
          accordionState={[activeAccordion, setActiveAccordion]}
        />
      </div>
      <hr className="block my-4 lg2:hidden" style={{borderColor: "rgba(69, 26, 3, 0.085)"}}/>
      <div className="flex flex-col items-center text-center lg2:text-left lg2:items-start">
        <h1 className="text-lg font-semibold text-amber-950/30">
          Subscribe To Our Newsletter
        </h1>
        <form className="flex items-center w-full sm2:w-auto">
          <input
            className="my-2 transition-colors border px-2 py-1 rounded-l-md border-amber-900/20 font-light outline-none w-full sm2:w-80"
            type="text" 
            name="Enter email address"
            placeholder="john.smith@email.com"
            autoComplete="on"
          />
          <button 
            type="submit" 
            className="bg-amber-900/20 text-white rounded-r-md h-[34px] px-2"
            onClick={(e: FormEvent) => e.preventDefault()}
          >
            <Submit/>
          </button>
        </form>
        <p className="text-xs w-auto sm2:w-80">
          Enter your email address to receive the latest Bookworm offers & updates. You can view Bookworm&apos;s Privacy Policy <a className="font-semibold hover:underline underline-offset-1" href="#">here</a>. Unsubscribe from our emails at any time.
        </p>
        <p className="mt-4 text-xs w-auto sm2:w-80">
          &copy;1993-{new Date().getFullYear()} Bookworm, Inc.
          <br/>
          123 Main Street, Austin, TX 12345
        </p>
      </div>
    </footer>
  )
}
