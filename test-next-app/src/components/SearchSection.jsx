const SearchSection = () => {
  return (
    <div className="flex rounded-lg overflow-hidden">
      <input type="text" placeholder="Search..." className="bg-gray-300 w-[500px] p-2"/>
      <button className="bg-blue-900 p-2"><img src="./search.svg" alt="search" /></button>
    </div>
  );
}

export default SearchSection;