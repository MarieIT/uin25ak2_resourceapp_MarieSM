import { useEffect } from "react";
import { resources } from "../ressurser-javascript/ressurser"
import NavItem from "./NavItem"
import { useParams } from "react-router-dom";
import "../styles/Nav.scss"

export default function Nav({presentCategory}) {
    const categories = resources.map(resource => resource.category).filter((value, index, self) => self.indexOf(value) === index)
   
    return (
        <>
        <header>
            <nav>
                <ul>
                    {categories.map((category, index) => 
                        <li className={category === presentCategory ? "currentNav": ""} key={index}>
                            <NavItem category={category}/>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    </>
    )
}