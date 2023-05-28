//parent component
import PresidentTable from "./PresidentTable"
import { presidentsArray } from "./presidents.constant"


export default function Presidents() {
    // Build a function that can filter through the array to check for which have an undefined passed date.
    function notDead() {
        const [filteredPresidents, setFilteredPresidents] = useState(presid)
        return (
          <div className="App">
            <ul>
              {filteredEmployees.map(employee => {
                const { name, experience, department, id } = employee
                return (
                  <li key={id}>
                    <div>
                      Name: <strong>{name}</strong>
                    </div>
                    <div>Experience: {experience} year(s)</div>
                    <div>Department: {department}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      }
  return (
    <>
        <h2>Hello from Presidents component</h2>
        {/* One pres table of living */}
        <PresidentTable/>
        {/* One pres table of dead */}
    </>
  )
}
