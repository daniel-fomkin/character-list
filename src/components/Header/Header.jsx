import './Header.css'

export default function Header({ title }){
    return(
        <header>
            <span>{title}</span>
            <ul>
                <li>Character List</li>
                <li>New Character</li>
                <li>Your Characters</li>
            </ul>
        </header>
    )
}