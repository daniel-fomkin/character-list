import './CharacterCard.css'

export default function CharacterCard({ name, age, job, img }){
    return(
        <div className="character-card">
            <img src={img} />
            <h3>{name}</h3>
            <p>Age: <span>{age}</span></p>
            <p>Role: <span>{job}</span></p>
        </div>
    )
}