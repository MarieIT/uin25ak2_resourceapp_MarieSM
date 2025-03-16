import Layout from "./Layout"

export default function Nav() {
    const {category} = useParams(); 
    console.log(category)
   
    return (
        <>
        <header>
            <nav>
                <Layout/>
                <button>
                    {category}
                </button>
            </nav>
        </header>

        <Link to="/">Hjem</Link>
          <Link to="bosses">Bosses</Link>
          <Link to="characters">Characters</Link>
          <Link to="items">Items</Link>
          <Link to="places">Places</Link>
           
           <ul>
                <li>
                    <button onclick = "articleCardChange('HTML')">
                        HTML
                    </button>
                </li>
                <li>
                    <button onclick = "articleCardChange('CSS')">
                        CSS
                    </button>
                </li>
                <li>
                    <button onclick = "articleCardChange('JavaScript')">
                        JavaScript
                    </button>
                </li>
                <li>
                    <button onclick = "articleCardChange('React')">
                        React
                    </button>
                </li>
                <li>
                    <button onclick = "articleCardChange('Sanity and headless CMS')">
                        Sanity and headless CMS 
                    </button>
                </li>
            </ul>
    </>
    )
}