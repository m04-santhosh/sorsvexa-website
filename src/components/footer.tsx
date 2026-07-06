import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-background pt-16">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto max-w-7xl px-5 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-12 pb-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-heading font-bold text-white">S</span>
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-white">
                Sorsvexa
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Automate. Innovate. Elevate.
              <br />
              Smart Solutions. Scalable Growth.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                Instagram
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="font-heading text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2 items-center md:items-start">
              {["Home", "About Us", "Pricing", "Contact"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-white flex items-center gap-1 group"
                >
                  {link}
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="font-heading text-lg font-semibold text-white">Services</h4>
            <nav className="flex flex-col gap-2 items-center md:items-start">
              {["AI Chatbots", "WhatsApp Automation", "CRM Setup", "Workflow Automation"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-white flex items-center gap-1 group"
                >
                  {link}
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="font-heading text-lg font-semibold text-white">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground items-center md:items-start">
              <p>sorsvexa.agency@gmail.com</p>
              <p>+91 7019820571</p>
              <p>Global Remote Agency</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-muted-foreground md:flex-row">
          <p className="text-center">© {new Date().getFullYear()} Sorsvexa. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admin" className="hover:text-white transition-colors opacity-30 hover:opacity-100">Admin Login</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
