import { useState, useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { MovieType } from './Home';

const Summary = () => {
    const { movieId = '' } = useParams()
    const [movie, setMovie] = useState<MovieType>()

    useEffect(() => {
        const currMovie = localStorage.getItem(movieId)
        if (currMovie !== null) {
            const reqdMovie = JSON.parse(currMovie)
            setMovie(reqdMovie)
        }
    }, [])

    const renderedHtml = useMemo(() => {
        if (movie?.show.summary) {
            return { __html: movie.show.summary };
        } else {
            return { __html: '' };
        }
    }, [movie?.show.summary]);

    return (
        <div className='container mt-4'>
            <h2>{movie?.show.name}</h2>
            <h5>Summary:</h5>
            <p dangerouslySetInnerHTML={renderedHtml} />
            <Link to={`/book/${movieId}`}>
                <Button className='mt-3' variant="primary">Book the Show</Button>{' '}
            </Link>
        </div>
    )
}

export default Summary