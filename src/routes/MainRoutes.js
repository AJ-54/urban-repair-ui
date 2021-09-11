import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// homnee routing
const Home = Loadable(lazy(() => import('../views/home')));

// utilities routing
const UtilsMaps = Loadable(lazy(() => import('../views/maps')));
const UtilitiesMessenger = Loadable(lazy(() => import('../views/messenger')));
const UtilitiesSearch = Loadable(lazy(() => import('../views/search')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={[
                '/home',
                '/utils/maps',
                '/utils/chat',
                '/utils/search',
                '/docs',
                '/'
            ]}
        >
            <MainLayout>
                <Switch location={location} key={location.pathname}>
                    <Route path="/home" component={Home} />
                    <Route path="/utils/maps" component={UtilsMaps} />
                    <Route path="/utils/chat" component={UtilitiesMessenger} />
                    <Route path="/utils/search" component={UtilitiesSearch} />
                    <Route path="/docs" component={SamplePage} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
