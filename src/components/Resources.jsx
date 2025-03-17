import { resources } from "../ressurser-javascript/ressurser";
import PageTitle from "./PageTitle"; 
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Resources({setPresentCategory, isStartPage}) {
    const { category } = useParams(); 

    //Marius Rørmark helped me with the useEffect and how to set this up. He also helped me with the .filter. 
      useEffect(() => 
        typeof category !== "undefined" ? setPresentCategory(category) : setPresentCategory("html") 
      , [category]); 
    const categoryContent = resources.filter(resource => isStartPage ? resource.category === "html" : resource.category === category)

    //Here PageTitle component is used and .map is used. 
    return (
        <>
            <PageTitle category={isStartPage ? "html" : category}/>
            <ul>
                {categoryContent.map((resource, index) => <li key={index}><Link to={resource.url}>{resource.title}</Link></li>)}
            </ul>
        </>
    );
}



