import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {videos: [], selectedVideo: ''};

    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        }).then((response) => {
            console.log('first video details ', response.data.items[0])
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            });
        })

    };

    onVideoSelect = (video) => {
        console.log('selected video   ', video)
        this.setState({selectedVideo: video});
    };


    render() {
        return (
            <div className="ui container">

                <SearchBar callMeWhenSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;