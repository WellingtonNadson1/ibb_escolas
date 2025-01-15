'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { BookOpen, CheckSquare, Home, School, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: School, label: 'Escolas', href: '/dashboard/escolas' },
  { icon: Users, label: 'Turmas', href: '/dashboard/turmas' },
  { icon: BookOpen, label: 'Aulas', href: '/dashboard/aulas' },
  { icon: CheckSquare, label: 'Presenças', href: '/dashboard/presencas' },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTrigger />
        <h1 className="text-xl font-bold">Escola App</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

