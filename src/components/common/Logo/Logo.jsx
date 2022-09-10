import logoIcon from 'img/logoIcon.png'
import { Logo, LogoText, LogoIcon } from './Logo.style'


export const AppLogo = () => {
    return(
        <Logo to="/">
        <LogoText>Phonebook</LogoText>
        <LogoIcon src={logoIcon} alt="Phonebook-icon" />
      </Logo>
    )
}