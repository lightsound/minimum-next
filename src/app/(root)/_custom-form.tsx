'use client'

import type { FormProps } from 'next/form'
import Form from 'next/form'
import React from 'react'
import { useFormStatus } from 'react-dom'

export function CustomForm(props: Omit<FormProps, 'action'>) {
  const [_state, dispatch, isPending] = React.useActionState(async (_: unknown, formData: FormData) => {
    const file = formData.get('file')
    await new Promise(resolve => setTimeout(resolve, 1000))
    // eslint-disable-next-line no-alert
    alert('送信完了！')
    // eslint-disable-next-line no-console
    console.log({ submit: file })
  }, undefined)

  return <Form action={dispatch} disabled={isPending} {...props} />
}

export function ResetButton(props: Omit<React.ComponentProps<'button'>, 'type'>) {
  const { pending } = useFormStatus()
  return <button type="reset" disabled={pending} {...props} />
}

export function SubmitButton(props: Omit<React.ComponentProps<'button'>, 'type'>) {
  const { pending } = useFormStatus()
  return <button type="submit" disabled={pending} {...props} />
}
