const links = document.querySelectorAll('li');
const hoverElement = document.querySelector('.overlay');

links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        hoverElement.classList.add('hover');
        link.classList.add('hover');
        let position = link.getBoundingClientRect();
        hoverElement.style.top = `${position.y}px`;
        hoverElement.style.left = `${position.x}px`;
        hoverElement.style.width = `${position.width}px`;
        hoverElement.style.height = `${position.height}px`;
    });
    link.addEventListener('mouseout', () => {
        hoverElement.classList.remove('hover');
        link.classList.remove('hover');
    });
    link.addEventListener('click', () => {
        let isActive = document.querySelector('li.active');
        if(isActive){
            isActive.classList.remove('active');
        }
        link.classList.add('active');
    });
})