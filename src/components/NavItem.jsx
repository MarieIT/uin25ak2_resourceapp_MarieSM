import { Link } from "react-router-dom";

export default function NavItem({category}) {
    return (
        
        <Link to={category}>{category}</Link>
    )
}