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
        const link = document.createElement('span'); // Use a span styled as a clickable link
        link.textContent = `Play ${audioFile}`;
        link.className = 'audio-link';

        // Open audio in a new window
        link.onclick = () => {
            const newWindow = window.open(
                audioFile, // URL of the audio file
                '_blank', // Open in a new browser window
                'width=400,height=200,scrollbars=no,resizable=no,toolbar=no,location=no,menubar=no,status=no' // All window features
            );

            if (!newWindow) {
                alert(
                    'Failed to open the audio in a new window. Check your browser settings to allow pop-ups for this site.'
                );
            }
        };

        audioControlsDiv.appendChild(link);

        const br = document.createElement('br');
        audioControlsDiv.appendChild(br); // Add a line break
    });
});
