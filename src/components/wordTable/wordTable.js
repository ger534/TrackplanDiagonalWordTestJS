
function WordTable(props) {

    return (
        <>
            <h1>{props.word}</h1>

            <table style={{ display: "flex", justifyContent: "center" }}>
                <tbody>
                    {props.word.split("").map((letter, i) =>
                        <tr key={i}>
                            {Array(i).fill(i).map((i) => <td></td>)}
                            <td>{letter}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
export default WordTable;