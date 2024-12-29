import { Suspense } from 'react'
import { UserCard } from './_user-card'
import { getCount } from './api'

export default async function Page() {
  return (
    <main className="grid size-full place-items-center">
      <UserCard>
        <span>
          記事数:
          {' '}
          <Suspense fallback="--">
            {getCount()}
          </Suspense>
        </span>
      </UserCard>

      <UserCard>
        <span>
          誕生日: 1992/05/26
        </span>
      </UserCard>
    </main>
  )
}
