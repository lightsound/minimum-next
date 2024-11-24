import { CustomDropzone } from '~/comp/custom-dropzone'

export default function Page() {
  return (
    <div className="p-20">
      <CustomDropzone id="foo" className="h-80" />
    </div>
  )
}
