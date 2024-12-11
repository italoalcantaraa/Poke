import './style.css';

import axios from 'axios';
import notImage from '../../assets/images/not-image.png';
import { useEffect, useState } from 'react';

export default function Pokemons({ name, index }) {

    const [type, setType] = useState('');
    const [image, setImage] = useState('');

    async function characterData() {
        let url = `https://pokeapi.co/api/v2/pokemon/${index}/`;

        let response = await axios.get(url);
        let types = response.data.types;

        setImage(response.data.sprites.front_default);
        setType(types[0].type.name);

    }

    useEffect(() => {
        characterData();
    }, []);

    useEffect(() => {

    }, [type, image]);

    return (
        <>
            <div className="Pokemons">
                <img src={image != ''
                    ? image
                    : notImage} />
                <p>{name}</p>
                {
                    <p>{type != ''
                        ? type
                        : 'Não encontrado'
                    }</p>
                }
            </div>
        </>
    );
}