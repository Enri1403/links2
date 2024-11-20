// audios.js

// List of audio files (add new audio files here)
const audioFiles = [
    'meryhadalittlegyett.mp3',
    'londonbridge.mp3'
];

// Dynamically generate links for the audio files
document.addEventListener('DOMContentLoaded', () => {
    const audioControlsDiv = document.getElementById('audio-controls');

    audioFiles.forEach(audioFile => {
        const link = document.createElement('span'); // Use a span instead of an anchor tag
        link.textContent = `Play ${audioFile}`;
        link.className = 'audio-link';

        // Open audio in a new window with specified size
        link.onclick = () => {
            window.open(
                audioFile, // URL of the audio file
                '_blank', // Open in a new browser window
                'width=400,height=100,scrollbars=no,resizable=no' // Window properties
            );
        };

        audioControlsDiv.appendChild(link);

        const br = document.createElement('br');
        audioControlsDiv.appendChild(br); // Add a line break
    });
});
