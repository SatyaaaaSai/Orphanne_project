import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";

/**
 *  --Header
 *    -Logo
 *    -NavBar 
 *  --Images
 *     -Sldeshow
 *  --Categories
 *     -Food
 *     -Accesories
 *     -Essentials
 *   
 *  --Footer  
 *    -Links
 *    -Copyrights
 * 
 */

const AppLayout = () => {
    return(
        <div>
            <Header />
        </div>
    );
  
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)