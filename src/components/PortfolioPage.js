import React from "react";
import { Link } from "react-router-dom";
const PortfolioPage = () => (
    <div>
       <h1>Portfilio Page</h1>
       <Link to="/portfolio/1">One</Link><br/>
      <Link to="/portfolio/2">Two</Link><br/>  
    </div>
);

export default PortfolioPage;