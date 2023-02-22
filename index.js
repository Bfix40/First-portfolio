const toggleTheme = document.getElementById('toggle-theme')
const toggleText = document.getElementById('toggle-text')
const toggleIcon = document.getElementById('toggle-icon');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = "./assets/icons/sun.svg"
            toggleText.textContent='Light Mode';
    } else {
        toggleIcon.src = "./assets/icons/moon.svg";
        toggleText.textContent = "Dark Mode";
    }
})

const flagsElements = document.getElementById("flags");

const textsToChange =  document.querySelectorAll("[data-section]");


const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`)
    const texts = await requestJson.json()
    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value;
        console.log(textToChange)
        textToChange.innerHTML = texts[section][value]
    }
   ;
}

flagsElements.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language)
})
