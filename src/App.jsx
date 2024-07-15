import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoCard from './VideoCard/VideoCard'
import { VIDEOS } from './video'

function App() {
	return (
		<>
			<div className='video-container'>
				{VIDEOS.map(video => (
					<VideoCard
						key={video.id}
            video_id={video.id}
						video_title={video.title}
						channel_name={video.channel_name}
						img={video.img}
            likes={video.likes}
					/>
				))}
			</div>
		</>
	)
}

export default App
