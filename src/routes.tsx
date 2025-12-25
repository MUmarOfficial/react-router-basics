import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import HomePage from "./pages/Home";
import ContactsPage, { contactsLoader } from "./pages/Contacts";
import ContactDetailPge, { contactDetailLoader } from "./pages/ContactDetail";
import NotFoundPage from "./pages/NotFound";
import RootLayout from "./pages/Root";
import ContactNotFound from "./pages/ContactNotFound";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path=""
            element={<RootLayout />}
            errorElement={<NotFoundPage />}
        >
            <Route
                index={true}
                element={<HomePage />}
            />
            <Route
                path="contacts"
                element={<ContactsPage />}
                loader={contactsLoader}
            />
            <Route
                path="contacts/:contactId"
                element={<ContactDetailPge />}
                loader={contactDetailLoader}
                errorElement={<ContactNotFound />}
            />
        </Route>
    )
);

export default appRouter;