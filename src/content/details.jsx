import Header from '../header/header'
function app() {
    let student = {
        id : 321000001,
        class : 4,
        section : "A"
    }
  return (
    <div>
        <Header />
        <hr />
        student id: {student.id} <br />
        class :   {student.class} <br />
        section :   {student.section}
    </div>
  )
}

export default app;