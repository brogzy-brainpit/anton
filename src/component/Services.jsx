"use client";

import GridColumn from "@/layout/GridColumn";
import Section from "@/layout/Section";
import React, { useState } from "react";
import TiltCard from "./TiltCard";
import TypographyReveal from "./TextReveals";

function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      number: "01",
      title: "Exterior Detailing",
      description:
        "Deep cleaning and restoration that brings back the finish, shine, and protection of your vehicle.",
      accent: true,
    },
    {
      number: "02",
      title: "Interior Detailing",
      description:
        "A meticulous interior refresh designed to make every drive feel clean, comfortable, and refined.",
      accent: false,
    },
    {
      number: "03",
      title: "Paint Correction",
      description:
        "Professional paint correction to reduce imperfections and restore a deep, flawless gloss.",
      accent: true,
    },
  ];

  return (
    <section className="min-h-[85svh] bg-brand-white">
      <Section>
        <GridColumn>
            <div className="col-span-3 lg:col-span-3 bg-red400">
                        <h2 className='text-brand-accent text-heading2 leading-[.6] font-custom'>
                            <TypographyReveal className='font-custom uppercase leading-[1.1]'
              toColor='#0100be'
                animationType='fadeInUp'
                 fromDirection='left'
                  revealType='word'  >
                          services
                </TypographyReveal>
                          </h2>
                      </div>
          <div className="col-span-full lg:col-span-8 lg:col-start-5 mb-10">
             <h1 className='capitalie'>
               <TypographyReveal className='font-custom text-brand-accent text-heading2 capitalie leading-[1.1]'
                toColor='#0100be'
                  animationType='fadeInUp'
                   fromDirection='left'
                    revealType='word'  >
         From everyday drive to showroom finish. We inspect, detail, and protect—
so your car looks its best and stays that way.
                  </TypographyReveal>
                        </h1>
          </div>
          {services.map((service, index) => {
            const isActive = activeService === index;
            const hasActive = activeService !== null;

            return (
              <TiltCard
                key={service.number}
                intensity={7}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className={`
                  relative
                  col-span-full
                  lg:col-span-4
                  min-h-[280px]
                  p-6
                  md:p-8
                  flex
                  flex-col
                  justify-between
                  border-t
                  border-brand-black/20
                  transition-opacity
                  duration-500
                  ease-out
                  ${
                    service.accent
                      ? "bg-brand-accent text-brand-white"
                      : "bg-brand-secondary text-brand-black"
                  }
                  ${
                    hasActive && !isActive
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="font-custom2 text-heading1 leading-[.85] absolute -top-[10%] left-0 ">
                    {service.number}
                  </span>

                  <span className="text-sm font-body absolute top-[8%] right-[8%]  uppercase tracking-widest opacity-60">
                    Service
                  </span>
                </div>

                {/* Bottom */}
                <div>
                  <h2 className="text-heading3 font-custom uppercase leading-[0.9]">
                    {service.title}
                  </h2>

                  <p className="mt-6 max-w-sm text-para font-body leading-relaxed opacity-80">
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </GridColumn>
      </Section>
    </section>
  );
}

export default Services;