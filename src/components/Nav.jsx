import { resources } from "../ressurser-javascript/ressurser"
import NavItem from "./NavItem"
import "../styles/Nav.scss"

export default function Nav({presentCategory}) {
    //This code is from Marius Rørmark. I tried to find other solutions, but did not come up with any sufficent ones. 
    const categories = resources.map(resource => resource.category).filter((value, index, self) => self.indexOf(value) === index)
   
    //Here i map out category and uses my NavItem component. 
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