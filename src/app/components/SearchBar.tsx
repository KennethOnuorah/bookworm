export default function SearchBar() {
  return (
    <input
      className="transition-all border px-2 py-1 rounded-md border-orange-900/30 font-light w-80 outline-none focus:drop-shadow xl:w-1/3"
      type="search" 
      name="search bar"
      placeholder="Search books"
      autoComplete="off"
    />
  )
}
