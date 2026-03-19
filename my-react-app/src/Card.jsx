import profile from './assets/batch.jpg'
function Card() {
    return (
        <div className="card">
            <img className="image" src={profile} alt="my profile" />
            <h2 className="title">Batch of Student</h2>
            <p className="description">I am post new exam and material for dire dawa university</p>
            <button className="button">view project</button>
        </div>
    )
}

export default Card