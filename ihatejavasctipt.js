const defaultSet = {
    'I': "Iil1!",
    'H': "Hh",
    'A': "Aa4@",
    'T': "Tt7",
    'E': "Ee3",
    'J': "Jj",
    'V': "Vv",
    'S': "Ss5",
    'C': "Cc",
    'R': "Rr",
    'P': "Pp",
    '-': "-_."
}

function generateHandler() {
    let len = document.getElementById("passLen").value
    let num = document.getElementById("passNum").value
    let passwords = generate(num, len)
    let ul = document.getElementById("resultList")
    ul.innerHTML = ""
    for (let i = 0; i < passwords.length; ++i) {
        let li = document.createElement("li")
        li.textContent= passwords[i]
        li.onclick = trick
        ul.appendChild(li)
    }
    let div = document.getElementById("result")
    div.classList.remove("hidden")
}

function generate(num, len) {
    let list = []

    let ethalon = "I-HATE-JAVASCRIPT"

    for (let i = 0; i < num; ++i) {
        let pass = ""
        let pointer = 0
        for (let j = 0; j < len; ++j) {
            pass += random(defaultSet[ethalon[pointer++]])
            if (pointer >= ethalon.length) pointer = 0
        }
        list.push(pass)
    }

    return list
}

function trick(e) {
    navigator.clipboard.writeText(e.target.textContent)
    alert("Password has been copied to clipboard!")
    // do dirty things
    console.log(e.target.textContent)
}

function random(s) {
    let len = s.length
    let i = Math.floor(Math.random() * len)
    return s[i]
}