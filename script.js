const priyatama_Audio = new Audio('./sound/priyatama.mp4');
const naa_kuch_poocha_Audio = new Audio('./sound/naa_kuch_poocha.mp4');
const praanavanu_pararu_bedidaretti_kodabahudu_Audio = new Audio('./sound/praanavanu_pararu_bedidaretti_kodabahudu.unknown');
const tusu_mella_beesu_Audio = new Audio('./sound/tusu_mella_beesu_gaaliye.unknown');
const aa_hasivaadiya_Audio = new Audio('./sound/aa_hasi_vaadiya.unknown');
const achyutam_keshavam_Audio = new Audio('./sound/achyutam_keshavam.unknown');
const kambada_myalina_gombeye_Audio = new Audio('./sound/kambada_myalina_gombeye.unknown');
const classical_part_Audio = new Audio('./sound/classical_part.mp4');

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');



const songs = [
  { ele: priyatama_Audio, audioName: 'Priyatama_priyatama_palikinadi_hrudayame_sa_ri_ga_ma' },
  { ele: naa_kuch_poocha_Audio, audioName: 'naa_kuch_poocha' },
  { ele: praanavanu_pararu_bedidaretti_kodabahudu_Audio, audioName: 'Pranavanu_pararu_bedidaretti_kodabahudu' },
  { ele: tusu_mella_beesu_Audio, audioName: 'Tusu mella beesu gaaliye' },
  { ele: aa_hasivaadiya_Audio, audioName: 'Aa_ hasien Vaadiya' },
  { ele: achyutam_keshavam_Audio, audioName: 'Achyutam_keshavam' },
  { ele: kambada_myalina_gombeye_Audio, audioName: 'Kambada Myalina gombeye' },
  { ele: classical_part_Audio, audioName: 'Classical_part' },
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}
