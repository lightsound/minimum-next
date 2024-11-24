import { CustomDropzone } from '~/comp/custom-dropzone'
import { CustomForm } from './_custom-form'

export default function Page() {
  return (
    <CustomForm className="space-y-10 p-20 text-center">
      <CustomDropzone id="foo" className="h-80" />
      <button type="submit" className="bg-black px-8 py-3 text-white">送信</button>
    </CustomForm>
  )
}
