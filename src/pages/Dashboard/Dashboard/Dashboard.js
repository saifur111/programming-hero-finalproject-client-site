import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import {
    Switch,
    Route,
    Link,
    useRouteMatch 
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../../Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import SiteReview from '../SiteReview/SiteReview';
import PrivateRoute from '../../../pages/Login/PrivateRoute/PrivateRoute';

const drawerWidth = 200;

function Dashboard(props) {
    const { logout ,admin} = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        
        <Box >
            <Toolbar />
            <Toolbar />
            <Link style={{ textDecoration: 'none', color: 'green' }} to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
                <br/>
            {
                admin?<></>:<Box >
                <Link style={{ textDecoration: 'none', color: 'green' }} to={`${url}/manageProducts`}><Button color="inherit">My Orders</Button></Link>
                <br/>
                <Link style={{ textDecoration: 'none', color: 'green' }} to={`${url}/payment`}><Button color="inherit">Payment</Button></Link><br/>
                <Link style={{ textDecoration: 'none', color: 'green' }} to={`${url}/review`}><Button color="inherit">Review</Button></Link>
                
            </Box>

            }
            
            {
                admin &&<Box >
                    <Link style={{ textDecoration: 'none', color: 'green' }} to={`${url}/manageAllProducts`}><Button color="inherit">Manage All Products</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'green' }} to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'green' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                </Box> 
            }
            <Toolbar />
            <Box>
                <Button style={{ textDecoration: 'none', color: 'green' }} onClick={logout} color="inherit">Logout</Button>
                <br/>
                <Link style={{ textDecoration: 'none', color: 'green' }} to="/"><Button color="inherit">Home</Button></Link>
            </Box>
            
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <Box
                
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer 
                
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#0a0c14'  },
                }}
                >
                {drawer}
                </Drawer>
                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#0a0c14' },
                }}
                open
                >
                {drawer}
                </Drawer>
            </Box>
            
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 4, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <PrivateRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/payment`}>
                        <Payment></Payment>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/review`}>
                        <SiteReview></SiteReview>
                    </PrivateRoute>

                    <AdminRoute path={`${path}/manageAllProducts`}>
                        <ManageAllProducts></ManageAllProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
        
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;