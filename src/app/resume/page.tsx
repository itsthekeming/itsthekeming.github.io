import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import resume from '~/resume.json'
import { HomeIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import {
  BuildingOfficeIcon,
  CalendarDaysIcon,
  ArrowDownTrayIcon,
  ChevronRightIcon,
} from '@heroicons/react/16/solid'
import { NetworkIcon } from '~/components/network-icon'
import { MobileResume } from '~/components/mobile-resume'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume | Edward Sanders',
}

export default function Resume() {
  const { basics, skills, work, education } = resume

  return (
    <>
      <div className="sm:hidden print:hidden">
        <MobileResume />
      </div>
      <div className="hidden px-4 max-w-5xl mx-auto -serif sm:block print:px-0 print:block">
        <header className="relative text-center my-4 print:mt-0 print:mb-2">
          <h1 className="text-4xl print:text-3xl mb-2 print:mb-1">
            {basics.name}
          </h1>
          <h2 className="text-xl print:text-lg">{basics.label}</h2>
          <div className="absolute right-0 top-0 h-full flex items-center space-x-4 print:hidden">
            <Link
              download
              target="_blank"
              href="/edward-sanders-resume.pdf"
              className="border-2 border-black flex p-1.5 rounded-md focus:outline-none focus-visible:outline-black active:text-gray-800 active:border-gray-800"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span>Download Resume</span>
              <ArrowDownTrayIcon className="ml-2 h-6 w-6 text-black not-sr-only" />
            </Link>
          </div>
        </header>
        <div className="flex border-t border-black divide-x divide-black">
          <section className="py-4 pr-4 print:w-3/4">
            <h2 className="text-xl font-semibold mb-2 print:text-base">
              Professional Summary
            </h2>
            <p className=" print:text-xs">{basics.summary}</p>
          </section>
          <section className="w-3/4 py-4 pl-4 print:w-1/4">
            <h2 className="text-xl font-semibold mb-2 print:text-base">
              Contact Information
            </h2>
            <div className=" space-y-1 print:text-xs">
              <div className="flex items-center">
                <EnvelopeIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
                <Link
                  target="_blank"
                  href={`mailto:${basics.email}`}
                  className="not-italic underline print:no-underline focus:outline-none focus-visible:outline-black"
                >
                  {basics.email}
                </Link>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
                <Link
                  href={`tel:${basics.phone}`}
                  className="not-italic underline print:no-underline focus:outline-none focus-visible:outline-black"
                >
                  {basics.phone}
                </Link>
              </div>
              <div className="flex items-center">
                <HomeIcon className="not-sr-only mr-2 h-4 w-4 text-black" />
                <Link
                  target="_blank"
                  href={basics.url}
                  className="block not-italic underline print:no-underline focus:outline-none focus-visible:outline-black"
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
                    className="block not-italic underline print:no-underline focus:outline-none focus-visible:outline-black"
                  >
                    {profile.username}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="flex-1 flex border-t border-black divide-x divide-black">
          <div className="w-1/4 flex flex-col divide-y divide-black">
            <section className="py-4 pr-4">
              <h2 className="text-xl font-semibold mb-2 print:text-base">
                Skills
              </h2>
              <ul className=" space-y-1 print:text-xs">
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
                <ul className=" space-y-4">
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
            <ul className=" space-y-4">
              {work.map((entry) => (
                <li key={entry.name}>
                  <h3 className="text-lg font-bold mb-1 print:text-sm">
                    {entry.position}
                  </h3>
                  <div className="flex flex-col space-y-1 mb-1 italic md:flex-row md:space-x-4 md:space-y-0 print:text-xs print:flex-row print:space-y-0 print:space-x-4">
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
                  <ul className="space-y-1 print:text-xs">
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
            <aside className="mt-14 print:mt-6">
              <p className="text-gray-400 italic text-[0.5rem] hidden not-sr-only print:block">
                Check out the source code for this resume at{' '}
                <Link
                  target="_blank"
                  className="underline"
                  href="https://github.com/itsthekeming/itsthekeming.github.io/blob/main/src/app/resume/page.tsx"
                >
                  https://github.com/itsthekeming/itsthekeming.github.io/blob/main/src/app/resume/page.tsx
                </Link>
              </p>
              <p className="text-gray-400 text-xs italic print:text-[0.5rem] print:hidden">
                Check out the{' '}
                <Link
                  target="_blank"
                  href="https://github.com/itsthekeming/itsthekeming.github.io/blob/main/src/app/resume/page.tsx"
                  className="underline"
                >
                  source code
                </Link>{' '}
                for this resume!
              </p>
            </aside>
          </section>
        </div>
      </div>
    </>
  )
}
