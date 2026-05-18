import { useNavigate } from 'react-router-dom';

export default function EditCreator() {
    const navigate = useNavigate();

    return (<>
        <h1>Main page</h1>
        <button onClick = {() => navigate('/addCreator')}>Add Content Creator</button>
    </>)

}

