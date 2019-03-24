import React from 'react';

export default class Tweet extends React.Component{
    render(){
        return(
            <div className="tweet">
                <ShowTweet linkAvatar={this.props.link} name={this.props.name}
                userName={this.props.username}
                tweetText={this.props.content} />
                <TweetAction />
                <Stats />
            </div>
        );
    }
}