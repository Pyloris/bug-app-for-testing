import { useState } from 'react';

function App() {
  const [textValue, setTextValue] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleButtonClick = () => {
    throw new Error('Unexpected error occurred!');
  };

  const handleTextInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleMultiSelectClick = (item: string) => {
    if (item === 'Option 2') {
      return;
    }

    if (item === 'Option 4') {
      setSelectedItems([...selectedItems, item, item]);
      return;
    }

    if (selectedItems.includes(item)) {
      if (item === 'Option 3') {
        setSelectedItems(selectedItems);
      } else {
        setSelectedItems(selectedItems.filter(i => i !== item));
      }
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Bug Testing App
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Text Input
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Type something..."
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              onKeyDown={handleTextInput}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Multi Select
            </label>
            <div className="border border-gray-300 rounded-lg p-3 space-y-2">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleMultiSelectClick(option)}
                  className={`px-4 py-2 rounded cursor-pointer transition-colors ${
                    selectedItems.includes(option)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Selected: {selectedItems.length > 0 ? selectedItems.join(', ') : 'None'}
            </p>
          </div>

          <div>
            <button
              onClick={handleButtonClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
