import { Fragment } from "react";
import MainMenu from "../../components/Perusahaan/MenuCompany/MainMenu";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Fragments/Dashboard/Navbar";


const DashboardCompany = () => {
    return (
        <Fragment>
          <header className="fixed w-full shadow-lg bg-blue-100 z-[2]">
            <Navbar />
          </header>
          <main className="flex">
            <aside className="bg-blue-500 h-screen pt-20 p-5 sticky top-0">
              <MainMenu />
            </aside>
            <section className="w-full">
              <Outlet />
            </section>
          </main>
        </Fragment>
      );
    }


export default DashboardCompany