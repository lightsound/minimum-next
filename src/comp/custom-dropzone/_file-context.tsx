'use client'

import { createContext, use } from 'react'

export type FileWithPreview = File & { preview: string }

export const FileContext = createContext<{
  file?: FileWithPreview
  disabled?: boolean
  handleRemoveFile: () => void
  handleSetFileWithPreview: (file: File) => void
}>({
      disabled: false,
      handleRemoveFile: () => { throw new Error('Function not implemented.') },
      handleSetFileWithPreview: () => { throw new Error('Function not implemented.') },
    })

export function useFileContext() {
  return use(FileContext)
}
