
export default function Todo({ todo, onDelete, onEdit }: any) {
    // const todos = (props.todos);

    return (

        <div className="p-4 mb-4 bg-gray-800 rounded-lg shadow-md ">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-white">{todo.title}</h3>
                    <p className="text-gray-400">{todo.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => onEdit(todo._id)}
                        className="px-2 py-1 text-sm text-blue-500 bg-blue-200 rounded hover:bg-blue-300"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(todo._id)}
                        className="px-2 py-1 text-sm text-red-500 bg-red-200 rounded hover:bg-red-300"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}