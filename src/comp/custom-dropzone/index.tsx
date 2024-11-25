import { IconFile, IconX } from 'justd-icons'
import React from 'react'
import { DropzoneArea } from './_dropzone-area'
import { FileBoundary, FileImage, FileName, RemoveFileButton } from './_file-boundary'

interface Props {
  id: string
  name?: string
  className?: string
  disabled?: boolean
  required?: boolean
}

export function CustomDropzone({ className, disabled, ...rest }: Props) {
  return (
  /* Server Component */
    <div className={className}>
      {/* Client Component */}
      <FileBoundary disabled={disabled}>
        {/* Client Component */}
        <DropzoneArea previewComponent={<Preview /* Server Component */ />} {...rest}>
          {/* Server Component */}
          <Instructions />
        </DropzoneArea>
      </FileBoundary>
    </div>
  )
}

function Preview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-2 p-10 pb-6">
      <div className="flex min-h-0 flex-1 items-center">
        <FileImage className="max-h-full" />
      </div>
      <div className="flex items-center gap-x-2">
        <RemoveFileButton>
          <IconX className="mt-0.5 size-4" aria-hidden />
        </RemoveFileButton>
        <span className="text-gray-500">
          <FileName />
        </span>
      </div>
    </div>
  )
}

function Instructions() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-4">
      <IconFile className="mx-auto size-12" aria-hidden />
      <p>
        ドラッグ&ドロップ もしくは
        <span className="relative cursor-pointer px-1 font-medium underline underline-offset-4">ファイルを選択</span>
        してください
      </p>
    </div>
  )
}
