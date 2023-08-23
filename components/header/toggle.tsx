import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SiteBrand from "../site-brand";
import { MainNav } from "@/content/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Toggle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex min-h-screen w-4/5 flex-col gap-4 overflow-y-auto p-0"
      >
        <SheetHeader className="border-b px-5 py-4">
          <SiteBrand />
        </SheetHeader>
        <ul className="space-y-1 pl-1 pr-5">
          {MainNav?.map((item) =>
            item.subLinks === null ? (
              <li key={item.id}>
                <SheetClose asChild>
                  <Link
                    href={item.url}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "default",
                        className: "w-full justify-start text-base",
                      }),
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              </li>
            ) : (
              <Accordion
                key={item.id}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={item.id.toString()}>
                  <AccordionTrigger
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "default",
                        className: "justify-between",
                      }),
                    )}
                  >
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="border-b-0 border-l pl-2">
                    {item.subLinks?.map((level2) => (
                      <div key={level2.id}>
                        <Button
                          variant="ghost"
                          size="default"
                          className="w-full justify-start text-base"
                        >
                          {level2.label}
                        </Button>

                        <ul className="grid grid-cols-2 gap-2">
                          {level2.subLinks?.map((level3) => (
                            <li key={level3.id}>
                              <SheetClose asChild>
                                <Link
                                  href={level3.url}
                                  aria-label={level3.label}
                                  className={cn(
                                    buttonVariants({
                                      variant: "ghost",
                                      size: "default",
                                      className:
                                        "w-full justify-start text-base",
                                    }),
                                  )}
                                >
                                  {level3.label}
                                </Link>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ),
          )}
        </ul>
        <SheetFooter className="mt-auto border-t px-5 py-4">
          <SheetClose asChild>
            <Button variant="destructive" size="default" className="">
              Download Aplikasi JULO
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
