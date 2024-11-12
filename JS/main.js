document.addEventListener('DOMContentLoaded', () => {
    const projectData = {
        'Sales Web': {
            title: 'Sales Web',
            image: './IMG/SalesWeb.png',
            description: 'Sistema de cadastro de vendedores usando C# e MVC.',
            link: 'https://github.com/Pedbip/SalesWebMvc'
        },
        'Elysium': {
            title: 'Elysium',
            image: './IMG/Elysium.png',
            description: 'Dashboard para gerenciamento de pequenos negócios.',
            link: 'https://github.com/Pedbip/Elysium'
        }
    };

    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    const projectTitle = document.getElementById('projectTitle');
    const projectImage = document.getElementById('projectImage');
    const projectDescription = document.getElementById('projectDescription');
    const projectLink = document.getElementById('projectLink');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectName = card.getAttribute('data-project');
            const project = projectData[projectName];

            if (project) {
                projectTitle.textContent = project.title;
                projectImage.src = project.image;
                projectDescription.textContent = project.description;
                projectLink.href = project.link;
                modal.show();
            } else {
                console.error(`Projeto "${projectName}" não encontrado.`);
            }
        });
    });
});