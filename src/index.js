import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Create a new component.  This component should produce some HTML
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('undertale hopes and dreams');
  }

  videoSearch(term) {
    YTSearch({ key: process.env.GOOGLE_API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo =>
            this.setState({ selectedVideo: selectedVideo })
          }
        />
      </div>
    );
  }
}

// Take this component's generated HTML and display it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
