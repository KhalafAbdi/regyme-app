import SideBar from '../components/SideBar'

interface Props {
  children: React.ReactNode
}

const PrivatePageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 ml-[52px]">{children}</div>
    </div>
  )
}

export default PrivatePageLayout
