import { useNavigate } from 'react-router-dom';

export default function EditCreator() {
    const navigate = useNavigate();

    return (<>
        <h1>Welcome to Creatorverse</h1>
        <br></br>
        <br></br>
        <button style={{padding: '15px 32px'}} onClick = {() => navigate('/addCreator')}>Add Content Creator</button>
        <button style = {{padding: '15px 32px'}} onClick = {() => navigate('/showCreators')}>Show Content Creators</button>
    </>)

}

