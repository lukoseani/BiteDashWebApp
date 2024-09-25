import React from 'react';
import {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {IMG_CDN_URL} from './constants';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import ProfileClass from './components/ProfileClass';
import {Shimmer} from './components/Shimmer';

const Instamart = lazy(()=>import('./components/Instamart'));


const AppLayout = ()=>{
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
                children:[
                    {
                        path:"profile",
                        element:<ProfileClass/>
                    }
                ]
            },
            {
                path:'/contact',
                element:<Contact/>
            },{
                path:'restaurant/:id',
                element:<RestaurantMenu/>
            },
            {
                path:'/instamart',
                element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
            }
        ]

    }
])


const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);