import Nav from "./Nav";
import "../styles/Layout.scss"

//Export function Layout with props children and presentCategory. presentCategory is used in Nav. children is used in article and refers to the routes in Layout. 
export default function Layout({ children, presentCategory }) {
    return (
        <>
        <Nav presentCategory={presentCategory}/>
        <main>
            <article>
                {children}
            </article>
        </main>
        </>
    )
}
  