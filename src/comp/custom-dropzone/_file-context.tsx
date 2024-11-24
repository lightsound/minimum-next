'use client'

import type { FileWithPreview } from './type'
import { createContext, use } from 'react'

export const FileContext = createContext<{
  file?: FileWithPreview
  handleRemoveFile: () => void
  handleSetFileWithPreview: (file: File) => void
}>({
      handleRemoveFile: () => { throw new Error('Function not implemented.') },
      handleSetFileWithPreview: () => { throw new Error('Function not implemented.') },
    })

export function useFileContext() {
  return use(FileContext)
}
