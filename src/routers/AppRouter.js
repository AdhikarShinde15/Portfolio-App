import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import PortfolioPage from "../components/PortfolioPage";
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import One from "../components/One";

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
    <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/portfolio" component={PortfolioPage} exact={true}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/portfolio/:id" component={One} />
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
   </BrowserRouter>    
);

export default AppRouter;