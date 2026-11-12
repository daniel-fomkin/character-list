import characters from "../../data/characters"
import CharacterCard from "../CharacterCard/CharacterCard"
import './CharacterCardDeck.css'

export default function CharacterCardDeck(){
    return(
        <main className="card-deck">
            {/* {characters.map(character => 
                <CharacterCard 
                    key={`${character.name}-${character.age}-${character.age}`}
                    name={character.name}
                    age={character.age}
                    job={character.job}
                    img={character.img}
                />
            )}  */}


            <CharacterCard 
                name={characters[0].name} 
                age={characters[0].age}
                job={characters[0].job}
                img={characters[0].img}
            />

            <CharacterCard 
                name={characters[1].name} 
                age={characters[1].age}
                job={characters[1].job}
                img={characters[1].img}
            />

            <CharacterCard 
                name={characters[2].name} 
                age={characters[2].age}
                job={characters[2].job}
                img={characters[2].img}
            />

            <CharacterCard 
                name={characters[3].name} 
                age={characters[3].age}
                job={characters[3].job}
                img={characters[3].img}
            />

            <CharacterCard 
                name={characters[4].name} 
                age={characters[4].age}
                job={characters[4].job}
                img={characters[4].img}
            />

            <CharacterCard 
                name={characters[5].name} 
                age={characters[5].age}
                job={characters[5].job}
                img={characters[5].img}
            />
        </main>
    )
}