import {RouteProps} from "react-router-dom";
import MainPage from "pages/MainPage/ui/MainPage";
import AboutPage from "pages/AboutPAge/ui/AboutPage";

export enum AppRoutes {
    ABOUT = 'about',
    MAIN = 'main'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage/>
    }
}