const visitorName = document.querySelector('#visitor-name')
const enterBtn = document.querySelector('#enter-btn')
const nameInput = document.querySelector('#name-input')
const profileImage = document.querySelector('#profile-image')

enterBtn.addEventListener('click', () => {
    const name = nameInput.value;
    console.log("Button clicked. Name input:", name)
    
    if (name !== '') {
        visitorName.textContent = name;
    } else {
        return
    }
});

profileImage.addEventListener('click', () => {
    if (profileImage.classList.contains('profile-image')) {
        profileImage.classList.remove('profile-image');
        profileImage.classList.add('enlarged-image');
    } else {
        profileImage.classList.remove('enlarged-image');
        profileImage.classList.add('profile-image');
    }
})

const navbarItems = document.querySelectorAll('.navbar a');
const targetItem = document.querySelector('.target-item')

navbarItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        targetItem.textContent = item.textContent; // Set text to the hovered item's text
    });
});