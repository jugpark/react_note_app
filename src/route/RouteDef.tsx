import {AllNotes, ArchiveNotes, ErrorPage, TagNotes, TrashNotes} from "../pages"
import {Navigate} from "react-router-dom";


const MainScreens = {
    AllNotes: {
        path: '/',
        element: <AllNotes/>,
    },
    Archive: {
        path: '/archive',
        element: <ArchiveNotes/>,
    },
    TrashNotes: {
        path: '/trash',
        element: <TrashNotes/>,
    },
    TagNotes: {
        path: '/tag/:name',
        element: <TagNotes/>,
    },
    Error: {
        path: '/404',
        element: <ErrorPage/>,
    },
    Else: {
        path: '/*',
        element: <Navigate to={"/404"}/>,
    },

};


export const AppRouteDef = {
    ...MainScreens
};