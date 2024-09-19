import { Outlet } from "react-router-dom";
import Nav from "@/components/menu/index";
import Footer from "@/components/menu/footer";

const BaseLayout = () => {
    return (
        <>
            <Nav />
            {/* <MomentumScroll> */}
                <main>
                <Outlet />
            </main>
            {/* </MomentumScroll> */}
            <Footer />
        </>
    );
};

export default BaseLayout;


