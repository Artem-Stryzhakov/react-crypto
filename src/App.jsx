import { Layout } from 'antd';
import AppHeader from "./components/AppHeader.jsx";
import AppSider from "./components/AppSider.jsx";
import AppContent from "./components/AppContent.jsx";

export default function App() {
  return (
      <>
          <Layout>
              <AppHeader />
              <Layout>
                  <AppSider />
                  <AppContent />
              </Layout>
          </Layout>
      </>
  )
}
