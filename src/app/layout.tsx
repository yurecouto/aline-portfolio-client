import './globals.css'

export const metadata = {
  title: 'Aline Ferreira',
  description: `Aline's Portfolio`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
