let backwrd = document.getElementById("backward");
let forwrd = document.getElementById("forward");
let play = document.getElementById("play");
let miniplay1 = document.getElementById("miniplay1");
let miniplay2 = document.getElementById("miniplay2");
let miniplay3 = document.getElementById("miniplay3");
let audio = new Audio("songs/baaz.mp3");
let songlist = Array.from(document.getElementsByClassName("song"));
let gif = document.getElementById('giff');
let songname = document.getElementById('songName');
let progbar = document.getElementById('myprogressbar');


let songs = [
    {
        name:  "baaz-by-talha-anjum",
        file:  "songs/baaz.mp3",
        cover: "images/baaz.jpg"
    },
    {
        name:  "nadan-parinday-by atif-aslam",
        file:  "songs/nadanparinday.mp3",
        cover: "images/nadanparinday.jpg"
    },
    {
        name:  "beliver-by-imagen-dragon",
        file:  "songs/beliver.mp3",
        cover: "images/beliver.jpg"
    }
]


play.addEventListener("click",()=>{

        if(audio.paused || audio.currentTime <= 0)
        {
            audio.src = songs[0].file;
            audio.play();
            play.childNodes[0].src = "images/pause.png";
            gif.style.opacity=1;
            songname.innerText = songs[0].name; 
        }else
        {
            audio.src = songs[0].file;
            audio.pause();
            play.childNodes[0].src = "images/play.png"
            gif.style.opacity=0;
        }

});

audio.addEventListener('timeupdate', ()=>{
    console.log("time-update");
    let progress = parseInt((audio.currentTime/audio.duration)*100);
    myprogressbar.value = progress;
});

myprogressbar.addEventListener('change',()=>{

audio.currentTime = myprogressbar.value * audio.duration/100;
})

const play1 = () => {


    if(audio.paused || audio.currentTime <= 0)
    {
        miniplay1.childNodes[0].src = "images/pause.png";
        miniplay2.childNodes[0].src = "images/play.png";
        miniplay3.childNodes[0].src = "images/play.png";
        audio.src = songs[0].file;
        audio.play();
        play.childNodes[0].src = "images/pause.png";
        gif.style.opacity=1;
        songname.innerText = songs[0].name; 
    }else
    {
        miniplay1.childNodes[0].src = "images/play.png";
        miniplay2.childNodes[0].src = "images/play.png";
        miniplay3.childNodes[0].src = "images/play.png";
        audio.src = songs[0].file;
        audio.pause();
        play.childNodes[0].src = "images/play.png"
        gif.style.opacity=0;
    }
}
const play2 = () => {


    if(audio.paused || audio.currentTime <= 0)
        {
            miniplay1.childNodes[0].src = "images/play.png";
            miniplay2.childNodes[0].src = "images/pause.png";
            miniplay3.childNodes[0].src = "images/play.png";
            audio.src = songs[1].file;
            audio.play();
            play.childNodes[0].src = "images/pause.png";
            gif.style.opacity=1;
            songname.innerText = songs[1].name; 
        }else
        {
            miniplay1.childNodes[0].src = "images/play.png";
            miniplay2.childNodes[0].src = "images/play.png";
            miniplay3.childNodes[0].src = "images/play.png";
            audio.src = songs[0].file;
            audio.pause();
            play.childNodes[0].src = "images/play.png"
            gif.style.opacity=0;
        }
}
const play3 = () => {

    if(audio.paused || audio.currentTime <= 0)
        {
            miniplay1.childNodes[0].src = "images/play.png";
            miniplay2.childNodes[0].src = "images/play.png";
            miniplay3.childNodes[0].src = "images/pause.png";
            audio.src = songs[2].file;
            audio.play();
            play.childNodes[0].src = "images/pause.png";
            gif.style.opacity=1;
            songname.innerText = songs[2].name; 
        }else
        {
            miniplay1.childNodes[0].src = "images/play.png";
            miniplay2.childNodes[0].src = "images/play.png";
            miniplay3.childNodes[0].src = "images/play.png";
            audio.src = songs[0].file;
            audio.pause();
            play.childNodes[0].src = "images/play.png"
            gif.style.opacity=0;
        }
}
miniplay1.addEventListener('click',play1);
miniplay2.addEventListener('click',play2);
miniplay3.addEventListener('click',play3);

forwrd.addEventListener('click',()=>{
    if(audio.src === songs[0].file)
    {
        return play2();
    }else if(audio.src === songs[1].file)
    {
        return play3();
    }
    if(audio.src === songs[2].file)
    {
        return play1();
    }
});

