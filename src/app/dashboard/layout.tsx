import { SidebarProvider } from '@/components/ui/sidebar'
import '../globals.css'
import DashboardSidebar from './components/dashboard-sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        <SidebarProvider>
          <div className="flex h-screen">
            <DashboardSidebar />
            <main className="flex-1 overflow-y-auto p-4">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

