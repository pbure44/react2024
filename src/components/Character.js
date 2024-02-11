const Character = ({character}) => {
    console.log(character);
    const {name, status, species, gender, image, origin, location} = character;
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <ul>
                <li>Species: {species}</li>
                <li>Gender: {gender}</li>
                <li>Status: {status}</li>
                <li>Origin: {origin.name}</li>
                <li>Location: {location.name}</li>
            </ul>
            <p>Episodes:</p>

            {/*{episodes.forEach(episode => {*/}
            {/*    console.log(episode)*/}
            {/*    // <p>{episode}</p>*/}

            {/*}*/}
            {/*)}*/}

        </div>
    );
};

export {Character};
