import React from 'react';

export default class VideoDetail extends React.Component{
		render() {
		const {video} = this.props;
		const videoSrc = video ? `https://youtube.com/embed/${video.id.videoId}?autoplay=1` : '';
		console.log('video URL ', videoSrc);
		return(
			<div>
			{!video ? (
				<div>Loading...</div>) : (
				<div>
				<div className="ui embed">
					{/*<iframe title="video player" src={videoSrc} />*/}
					<object
						// width="420" height="315"
							data={videoSrc}>
					</object>
				</div>
				<div className="ui segment">
					<h4 className="ui header">{video.snippet.title}</h4>
					<p>{video.snippet.description}</p>
				</div>
				</div>)}
			</div>
		);
}
}

VideoDetail.defaultProps = {
	video: ''
}