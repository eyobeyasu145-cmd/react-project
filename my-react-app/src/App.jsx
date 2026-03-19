import Student from './Student.jsx'
import './index.css'

function App() {
  return (
    <> 
    
      <Student name="John" age={25} isStudent={true} />

   <Student name= "Eyob" age = {23} isStudent={true}/>
   <Student name = "Ephirem" age = {25} isStudent = {false}/>
   <Student name="Ali" age={20} isStudent={true} />
<Student name="Sara" age={22} isStudent={false} />
    <Student name='rel'></Student>
</>














   
    )
}

export default App
