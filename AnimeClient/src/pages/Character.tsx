import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/Character';
import { environments } from '../environments/environments';

interface Character {
    characterId: number;
    name: string;
    age: number; 
    gender: string;
    series: string;
}

const Characters = () => {

    const [characters, setCharacters] = useState<Character[]>([]);

    const fetchCharacters = async () => {
        try {
            const response = await fetch(environments.API_URL + '/api/character');
            const data = await response.json();
            setCharacters(data);
        } catch(error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchCharacters();
    }, [])

    return (
        <Wrapper>
            <h1 id="tableLabel">Characters</h1>
                {characters.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <table className='table table-striped' aria-labelledby="tableLabel">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Series</th>
                            </tr>
                        </thead>
                        <tbody>
                            {characters.map((character) => (
                              <tr key={character.characterId}>
                                    <td>{ character.characterId }</td>
                                    <td>{ character.name }</td>
                                    <td>{ character.age }</td>
                                    <td>{ character.gender }</td>
                                    <td>{ character.series }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
        </Wrapper>
    )
}

export default Characters;