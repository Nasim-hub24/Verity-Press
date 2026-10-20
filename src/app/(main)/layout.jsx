
import Hader from "@/components/shared/Hader";
import NavBar from "@/components/shared/NavBar";

const MainLayout = ({children}) => {
    return (
        <>
            <Hader></Hader>
            <NavBar></NavBar>
            {children}
        </>
    );
};

export default MainLayout;