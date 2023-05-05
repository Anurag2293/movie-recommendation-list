import { useState, useEffect } from 'react'
import Section from '../components/Section'

export interface MovieType {
	score: Number,
	show: {
		id: number,
		name: string,
		url: string,
		genres: string[],
		language: string,
		rating: {
			average: number
		},
		image: {
			medium: string,
			original: string
		},
		summary: TrustedHTML,
		officialSite: string
	}
}

const Home = () => {
	const [data, setData] = useState<MovieType[]>([])

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			const url: string = `https://api.tvmaze.com/search/shows?q=all`;
			const response: Response = await fetch(url);
			const responseData: MovieType[] = await response.json();

			setData(responseData);
		}

		fetchData();
	}, [])

	const handleClick = (e: Event, movieId: number) => {
		e.NONE
		const requiredMovie = data.filter((movie) => {
			return movie.show.id === movieId
		})[0]

		const saveMovie = JSON.stringify(requiredMovie)
		localStorage.setItem(movieId.toString(), saveMovie)
	}

	return (
		<>
			<h1>The Best Movies to watch...</h1>
			<div className='home-section'>
				{data.length > 0 && data.map(({ score, show }: MovieType) => (
					<Section key={show.id} 
					movie={{score, show}}
					handleSummaryClick={(e: Event) => (handleClick(e, show.id))} 
				/>
				))}
			</div >
		</>
	)
}

export default Home