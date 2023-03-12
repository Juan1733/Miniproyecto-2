import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import { UserContextProvider } from "../../contexts/userContext";

export function Layout() {
    return (
        <UserContextProvider>
            <main>
                <Navbar />

                <section className="body">
                    <Outlet />
                </section>
            </main>
        </UserContextProvider>
    );
}