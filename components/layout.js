import Sidebar from "./sidebar";

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