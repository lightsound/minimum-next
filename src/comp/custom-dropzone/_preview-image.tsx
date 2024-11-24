import { IconX } from 'justd-icons'
import { cn } from '~/util/cn'
import { FileImage, FileName, RemoveFileButton } from './_file-boundary'

export function PreviewImage({ className }: { className?: string }) {
  return (
    <div className={cn('flex size-full flex-col items-center justify-center gap-y-2', className)}>
      <FileImage className="h-full min-h-0" />
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
