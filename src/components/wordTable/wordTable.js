import { useEffect } from "react";

/* routing */
import { useNavigate } from "react-router-dom";

/* styling */
import './wordTable.css'

function WordTable(props) {
    
    const navigate = useNavigate();

    useEffect(() => {
        if(!props.word){
            navigate("/")
        }
    }, [props.word])

    return (
        <>
            {props.word && <table id="word-table">
                <tbody>
                    {props.word.split("").map((letter, i) =>
                        <tr key={i}>
                            {Array(i).fill(i).map((i, j) => <td key={`${i}${j}`}></td>)}
                            <td>{letter}</td>
                        </tr>
                    )}
                </tbody>
            </table>}
            <button onClick={() => navigate('/')} id="back-button">Back</button>
        </>
    )
}
export default WordTable;