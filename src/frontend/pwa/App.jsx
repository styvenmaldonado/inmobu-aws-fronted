import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './containers/Login.jsx'
import Blog from './containers/Blog.jsx'
import Search from './containers/Search.jsx'
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index'


const store = createStore(reducers,{});
const history = createBrowserHistory();


const App = () => {
    return (
 
        <Provider store={store}>
            <Router history={history}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/co/login" component={Login} />
                        <Route path="/co/blog" component={Blog} />
                        <Route path="/co/search" component={Search} />
                    </Switch>
                </BrowserRouter>
            </Router>
        </Provider>

 
    )
}

export default App;