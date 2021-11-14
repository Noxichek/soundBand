const buttonA = document.getElementById('buttonA')
const buttonS = document.getElementById('buttonS')
const buttonD = document.getElementById('buttonD')
const buttonF = document.getElementById('buttonF')
const buttonG = document.getElementById('buttonG')

document.addEventListener('keypress', sound)


function sound(event) {
    if(event.key === 'a') {
    const audio = document.getElementById('soundA')
    
    playSound(buttonA, audio)
    removeClass(buttonA)
    }

    if(event.key === 's') {
    const audio = document.getElementById('soundB')
    
    playSound(buttonS, audio)
    removeClass(buttonS)
    }

    if(event.key === 'd') {
        const audio = document.getElementById('soundD')
        
        playSound(buttonD, audio)
        removeClass(buttonD)
    }

    if(event.key === 'f') {
        const audio = document.getElementById('soundF')
        
        playSound(buttonF, audio)
        removeClass(buttonF)
    }

    if(event.key === 'g') {
        const audio = document.getElementById('soundG')
        
        playSound(buttonG, audio)
        removeClass(buttonG)
    }
}


function removeClass(button) {
    setTimeout(() => {
        button.classList.remove('play')
    }, 200);
}

function playSound(button, audio) {
    button.classList.add('play')
    audio.currentTime = 0
    audio.play()
}
