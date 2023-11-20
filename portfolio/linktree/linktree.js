const shareButton = document.querySelectorAll('.tile-share-button')
console.log(shareButton)

async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the link: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButton.forEach(shareButton => shareButton.addEventListener('click', copyText))