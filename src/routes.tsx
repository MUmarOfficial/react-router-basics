import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import HomePage from "./pages/Home";
import ContactsPage from "./pages/Contacts";
import ContactDetailPge from "./pages/ContactDetail";
import NotFoundPage from "./pages/NotFound";
import RootLayout from "./pages/Root";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path=""
            element={<RootLayout />}
            errorElement={<NotFoundPage />}
        >
            <Route
                path=""
                element={<HomePage />}
            />
            <Route
                path="contacts"
                element={<ContactsPage />}
            />
            <Route
                path="contacts/:contactId"
                element={<ContactDetailPge />}
            />
        </Route>
    )
);

export default appRouter;