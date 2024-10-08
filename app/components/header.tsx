import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="">
      <header className="flex justify-between md:px-10 py-4 items-center text-white ">
        <h1 className="text-2xl  ">Spinshort</h1>
        <nav className="flex gap-6 items-center">
          <Link href="/">Features</Link>
          <Link href="/login">
            <Button>Log in</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </nav>
      </header>
    </div>
  );
}
