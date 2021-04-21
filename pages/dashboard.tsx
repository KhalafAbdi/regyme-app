import PrivatePageLayout from '../components/layouts/PrivatePageLayout'
import useViewer from '../hooks/use-viewer'

const Dashboard = () => {
  const { data, error } = useViewer()

  return (
    <PrivatePageLayout>
      <div>Dashboard</div>
    </PrivatePageLayout>
  )
}

export default Dashboard
