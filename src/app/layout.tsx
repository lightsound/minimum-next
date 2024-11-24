import type { NextLayoutProps } from '~/app/type'
import '~/css/globals.css'

export default function RootLayout({ children }: NextLayoutProps) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
