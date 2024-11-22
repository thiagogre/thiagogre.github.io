const tabs = document.querySelectorAll(".tab");
const contentTabs = document.querySelectorAll("main")

if ([tabs, contentTabs].every(Boolean)) {
    tabs.forEach(t => {
        t.addEventListener('click', () => {
            const tabId = t.getAttribute("data-id")
            tabs.forEach((_t) => {
                _t.classList.remove("active")
            })
            t.classList.add("active")

            console.log(contentTabs, tabs)
            contentTabs.forEach(ct => {
                ct.id === tabId ?
                    ct.classList.add("active") :
                    ct.classList.remove("active")
            })
        })
    })
}