import { Button, buttonVariants } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// Contents
import { MainNav } from "@/content/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MobileNav() {
  return (
    <SheetContent side="left" className="w-4/5">
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetHeader>
      <div className="grid">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        eum veniam at cum assumenda minima ratione rem iusto quas non cupiditate
        sed voluptatibus. Quaerat voluptate laboriosam reiciendis facilis
        accusamus? Enim, nemo non!
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
