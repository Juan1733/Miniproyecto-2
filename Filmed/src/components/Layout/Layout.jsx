import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar"

export function Layout() {
    return (
        <main>
            <Navbar />

            <section className="body">
                <Outlet />
            </section>
        </main>
    );
}