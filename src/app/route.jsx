import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../pages/404';
import MainPage from '../pages/main';
import PrivacyPolicy from '../pages/privacyPolicy';
import TermsConditions from '../pages/termsConditons';

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/terms-conditions" component={TermsConditions} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;
