document.addEventListener("DOMContentLoaded", () => {

    // Selecting elements
    let form = document.getElementById("feedback-form")
    let feedbackDisplay = document.getElementById("feedback-display")
    let commentBox = document.getElementById("comments")
    let charCount = document.getElementById("char-count")

    let nameInput = document.getElementById("name")
    let emailInput = document.getElementById("email")

    // Character count
    commentBox.addEventListener("input", () => {
        charCount.textContent = commentBox.value.length + " characters"
    })

    // TOOLTIP DEMO
    let fieldContainers = document.querySelectorAll(".field-container")
    let fieldContainersArray = Array.from(fieldContainers)

    fieldContainersArray.forEach((container) => {
        container.addEventListener("mouseover", () => {
            let tooltip = container.querySelector(".tooltip")
            if (tooltip) {
                tooltip.style.visibility = "visible"
            }
        })

        container.addEventListener("mouseout", () => {
            let tooltip = container.querySelector(".tooltip")
            if (tooltip) {
                tooltip.style.visibility = "hidden"
            }
        })
    })

    // Form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault() // prevent page refresh

        let name = nameInput.value.trim()
        let email = emailInput.value.trim()
        let comment = commentBox.value.trim()

        // Validation
        if (name === "" || email === "" || comment === "") {
            alert("Please fill out all fields.")
            return
        }

        // Popup alert for successful submission
        alert("Feedback Submitted Successfully")  

        console.log("Feedback Submitted Successfully")

        // Create feedback entry
        let entry = document.createElement("div")
        entry.classList.add("feedback-entry")

        let nameDiv = document.createElement("div")
        nameDiv.textContent = `Name: ${name}`

        let emailDiv = document.createElement("div")
        emailDiv.textContent = `Email: ${email}`

        let commentDiv = document.createElement("div")
        commentDiv.textContent = `Comment: ${comment}`

        // Append to entry
        entry.appendChild(nameDiv)
        entry.appendChild(emailDiv)
        entry.appendChild(commentDiv)

        // Add to feedback display
        feedbackDisplay.appendChild(entry)

        // Hover color change
        entry.addEventListener("mouseover", () => {
            entry.style.color = "blue"
        })

        entry.addEventListener("mouseout", () => {
            entry.style.color = "black"
        })

        // Reset form
        form.reset()
        charCount.textContent = "0 characters"
    })

    // Event bubbling demo
    document.body.addEventListener("click", () => {
        console.log("Background clicked")
    })

    // Stop propagation on form click
    form.addEventListener("click", (e) => {
        e.stopPropagation()
    })

})