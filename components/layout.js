import Sidebar from "./sidebar";

export default function Layout({ children }) {
    return (
        <div className="main">
            <Sidebar />
            <main>{children}</main>
        </div>
    )
}