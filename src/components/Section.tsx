import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'

import { MovieType } from '../pages/Home'

import reactSvg from '../assets/react.svg'

interface SectionProps {
    movie: MovieType,
    handleSummaryClick: any
}

const Section = ({ movie, handleSummaryClick }: SectionProps) => {
    const { score, show } = movie

    return (
        <div className='movie-section'>
            <div className="section-image">
                {show.image !== null ?
                    <img src={show.image.medium} alt={show.name} /> :
                    <img src={reactSvg} alt={show.name} />
                }
            </div>
            <div className="section-details">
                <h1>{show.name}</h1>

                <div className="fine-details">
                    <h5>
                        Score: {score.toString()} |
                        <AiFillStar /> : {show.rating.average !== null ? show.rating.average : '-'}/10
                    </h5>
                    <h6>
                        {show.genres.map(genre => (
                            <span key={genre} className='genre-span'>{genre}</span>
                        ))}
                        <span className='language-span'>{show.language}</span>
                    </h6>
                </div>

                <div className="button-group">
                    <Link to={`/summary/${show.id}`}>
                        <Button onClick={handleSummaryClick} className='mr-4' variant="primary">Summary</Button>
                    </Link>
                    <Button className='link-button' href={show.officialSite} target='_blank' variant="outline-info">Visit</Button>
                </div>
            </div>
        </div>
    )
}

export default Section