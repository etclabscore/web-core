import BatchIndicator from '@/components/batch/BatchIndicator'
import ConnectWallet from '@/components/common/ConnectWallet'
import NetworkSelector from '@/components/common/NetworkSelector'
import SafeTokenWidget, { getSafeTokenAddress } from '@/components/common/SafeTokenWidget'
import NotificationCenter from '@/components/notification-center/NotificationCenter'
import { AppRoutes } from '@/config/routes'
import useChainId from '@/hooks/useChainId'
import useSafeAddress from '@/hooks/useSafeAddress'
import ETCLogo from '@/public/images/ethereum-classic-etc-logo.svg'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Paper } from '@mui/material'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Dispatch, SetStateAction } from 'react'
import { type ReactElement } from 'react'
import css from './styles.module.css'

type HeaderProps = {
  onMenuToggle?: Dispatch<SetStateAction<boolean>>
  onBatchToggle?: Dispatch<SetStateAction<boolean>>
}

const Header = ({ onMenuToggle, onBatchToggle }: HeaderProps): ReactElement => {
  const chainId = useChainId()
  const safeAddress = useSafeAddress()
  const showSafeToken = safeAddress && !!getSafeTokenAddress(chainId)
  const router = useRouter()

  // Logo link: if on Dashboard, link to Welcome, otherwise to the root (which redirects to either Dashboard or Welcome)
  const logoHref = router.pathname === AppRoutes.home ? AppRoutes.welcome : AppRoutes.index

  const handleMenuToggle = () => {
    if (onMenuToggle) {
      onMenuToggle((isOpen) => !isOpen)
    } else {
      router.push(logoHref)
    }
  }

  const handleBatchToggle = () => {
    if (onBatchToggle) {
      onBatchToggle((isOpen) => !isOpen)
    }
  }

  return (
    <Paper className={css.container}>
      <div className={classnames(css.element, css.menuButton, !onMenuToggle ? css.hideSidebarMobile : null)}>
        <IconButton onClick={handleMenuToggle} size="large" edge="start" color="default" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </div>

      <div className={classnames(css.element, css.hideMobile, css.logo)}>
        <Link href={logoHref} passHref>
          <ETCLogo alt="Catacomb ETC Wallet" height={36} id="etc-logo" />
        </Link>
      </div>

      {showSafeToken && (
        <div className={classnames(css.element, css.hideMobile)}>
          <SafeTokenWidget />
        </div>
      )}

      {safeAddress && (
        <div className={classnames(css.element, css.hideMobile)}>
          <BatchIndicator onClick={handleBatchToggle} />
        </div>
      )}

      <div className={css.element}>
        <NotificationCenter />
      </div>

      <div className={classnames(css.element, css.connectWallet)}>
        <ConnectWallet />
      </div>

      <div className={classnames(css.element, css.networkSelector)}>
        <NetworkSelector />
      </div>
    </Paper>
  )
}

export default Header
