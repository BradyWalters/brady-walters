import Sidebar from "./sidebar";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout({ children }) {
    return (
      <div className="parent">
        <Sidebar />
        <div className="right">
          <main>{children}</main>
        </div>
      </div>
    )
  }