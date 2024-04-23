import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IconDefinition,
  faGithubAlt,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { match } from 'ts-pattern'

type NetworkIconProps = {
  network: string
}

export function NetworkIcon({ network }: NetworkIconProps) {
  const icon = match(network.toLowerCase())
    .with('github', () => faGithubAlt)
    .with('linkedin', () => faLinkedinIn)
    .otherwise(() => null)

  if (icon === null) return null

  return (
    <FontAwesomeIcon
      icon={icon}
      className="not-sr-only mr-2 h-4 w-4 text-black"
      size="1x"
    />
  )
}
