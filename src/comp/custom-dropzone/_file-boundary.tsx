'use client'

import type { FileWithPreview } from './type'
import React from 'react'
import { FileContext, useFileContext } from './_file-context'

export function FileBoundary({ children, previewComponent }: { children: React.ReactNode, previewComponent: React.ReactNode }) {
  const [file, setFile] = React.useState<FileWithPreview>()

  function handleRemoveFile() {
    setFile(undefined)
  }

  function handleSetFileWithPreview(file: File) {
    setFile(Object.assign(file, { preview: URL.createObjectURL(file) }))
  }

  React.useEffect(() => {
    // メモリリーク防止のため、コンポーネントがアンマウントされたときに、ファイルのプレビューURLを解放する
    return () => file ? URL.revokeObjectURL(file.preview) : undefined
  }, [file])

  return (
    // eslint-disable-next-line react/no-unstable-context-value
    <FileContext.Provider value={{ file, handleRemoveFile, handleSetFileWithPreview }}>
      {file ? previewComponent : children}
    </FileContext.Provider>
  )
}

export function FileImage() {
  const { file } = useFileContext()
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={file ? file.preview : undefined} className="h-full min-h-0" />
}

export function FileName() {
  const { file } = useFileContext()
  return file!.name
}

export function RemoveFileButton(props: React.ComponentProps<'button'>) {
  const { handleRemoveFile } = useFileContext()
  return (
    <button type="button" aria-label="Remove file" onClick={handleRemoveFile} {...props} />
  )
}
