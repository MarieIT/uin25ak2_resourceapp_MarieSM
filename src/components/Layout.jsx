import Resources from "./Resources";
import Nav from "./Nav";
import "../styles/Layout.scss"

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
  