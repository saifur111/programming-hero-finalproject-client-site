import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Navbar from './pages/Shared/Navbar/Navbar';
import Home from './pages/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import Explore from './pages/Explore/Explore';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import UpdateProduct from './pages/Dashboard/AddProduct/UpdateProduct';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router> 
        <Switch>
            <Route exact path="/">
              <Navbar/>
              <Home />
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Navbar/>
              <Home />
              <Footer></Footer>
            </Route>
            <Route path="/purchase/:id">
              <Navbar/>
              <Purchase />
              <Footer></Footer>
            </Route>
            <Route path="/explore">
              <Navbar/>
              <Explore></Explore>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/updateproduct/:id">
              <Navbar/>
              <UpdateProduct></UpdateProduct>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/login">
              <Navbar/>
              <Login />
              <Footer></Footer>
            </Route>
            <Route path="/register">
              <Navbar/>
              <Register />
              <Footer></Footer>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>
        </Switch>
        
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
