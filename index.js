window.onload = function () {
    const toSomeThinkg = document.getElementById('toSomeThing')
    const submit = document.querySelector('#submit')
    const deletAllBtn = document.querySelector('#deletAllBtn')
    const todolist = document.querySelector('#todolist')
    let deletBtn = document.querySelectorAll('#deletBtn')

    let data = [{ todo: 'Learn JS', lineThrough: 'none' }]
    //功能
    const update = () => {
        if (toSomeThing.value.length === 0) {
            alert('輸入欄空白')
        } else {
            data.push({ todo: toSomeThing.value, lineThrough: 'none' })
        }
        render()
    }
    const deletAll = () => {
        data = []
        render()
    }
    const delet = (index) => {
        data.splice(index, 1)
        render()
    }
    const lineThrough = (index) => {
        let todoListItems = document.querySelectorAll('#todoListItems')
        if (data[index].lineThrough === 'none') {
            data.splice(index, 1, { ...data[index], lineThrough: 'line-through' })
        } else {
            data.splice(index, 1, { ...data[index], lineThrough: 'none' })
        }

        render()
    }
    //功能
    //渲染
    const render = () => {
        deletBtn = document.querySelectorAll('#deletBtn')
        let list = ''
        data.map((val, index) => {
            list += `
        <div>
            <li style="text-decoration:${val.lineThrough}" id="todoListItems" onclick="lineThrough(${index})">${val.todo}</li>
            <button onclick = "delet(${index})">刪除</button>
        </div>`
        })
        todolist.innerHTML = list
    }
    render()
    //渲染

    submit.addEventListener('click', update)
    deletAllBtn.addEventListener('click', deletAll)
}
