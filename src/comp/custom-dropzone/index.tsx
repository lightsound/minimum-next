import { IconFile } from 'justd-icons'
import React from 'react'
import { cn } from '~/util/cn'
import { DropzoneArea } from './_dropzone-area'
import { FileBoundary } from './_file-boundary'
import { PreviewImage } from './_preview-image'

interface Props {
  id: string
  name?: string
  className?: string
  disabled?: boolean
}

export function CustomDropzone({ className, disabled, ...rest }: Props) {
  return (
    <div className={cn('data-[disabled=true]:bg-gray-100', className)} data-disabled={disabled}>
      <FileBoundary
        previewComponent={<PreviewImage className="border border-gray-400 p-10 pb-6" />}
        disabled={disabled}
      >
        <DropzoneArea
          className="grid size-full place-items-center border border-dashed border-gray-400 data-[disabled=true]:bg-gray-100 data-[dragging=true]:bg-blue-50"
          disabled={disabled}
          {...rest}
        >
          <div className="space-y-4">
            <IconFile className="mx-auto size-12" aria-hidden />
            <p>
              ドラッグ&ドロップ もしくは
              <span className="relative cursor-pointer px-1 font-medium underline underline-offset-4">ファイルを選択</span>
              してください
            </p>
          </div>
        </DropzoneArea>
      </FileBoundary>
    </div>
  )
}
