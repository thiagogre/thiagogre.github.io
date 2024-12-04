const tabs = document.querySelectorAll(".tab");
const contentTabs = document.querySelectorAll("main")

const handleOnHorizontalArrowPress = (newIndex) => {
    tabs.forEach((t, i) => {
        if (i === newIndex) {
            t.classList.add("active")
            contentTabs[i].classList.add("active")
        } else {
            t.classList.remove("active")
            contentTabs[i].classList.remove("active")
        }
    })
}

if ([tabs, contentTabs].every(Boolean)) {
    tabs.forEach(t => {
        t.addEventListener('click', () => {
            const tabId = t.getAttribute("data-id")
            tabs.forEach((_t) => {
                _t.classList.remove("active")
            })
            t.classList.add("active")

            contentTabs.forEach(ct => {
                ct.id === tabId ?
                    ct.classList.add("active") :
                    ct.classList.remove("active")
            })
        })
    })

    addEventListener("keydown", e => {
        let index = -1
        tabs.forEach((t, i) => {
            if (t.getAttribute("class").includes("active")) { return index = i }
        })

        if (index > -1) {
            switch (e.code) {
                case "ArrowRight":
                    handleOnHorizontalArrowPress(index < tabs.length - 1 ? index + 1 : 0)
                case "ArrowLeft":
                    handleOnHorizontalArrowPress(index > 0 ? index - 1 : tabs.length - 1)
                default:
                    return
            }
        } else {
            alert(`Active index not found, index = ${index}`)
        }
    })
}