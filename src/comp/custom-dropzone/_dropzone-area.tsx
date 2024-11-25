'use client'

import React from 'react'
import { useDropzone } from 'react-dropzone'
import { cn } from '~/util/cn'
import { useFileContext } from './_file-context'

interface Props {
  children: React.ReactNode
  previewComponent: React.ReactNode
  id: string
  name?: string
  required?: boolean
}

export function DropzoneArea({ children, previewComponent, id, name = 'file', required }: Props) {
  const { file, disabled, handleRemoveFile, handleSetFileWithPreview } = useFileContext()
  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop: (acceptedFiles: File[]) => handleSetFileWithPreview(acceptedFiles[0]),
    accept: { 'image/jpg': ['.jpeg', '.jpg'], 'image/png': ['.png'], 'image/webp': ['.webp'] },
    maxFiles: 1,
    multiple: false,
    disabled,
  })

  // フォームのリセット時にファイルを削除するためのeffect。本当は使いたくないが、それ以外にやりようが無いので諦めた。
  React.useEffect(() => {
    const form = inputRef.current?.closest('form')
    if (!form) {
      return
    }
    form.addEventListener('reset', handleRemoveFile)
    return () => form.removeEventListener('reset', handleRemoveFile)
  }, [inputRef, handleRemoveFile])

  const input = <input {...getInputProps()} ref={inputRef} id={id} name={name} type="file" className="sr-only" disabled={disabled} required={required} />
  const className = 'h-full border border-gray-400 data-[disabled]:bg-gray-50'

  if (file) {
    return (
      <div className={className} data-disabled={disabled}>
        {previewComponent}
        {input}
      </div>
    )
  }

  return (
    <div {...getRootProps()} className={cn(className, 'border-dashed data-[dragging=true]:bg-blue-50')} data-disabled={disabled} data-dragging={isDragActive}>
      {children}
      {input}
    </div>
  )
}
