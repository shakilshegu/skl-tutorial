"use client"

import { Compass, Layout } from "lucide-react"
import Sidebaritem from "./sidebaritem";


const gustRoutes = [
    {
        icon:Layout,
        label:"Dashbord",
        href:"/",
    },
    {
        icon:Compass,
        label:"Browse",
        href:"/search",
    },
    
]

const Sidebarroutes = () => {
    const routes = gustRoutes;
  return (
    <div className="flex flex-col w-full">
     {routes.map((route)=>(
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
