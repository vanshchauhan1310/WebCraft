function TailwindDemo() {
  return (
    <div className="bg-green-700 px-10 py-4 rounded-lg">
        <div className="bg-white">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <h1 className="text-2xl font-bold text-white">Tailwind CSS Demo</h1>
          </div>
          
          <div className="p-6">
            <p className="text-gray-700 mx-9 my-9">
              This is a demonstration of various Tailwind CSS utility classes.
            </p>
            
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              {['Red', 'Green', 'Blue'].map((color) => (
                <div 
                  key={color}
                  className={`bg-${color.toLowerCase()}-100 border border-${color.toLowerCase()}-400 text-${color.toLowerCase()}-700 p-3 rounded`}
                >
                  {color} Box
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-red-700 md:bg-green-700 sm:bg-blue-600 lg:bg-black" >
              <p>This background changes color at medium screen sizes</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default TailwindDemo;