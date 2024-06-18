import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "../layout";
import { AppRouteDef } from "./RouteDef.tsx";

const AppPages = () => {
    return (
        <BrowserRouter>
            <Sidebar/>
            <div className="app_container">
                <Routes>
                    { Object.entries({ ...AppRouteDef }).map(([ name, { path, element } ], index) => (
                        <Route
                            key={name + index}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default AppPages;