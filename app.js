console.log("hello!!");
//inialized the variables
let songIndex =0;
let audioElement=new Audio("songs/1.mp3")
let massterplay = document.getElementById("masterPlay");
let myprogressBar=document.getElementById("myProgressBar");
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songName=Array.from(document.getElementsByClassName('songName'));
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
let mastersongname= document.getElementById('mastersong');


let songs =[
    {songName:"Salam-e- Ishq",  filepath: "songs/1.mp3",    coverpath: "covers/1.jpg"},
    {songName:"Hey baby",  filepath: "songs/2.mp3",    coverpath: "covers/2.jpg"},
    {songName:"Drag me down",  filepath: "songs/3.mp3",    coverpath: "covers/3.jpg"},
    {songName:"have fun with this",  filepath: "songs/4.mp3",    coverpath: "covers/4.jpg"},
    {songName:"Heavy Duty",  filepath: "songs/5.mp3",     coverpath: "covers/5.jpg"},
    {songName:"never give up",  filepath: "songs/6.mp3",    coverpath: "covers/6.jpg"},
    {songName:"Why so serious",  filepath: "songs/7.mp3",    coverpath: "covers/7.jpg"},
    {songName:"Eternal Faith",  filepath: "songs/8.mp3",    coverpath: "covers/8.jpg"},
    {songName:"Dunhil",  filepath: "songs/9.mp3",    coverpath: "covers/9.jpg"},
    {songName:"Oh baby come to me",  filepath: "songs/10.mp3",   coverpath: "covers/10.jpg"},
]
songName.forEach((element,i)=>{
    element.innerText=songs[i].songName;
})
songItem.forEach((element,i) => {
    
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    
    
});
//handle play pause click 
massterplay.addEventListener("click",()=>{
     if (audioElement.paused||audioElement.currentTime<=0) {
        audioElement.play();
        massterplay.classList.remove("fa-play-circle");
        massterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        massterplay.classList.remove("fa-pause-circle");
        massterplay.classList.add("fa-play-circle");
        gif.style.opacity=0;
     }
});
//listen to events 
audioElement.addEventListener('timeupdate',()=>{
    //UpDate SeekBar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value =progress;
    
    
})

//seekBar changing algo 
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressBar.value*audioElement.duration/100);
})
let makeAllPlay=()=>{
    songItemPlay.forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
     
     
        songIndex=parseInt(e.target.id)
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`
        mastersongname.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        massterplay.classList.remove("fa-play-circle");
        massterplay.classList.add("fa-pause-circle");
       
      
    })
})

//next button setup
document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=9) {
        songIndex=0;
    }
    else{

        songIndex+=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    massterplay.classList.remove("fa-play-circle");
    massterplay.classList.add("fa-pause-circle");
})

//previous button setup
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex=0;
    }
    else{

        songIndex-=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    massterplay.classList.remove("fa-play-circle");
    massterplay.classList.add("fa-pause-circle");
})