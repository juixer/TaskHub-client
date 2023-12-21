import { Helmet } from "react-helmet-async";

const UseHelmet = ({title}) => {
    return (
        <>
            <Helmet><title>My TodoHub | {title}</title></Helmet>
        </>
    );
};

export default UseHelmet;