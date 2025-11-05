"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// 🔹 Datos por categoría
const aromaticas = [
  {
    title: "Vainilla",
    href: "/productos/vainilla",
    description: "Aroma dulce y cálido, ideal para ambientes relajados.",
  },
  {
    title: "Lavanda",
    href: "/productos/lavanda",
    description: "Perfecta para dormir mejor y aliviar el estrés.",
  },
  {
    title: "Canela",
    href: "/productos/canela",
    description: "Aroma especiado que llena de energía tu espacio.",
  },
]

const decorativas = [
  {
    title: "Minimalistas",
    href: "/productos/minimalistas",
    description: "Diseños simples y elegantes para tu hogar.",
  },
  {
    title: "Con forma de flor",
    href: "/productos/flor",
    description: "Velas con estilo artesanal y estético.",
  },
  {
    title: "Con cristales",
    href: "/productos/cristales",
    description: "Velas decorativas con piedras energéticas naturales.",
  },
]

const sets = [
  {
    title: "Box Relax",
    href: "/sets/relax",
    description: "Incluye vela, té y una tarjeta personalizada.",
  },
  {
    title: "Box Amor",
    href: "/sets/amor",
    description: "Ideal para regalar, con aromas suaves y románticos.",
  },
  {
    title: "Box Hogar",
    href: "/sets/hogar",
    description: "Combiná distintas velas para ambientar tu casa.",
  },
]

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        {/* 🔹 Todas las Velas */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Todas las Velas</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* 🔹 Velas Aromáticas */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Velas Aromáticas</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white shadow-xl rounded-xl p-4 divide-y divide-gray-200 animate-slide-down">
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {aromaticas.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 🔹 Velas Decorativas */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Velas Decorativas</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white shadow-xl rounded-xl p-4 divide-y divide-gray-200 animate-slide-down">
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {decorativas.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 🔹 Sets de Regalos */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sets de Regalos</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white shadow-xl rounded-xl p-4 divide-y divide-gray-200 animate-slide-down">
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {sets.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 🔹 Sobre Nosotros */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Sobre Nosotros</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

// 🔹 ListItem con hover y transición
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block p-3 rounded-md hover:bg-yellow-100 transition-colors"
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

