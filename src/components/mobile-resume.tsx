import { Tab, Transition } from '@headlessui/react'
import {
  AcademicCapIcon,
  CalendarIcon,
  ClipboardListIcon,
  DownloadIcon,
  HomeIcon,
  LocationMarkerIcon,
  MailIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  StarIcon,
} from '@heroicons/react/outline'
import { ResumeSchema } from '@supastuff/json-resume-types'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import NetworkIcon from './network-icon'

export default function MobileResume({
  basics,
  skills,
  work,
  education,
}: ResumeSchema) {
  return (
    <>
      <Tab.Group as="div" className="font-serif">
        <div className="absolute flex justify-between items-center top-0 left-0 h-18 w-full py-2 px-4 border-b border-black bg-white">
          <div>
            <h1 className="text-xl ">Edward Sanders</h1>
            <h2>Software Engineer</h2>
          </div>
          <div className="flex space-x-4">
            <Link href={`tel:${basics.phone}`} passHref>
              <a
                className="border-2 border-black rounded-md p-1 focus:outline-none focus-visible:outline-black active:text-gray-800 active:border-gray-800"
                style={{ WebkitTapHighlightColor: 'transparent' }}
                title="Call me!"
              >
                <span className="sr-only">{basics.phone}</span>
                <PhoneIcon className="h-6 w-6 text-black not-sr-only" />
              </a>
            </Link>
            <Link href="/edward-sanders-resume.pdf" passHref>
              <a
                download
                target="_blank"
                className="border-2 border-black rounded-md p-1 focus:outline-none focus-visible:outline-black active:text-gray-800 active:border-gray-800"
                style={{ WebkitTapHighlightColor: 'transparent' }}
                title="Download PDF resume"
              >
                <span className="sr-only">Download</span>
                <DownloadIcon className="h-6 w-6 text-black not-sr-only" />
              </a>
            </Link>
          </div>
        </div>
        <Tab.List className="z-10 absolute bottom-0 left-0 h-16 w-full flex items-center divide-x divide-black bg-white border-t border-b border-black">
          <Tab
            className="flex flex-col space-y-1 justify-center items-center w-1/4 h-full rounded-none focus:outline-none active:bg-gray-200 transition-colors duration-50"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ClipboardListIcon className="h-6 w-6 text-black not-sr-only" />
            <span className="text-xs font-sans">Work</span>
          </Tab>
          <Tab
            className="flex flex-col space-y-1 justify-center items-center w-1/4 h-full rounded-none focus:outline-none active:bg-gray-200 transition-colors duration-50"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <StarIcon className="h-6 w-6 text-black not-sr-only" />
            <span className="text-xs font-sans">Skills</span>
          </Tab>
          <Tab
            className="flex flex-col space-y-1 justify-center items-center w-1/4 h-full rounded-none focus:outline-none active:bg-gray-200 transition-colors duration-50"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <AcademicCapIcon className="h-6 w-6 text-black not-sr-only" />
            <span className="text-xs font-sans">Education</span>
          </Tab>
          <Tab
            className="flex flex-col space-y-1 justify-center items-center w-1/4 h-full rounded-none focus:outline-none active:bg-gray-200 transition-colors duration-50"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <MailIcon className="h-6 w-6 text-black not-sr-only" />
            <span className="text-xs font-sans">Contact</span>
          </Tab>
        </Tab.List>
        <Tab.Panels className="absolute top-0 left-0 right-0 bottom-0 mt-[4.25rem] pt-2 pb-20 px-4 overflow-auto">
          <Tab.Panel className="focus:outline-none">
            {({ selected }) => (
              <Transition
                show={selected}
                enter="duration-100 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-100 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <h2 className="text-xl font-bold">Work History</h2>
                <ul className="font-sans space-y-4 divide-y divide-black">
                  {work.map((entry) => (
                    <li key={entry.name}>
                      <h3 className="mt-2 text-lg font-semibold">
                        {entry.position}
                      </h3>
                      <div className="mt-2 mb-4 italic">
                        <div className="flex items-center">
                          <OfficeBuildingIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
                          <Link href={entry.url} passHref>
                            <a
                              target="_blank"
                              className="inline underline print:no-underline focus:outline-none focus-visible:outline-black"
                            >
                              {entry.name}
                            </a>
                          </Link>
                        </div>
                        <div className="flex items-center">
                          <LocationMarkerIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
                          <p>{entry.location}</p>
                        </div>
                        <div className="flex items-center">
                          <CalendarIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
                          <p>
                            <time dateTime={entry.startDate}>
                              {format(parseISO(entry.startDate), 'MMMM y')}
                            </time>
                            <span className="not-sr-only"> - </span>
                            <span className="sr-only">to </span>
                            {entry.endDate ? (
                              <time dateTime={entry.endDate}>
                                {format(parseISO(entry.endDate), 'MMMM y')}
                              </time>
                            ) : (
                              'today'
                            )}
                          </p>
                        </div>
                      </div>
                      <ul className="font-sans list-outside space-y-1">
                        {entry.highlights?.map((highlight) => (
                          <li
                            key={highlight}
                            className="ml-4 before:absolute before:h-[1em] before:w-[1em] before:bg-chevron before:bg-contain before:bg-no-repeat before:mt-[0.25em] before:ml-[-1.25em]"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </Transition>
            )}
          </Tab.Panel>
          <Tab.Panel className="focus:outline-none">
            {({ selected }) => (
              <Transition
                show={selected}
                enter="duration-100 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-100 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <h2 className="text-xl font-bold mb-2">Skills</h2>
                <ul className="font-sans space-y-1">
                  {skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="ml-4 before:absolute before:h-[1em] before:w-[1em] before:bg-chevron before:bg-contain before:bg-no-repeat before:mt-[0.25em] before:ml-[-1.25em]"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </Transition>
            )}
          </Tab.Panel>
          <Tab.Panel className="focus:outline-none">
            {({ selected }) => (
              <Transition
                show={selected}
                enter="duration-100 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-100 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <h2 className="text-xl font-bold">Education</h2>
                <ul className="font-sans space-y-4 divide-y divide-black">
                  {education.map((entry) => (
                    <li key={entry.institution}>
                      <h3 className="mt-4">{entry.institution}</h3>
                      <p className="italic">{entry.area}</p>
                    </li>
                  ))}
                </ul>
              </Transition>
            )}
          </Tab.Panel>
          <Tab.Panel className="focus:outline-none">
            {({ selected }) => (
              <Transition
                show={selected}
                enter="duration-100 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-100 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <h2 className="text-xl font-bold mb-2">Contact</h2>
                <div className="font-sans space-y-2 mb-4">
                  <div className="flex items-center">
                    <MailIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
                    <Link href={`mailto:${basics.email}`} passHref>
                      <a
                        target="_blank"
                        className="not-italic underline focus:outline-none focus-visible:outline-black"
                      >
                        {basics.email}
                      </a>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
                    <Link href={`tel:${basics.phone}`} passHref>
                      <a className="not-italic underline focus:outline-none focus-visible:outline-black">
                        {basics.phone}
                      </a>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <HomeIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
                    <Link href={basics.url} passHref>
                      <a
                        target="_blank"
                        className="block not-italic underline focus:outline-none focus-visible:outline-black"
                      >
                        {basics.url.replace('https://', '')}
                      </a>
                    </Link>
                  </div>
                  {basics.profiles?.map((profile) => (
                    <div key={profile.url} className="flex items-center">
                      <NetworkIcon network={profile.network} />
                      <span className="sr-only">{profile.network}:</span>
                      <Link href={profile.url} passHref>
                        <a
                          target="_blank"
                          className="block not-italic underline focus:outline-none focus-visible:outline-black"
                        >
                          {profile.username}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
                <hr className="not-sr-only border-black" />
                <h2 className="text-xl font-bold mt-4 mb-2">About</h2>
                <p className="font-sans mb-4">{basics.summary}</p>
                <aside className="mt-14 font-sans">
                  <p className="text-gray-400 italic text-xs">
                    Check out the{' '}
                    <Link
                      href="https://github.com/itsthekeming/itsthekeming.github.io/blob/main/src/components/mobile-resume.tsx"
                      passHref
                    >
                      <a target="_blank" className="underline">
                        source code
                      </a>
                    </Link>{' '}
                    for this résumé!
                  </p>
                </aside>
              </Transition>
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}
