import { IconFile } from 'justd-icons'
import React from 'react'
import { DropzoneArea } from './_dropzone-area'
import { FileBoundary } from './_file-boundary'
import { PreviewImage } from './_preview-image'

export function CustomDropzone({ id, name, disabled }: { id: string, name?: string, disabled?: boolean }) {
  return (
    <div className="h-80 rounded-md bg-white transition data-[disabled=true]:bg-gray-100" data-disabled={disabled}>
      <FileBoundary previewComponent={<PreviewImage className="border border-gray-400 pb-6 pt-10" isRemovable={!disabled} />}>
        <DropzoneArea
          id={id}
          name={name ?? id}
          className="grid size-full place-items-center border border-dashed border-gray-400 data-[disabled=true]:bg-gray-100 data-[dragging=true]:bg-blue-50"
          disabled={disabled}
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
