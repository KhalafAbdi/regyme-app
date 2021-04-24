import PrivatePageLayout from '../layouts/PrivatePageLayout'
import useViewer from '../hooks/use-viewer'

const Dashboard: React.FC = () => {
  const { data, error } = useViewer()

  return (
    <PrivatePageLayout>
      <div>Dashboard</div>
    </PrivatePageLayout>
  )
}

export default Dashboard
