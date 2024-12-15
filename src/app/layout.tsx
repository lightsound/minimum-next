import type { NextLayoutProps } from '~/app/type'
import '~/css/app.css'

export default function RootLayout({ children }: NextLayoutProps) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
