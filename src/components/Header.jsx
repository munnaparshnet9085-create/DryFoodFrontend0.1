

export default function Header({ onAddClick }) {
  return (
    <header className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
      <h1 className="text-xl font-semibold">Add Product</h1>

      <div className="flex items-center gap-4">
        {/* Add Product Button */}
        <button
          onClick={typeof onAddClick === 'function' ? onAddClick : undefined}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium
                     hover:bg-blue-700 transition whitespace-nowrap"
        >
          + Add Product
        </button>

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg outline-none focus:ring focus:ring-blue-300"
        />

      
      </div>
    </header>
  );
}

