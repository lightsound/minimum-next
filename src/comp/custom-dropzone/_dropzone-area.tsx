'use client'

import React from 'react'
import { useDropzone } from 'react-dropzone'
import { useFileContext } from './_file-context'

interface Props {
  children: React.ReactNode
  id: string
  name: string
  className?: string
  activeClassName?: string
  disabled?: boolean
}

export function DropzoneArea({ children, id, name, className, disabled }: Props) {
  const { handleSetFileWithPreview } = useFileContext()
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      handleSetFileWithPreview(Object.assign(file, { preview: URL.createObjectURL(file) }))
    },
    accept: { 'image/jpg': ['.jpeg', '.jpg'], 'image/png': ['.png'], 'image/webp': ['.webp'] },
    maxFiles: 1,
    multiple: false,
    disabled,
  })

  return (
    <div {...getRootProps()} className={className} data-disabled={disabled} data-dragging={isDragActive}>
      {children}
      <input {...getInputProps()} id={id} name={name} type="file" className="sr-only" disabled={disabled} />
    </div>
  )
}
