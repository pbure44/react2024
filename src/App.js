import {characters} from "./components/Characters";
import {Character} from "./components/Character";

const App = () => {

    return (
        <div>
            {characters.map(character=><Character character={character} key={character.id}/> )}
        </div>
    );
};

export {App};