'use client'

import { Dispatch, SetStateAction } from "react";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import useMobileDetection from "@/lib/useMobileDetection";

import { FaChevronDown as Down } from "react-icons/fa";

type Props = {
  title: string
  listClassName?: string
  items: string[] | JSX.Element[]
  itemClassName?: string
  accordionState: [string, Dispatch<SetStateAction<string>>]
}

export default function FooterSection({title, listClassName, items, itemClassName, accordionState}: Props) {
  const width = useMobileDetection()

  const desktopFooterSection = (
    <div className="flex flex-col">
      <h1 className="text-lg font-semibold text-amber-950/30 mb-2">
        {title}
      </h1>
      <ul className={listClassName}>
        {items.map((item, index) => (
          <li
            key={index}
            className={itemClassName}
          >
            <a href={"#"}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  )

  const mobileFooterSection = (
    <Accordion
      expanded={accordionState[0] === title}
      sx={{
        "backgroundColor": "transparent",
        "boxShadow": "none",
        "outlines": "none"
      }}
    >
      <AccordionSummary 
        expandIcon={<Down color="rgba(69, 26, 3, 0.3)"/>}
        onClick={() => accordionState[0] === title ? accordionState[1]("") : accordionState[1](title)}
      >
        <h1 className="text-lg font-semibold text-amber-950/30">
          {title}
        </h1>
      </AccordionSummary>
      <AccordionDetails>
        <ul className={listClassName}>
          {items.map((item, index) => (
            <li
              key={index}
              className={itemClassName}
            >
              <a 
                href={index === items.length - 1 ? "https://github.com/KennethOnuorah/bookworm" : "#"}
                target={index === items.length - 1 ? "_blank" : ""}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  )
  return width >= 768 ? desktopFooterSection : mobileFooterSection
}
