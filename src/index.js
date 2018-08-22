import _  from 'lodash';
import React ,{Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details'
const API_KEY = 'AIzaSyAJ6PwWB8BTqw2tO_R5JoRB13WWVeXomc4';

class  App extends Component   {
    constructor (props) {
       super(props) 

       this.state = { 
           videos: [],
           selectedVideo: null
         };

      this.videoSearch('surfboards')
    
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term},(video) =>{
            this.setState({
                videos: video ,
                selectedVideo : video[0]
            });
            //In ES6 we can also call as this.setState({video })
        });
    }

    render(){
        const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300);
        return (<div>
            <SearchBar  onSearchTermChange={videoSearch} />
            <VideoDetails video={this.state.selectedVideo}  />
            <VideoList 
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos ={ this.state.videos} />
            
        </div>)
    }
    
}

ReactDom.render(<App />, document.querySelector('.container'));