import { useNavigate } from 'react-router-dom';

export default function EditCreator() {
    const navigate = useNavigate();

    return (<>
        <h1>Welcome to Creatorverse</h1>
        <button onClick = {() => navigate('/addCreator')}>Add Content Creator</button>
        <button onClick = {() => navigate('/showCreators')}>Show Content Creators</button>
    </>)

}

