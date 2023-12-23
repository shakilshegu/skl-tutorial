"use client"

import { usePathname } from "next/navigation";
import { BarChart, Compass, Layout, List } from "lucide-react"
import Sidebaritem from "./sidebaritem";


const gustRoutes = [
  {
    icon: Layout,
    label: "Dashbord",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },

]

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
]

const Sidebarroutes = () => {

  const pathname = usePathname()
  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes:gustRoutes;
  

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <Sidebaritem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}

export default Sidebarroutes
