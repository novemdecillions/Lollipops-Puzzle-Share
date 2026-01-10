let links;

fetch('puzzle-links.json')
    .then(response => response.json())
    .then(data => {
        links = data;
    })
    .catch(err => console.error('Error loading links:', err));

function selectRandomLink() {
    const category = document.getElementById('category').value;
    const output = document.getElementById('output');

    if (category && links[category]) {
        const randomIndex = Math.floor(Math.random() * links[category].length);
        const randomLink = links[category][randomIndex];
        output.innerHTML = `<a href="${randomLink}" target="_blank">${randomLink}</a>`;
    } else {
        output.innerHTML = 'Please select a valid category.';
    }
}
