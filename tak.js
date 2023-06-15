(function () {
    const NAME_PLACEHOLDER = document.querySelector(".thaankyou__name")
    const URL = new URLSearchParams(window.location.search)
    NAME_PLACEHOLDER.innerText = URL.get("name")
})