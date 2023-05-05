import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button'

import { MovieType } from './Home';

interface Values {
    movieName: string | undefined,
    language: string | undefined,
    email: string,
    name: string,
    phoneNum: string
}

const Book = () => {
    const { movieId = '' } = useParams()
    const navigate = useNavigate()
    const [movie, setMovie] = useState<MovieType>()

    const [formDetails, setFormDetails] = useState<Values>({
        movieName: '',
        language: '',
        email: '',
        name: '',
        phoneNum: ''
    })

    useEffect(() => {
        const currMovie = localStorage.getItem(movieId)
        if (currMovie !== null) {
            const reqdMovie = JSON.parse(currMovie)
            setMovie(reqdMovie)
        }

        setFormDetails((prevFormDetails) => {
            return {...prevFormDetails, movieName: movie?.show.name, language: movie?.show.language}
        })
    }, [])

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        alert('Show Booked')
        navigate('/')
    }

    return (

        <div>
            <h1>Book the Show</h1>
            <form className='form-container' onSubmit={handleSubmit}>
                <label htmlFor="movieName">Movie Name</label>
                <input id="movieName" name="movieName" value={formDetails.movieName} placeholder="Titanic" />

                <label htmlFor="language">Language</label>
                <input id="language" name="language" value={formDetails.language} placeholder="Language" />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email" value={formDetails.email}
                    placeholder="john@acme.com"
                    type="email"
                />

                <label htmlFor="name">Your Name</label>
                <input
                    id="name"
                    name="name" value={formDetails.name}
                    placeholder="John Doe"
                    type="text"
                />

                <label htmlFor="phoneNum">Phone Number</label>
                <input
                    id="phoneNum"
                    name="phoneNum" value={formDetails.phoneNum}
                    placeholder="987654321"
                    type="tel"
                />

                <Button className='mt-3' style={{ maxWidth: '5rem', margin: 'auto' }} type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Book