import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryClient } from '@tanstack/react-query'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import SideLayout from '@/components/side-layout'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SideLayout />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 ">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
