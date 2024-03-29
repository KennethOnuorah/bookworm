export default function SearchBar() {
  return (
    <input
      className="transition-all border px-2 py-1 rounded-md border-amber-900/20 font-light w-80 outline-none focus:drop-shadow xl:w-1/3 hidden md2:block"
      type="search" 
      name="search bar"
      placeholder="Search books"
      autoComplete="off"
    />
  )
}
