
/* routing */
import { useNavigate } from 'react-router-dom';

function WordInput(props) {

    const navigate = useNavigate();

    return (
        <>
            
            <input onChange={(e) => props.setWord(e.target.value)}></input>
            <button onClick={() => navigate('/table')}>Go</button>
        </>
    )
}
export default WordInput;