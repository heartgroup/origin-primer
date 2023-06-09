import { useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import CalendlySlideover from './CalendlySlideover'
import coverImage from '@/images/origin.png'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-red-800 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-zinc-900">
          “We use Origin for all of our investigations. After transitioning to their integrated case reviews, our intake process is super efficient.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-zinc-500">
        <strong className="font-semibold text-red-800 before:content-['—_']">
          Partner
        </strong>
        , Los Angeles-Based Law Firm
      </figcaption>
    </figure>
  )
}

export function Hero() {
  const [openSchedule, setOpenSchedule] = useState(false);

  return (
    <header className="overflow-hidden bg-zinc-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl bg-zinc-700 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto mb-auto flex w-64 md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-zinc-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-zinc-900 sm:text-6xl">
              Origin is a private investigation and intelligence agency.
            </h1>
            <p className="mt-4 text-3xl text-zinc-600">
              We assist governments, corporations, law firms, and individuals with criminal and civil matters throughout the United States and abroad.
            </p>
            <div className="mt-8 flex gap-4">
              <Button color="red" onClick={() => setOpenSchedule(true)}>
                Schedule a Consultation
              </Button>
              <CalendlySlideover open={openSchedule} onClose={() => setOpenSchedule(false)} />
              <Button href="#free-chapters" variant="outline" color="red">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
