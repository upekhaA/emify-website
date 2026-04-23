import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl flex h-16 items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-primary">emify</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button size="sm">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
