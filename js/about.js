document.addEventListener("DOMContentLoaded", () => {
    const servicesInfoContainer = document.querySelector('.services-info');

    // Fetch data from the JSON file
    fetch("https://raw.githubusercontent.com/Fancypedia/fancypedia-store/main/filejson/about.json")
        .then(response => response.json())
        .then(data => {
            const aboutFancypedia = data.servicesInfo.aboutFancypedia;

            // Update HTML elements with fetched data
            const titleElement = document.createElement('h2');
            titleElement.classList.add('text-white', 'mb-4');
            titleElement.textContent = aboutFancypedia.title;
            servicesInfoContainer.appendChild(titleElement);

            const descriptionParagraph1 = document.createElement('p');
            descriptionParagraph1.classList.add('text-white');
            descriptionParagraph1.textContent = aboutFancypedia.description;
            servicesInfoContainer.appendChild(descriptionParagraph1);

            const themeTitleElement = document.createElement('h6');
            themeTitleElement.classList.add('text-white', 'mt-4');
            themeTitleElement.textContent = data.servicesInfo.theme.title;
            servicesInfoContainer.appendChild(themeTitleElement);

            const themeDescriptionParagraph = document.createElement('p');
            themeDescriptionParagraph.classList.add('text-white');
            themeDescriptionParagraph.textContent = data.servicesInfo.theme.description;
            servicesInfoContainer.appendChild(themeDescriptionParagraph);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
});
