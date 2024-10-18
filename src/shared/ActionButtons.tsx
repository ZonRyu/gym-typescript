import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./type"

type Props = {
    children: React.ReactNode,
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButtons = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink 
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}  
      href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButtons