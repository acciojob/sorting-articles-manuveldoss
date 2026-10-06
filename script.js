//your JS code here. If required.
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Remove "A", "An", and "The" before sorting
function strip(bandName) {
    return bandName.replace(/^(a |an |the )/i, '');
}

// Sort alphabetically
bands.sort(function(a, b) {
    return strip(a).localeCompare(strip(b));
});

// Get the <ul>
const bandList = document.getElementById('band');

// Add each band as an <li>
bands.forEach(function(band) {

    const li = document.createElement('li');

    li.textContent = band;

    bandList.appendChild(li);
});