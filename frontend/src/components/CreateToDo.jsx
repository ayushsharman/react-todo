export function CreateTodo() {
    return <div>
        <input style={{
            padding: 10,
            margin: 10,
            borderRadius: 1,
        }} type="text" placeholder="Title" /> <br></br>
        <input
            style={{
                padding: 10,
                margin: 10,
                borderRadius: 10,
            }}
            type="text" placeholder="Description" /> <br></br>

        <button>Add a todo</button>

    </div>
}