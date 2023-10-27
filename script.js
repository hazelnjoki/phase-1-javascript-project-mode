document.addEventListener('DOMContentLoaded',() =>{
    const catlist =document.getElementById('cat container');
})
    // Function to fetch and display a random cat image
function getRandomCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(data => {
            const catUrl = data[0].url;
            const catImage = document.createElement('img');
            catImage.src = catUrl;
            document.getElementById('cat-container').innerHTML = '';
            document.getElementById('cat-container').appendChild(catImage);
        })
        .catch(error => console.error('Error:', error));
}


// Add a click event listener to the "Get a New Cat" button
document.getElementById('new-cat-button').addEventListener('click', getRandomCatImage);

// Initial load: Get a random cat image
getRandomCatImage();

 