import { Suspense } from 'react'
import { getName } from './api'

export async function UserCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-80 rounded-2xl border border-zinc-300 backdrop-blur">
      <div className="p-8">
        <div className="flex items-start gap-6">
          <div className="size-20 rounded-2xl ring-2 ring-zinc-200">
            <img src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png" />
          </div>
          <div className="flex-1 pt-2">
            <div className="text-xl font-semibold text-zinc-900">
              <Suspense fallback={<div className="h-7 w-20 animate-pulse bg-zinc-200" />}>
                {getName()}
              </Suspense>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-sm text-emerald-600">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
