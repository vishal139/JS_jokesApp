const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');




const loadjokes  = async()=>{
    try{
        const raw = await fetch('https://icanhazdadjoke.com/slack');
        const data = await raw.json();
        const myjoke = data.attachments[0].text;
        joke.innerHTML=`😆 ${myjoke}`;
    }
    catch(err)
    {
        console.log(err);
    }
   
}

btn.addEventListener('click',loadjokes);



loadjokes();