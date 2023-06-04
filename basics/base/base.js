function debugFunc() {
    let d = new Date(2022,1,1,8,8,8,0)
    window.alert(d)
}

function submitForm() {
    window.alert("Successfully committed")
}

function ajaxPromise() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open("get", "www.baidu.com/image/default.png", true)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    resolve(xhr.responseURL)
                    return
                }
                reject(new Error(xhr.statusText))
            }
        }
        xhr.send(null)
    })
}