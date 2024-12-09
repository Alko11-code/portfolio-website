const projectDetails = {
    "Project 1": {
        title: "Project 1: My Own Helper a Sevice providing website",
        description: "An online store where users can buy and sell products. It features product listings, a shopping cart, and secure payment methods.",
        images: [
            "assests/Img5.jpeg.jpg",
           
        ]
    },
    // Add other ,
    "Project 2": {
        title: "Project 2: Weather Dashboard",
        description: "A weather dashboard created using html,css and javascript and tailwind",
        images: [
            "assests/Img9.jpeg",
        ]
    },
    "Project 3": {
        title: "Project 3: Medical Services",
        description: "A medical web design created based on challenge requirements",
        images: [
           "assests/Img10.jpeg",
        ]
    },
    "Project 4": {
        title: "Project 4: Media Management",
        description: "A media track record web app design created using pure html,css and javascript and tailwind blocks component",
        images: [
          "assests/Img11.jpeg",
        ]
    }
};

let currentImageIndex = 0;

function showProjectDetail(projectName) {
    const modal = document.getElementById('projectModal');
    const projectTitle = document.getElementById('projectTitle');
    const projectDetailText = document.getElementById('projectDetailText');
    const projectImagesContainer = document.getElementById('projectImages');

    const project = projectDetails[projectName];

    if (project) {
        projectTitle.textContent = project.title;
        projectDetailText.textContent = project.description;

        // Clear existing image if not already present
        if (!projectImagesContainer.querySelector(`img[data-project="${projectName}"]`)) {
            projectImagesContainer.innerHTML = ''; // Clear container
            project.images.forEach((image, index) => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = `${projectName} image ${index + 1}`;
                img.style.display = index === currentImageIndex ? 'block' : 'none';
                img.dataset.project = projectName;
                projectImagesContainer.appendChild(img);
            });
        } else {
            // Update visibility based on currentImageIndex
            const images = projectImagesContainer.querySelectorAll('img');
            images.forEach((img, idx) => {
                img.style.display = idx === currentImageIndex ? 'block' : 'none';
            });
        }
    }

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = "none";
}



window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
};
