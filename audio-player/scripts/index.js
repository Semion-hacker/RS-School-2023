const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play_img'),
      prevBtn = document.querySelector('.prev_img'),
      nextBtn = document.querySelector('.next_img'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.progress_container'),
      progress = document.querySelector('.progress'),
      author = document.querySelector('.author'),
      title = document.querySelector('.song'),
      background = document.querySelector('.background'),
      img = document.querySelector('.img'),
      startTime = document.querySelector('.start_time'),
      allTime = document.querySelector('.all_time')

const songs = ['Ты всегда со мной', 'Обратись, Господи', 'Кто как Ты, Господи'];
const authorList = ['Simon Khorolskiy', 'Simon K.', 'S. Khorolskiy'];

let songIndex = 0;

function loadSong(song) {
    title.innerHTML = song;
    author.innerHTML = authorList[songIndex];
    audio.src = `audio/${song}.mp3`
    background.src = `img/png/img${songIndex + 1}.png`
    img.src = `img/png/img${songIndex + 1}.png`
}

loadSong(songs[songIndex])

//play

function playSong() {
    player.classList.add('play')
    playBtn.src = `img/png/pause.png`;
    audio.play()
}

//pause

function pauseSong() {
    player.classList.remove('play')
    playBtn.src = `img/png/play.png`;
    audio.pause()
}



playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying) {
        pauseSong()  
    } else {
        playSong()
    }
})

//next song

function nextSong() {
    songIndex++
    if (songIndex > songs.length - 1) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}

nextBtn.addEventListener('click', nextSong)

//prev song

function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex])
    playSong()
}

prevBtn.addEventListener('click', prevSong)

//progress bar

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progreesPercent = (currentTime / duration) * 100;
    progress.style.width = `${progreesPercent}%`;
}

audio.addEventListener('timeupdate', updateProgress)

// set progress

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

progressContainer.addEventListener('click', setProgress)

//autoplay
audio.addEventListener('ended', nextSong)

//time

function timeduration() {
    const currentElement = document.querySelector('.start_time');
    const lengthElement = document.querySelector('.all_time');
    
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    
    function formatTime(time) {
      if (isNaN(time)) {
        return '0:00';
      }
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    currentElement.textContent = formatTime(currentTime);
    lengthElement.textContent = formatTime(duration);
}

audio.addEventListener('timeupdate', timeduration);