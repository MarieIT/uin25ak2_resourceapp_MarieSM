//Here I sends the category prop with PageTitle and uses it in the h2 tag. 
export default function PageTitle({category}) {
    return (
        <h2>
            {category}
        </h2>
    ); 
}