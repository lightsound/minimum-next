import { CustomDropzone } from '~/comp/custom-dropzone'
import { CustomForm, ResetButton, SubmitButton } from './_custom-form'

export default function Page() {
  return (
    <CustomForm className="space-y-10 p-20 text-center">
      <CustomDropzone id="file" className="h-96" required />
      <div className="space-x-4 *:border *:border-black *:px-8 *:py-3">
        <ResetButton className="disabled:bg-gray-50">Reset</ResetButton>
        <SubmitButton className="bg-black text-white disabled:bg-black/70">Submit</SubmitButton>
      </div>
    </CustomForm>
  )
}
