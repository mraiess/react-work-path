function app() {
    let info = {
        "Roll": 125,
        "Acadeemic Year": 2020,
        "Gender": "Male",
        "Religion": "group",
        "Blood": "B+"
    }
    return (
        <div>
            <table border="1" cellPadding="8" style={{ "border-collapse": "collapse" }} >
                <thead>
                    <h1> ▣ Genral Information</h1>
                </thead>
                <tbody>
                    {
                        Object.entries(info).map(([key, value]) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td> : </td>
                                <td>{value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}
export default app;