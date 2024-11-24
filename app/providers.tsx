'use client'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        disableTransitionOnChange
      >
        <Toaster />
        {children}
      </ThemeProvider>
    </>
  )
}
export default Providers
