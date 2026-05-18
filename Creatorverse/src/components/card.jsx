export default function ContentCreator({name, URL, description, image}){

  
    return (
        <div>
            <h1>{name}</h1>
            <a href= {URL}> Link to Creator's page</a>
            <p>{description}</p>
            <img src = {image} />
        </div>
    )

}