import {Character} from "./components/Character";

const App = () => {
    const characters=[
        {
            id:1,
            name:'Рік Санчес',
            img:'https://www.giantbomb.com/a/uploads/scale_small/46/462814/3182807-4063063699-latest'
        },
        {
            id:2,
            name: 'Морті Сміт',
            img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c3/Morty_Smith.png/129px-Morty_Smith.png'
        },
        {
            id:3,
            name:'Джері Сміт',
            img:'https://cdn.meta.ua/meta_news/ca/01000mwn-ca2a_1280x720.png'
        }
    ]
    return (
        <div>
            {characters.map(character=><Character character={character} key={character.id}/>)}
        </div>
    );
};

export {App};