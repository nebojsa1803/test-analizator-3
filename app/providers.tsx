'use client'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Provider } from 'react-redux'
import { store } from './store'
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </Provider>
    </>
  )
}
export default Providers
