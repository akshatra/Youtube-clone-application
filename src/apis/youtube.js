import axios from 'axios';

const KEY="AIzaSyAvxBXnUkIKh8nV1ZqxYsW5XJT7-a3T9Go";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY,		
	}
});
