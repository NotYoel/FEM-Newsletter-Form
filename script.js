// UIs
const UI_NORMAL = 0;
const UI_SUCCESS = 1;

// Cards
const main_card = document.getElementById("main-card")
const success_card = document.getElementById("success-card")

// Form/Interactable Elements
const submit_button = document.getElementById("submit-button")
const email_input = document.getElementById("email-address")
const error_text = document.getElementById("error-text")
const dismiss_msg_button = document.getElementById("dismiss-message")

// Message Elements
const success_description = document.getElementById("success-description")

// Tests the specified emaill
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return emailRegex.test(email)
}

// Switches between the two pages/uis
function switchUI(targetUI) {
    switch(targetUI) {
        case UI_NORMAL:
            success_description.innerHTML = success_description.innerHTML.replace(email_input.value, "{email_address}")
            error_text.innerHTML = ""
            email_input.value = ""
            error_text.classList.remove("active")
            email_input.classList.remove("active")
            main_card.classList.remove("hidden")
            success_card.classList.add("hidden")
            break;
        case UI_SUCCESS:
            success_description.innerHTML = success_description.innerHTML.replace("{email_address}", email_input.value)
            main_card.classList.add("hidden")
            success_card.classList.remove("hidden")
            break;
    }
}


// EVENTS
submit_button.onclick = function() {
    let email = email_input.value.trim()
    
    // Check for valid email
    if(validateEmail(email)) {
        switchUI(UI_SUCCESS)
    } else {
        // Invalid email submitted
        error_text.innerHTML = "Valid email required"
        error_text.classList.add("active")
        email_input.classList.add("active")
    }
}

dismiss_msg_button.onclick = function() {
    // Switch back to normal ui
    switchUI(UI_NORMAL)
}