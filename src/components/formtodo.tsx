export default function Formtodo() {
    return (
        <div className="flex items-center justify-center bg-gray-200 rounded-lg shadow-lg">
            <form className=" p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add New Todo</h2>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-gray-700">Todo Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter title"
                        className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-black"
                    />
                </div>

                <div className="form-control mb-6">
                    <label className="label">
                        <span className="label-text text-gray-700">Todo Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter description"
                        className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-black"
                    />
                </div>

                <button className="w-full btn btn-primary bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg">
                    Add Todo
                </button>
            </form>
        </div>
    );
}
