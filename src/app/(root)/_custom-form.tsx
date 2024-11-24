'use client'

import type { FormProps } from 'next/form'
import Form from 'next/form'
import React from 'react'

export function CustomForm(props: Omit<FormProps, 'action'>) {
  const [_state, dispatch, isPending] = React.useActionState(async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    // eslint-disable-next-line no-alert
    alert('送信完了！')
  }, undefined)

  return (
    <Form action={dispatch} disabled={isPending} {...props} />
  )
}
