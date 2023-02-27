let arr = []
for (let i = 0; i < 30; i++) {
    arr.push(Math.floor((Math.random() * (99 - 1) + 1)))
}
console.log(arr)

function getNumber(){
    return Math.floor((Math.random() * (99 - 1) + 1))
}

let table = document.createElement('table')
document.body.appendChild(table)

function tableScript() {
    for (let i = 0; i < 6; i++) {
        var tr = document.createElement('tr')
        for (let j = 0; j < 5; j++) {
            var td = document.createElement('td')
            if (arr[i * 5 + j] >= 50) {
                td.style.backgroundColor = 'orange'
                td.style.color = 'black'
            }
            td.innerHTML = arr[i * 5 + j]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}
tableScript()

function tableButton(){
    table_2 = document.body.firstChild.nextElementSibling.nextElementSibling
    lastRow = table_2.lastElementChild.children.length
    console.log(table_2, lastRow)
    if (lastRow != 5){
        td = tr.insertCell()
        td.appendChild(document.createTextNode(getNumber()))
    } else {
        tr = table_2.insertRow(-1)
        td = tr.insertCell()
        td.appendChild(document.createTextNode(getNumber()))
    }
    if (td.textContent >= 50) {
        td.style.background = 'orange'
        td.style.color = 'black'
    }
}


