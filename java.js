(function() {
	const FORM = document.querySelector(".contactForm")
	let success

	FORM.addEventListener("submit", submitHandler)

	function validate(element) {
		if (element.type === "submit"
				|| element.type === "button"
				|| element.type === "reset") {
					return
		}

		const FEEDBACK = element.parentElement.nextSibling.nextSibling
		const makeFeedback = message => {
			FEEDBACK.innerText = message
			success = false
		}
		FEEDBACK.innerText = ""
		if (element.required && !element.value)
			return makeFeedback ("Dette felt må ikke være tomt.")

		if (element.type === "email") {
			if (!includeSymbol (element.value, "@")
			|| tooManyAts(element.value)
			|| hasIllegalAt(element.value)) {
				return makeFeedback("Skriv en gyldig email.")
			}
		}

	if (success) FORM.submit()
	} // validate slutter her

	function submitHandler(event) {
		event.preventDefault()
		success = true 

		Array.from(event.target)
			.forEach(element => validate(element))
	}

	const includeSymbol = (string, symbol) => string.includes(symbol)
	const tooManyAts = string => string.split("@").length > 2
	const hasIllegalAt = string => string.indexOf("@") === 0 || string.indexOf("@") === string.length - 1

	const isTooLong = (string, maxlength = 20) => string.length > maxlength
	const isTooShort = (string, minlength = 3) => string.length < minlength
	const hasLegalCharacters = (string) => /^[0-9+#\*\s]+$/.test(string)
})()


// Tak side
(function () {
    const NAME_PLACEHOLDER = document.querySelector(".thaankyou__name")
    const URL = new URLSearchParams(window.location.search)
    NAME_PLACEHOLDER.innerText =URL.get(".name")
})()