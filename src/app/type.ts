type NonEmptyObject = Record<string, unknown> & {}

type ExpandKeys<T extends string> = T extends never
  ? object
  : { [K in T]: React.ReactNode }

export type NextLayoutProps<Params = undefined, Keys extends string | undefined = undefined> = {
  children: React.ReactNode
  params: Params extends NonEmptyObject ? Promise<Params> : never
} & (Keys extends string ? ExpandKeys<Keys> : object)

export interface NextPageProps<
  Params extends NonEmptyObject | undefined,
  SearchParams extends NonEmptyObject | undefined = undefined,
> {
  params: Params extends NonEmptyObject ? Promise<Params> : never
  searchParams: SearchParams extends NonEmptyObject ? Promise<SearchParams> : never
}
