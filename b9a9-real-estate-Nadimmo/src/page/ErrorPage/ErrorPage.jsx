import { Helmet } from "react-helmet";

const ErrorPage = () => {
    return (
        <div>
            <Helmet> <title>Error Page</title></Helmet>
            <h1 className="text-center text-[56px]">404 Not Found</h1>
        </div>
    );
};

export default ErrorPage;