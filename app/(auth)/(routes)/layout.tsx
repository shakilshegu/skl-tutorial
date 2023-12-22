import { ClerkProvider } from '@clerk/nextjs'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <body className='h-full flex items-center justify-center' >{children}</body>
        </div>
    )
}
