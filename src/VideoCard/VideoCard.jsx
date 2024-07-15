import './VideoCard.css'
import { useState } from 'react'

function VideoCard(props) {
	const { video_title, channel_name, img, video_id, likes } = props
	const [likesCount, setLikesCount] = useState(likes)

	const clickLike = () => {
		setLikesCount(likesCount + 1)
	}

	return (
		<div className='video'>
			<img className='video-img' src={img} alt='reactLogo' />
			<p>key: {video_id}</p>
			<p>title: {video_title}</p>
			<p>author:{channel_name}</p>
			<div className='video-footer'>
				<p>likes: {likesCount}</p>
				<button onClick={clickLike}>Like</button>
			</div>
		</div>
	)
}

export default VideoCard
