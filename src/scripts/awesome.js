// Final output DOM component reference
const output = document.querySelector(".output")

// Frament to hold all the stuff so we inject into the DOM once
const fragment = document.createDocumentFragment()

// Create factory function to generate components
// Create input component
const inputFieldFactory = (classList, defaultPlaceHolderText, type) => {
    const inputField = document.createElement("input")
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.type = type
    inputField.placeholder = defaultPlaceHolderText
    return inputField
}

// Create button component
const buttonFactory = (classList, textContent) => {
    const theButton = document.createElement("button")
    theButton.classList = classList
    theButton.placeholder = textContent
    return theButton
}

const createCardButton = buttonFactory("button-submit", "Create Card")
const cardTextInput = inputFieldFactory("input--text", "Enter card text here", "text")


// Attach event listener to button

createCardButton.addEventListener("click", function () {
    // 1. Get Value of input field
    const userEntry = cardTextInput.value
    // 2. Create card component with text inside
})


fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)


fragment.appendChild(inputFieldFactory("input--text", "Enter card text here", "text"))
fragment.appendChild(buttonFactory("button--submit", "Create Card"))

// output.appendChild(fragment)


// Create card component

