import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button'

interface Values {
    movieName: string,
    language: string,
    email: string,
    name: string,
    phoneNum: string
}

const Book = () => {
    const { movieId = '' } = useParams()
    const navigate = useNavigate()

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

            setFormDetails((prevFormDetails) => {
                return {...prevFormDetails, movieName: reqdMovie?.show.name, language: reqdMovie?.show.language}
            })
        }        
    }, [])

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        navigate('/')
        alert('Show Booked')
    }

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormDetails((prevFormDetails) => {
            return {...prevFormDetails, [e.target.name]: e.target.value}
        })
    }

    return (

        <div>
            <h1>Book the Show</h1>
            <form className='form-container' onSubmit={handleSubmit}>
                <label htmlFor="movieName" className='form-input-label mt-2'>Movie Name</label>
                <input 
                    id="movieName" 
                    name="movieName" 
                    value={formDetails.movieName} 
                    placeholder="Titanic"
                    onChange={onChange}
                    className='form-input-box' 
                />

                <label htmlFor="language" className='form-input-label mt-2'>Language</label>
                <input 
                    id="language" 
                    name="language" 
                    value={formDetails.language} 
                    placeholder="Language"
                    onChange={onChange}
                    className='form-input-box' 
                />

                <label htmlFor="email" className='form-input-label mt-2'>Email</label>
                <input
                    id="email"
                    name="email" value={formDetails.email}
                    placeholder="john@acme.com"
                    type="email"
                    onChange={onChange}
                    className='form-input-box'
                />

                <label htmlFor="name" className='form-input-label mt-2'>Your Name</label>
                <input
                    id="name"
                    name="name" value={formDetails.name}
                    placeholder="John Doe"
                    type="text"
                    onChange={onChange}
                    className='form-input-box'
                />

                <label htmlFor="phoneNum" className='form-input-label mt-2'>Phone Number</label>
                <input
                    id="phoneNum"
                    name="phoneNum" value={formDetails.phoneNum}
                    placeholder="987654321"
                    type="tel"
                    onChange={onChange}
                    className='form-input-box'
                />

                <Button className='mt-3' style={{ maxWidth: '5rem', margin: 'auto' }} type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Book