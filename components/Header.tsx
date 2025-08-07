import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const navLinks = [
  { title: '项目', href: '/projects' },
  { title: '课业', href: '/courses' },
  { title: '杂谈', href: '/notes' },
  { title: '规划', href: '/plan' },
  { title: '关于', href: '/about' },
]

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label="Kukio's Blog">
        <div className="flex items-center justify-between">
          <span
            className="text-3xl font-extrabold bg-gradient-to-r from-primary-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 hover:from-indigo-500 hover:to-primary-500 cursor-pointer animate-pulse"
            style={{ letterSpacing: '0.05em' }}
          >
            Kukio&apos;s Blog
          </span>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100 transition-colors duration-200"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
