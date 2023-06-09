import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-20 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-zinc-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Origin Investigations Inc. All Rights Reserved.</p>
        <div className="flex items-center justify-center gap-1.5">
          <a href="/terms-of-use.pdf" target="_blank" rel="noopener noreferrer">Terms of Use</a>
          |
          <a href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          |
          <a href="/data-security.pdf" target="_blank" rel="noopener noreferrer">Data Security</a>
        </div>
      </div>
    </footer>
  )
}
