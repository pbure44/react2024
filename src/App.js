import {Character} from "./components/Character";

const App = () => {
   const characters=[
       {
           id:1,
           name:'Homer Simpson',
           img:'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
       },
       {
           id:2,
           name:'Marge Simpson',
           img:'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'
       },
       {
           id:3,
           name:'Bart Simpson',
           img:'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Bart_Simpson_200px.png/170px-Bart_Simpson_200px.png'
       },
       {
           id:4,
           name:'Lisa Simpson',
           img:'https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png'
       },
       {
           id:5,
           name:'Maggie Simpson',
           img:'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/220px-Maggie_Simpson.png'
       }
   ]
    return (
        <div>
            {characters.map(character=><Character character={character} key={character.id}/>)}
        </div>
    );
};

export {App};