import {CharacterPagination, Characters} from "../components";

const CharactersPage = () => {
    return (
        <div>
            <Characters/>
            <hr/>
            <CharacterPagination/>
        </div>
    );
};

export {CharactersPage};