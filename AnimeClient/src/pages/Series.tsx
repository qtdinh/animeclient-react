import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/Series';
import { environments } from '../environments/environments';

interface SeriesItem {
    seriesId: number;
    title: string;
    year: number; 
    demographic: string;
    genres: string[];
}

const Series = () => {

    const [series, setSeries] = useState<SeriesItem[]>([]);

    const fetchSeries = async () => {
        try {
            const response = await fetch(environments.API_URL + '/api/series');
            const data = await response.json();
            setSeries(data);
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchSeries();
    }, [])

    return (
        <Wrapper>
            <h1 id="tableLabel">Series</h1>
                {series.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <table className='table table-striped' aria-labelledby="tableLabel">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Demographic</th>
                                <th>Genre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {series.map((seriesItem) => (
                              <tr key={seriesItem.seriesId}>
                                    <td>{ seriesItem.seriesId }</td>
                                    <td>{ seriesItem.title }</td>
                                    <td>{ seriesItem.year }</td>
                                    <td>{ seriesItem.demographic }</td>
                                    <td>
                                        <ul>
                                            {seriesItem.genres.map((genre) => (
                                                <ul>{genre}</ul>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
        </Wrapper>
    )
}

export default Series;