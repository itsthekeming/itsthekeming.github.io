import { ResumeSchema } from '@supastuff/json-resume-types'
import { format, parseISO } from 'date-fns'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import resume from 'resume.json'

export default function Resume({
  basics,
  skills,
  work,
  education,
}: ResumeSchema) {
  return (
    <div className="max-w-5xl mx-auto flex flex-col min-h-screen">
      <header className="text-center my-4 print:mt-0 print:mb-2">
        <h1 className="text-4xl print:text-3xl mb-2 print:mb-1">
          {basics.name}
        </h1>
        <h2 className="text-xl print:text-lg">{basics.label}</h2>
      </header>
      <div className="flex border-t border-gray-400 divide-x divide-gray-400">
        <section className="py-4 pr-4">
          <h2 className="text-xl font-semibold mb-2 print:text-base">
            Professional Summary
          </h2>
          <p className="print:text-xs">{basics.summary}</p>
        </section>
        <section className="w-3/4 py-4 pl-4 print:w-auto">
          <h2 className="text-xl font-semibold mb-2 print:text-base">
            Contact Information
          </h2>
          <div className="space-y-1 print:text-xs">
            <Link href={`mailto:${basics.email}`} passHref>
              <a
                target="_blank"
                className="block not-italic underline print:no-underline"
              >
                {basics.email}
              </a>
            </Link>
            <Link href={`tel:${basics.phone}`} passHref>
              <a className="block not-italic underline print:no-underline">
                {basics.phone}
              </a>
            </Link>
            <Link href={basics.url} passHref>
              <a
                target="_blank"
                className="block not-italic underline print:no-underline"
              >
                <span className="print:hidden">Personal Site</span>
                <span className="hidden print:inline">{basics.url}</span>
              </a>
            </Link>
            {basics.profiles?.map((profile) => (
              <Link key={profile.url} href={profile.url} passHref>
                <a
                  target="_blank"
                  className="block not-italic underline print:no-underline"
                >
                  <span className="print:hidden">{profile.network}</span>
                  <span className="hidden print:inline">{profile.url}</span>
                </a>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className="flex border-t border-gray-400 divide-x divide-gray-400">
        <div className="w-1/4 flex flex-col divide-y divide-gray-400">
          <section className="py-4 pr-4">
            <h2 className="text-xl font-semibold mb-2 print:text-base">
              Skills
            </h2>
            <ul className="space-y-1 print:text-xs">
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
              <ul className="space-y-4">
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
        <section className="w-3/4 py-4 pl-4 print:pb-0">
          <h2 className="text-xl font-semibold mb-2 print:text-base">
            Work History
          </h2>
          <ul className="space-y-8">
            {work.map((entry) => (
              <li key={entry.name}>
                <h3 className="font-bold mb-1 print:text-sm">
                  {entry.position}
                </h3>
                <div className="mb-1 italic print:text-xs">
                  <Link href={entry.url} passHref>
                    <a
                      target="_blank"
                      className="inline underline print:no-underline"
                    >
                      {entry.name}
                    </a>
                  </Link>
                  <span className="not-sr-only"> | </span>
                  <p className="inline">{entry.location}</p>
                  <span className="not-sr-only"> | </span>
                  <p className="inline">
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
                <ul className="list-disc list-outside ml-4 space-y-1 print:text-xs">
                  {entry.highlights?.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <aside className="mt-14">
            <p className="text-gray-400 italic text-xs print:text-[0.5rem]">
              I built this résumé with HTML and Tailwind CSS. Check out the
              source code{' '}
              <span className="print:hidden">
                <Link href="" passHref>
                  <a target="_blank" className="underline">
                    here
                  </a>
                </Link>
              </span>
              <span className="hidden print:inline">
                at https://github.com/itsthekeming/itsthekeming.github.io
              </span>
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
