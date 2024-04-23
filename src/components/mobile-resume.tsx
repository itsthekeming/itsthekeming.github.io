'use client'

import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  HomeIcon,
  EnvelopeIcon,
  PhoneIcon,
  StarIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/solid'
import {
  CalendarDaysIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
} from '@heroicons/react/16/solid'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import { NetworkIcon } from './network-icon'
import * as Tabs from '@radix-ui/react-tabs'
import resume from '~/resume.json'

export function MobileResume() {
  const { basics, skills, work, education } = resume

  return (
    <Tabs.Root className="-serif" defaultValue="work">
      <div className="absolute flex justify-between items-center top-0 left-0 min-h-24 w-full py-2 px-4 border-b border-black bg-white">
        <div>
          <h1 className="text-xl">{basics.name}</h1>
          <h2>{basics.label}</h2>
        </div>
        <div className="flex space-x-4">
          <Link
            href={`tel:${basics.phone}`}
            title="Call me!"
            className="border-2 border-black rounded-md p-1 focus:outline-none focus-visible:outline-black active:text-gray-800 active:border-gray-800"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <span className="sr-only">{basics.phone}</span>
            <PhoneIcon className="h-6 w-6 text-black not-sr-only" />
          </Link>
          <Link
            download
            target="_blank"
            href="/edward-sanders-resume.pdf"
            title="Download PDF resume"
            className="border-2 border-black rounded-md p-1 focus:outline-none focus-visible:outline-black active:text-gray-800 active:border-gray-800"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <span className="sr-only">Download</span>
            <ArrowDownTrayIcon className="h-6 w-6 text-black not-sr-only" />
          </Link>
        </div>
      </div>
      <Tabs.List className="z-10 absolute bottom-0 left-0 h-16 w-full flex items-center divide-x divide-black bg-white border-t border-b border-black">
        <Tabs.Trigger
          value="work"
          className="flex flex-col space-y-1 justify-center items-center w-1/4 h-full rounded-none focus:outline-none active:bg-gray-200 transition-colors duration-50"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <BriefcaseIcon className="h-6 w-6 text-black not-sr-only" />
          <span className="text-xs ">Work</span>
        </Tabs.Trigger>
        <Tabs.Trigger
          value="skills"
          className="flex flex-col space-y-1 justify-center items-center w-1/4 h-full rounded-none focus:outline-none active:bg-gray-200 transition-colors duration-50"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <StarIcon className="h-6 w-6 text-black not-sr-only" />
          <span className="text-xs ">Skills</span>
        </Tabs.Trigger>
        <Tabs.Trigger
          value="education"
          className="flex flex-col space-y-1 justify-center items-center w-1/4 h-full rounded-none focus:outline-none active:bg-gray-200 transition-colors duration-50"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <AcademicCapIcon className="h-6 w-6 text-black not-sr-only" />
          <span className="text-xs ">Education</span>
        </Tabs.Trigger>
        <Tabs.Trigger
          value="contact"
          className="flex flex-col space-y-1 justify-center items-center w-1/4 h-full rounded-none focus:outline-none active:bg-gray-200 transition-colors duration-50"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <EnvelopeIcon className="h-6 w-6 text-black not-sr-only" />
          <span className="text-xs ">Contact</span>
        </Tabs.Trigger>
      </Tabs.List>
      <div className="absolute top-0 left-0 right-0 bottom-0 mt-24 pt-2 pb-20 px-4 overflow-auto">
        <Tabs.Content value="work">
          <h2 className="text-xl font-bold">Work History</h2>
          <ul className=" space-y-4 divide-y divide-black">
            {work.map((entry) => (
              <li key={entry.name}>
                <h3 className="mt-2 text-lg font-semibold">{entry.position}</h3>
                <div className="mt-2 mb-4 italic">
                  <div className="flex items-center">
                    <BuildingOfficeIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
                    <Link
                      target="_blank"
                      href={entry.url}
                      className="inline underline print:no-underline focus:outline-none focus-visible:outline-black"
                    >
                      {entry.name}
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <CalendarDaysIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
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
                <ul className=" list-outside space-y-1">
                  {entry.highlights?.map((highlight) => (
                    <li key={highlight} className="flex flex-row">
                      <div className="h-6 flex justify-center items-center print:h-4">
                        <ChevronRightIcon className="not-sr-only mr-1 h-4 w-4 text-black" />
                      </div>
                      <div className="">{highlight}</div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Tabs.Content>
        <Tabs.Content value="skills">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <ul className=" space-y-1">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="ml-4 before:absolute before:h-[1em] before:w-[1em] before:bg-chevron before:bg-contain before:bg-no-repeat before:mt-[0.25em] before:ml-[-1.25em]"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </Tabs.Content>
        <Tabs.Content value="education">
          <h2 className="text-xl font-bold">Education</h2>
          <ul className=" space-y-4 divide-y divide-black">
            {education.map((entry) => (
              <li key={entry.institution}>
                <h3 className="mt-4">{entry.institution}</h3>
                <p className="italic">{entry.area}</p>
              </li>
            ))}
          </ul>
        </Tabs.Content>
        <Tabs.Content value="contact">
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <div className=" space-y-2 mb-4">
            <div className="flex items-center">
              <EnvelopeIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
              <Link
                target="_blank"
                href={`mailto:${basics.email}`}
                className="not-italic underline focus:outline-none focus-visible:outline-black"
              >
                {basics.email}
              </Link>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
              <Link
                href={`tel:${basics.phone}`}
                className="not-italic underline focus:outline-none focus-visible:outline-black"
              >
                {basics.phone}
              </Link>
            </div>
            <div className="flex items-center">
              <HomeIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
              <Link
                target="_blank"
                href={basics.url}
                className="block not-italic underline focus:outline-none focus-visible:outline-black"
              >
                {basics.url}
              </Link>
            </div>
            {basics.profiles?.map((profile) => (
              <div key={profile.url} className="flex items-center">
                <NetworkIcon network={profile.network} />
                <span className="sr-only">{profile.network}:</span>
                <Link
                  target="_blank"
                  href={profile.url}
                  className="block not-italic underline focus:outline-none focus-visible:outline-black"
                >
                  {profile.username}
                </Link>
              </div>
            ))}
          </div>
          <hr className="not-sr-only border-black" />
          <h2 className="text-xl font-bold mt-4 mb-2">About</h2>
          <p className=" mb-4">{basics.summary}</p>
          <aside className="mt-14 ">
            <p className="text-gray-400 italic text-xs">
              Check out the{' '}
              <Link
                target="_blank"
                href="https://github.com/itsthekeming/itsthekeming.github.io/blob/main/src/components/mobile-resume.tsx"
                className="underline"
              >
                source code
              </Link>{' '}
              for this resume!
            </p>
          </aside>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  )
}
