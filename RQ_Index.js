import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { TwitterButton } from 'react-social-buttons';

let quotes = ['You can do anything, but not everything.\n-David Allen',
'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.\n-Antoine de Saint-Exupéry',
'The richest man is not he who has the most, but he who needs the least.\n-Unknown Author',
'You miss percent of the shots you never take.\n-Wayne Gretzky',
'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.\n-Ambrose Redmoon',
'You must be the change you wish to see in the world.\n-Gandhi',
'When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.\n-Lin-Chi',
'The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.\n-A. A. Milne',
'To the man who only has a hammer, everything he encounters begins to look like a nail.\n-Abraham Maslow',
'We are what we repeatedly do; excellence, then, is not an act but a habit.\n-Aristotle',
'A wise man gets more use from his enemies than a fool from his friends.\n-Baltasar Gracian',
'Do not seek to follow in the footsteps of the men of old; seek what they sought.\n-Basho',
'Watch your thoughts; they become words.',
'Watch your words; they become actions.',
'Watch your actions; they become habits.',
'Watch your habits; they become character.',
'Watch your character; it becomes your destiny.\n-Lao-Tze',
'Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.\n-Georg Christoph Lichtenberg',
'What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.\n-John Ruskin',
'The real voyage of discovery consists not in seeking new lands but seeing with new eyes.\n-Marcel Proust',
'Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching\n-Unknown Author',
'Try a thing you haven’t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not.\n-Virgil Garnett Thomson',
'Even if you’re on the right track, you’ll get run over if you just sit there.\n-Will Rogers',
'People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.\n-Zig Ziglar',
'Funny Quotes',
'Before I got married I had six theories about bringing up children; now I have six children and no theories.\n-John Wilmot',
'What the world needs is more geniuses with humility, there are so few of us left.\n-Oscar Levant',
'Always forgive your enemies; nothing annoys them so much.\n-Oscar Wilde',
'I’ve gone into hundreds of [fortune-teller’s parlors], and have been told thousands of things, but nobody ever told me I was a policewoman getting ready to arrest her.\n-New York City detective',
'When you go into court you are putting your fate into the hands of twelve people who weren’t smart enough to get out of jury duty.\n-Norm Crosby',
'Those who believe in telekinetics, raise my hand.\n-Kurt Vonnegut',
'Just the fact that some geniuses were laughed at does not imply that all who are laughed at are geniuses. They laughed at Columbus, they laughed at Fulton, they laughed at the Wright brothers. But they also laughed at Bozo the Clown.\n-Carl Sagan',
'My pessimism extends to the point of even suspecting the sincerity of the pessimists.\n-Jean Rostand',
'Sometimes I worry about being a success in a mediocre world.\n-Lily Tomlin',
'I quit therapy because my analyst was trying to help me behind my back.\n-Richard Lewis',
'We’ve heard that a million monkeys at a million keyboards could produce the complete works of Shakespeare; now, thanks to the Internet, we know that is not true.\n-Robert Wilensky',
'If there are no stupid questions, then what kind of questions do stupid people ask? Do they get smart just in time to ask questions?\n-Scott Adams',
'If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.\n-Anon',
'When I was a boy I was told that anybody could become President. Now I’m beginning to believe it.\n-Clarence Darrow',
'Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.\n-Cullen Hightower',
'There are many who dare not kill themselves for fear of what the neighbors will say.\n-Cyril Connolly',
'There’s so much comedy on television. Does that cause comedy in the streets?\n-Dick Cavett',
'All men are frauds. The only difference between them is that some admit it. I myself deny it.\n-H. L. Mencken',
'I don’t mind what Congress does, as long as they don’t do it in the streets and frighten the horses.\n-Victor Hugo',
'I took a speed reading course and read ‘War and Peace’ in twenty minutes. It involves Russia.\n-Woody Allen',
'Otherwise Intelligent Quotes',
'The person who reads too much and uses his brain too little will fall into lazy habits of thinking.\n-Albert Einstein',
'Believe those who are seeking the truth. Doubt those who find it.\n-André Gide',
'It is the mark of an educated mind to be able to entertain a thought without accepting it.\n-Aristotle',
'I’d rather live with a good question than a bad answer.\n-Aryeh Frimer',
'We learn something every day, and lots of times it’s that what we learned the day before was wrong.\n-Bill Vaughan',
'I have made this letter longer than usual because I lack the time to make it shorter.\n-Blaise Pascal',
'Don’t ever wrestle with a pig. You’ll both get dirty, but the pig will enjoy it.\n-Cale Yarborough',
'An inventor is simply a fellow who doesn’t take his education too seriously.\n-Charles F. Kettering',
'Asking a working writer what he thinks about critics is like asking a lamppost how it feels about dogs.\n-Christopher Hampton',
'Better to write for yourself and have no public, than to write for the public and have no self.\n-Cyril Connolly',
'Never be afraid to laugh at yourself, after all, you could be missing out on the joke of the century.\n-Dame Edna Everage',
'I am patient with stupidity but not with those who are proud of it.\n-Edith Sitwell',
'Normal is getting dressed in clothes that you buy for work and driving through traffic in a car that you are still paying for – in order to get to the job you need to pay for the clothes and the car, and the house you leave vacant all day so you can afford to live in it.\n-Ellen Goodman',
'The cure for boredom is curiosity. There is no cure for curiosity.\n-Ellen Parr',
'Advice is what we ask for when we already know the answer but wish we didn’t.\n-Erica Jong',
'Some people like my advice so much that they frame it upon the wall instead of using it.\n-Gordon R. Dickson',
'The trouble with the rat race is that even if you win, you’re still a rat.\n-Lily Tomlin',
'Never ascribe to malice, that which can be explained by incompetence.\n-Napoleon (Hanlon’s Razor)',
'Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.\n-Oscar Wilde',
'When a person can no longer laugh at himself, it is time for others to laugh at him.\n-Thomas Szasz'];

let newQuote = {
    content: ''
};

function fetchQuotes() {
    const min = 0;
    const max = quotes.length - 1; //for index not to go out of range
    var randomNumberWithinListSize = Math.floor(Math.random() * (max - min + 1)) + min;
    const quote = quotes[randomNumberWithinListSize];
    newQuote.content = quote;
    $('#quote-content').html(quote);
    $('#tweet-button-id').html(
        '<a target="_blank" href="https://twitter.com/share?hashtags=InspirationalQuote&text='+quote+'">Tweet</a>'
    );
}
// create quote component
class QuoteComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: props.Quote.content
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount() {
        /*const script = document.createElement("script");

        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;

        document.body.appendChild(script);*/
        //get random quote
        const min = 0;
        const max = quotes.length - 1; //for index not to go out of range
        var randomNumberWithinListSize = Math.floor(Math.random() * (max - min + 1)) + min;;
        this.setState({  
            content: newQuote.content//quotes[randomNumberWithinListSize]
        });
        $('#tweet-button-id').html(
        '<a target="_blank" href="https://twitter.com/share?hashtags=InspirationalQuote&text='+newQuote.content+'">Tweet</a>'
        );
    }

    render(){
        return(
            <div className="card-block">
                <h3 id="quote-content" className="card-title">{this.state.content}</h3> 
                <div className="d-flex justify-content-start mt-3">
                    <button id="tweet-button-id" className="btn btn-link">Tweet</button>
                    <button id="new-quote-button" onClick={fetchQuotes} className="btn btn-primary ml-auto">New Quote</button>
                </div>
            </div>
        )
    }

}

fetchQuotes();
// put quote component into html page
ReactDOM.render(
    <QuoteComponent Quote={newQuote} />, 
    document.getElementById('quote-container')
);




