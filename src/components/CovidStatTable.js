
const CovidStatTable = ({data})=>{
    return (
        <div className="table-container">
        <table className="table">
            <tr>
                <th>State</th>
                <th>Confirmed Cases</th>
                <th>Cases On Admission</th>
                <th>Discharged</th>
                <th>Death</th>
            </tr>
            <tbody>
            {data?.map((dt)=>(
                <tr key={dt?._id}>
                    <td>{dt?.state}</td>
                    <td>{dt?.confirmedCases}</td>
                    <td>{dt?.casesOnAdmission}</td>
                    <td>{dt?.discharged}</td>
                    <td>{dt?.death}</td>
                </tr>
                )
            )}
            </tbody>
        </table>
        </div>
    )
}

export default CovidStatTable;