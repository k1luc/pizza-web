import { Header } from './components/header/index'
import { OrderProvider } from '@/providers/order'

export default function DashboardLayout({children}:
  { children: React.ReactNode}
){
  return(
    <>
      <Header/>
      <OrderProvider>
        {children}
      </OrderProvider>
    </>
  )
}