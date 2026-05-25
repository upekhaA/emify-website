export default function Footer() {
  return (
    <footer className="border-t bg-background pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/emify-mark.png" alt="Emify" className="h-7 w-7" width="28" height="28" />
              <span className="text-lg font-bold">emify</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-[180px] mb-3">
              Your AI sustainability coordinator. Purpose-built for Australia.
            </p>
            <div className="text-xs text-muted-foreground">ABN [TBC]</div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/product" className="hover:text-foreground transition-colors">Platform overview</a></li>
              <li><a href="/product#capabilities" className="hover:text-foreground transition-colors">What emify does</a></li>
              <li><a href="/pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="/resources" className="hover:text-foreground transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide mb-3">Compliance</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/aasb-s2" className="hover:text-foreground transition-colors">AASB S2</a></li>
              <li><a href="/nger" className="hover:text-foreground transition-colors">NGER</a></li>
              <li><a href="/modern-slavery-act" className="hover:text-foreground transition-colors">Modern Slavery Act</a></li>
              <li><a href="/safeguard-mechanism" className="hover:text-foreground transition-colors">Safeguard Mechanism</a></li>
              <li><a href="/scope-3" className="hover:text-foreground transition-colors">Scope 3</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide mb-3">Industries</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/industries/mining" className="hover:text-foreground transition-colors">Mining</a></li>
              <li><a href="/industries/financial-services" className="hover:text-foreground transition-colors">Financial services</a></li>
              <li><a href="/industries/agriculture" className="hover:text-foreground transition-colors">Agriculture</a></li>
              <li><a href="/industries/real-estate" className="hover:text-foreground transition-colors">Real estate</a></li>
              <li><a href="/industries/construction" className="hover:text-foreground transition-colors">Construction</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="/contact#demo" className="hover:text-foreground transition-colors">Book a demo</a></li>
              <li><a href="/vs/sustainability-coordinator" className="hover:text-foreground transition-colors">vs Coordinator</a></li>
              <li><a href="/vs/consultants" className="hover:text-foreground transition-colors">vs Consultants</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            <p>© {new Date().getFullYear()} Emify Pty Ltd · ABN [TBC] · Sydney NSW</p>
            <p className="mt-0.5">1300 EMIFY 1 (1300 364 391) · hello@emify.com.au</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
            <a href="https://linkedin.com" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
