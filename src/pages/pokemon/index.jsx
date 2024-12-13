import './style.css';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Pokemon() {
    const [statsValues, setStatsValues] = useState([{}]);
    const [hp, setHp] = useState(0);
    const [attack, setAttack] = useState(0);
    const [defense, setDefense] = useState(0);
    const [specialAttack, setSpecialAttack] = useState(0);
    const [specialDefense, setSpecialDefense] = useState(0);
    const [speed, setSpeed] = useState(0);

    const location = useLocation();
    const { stats, name, id } = location.state;
    const params = new URLSearchParams(location.search);

    useEffect(() => {
        if (stats) {
            setStatsValues(stats);
        }
    }, [stats])

    const includePercentage = () => {

        if (statsValues.length > 5) {
            setHp(parseInt((statsValues[0].base_stat / 255) * 100));
            setAttack(parseInt((statsValues[1].base_stat / 255) * 100));
            setDefense(parseInt((statsValues[2].base_stat / 255) * 100));
            setSpecialAttack(parseInt((statsValues[3].base_stat / 255) * 100));
            setSpecialDefense(parseInt((statsValues[4].base_stat / 255) * 100));
            setSpeed(parseInt((statsValues[5].base_stat / 255) * 100));
        }
    }

    useEffect(() => {
        includePercentage();
    }, [statsValues])


    return (
        <>
            <div className="Pokemon">
                <div>
                    <p>ID: {id}</p>
                    <img src={params.get('image')} />
                    <h1>{name}</h1>
                    <p id='power'>{params.get('type')}</p>
                </div>

                <div>
                    <p>Status Base</p>
                    <div className='hp'>
                        <div style={{ width: `${hp}%` }}><p>HP</p></div>
                    </div>
                    <div className='attack'>
                        <div style={{ width: `${attack}%` }}><p>attack</p></div>
                    </div>
                    <div className='defense'>
                        <div style={{ width: `${defense}%` }}><p>defense</p></div>
                    </div>
                    <div className='special-attack'>
                        <div style={{ width: `${specialAttack}%` }}><p>special-attack</p></div>
                    </div>
                    <div className='special-defense'>
                        <div style={{ width: `${specialDefense}%` }}><p>special-defense</p></div>
                    </div>
                    <div className='speed'>
                        <div style={{ width: `${speed}%` }}><p>speed</p></div>
                    </div>
                </div>
            </div>
        </>
    );
}