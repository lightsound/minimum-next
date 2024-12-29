import { getName } from './api'

export async function UserName() {
  const name = await getName()
  return <h1 className="text-4xl">{name}</h1>
}
