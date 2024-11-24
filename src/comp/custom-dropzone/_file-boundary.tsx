'use client'

import type { FileWithPreview } from './_file-context'
import React from 'react'
import { FileContext, useFileContext } from './_file-context'

export function FileBoundary({ children, previewComponent, disabled }: {
  children: React.ReactNode
  previewComponent: React.ReactNode
  disabled?: boolean
}) {
  const [file, setFile] = React.useState<FileWithPreview>()

  function handleRemoveFile() {
    setFile(undefined)
  }

  function handleSetFileWithPreview(file: File) {
    setFile(Object.assign(file, { preview: URL.createObjectURL(file) }))
  }

  React.useEffect(() => {
    // メモリリーク防止
    return () => file ? URL.revokeObjectURL(file.preview) : undefined
  }, [file])

  return (
    // eslint-disable-next-line react/no-unstable-context-value
    <FileContext.Provider value={{ file, disabled, handleRemoveFile, handleSetFileWithPreview }}>
      {file ? previewComponent : children}
    </FileContext.Provider>
  )
}

export function FileImage(props: Omit<React.ComponentProps<'img'>, 'src'>) {
  const { file } = useFileContext()
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={file ? file.preview : undefined} {...props} />
}

export function FileName() {
  const { file } = useFileContext()
  return file ? file.name : null
}

export function RemoveFileButton(props: React.ComponentProps<'button'>) {
  const { handleRemoveFile, disabled } = useFileContext()
  return <button type="button" aria-label="Remove file" onClick={handleRemoveFile} disabled={disabled} {...props} />
}
