import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    name: 'Blog',
    url: 'https://blog.minb.dev',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/did:plc:bexy3kyinuxfcljswqs5ne5a',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.601 6.486.596 2.232 2.757 2.976 4.779 2.72-2.505.334-4.736 1.168-4.736 4.32 0 4.018 4.048 5.028 5.96 5.09 3.068.099 6.091-1.713 6.396-5.102.109-1.206.084-2.105-.013-2.886-.118-.953-.355-1.599-.458-1.773l-.017.03c-.103.174-.34.82-.458 1.773-.097.78-.122 1.68-.013 2.886.305 3.39 3.328 5.201 6.396 5.102 1.912-.062 5.96-1.072 5.96-5.09 0-3.152-2.23-3.986-4.736-4.32 2.022.256 4.183-.488 4.779-2.72C24.622 9.418 25 4.458 25 3.768c0-.689-.139-1.86-.902-2.203-.66-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://x.com/minbyulj',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/minbyulcat',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background">
      <main className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">minb.dev</h1>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              className="w-full justify-start gap-3 h-12"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
                <span>{link.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </main>

      <footer className="mt-16 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} minb.dev
      </footer>
    </div>
  )
}

export default App
