const form = document.querySelector('form')
const addItem = document.getElementById('add-item')
const itemsList = document.getElementById('items')
const alert = document.querySelector('.alert-box')
const closeAlert = document.getElementById('alert-x')

let alertTimeout = null

function newInputItem() {
    try {
        const itemValue = addItem.value.trim()
        if(itemValue === '') {
            throw new Error('Must be a valid item.')
        }
        
        const itemNumber = itemsList.children.length + 1
        
        const div = document.createElement('div')
        const label = document.createElement('label')
        const input = document.createElement('input')
        const text = document.createTextNode(itemValue)
        const img = document.createElement('img')
        
        label.appendChild(input)
        label.appendChild(text)
        div.appendChild(label)
        div.appendChild(img)
        itemsList.append(div)
        
        div.classList.add('item-row')
        
        label.classList.add('item-name')
        label.htmlFor = `item${itemNumber}`
        
        input.classList.add('checkbox-input')
        input.type = 'checkbox'
        input.id = `item${itemNumber}`
        
        img.src = 'img/icon-delete.svg'
        img.alt = 'delete-icon'
        img.classList.add('delete-icon')
        
        addItem.value = ''
        
    } catch (error) {
        console.log(error)
    }
}

function deleteItem(ev) {
    if (ev.target.classList.contains('delete-icon')) {
        const isTarget = ev.target.closest('.item-row')
        isTarget.remove()
        alert.classList.add('show-result')
        
        alertTimeout = setTimeout(() => {
            alert.classList.remove('show-result')
        }, 4000)
    }
}

function closeAlertFunction() {
    clearTimeout(alertTimeout)
    alert.classList.remove('show-result')
}

form.onsubmit = (event) => {
    event.preventDefault()
    
    newInputItem()
}

itemsList.addEventListener('click', deleteItem)

closeAlert.addEventListener('click', closeAlertFunction)