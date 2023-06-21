var playlist = [
  {
    title: getFileName("musicas/ACDC - Back In Black.mp3"),
    src: "musicas/ACDC - Back In Black.mp3",
    image: 'imagens/imagemFundo.GIF',
    fundo: 'url("imagens/imagem1.gif")',
  },
  {
    title: getFileName('musicas/Kate Bush - Running up that Hill.mp3'),
    src: 'musicas/Kate Bush - Running up that Hill.mp3',
    image: 'imagens/imagemFundo2.GIF',
     fundo: 'url("imagens/imagem2.gif")',
  },
  {
    title: getFileName('musicas/The Clash - Should I Stay or Should I Go.mp3'),
    src: 'musicas/The Clash - Should I Stay or Should I Go.mp3',
    image: 'imagens/imagemFundo3.GIF',
      fundo: 'url("imagens/imagem3.webp")',
  },
  {
    title: getFileName('musicas/Stephen Sanchez - Until I Found You.mp3'),
    src: 'musicas/Stephen Sanchez - Until I Found You.mp3',
    image: 'imagens/imagemFundo4.GIF',
    fundo: 'url("imagens/imagem4.gif")',
  },
]

function getFileName(src) {
  var parts = src.split('/')
  return parts[parts.length - 1]
}

var audio = new Audio()
var playpause = document.getElementById('playpause')
var stopButton = document.getElementById('stop')
var backButton = document.getElementById('back')
var nextButton = document.getElementById('next')
var trackTitle = document.getElementById('track-title')
var trackImage = document.getElementById('track-image')

var currentTrack = 0
var isPlaying = false

function loadTrack(trackNumber) {
  if (audio.src !== playlist[trackNumber].src) {
    audio.src = playlist[trackNumber].src
    audio.load()
  }
  if (currentTrack % 2 === 0) {
    document.getElementById('track-title-2').innerHTML =
      playlist[trackNumber].title
    document.getElementById('titulo').innerHTML = playlist[trackNumber].title
    document.getElementById('track-image-2').src = playlist[trackNumber].image
    document.getElementById('fundo').style.backgroundImage = playlist[trackNumber].fundo;
    
  } else {
    document.getElementById('titulo').innerHTML = playlist[trackNumber].title
    document.getElementById('track-title').innerHTML =
      playlist[trackNumber].title
    document.getElementById('track-image').src = playlist[trackNumber].image
    document.getElementById('fundo').style.backgroundImage = playlist[trackNumber].fundo;
  }
}
var trackLoaded = false

function player() {
  document.querySelector('#track-title').classList.add('pausado')
  document.querySelector('#track-title-2').classList.add('pausado')

  if (!trackLoaded) {
    loadTrack(currentTrack)
    trackLoaded = true
  }

  if (audio.paused) {
    audio.play()
    isPlaying = true
  } else {
    document.querySelector('#track-title').classList.remove('pausado')
    document.querySelector('#track-title-2').classList.remove('pausado')

    audio.pause()
    isPlaying = false
  }
}

function stop() {
  document.querySelector('#track-title').classList.remove('pausado')
  document.querySelector('#track-title-2').classList.remove('pausado')
  audio.pause()
  audio.currentTime = 0
  isPlaying = false
}

function back() {
  document.querySelector('#track-title').classList.add('pausado')
  document.querySelector('#track-title-2').classList.add('pausado')
  document.querySelector('#div-leg').classList.toggle('hover')
  document.querySelector('#track-image').classList.toggle('animation-in')
  currentTrack--
  if (currentTrack < 0) {
    currentTrack = playlist.length - 1
  }
  loadTrack(currentTrack)
  audio.play()
  isPlaying = true

  setTimeout(function () {
    document.querySelector('#track-image').classList.remove('animation-in')
  }, 1000)
}

function next() {
  document.querySelector('#track-title').classList.add('pausado')
  document.querySelector('#track-title-2').classList.add('pausado')
  document.querySelector('#div-leg').classList.toggle('hover')
  const figura = document.querySelector('.div-figura')
  const texto = document.querySelector('.texto')
  currentTrack++
  if (currentTrack >= playlist.length) {
    currentTrack = 0
  }
  loadTrack(currentTrack)
  audio.play()
  isPlaying = true
}

loadTrack(currentTrack)
play()
