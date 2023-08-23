"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Cloud } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

// Contents
import { MainNav } from "@/content/site";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";

export function NavLinks() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {MainNav?.map((item) =>
          item.subLinks === null ? (
            <NavigationMenuItem key={item.id}>
              <Link href={item.url} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-max gap-3 p-4 md:grid-cols-3">
                  {item.subLinks?.map((level2) => (
                    <li key={level2.id} className="flex flex-col">
                      <NavigationMenuLink>
                        <Link
                          href={level2.url}
                          aria-label={level2.label}
                          className={cn(
                            buttonVariants({
                              variant: "ghost",
                              size: "default",
                              className: "mb-1 justify-start",
                            }),
                          )}
                        >
                          <div className="mr-2 flex h-8 w-8 items-center justify-center">
                            <Image
                              src={`/icons/${level2.media}`}
                              alt={level2.label}
                              width={32}
                              height={32}
                              className="h-full w-auto"
                            />
                          </div>
                          {level2.label}
                        </Link>
                      </NavigationMenuLink>

                      <ul className="flex flex-col gap-1">
                        {level2.subLinks?.map((level3) => (
                          <li key={level3.id}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={level3.url}
                                aria-label={level3.label}
                                className={cn(
                                  buttonVariants({
                                    variant: "ghost",
                                    size: "default",
                                    className: "w-full justify-start",
                                  }),
                                )}
                              >
                                {level3.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
