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
import { ScrollArea } from "../ui/scroll-area";

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
        className="flex w-full flex-col gap-4 overflow-y-auto p-0"
      >
        <SheetHeader className="border-b px-5 py-4">
          <SiteBrand />
        </SheetHeader>

        {/* Body */}
        <ul className="space-y-1 px-1">
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
              <li key={item.id}>
                <div
                  className={cn(
                    buttonVariants({
                      variant: "link",
                      size: "default",
                      className:
                        "w-full justify-start gap-2 text-sm leading-none text-muted-foreground hover:no-underline",
                    }),
                  )}
                >
                  {item.label}
                  <span className="h-[1px] flex-1 bg-muted-foreground/25"></span>
                </div>
                <Accordion asChild type="single" collapsible>
                  <ul className="flex w-full flex-col gap-1">
                    {item.subLinks?.map((level2) => (
                      <li key={level2.id} className="w-full">
                        <AccordionItem
                          value={level2.id.toString()}
                          className="border-b-0"
                        >
                          <AccordionTrigger
                            className={cn(
                              buttonVariants({
                                variant: "link",
                                size: "default",
                                className:
                                  "justify-between text-base hover:no-underline",
                              }),
                            )}
                          >
                            {level2.label}
                          </AccordionTrigger>
                          <AccordionContent className="border-b-0 px-4">
                            <ul className="grid w-full grid-cols-2 gap-2">
                              {level2.subLinks?.map((level3) => (
                                <li key={level3.id}>
                                  <SheetClose asChild>
                                    <Link
                                      href={level3.url}
                                      aria-label={level3.label}
                                      className={cn(
                                        buttonVariants({
                                          variant: "outline",
                                          size: "default",
                                          className: "w-full",
                                        }),
                                      )}
                                    >
                                      {level3.label}
                                    </Link>
                                  </SheetClose>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </li>
            ),
          )}
        </ul>
        {/* ./Body */}
        <SheetFooter className="border-t px-4 py-8">
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
