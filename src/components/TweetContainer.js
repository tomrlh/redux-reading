import React from 'react';
import Tweet from './Tweet'

export default class TweetContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tweetData:{}
        }
        this.listweet = [];
    }

    componentDidMount(){

        fetch('http://localhost:5000/tweet')
        .then(function(response) {
            return response.json();
        })
        .then(result=>{
            this.setState({
                tweetData: result
            }, ()=>console.log(this.state.tweetData));
        });
    }

    componentDidUpdate(){
        this.listweet =  this.state.tweetData.data.slice(1,6).map( (tw,idx)=>{
            return (
                <Tweet
                        key={idx}
                        linkAvatar={'/image/jennyshen.jpg'}
                        name={"Vuongxuan"}
                        userName={'@vuggg'}
                        tweetText={tw.content} />
            )
        });
        console.log(this.listweet)
    }

    render(){
        console.log(this.listweet);
        return(
            <div id="main">
                <h2>Tweet</h2>
                <div id="stream">
                    {this.listweet}
                </div>
            </div>
        );
    }
}