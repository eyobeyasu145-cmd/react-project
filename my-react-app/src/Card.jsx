import profilePic from './assets/batch.jpg' 
function Card(){
return(
  <div className="card">
    <img className='card-image' src={profilePic} alt="profile picture" />
    <h2 className='card-title'>Batch of student</h2>
    <p className='card-text'>I post exam and some short note for students </p>
  </div>
)

}
export default Card;