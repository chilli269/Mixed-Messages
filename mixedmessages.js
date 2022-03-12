const nouns=['after', 'birth', 'glow', 'aircraft', 'backpack', 'anyone', 'arrowhead',
'backspin', 'stop', 'sign', 'below', 'bellbottom', 'blueberries', 'top', 'bodygurad',
'park', 'track', 'mum', 'dad', 'Jack', 'Mike', 'Robin', 'Alex', 'He', 'She', 'Her', 
'blabla', 'is', 'eat', 'drink', 'talk', 'say', 'want', 'need', 'play', 'let', 'go', 'drive' ];
const numOfWords=()=>{
    let a=Math.floor(Math.random()*10);
    return a;
}
const createMessage=now=>{
    if(now>0){
        let sentence='';
        for(let i=0;i<now;i++)
        {
            if(i<now-1)
            {
                sentence=sentence+nouns[Math.floor(Math.random()*nouns.length)]+' ';
            }
            else{
                sentence=sentence+nouns[Math.floor(Math.random()*nouns.length)]+'.';
            }
        }
        sentence=sentence.charAt(0).toUpperCase() + sentence.slice(1);
        return sentence;
    }
    else{
        return 'ERORR 69420!!! Please try again!';
    }
    
}
const logMessage=()=>{
    document.getElementById("logMessage").innerHTML=createMessage(numOfWords());
}

