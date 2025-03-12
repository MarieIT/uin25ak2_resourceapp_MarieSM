export default function Nav() {
    return (
        <>
        <header>
        <nav>
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
        </nav>
    </header>
    </>
    )
}