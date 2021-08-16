import { ResumeSchema } from '@supastuff/json-resume-types'
import { format, parseISO } from 'date-fns'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import resume from 'resume.json'
import {
  BriefcaseIcon,
  CalendarIcon,
  HomeIcon,
  LocationMarkerIcon,
  MailIcon,
  OfficeBuildingIcon,
  PhoneIcon,
} from '@heroicons/react/outline'
import NetworkIcon from 'components/network-icon'

export default function Resume({
  basics,
  skills,
  work,
  education,
}: ResumeSchema) {
  return (
    <div className="flex flex-col max-w-5xl mx-auto font-serif">
      <header className="text-center my-4 print:mt-0 print:mb-2">
        <h1 className="text-4xl print:text-3xl mb-2 print:mb-1">
          {basics.name}
        </h1>
        <h2 className="text-xl print:text-lg">{basics.label}</h2>
      </header>
      <div className="mx-4 border-t border-black divide-black lg:divide-x lg:flex lg:mx-0">
        <section className="py-4 lg:pr-4 print:w-3/4">
          <h2 className="text-xl font-semibold mb-2 print:text-base">
            Professional Summary
          </h2>
          <p className="font-sans print:text-xs">{basics.summary}</p>
        </section>
        <section className="border-t border-black py-4 lg:border-t-0 lg:w-3/4 lg:pl-4 print:w-1/4">
          <h2 className="text-xl font-semibold mb-2 print:text-base">
            Contact Information
          </h2>
          <div className="font-sans space-y-1 print:text-xs">
            <div className="flex items-center">
              <MailIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
              <Link href={`mailto:${basics.email}`} passHref>
                <a
                  target="_blank"
                  className="not-italic underline print:no-underline focus:outline-none focus-visible:outline-black"
                >
                  {basics.email}
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
              <Link href={`tel:${basics.phone}`} passHref>
                <a className="not-italic underline print:no-underline focus:outline-none focus-visible:outline-black">
                  {basics.phone}
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <HomeIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
              <Link href={basics.url} passHref>
                <a
                  target="_blank"
                  className="block not-italic underline print:no-underline focus:outline-none focus-visible:outline-black"
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
                    className="block not-italic underline print:no-underline focus:outline-none focus-visible:outline-black"
                  >
                    {profile.username}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex-1 flex border-t border-gray-400 divide-x divide-gray-400">
        <div className="w-1/4 flex flex-col divide-y divide-gray-400">
          <section className="py-4 pr-4">
            <h2 className="text-xl font-semibold mb-2 print:text-base">
              Skills
            </h2>
            <ul className="font-sans space-y-1 print:text-xs">
              {skills.map((skill) => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col h-full py-4 pr-4">
            <div className="flex-grow h-full">
              <h2 className="text-xl font-semibold mb-2 print:text-base">
                Education
              </h2>
              <ul className="font-sans space-y-4">
                {education.map((entry) => (
                  <li key={entry.institution} className="print:text-xs">
                    <h3>{entry.institution}</h3>
                    <p className="italic">{entry.area}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <section className="w-3/4 py-4 pl-4">
          <h2 className="text-xl font-semibold mb-2 print:text-base">
            Work History
          </h2>
          <ul className="font-sans space-y-4">
            {work.map((entry) => (
              <li key={entry.name}>
                <h3 className="text-lg font-bold mb-1 print:text-sm">
                  {entry.position}
                </h3>
                <div className="flex space-x-6 mb-1 italic print:text-xs">
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
                <ul className="font-sans list-outside space-y-1 print:text-xs">
                  {entry.highlights?.map((highlight) => (
                    <li
                      key={highlight}
                      className="ml-4 before:absolute before:h-[1em] before:w-[1em] before:bg-chevron before:bg-contain before:bg-no-repeat before:mt-[0.25em] before:ml-[-1.25em] print:before:mt-[0.125em]"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <aside className="mt-14 print:hidden">
            <p className="text-gray-400 italic text-xs print:text-[0.5rem]">
              I built this résumé with HTML and Tailwind CSS. Check out the
              source code{' '}
              <Link
                href="https://github.com/itsthekeming/itsthekeming.github.io/blob/main/src/pages/resume.tsx"
                passHref
              >
                <a target="_blank" className="underline">
                  here
                </a>
              </Link>
            </p>
          </aside>
        </section>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ResumeSchema> = async () => {
  return {
    props: resume,
  }
}
