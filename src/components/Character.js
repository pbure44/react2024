const Character = ({character}) => {
    console.log(character);
    const {name, img} = character;
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
        </div>
    );
};

export {Character};