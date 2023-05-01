import React from "react";

import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";

const routes = [
    {
        path: "/",
        exact: true,
        component: () => <Homepage />
    },
    {
        path: "/aboutpage",
        exact: true,
        component: () => <Aboutpage />
    },
];

export default routes;