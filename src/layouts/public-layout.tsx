import { Outlet } from "react-router-dom";
import Footer  from "@/components/footer";
import Header from "@/components/header";
import AuthHanlder from "@/handlers/auth-handler";


export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}

    
      <Header />
        <AuthHanlder />
      <Outlet />

      <Footer />
     
    </div>
  );
};