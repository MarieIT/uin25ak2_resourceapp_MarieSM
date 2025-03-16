import Resources from "./Resources";

export default function Layout({ children }) {
    return (
        <>
        <main>
            <article>
                {children}
            </article>
        </main>
        </>
    )
}
  