import Link from 'next/link'
import {
  DevicePhoneMobileIcon,
  MapPinIcon,
  GlobeAltIcon,
  AtSymbolIcon,
} from '@heroicons/react/16/solid'

import { Metadata } from 'next'
import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons'

export const metadata: Metadata = {
  title: 'Resume | Edward Sanders',
}

export default function Resume() {
  return (
    <article className="max-w-screen-lg mx-auto px-4 text-gray-900 my-8 print:my-0">
      <header className="flex flex-row justify-between">
        <h1 className="font flex items-end text-5xl print:text-4xl">
          Edward Sanders
        </h1>
        <address className="grid grid-rows-2 grid-flow-col gap-x-6 gap-y-1 text-sm print:text-xs">
          <div className="flex flex-row items-center">
            <AtSymbolIcon aria-hidden className="h-4 w-4 mr-2" />
            <Link href="mailto:esanders@hey.com">esanders@hey.com</Link>
          </div>
          <div className="flex flex-row items-center">
            <DevicePhoneMobileIcon aria-hidden className="h-4 w-4 mr-2" />
            <Link href="tel:(405) 243-7303">(405) 243-7303</Link>
          </div>
          <div className="flex flex-row items-center">
            <MapPinIcon aria-hidden className="h-4 w-4 mr-2" />
            <div>Pittsburgh, PA</div>
          </div>
          <div className="flex flex-row items-center print:hidden">
            <GlobeAltIcon aria-hidden className="h-4 w-4 mr-2" />
            <Link href="https://esanders.dev">esanders.dev</Link>
          </div>
          <div className="flex flex-row items-center">
            <SiGithub aria-hidden className="h-4 w-4 mr-2" />
            <Link href="">itsthekeming</Link>
          </div>
          <div className="flex flex-row items-center print:hidden">
            <SiLinkedin aria-hidden className="h-4 w-4 mr-2" />
            <Link href="">esanders1994</Link>
          </div>
        </address>
      </header>
      <hr className="mb-4 mt-1 border-gray-900" />
      <section>
        <h2 className="font-bold text-2xl print:text-xl uppercase">
          Work Experience
        </h2>
        <hr className="my-1 border-gray-900" />
        <ul className="space-y-4 mt-2">
          <li className="mt-2">
            <div className="flex flex-row justify-between font-semibold text-xl print:text-lg">
              <h3 className="uppercase">Dick&apos;s Sporting Goods</h3>
              <div>
                <time dateTime="2020-09">September 2020</time>
                <span> - </span>
                <span>present</span>
              </div>
            </div>
            <ul className="space-y-2">
              <li>
                <div className="flex flex-row text-base print:text-sm italic justify-between font-medium">
                  <div className="flex flex-row space-x-2">
                    <h4>Senior Software Engineer</h4>
                    <span className="not-italic"> | </span>
                    <div>
                      <time dateTime="2023-01">January 2023</time>
                      <span> - </span>
                      <span>present</span>
                    </div>
                  </div>
                  <div>Remote</div>
                </div>
                <ul className="list-disc list-inside text-sm print:text-xs">
                  <li>
                    Develop and maintain a custom appointment booking system
                    active in nearly 300 stores with 85k monthly active users
                    and 45k monthly booked appointments.
                  </li>
                  <li>
                    Recognized as the Store Technology All-Star in Q4 2023 for
                    contributions to Front-end Excellence and Design Systems.
                  </li>
                  <li>
                    Serve as the champion for the Store Technology Front-end
                    Excellence group, guiding projects like the Stores Design
                    System, Seamless Teammate Authentication, and front-end
                    standards and best practices documentation.
                  </li>
                  <li>Won Second Place in the 2023 DSG Tech Hackathon.</li>
                  <li>
                    Serve as a leader on my product team by interfacing with
                    stakeholders and business partners, organizing and guiding
                    technical discussions, reviewing code changes, managing the
                    SDLC, participating in on-call rotations, mentoring and
                    teaching junior engineers, and identifying and implementing
                    standards and best practices.
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex flex-row text-base print:text-sm italic justify-between font-medium">
                  <div className="flex flex-row space-x-2">
                    <h4>Software Engineer II</h4>
                    <span className="not-italic"> | </span>
                    <div>
                      <time dateTime="2020-09">September 2020</time>
                      <span> - </span>
                      <time dateTime="2023-01">January 2023</time>
                    </div>
                  </div>
                </div>
                <ul className="list-inside list-disc text-sm print:text-xs">
                  <li>
                    Prior to my promotion to Senior Software Engineer, the scope
                    of my duties was similar but narrower.
                  </li>
                  <li>
                    Gave a organization-wide presentation on Tailwind CSS and
                    how it can speed up development iteration.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex flex-row justify-between font-semibold text-xl print:text-lg">
              <h3 className="uppercase">Tobii Dynavox</h3>
              <div>
                <time dateTime="2018-08">August 2018</time>
                <span> - </span>
                <time dateTime="2020-09">September 2020</time>
              </div>
            </div>
            <div className="flex flex-row text-base print:text-sm italic justify-between font-medium">
              <h4>Software Engineer</h4>
              <div>Remote; Pittsburgh, PA</div>
            </div>
            <ul className="list-inside list-disc text-sm print:text-xs">
              <li>
                Tobii Dynavox makes assistive technology for communication (
                <Link
                  href="https://tobiidynavox.com"
                  className="print:no-underline underline"
                >
                  tobiidynavox.com
                </Link>
                ).
              </li>
              <li>
                As a Software Engineer, I developed applications to support our
                internal operations, including medical funding, billing, and
                customer service processes.
                <ul className="ml-6 list-disc list-inside">
                  <li>
                    Developed an automated device reset process that saved the
                    customer service team forty hours of work every week.
                  </li>
                  <li>
                    Leveraged Twilio to build functionality which enabled the
                    billing team to send personalized messages to customers.
                  </li>
                </ul>
              </li>
              <li>
                Introduced modern technologies to our tech stack, including
                React, Tailwind CSS, and .NET Core.
              </li>
            </ul>
          </li>
          <li>
            <div className="flex flex-row justify-between font-semibold text-xl print:text-lg">
              <h3>VTR Solutions</h3>
              <div>
                <time dateTime="2017-01">January 2017</time>
                <span> - </span>
                <time dateTime="2018-01">January 2018</time>
              </div>
            </div>
            <div className="flex flex-row text-base print:text-sm italic justify-between font-medium">
              <h4>Software Developer</h4>
              <div>Shawnee, OK</div>
            </div>
            <ul className="list-inside list-disc text-sm print:text-xs">
              <li>
                VTR Solutions builds learning management software catered to
                professionals seeking continuing education credits in various
                fields, including HR and accounting (
                <Link
                  href="https://vtrpro.com"
                  className="print:no-underline underline"
                >
                  vtrpro.com
                </Link>
                ).
              </li>
              <li>
                Built out basic brand guidelines and a design system for the
                product.
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mt-4">
        <h2 className="font-bold text-2xl print:text-xl uppercase">
          Education
        </h2>
        <hr className="my-1 border-gray-900" />
        <ul className="space-y-4">
          <li>
            <div className="flex flex-row justify-between font-semibold text-xl print:text-lg">
              <h3>University of Illinois Springfield</h3>
              <p>Fall 2020 - Spring 2021</p>
            </div>
            <div className="flex flex-row text-base print:text-sm italic justify-between font-medium">
              <p>Computer Science</p>
              <p>Remote</p>
            </div>
          </li>
          <li>
            <div className="flex flex-row justify-between font-semibold text-xl print:text-lg">
              <h3>Oklahoma Baptist University</h3>
              <p>Fall 2014 - Spring 2017</p>
            </div>
            <div className="flex flex-row text-base print:text-sm italic justify-between font-medium">
              <p>Computer Science; Religion; Political Science;</p>
              <p>Shawnee, OK</p>
            </div>
          </li>
        </ul>
      </section>
      <section className="mt-4">
        <h2 className="font-bold text-2xl print:text-xl uppercase">
          Skills & Interests
        </h2>
        <hr className="my-1 border-gray-900" />
        <ul className="list-inside list-disc text-sm print:text-xs">
          <li className="">
            <h3 className="inline font-bold">Skills:&nbsp;</h3>
            <ul className="inline">
              {[
                'JavaScript; ',
                'TypeScript; ',
                'React; ',
                'Redux; ',
                'CSS; ',
                'Tailwind CSS; ',
                'Cypress; ',
                'React Native; ',
                'Spring Framework; ',
                'Java; ',
                'Kotlin; ',
                '.NET; ',
                'ASP.NET; ',
                'C#; ',
                'OpenAPI; ',
                'PostgreSQL; ',
                'Redis; ',
                'Apache Kafka; ',
                'VMware Tanzu; ',
                'Microsoft Azure; ',
                'Docker; ',
                'Akamai; ',
                'Git; ',
                'Jira; ',
                'Confluence; ',
                'GitHub Actions; ',
                'CI/CD; ',
                'Elastic Stack; ',
                'Grafana; ',
                'Kibana; ',
                'Instana; ',
                'Prometheus; ',
                'Figma; ',
                'project management; ',
                'SDLC management; ',
                'pair programming; ',
                'unit testing; ',
                'test driven development',
              ].map((skill) => (
                <li key={skill} className="inline">
                  {skill}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h3 className="inline font-bold">Interests:&nbsp;</h3>
            <ul className="inline">
              {[
                'running; ',
                'hiking; ',
                'reading; ',
                'cooking; ',
                'video games; ',
                'TTRPGs; ',
                'LEGO; ',
                '3D graphics',
              ].map((interest) => (
                <li key={interest} className="inline">
                  {interest}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>
    </article>
  )
}
