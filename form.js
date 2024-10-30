document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form")
    const clearBtn = document.getElementById("clearBtn")
    const message = document.getElementById("message")
    const dataContainer = document.getElementById("dataContainer")
    const dataBtn = document.getElementById("dataBtn")

    function showData(container, data) {
        container.innerHTML = `
            <button id="closeBtn">Close</button>
            <p><strong>First Name:</strong> ${data.firstName}</p>
            <p><strong>Last Name:</strong> ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Rating:</strong> ${data.rating}</p>
            <p><strong>Preferred Contact Method:</strong> ${data.contactMethod}</p>
            <p><strong>Comment:</strong> ${data.comment}</p>
        `;

        const closeBtn = document.getElementById('closeBtn')
        if(closeBtn) {
            closeBtn.addEventListener('click', () => {
                container.innerHTML = ""
            })
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const formData = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            rating: form.rate.value,
            contactMethod: document.getElementById("contactMethod").value,
            comment: document.getElementById("comment").value,
        }

        localStorage.setItem("formData", JSON.stringify(formData))
        message.textContent = "Form submitted!"
        showData(dataContainer, formData)

        form.reset()

        return false;
    })

    clearBtn.addEventListener("click", () => {

        form.reset();
    
        localStorage.removeItem("formData")
        message.textContent = "Form and local storage cleared"
    });

    dataBtn.addEventListener('click', () => {
        const storedData = localStorage.getItem('formData')

        if(storedData) {
            const formData = JSON.parse(storedData)
            showData(dataContainer, formData)
        } else {
            message.textContent = "No form data available"
            dataContainer.innerHTML = ""
        }
    })

    
})

