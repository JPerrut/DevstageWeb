'use client'

import { Copy, Link } from 'lucide-react'
import { IconButton } from '../../components/icon-button'
import { InputField, InputIcon, InputRoot } from '../../components/input'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    // Check if the Clipboard API is supported
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(inviteLink)
        .then(() => {
          console.log('Text copied to clipboard')
          alert('Link copied to clipboard!')
        })
        .catch(err => {
          console.error('Failed to copy text: ', err)
          alert('Failed to copy link. Please try again.')
        })
    } else {
      // Fallback for unsupported browsers
      const textarea = document.createElement('textarea')
      textarea.value = inviteLink
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
        console.log('Text copied using fallback method')
        alert('Link copied to clipboard!')
      } catch (err) {
        console.error('Failed to copy text using fallback: ', err)
        alert('Failed to copy link. Please try again.')
      } finally {
        document.body.removeChild(textarea)
      }
    }
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
