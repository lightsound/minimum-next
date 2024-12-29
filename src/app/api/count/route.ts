export async function GET(_: Request) {
  return Response.json(Math.floor(Math.random() * 100))
}
