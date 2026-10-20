
import BreakingNews from "@/components/shared/BreakingNews";
import Hader from "@/components/shared/Hader";
import NavBar from "@/components/shared/NavBar";

const MainLayout = ({children}) => {
    return (
        <>
            <Hader></Hader>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            {children}
        </>
    );
};

export default MainLayout;