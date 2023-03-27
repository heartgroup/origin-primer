import { XMarkIcon  } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'

export function Banner() {

    const [show, setShow] = useState(true)

  return (
    <div className="flex items-center gap-x-6 bg-gray-900 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
    <Transition
            show={show}
            setShow={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
      <p className="text-sm leading-6 text-white">
        <a href="#">
          <strong className="font-semibold">GeneriCon 2023</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Join us in Denver from June 7 - 9 to see what's coming next&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
         onClick={() => {
                        setShow(false)
                      }}
            >
          <span className="sr-only">Close</span>
          <XMarkIcon  className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
      </Transition>
    </div>
  )
}