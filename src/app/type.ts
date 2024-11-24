type NonEmptyObject = Record<string, unknown> & {}

export interface NextLayoutProps<Params = never> {
  children: React.ReactNode
  params: Params extends NonEmptyObject ? Promise<Params> : never
}

export interface NextPageProps<
  Params extends NonEmptyObject | undefined,
  SearchParams extends NonEmptyObject | undefined,
> {
  params: Params extends NonEmptyObject ? Promise<Params> : never
  searchParams: SearchParams extends NonEmptyObject ? Promise<SearchParams> : never
}
