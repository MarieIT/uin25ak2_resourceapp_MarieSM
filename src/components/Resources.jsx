import { resources } from "../ressurser-javascript/ressurser";
import PageTitle from "./PageTitle"; 
import { Link } from "react-router-dom";

export default function Resources() {
    return (
        <>
            <PageTitle category={"HTML"}/>
            <ul>
                {resources.map((resource, index) => <li key={index}><Link to={resource.url}>{resource.title}</Link></li>)}
            </ul>
        </>
    );
}



