import './style.css';

import axios from 'axios';
import notImage from '../../assets/images/not-image.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Pokemons({ name, index }) {

    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [responseData, setResponseData] = useState([{}]);
    const navig = useNavigate();

    async function characterData() {
        let url = `https://pokeapi.co/api/v2/pokemon/${index}/`;

        let response = await axios.get(url);

        let types = response.data.types;

        setResponseData(response.data);
        setImage(response.data.sprites.front_default);
        setType(types[0].type.name);
    }

    const redirect = () => {
         navig(`/pokemon?type=${type}&image=${image}`, {state: responseData});
    }

    useEffect(() => {
        characterData();
    }, []);

    useEffect(() => {

    }, [type, image, responseData]);

    return (
        <>
            <div className="Pokemons" onClick={redirect}>
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