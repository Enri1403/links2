// audios.js

// List of audio files (add new audio files here)
const audioFiles = [
    'audio1.mp3',
    'audio2.wav',
    'audio3.ogg'
];

// Dynamically generate links for the audio files
document.addEventListener('DOMContentLoaded', () => {
    const audioControlsDiv = document.getElementById('audio-controls');

    audioFiles.forEach(audioFile => {
        const link = document.createElement('a');
        link.href = audioFile; // Redirect to the audio file
        link.textContent = `Play ${audioFile}`; // Display the audio file name
        link.className = 'audio-link';
        link.target = '_blank'; // Open in a new tab
        audioControlsDiv.appendChild(link);

        const br = document.createElement('br');
        audioControlsDiv.appendChild(br); // Add a line break
    });
});

