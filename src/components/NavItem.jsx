import { Link } from "react-router-dom";

//Here I set up Link ands sends the prop category with NavItem. 
export default function NavItem({category}) {
    return (
        
        <Link to={category}>{category}</Link>
    )
}