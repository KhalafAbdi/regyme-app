import Header from '../components/Header'

interface Props {
  children: React.ReactNode
}

const PublicPageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto ">
      <Header />
      {children}
    </div>
  )
}

export default PublicPageLayout
