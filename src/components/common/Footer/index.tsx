import { IS_OFFICIAL_HOST } from '@/config/constants'
import { AppRoutes } from '@/config/routes'
import { Typography } from '@mui/material'
import MUILink from '@mui/material/Link'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement, ReactNode } from 'react'
import packageJson from '../../../../package.json'
import ExternalLink from '../ExternalLink'
import css from './styles.module.css'

const footerPages = [
  AppRoutes.welcome,
  AppRoutes.settings.index,
  AppRoutes.imprint,
  AppRoutes.privacy,
  AppRoutes.cookie,
  AppRoutes.terms,
  AppRoutes.licenses,
]

const FooterLink = ({ children, href }: { children: ReactNode; href: string }): ReactElement => {
  return href ? (
    <Link href={href} passHref>
      <MUILink>{children}</MUILink>
    </Link>
  ) : (
    <MUILink>{children}</MUILink>
  )
}

const Footer = (): ReactElement | null => {
  const router = useRouter()

  if (!footerPages.some((path) => router.pathname.startsWith(path))) {
    return null
  }

  const getHref = (path: string): string => {
    return router.pathname === path ? '' : path
  }

  return (
    <footer className={css.container}>
      <ul>
        {IS_OFFICIAL_HOST ? (
          <>
            <li>
              <Typography variant="caption">&copy;2022–{new Date().getFullYear()} Core Contributors GmbH</Typography>
            </li>
            <li>
              <FooterLink href={getHref(AppRoutes.terms)}>Terms</FooterLink>
            </li>
            <li>
              <FooterLink href={getHref(AppRoutes.privacy)}>Privacy</FooterLink>
            </li>
            <li>
              <FooterLink href={getHref(AppRoutes.licenses)}>Licenses</FooterLink>
            </li>
            <li>
              <FooterLink href={getHref(AppRoutes.imprint)}>Imprint</FooterLink>
            </li>
            <li>
              <FooterLink href={getHref(AppRoutes.cookie)}>Cookie policy</FooterLink>
            </li>
            <li>
              <FooterLink href={getHref(AppRoutes.settings.index)}>Preferences</FooterLink>
            </li>
          </>
        ) : (
          <li>{'This is an unofficial distribution of Safe{Wallet}'}</li>
        )}

        <li>
          <Typography variant="caption">&copy;2022–{new Date().getFullYear()} ETC Cooperative</Typography>
        </li>
        <li>
          <ExternalLink noIcon href="https://ethereumclassic.org/">
            <MUILink>Ethereum Classic Network</MUILink>
          </ExternalLink>
        </li>
        <li>
          <FooterLink href={getHref(AppRoutes.settings.index)}>Preferences</FooterLink>
        </li>
        <li>
          <ExternalLink noIcon href={`${packageJson.homepage}/releases/tag/v${packageJson.version}`}>
            v{packageJson.version}
          </ExternalLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
