import { useRouteError } from "react-router";

const NotFound = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const error = useRouteError() as any;

    return (
    <div id="error-page">
        <h1>Oops...</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
    );
};

export default NotFound;