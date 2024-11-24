import { IconX } from 'justd-icons'
import { cn } from '~/util/cn'
import { FileImage, FileName, RemoveFileButton } from './_file-boundary'

export function PreviewImage({ className, isRemovable }: { className?: string, isRemovable?: boolean }) {
  return (
    <div className={cn('grid size-full place-items-center gap-y-2', className)}>
      <FileImage />
      <div className="flex items-center gap-x-2">
        <RemoveFileButton disabled={!isRemovable}>
          <IconX className="mt-0.5 size-4" />
        </RemoveFileButton>
        <span className="text-gray-500">
          <FileName />
        </span>
      </div>
    </div>
  )
}
