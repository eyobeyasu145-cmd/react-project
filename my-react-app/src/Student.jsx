import PropTypes from 'prop-types'
function Student({name = "Unknown", age = 0, isStudent = false}){
  return(
  
    <div className="Student">
<p> Name: {name} Age : {age} Student : {isStudent ? "Yes" : "No"}</p>

    </div>

   )

}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

export default Student;
