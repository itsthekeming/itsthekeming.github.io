import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

type NetworkIconProps = {
  network: string
}

export default function NetworkIcon({ network }: NetworkIconProps) {
  let icon

  switch (network.toLowerCase()) {
    case 'github':
      icon = faGithubAlt
      break
    case 'linkedin':
      icon = faLinkedinIn
      break
    default:
      return null
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      className="not-sr-only mr-2 h-4 w-4 text-black"
      size="1x"
    />
  )
}
