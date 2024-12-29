export async function getCount() {
  await new Promise(resolve => setTimeout(resolve, 2000))

  const res = await fetch('http://localhost:3000/api/count')
  const count = await res.json()
  return count as number
}

export async function getName() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  const res = await fetch('http://localhost:3000/api/name')
  const name = await res.json()
  return name as string
}
