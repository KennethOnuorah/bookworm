import { Dispatch, RefObject, SetStateAction } from "react"

type Props = {
  innerRef?: RefObject<HTMLInputElement>
  setSearchBarOpened?: Dispatch<SetStateAction<boolean>>
}

export default function SearchBar({ innerRef, setSearchBarOpened } : Props) {
  return (
    <input
      ref={innerRef}
      className="transition-all border px-2 py-1 rounded-md border-amber-900/20 font-light w-full outline-none focus:drop-shadow xl:w-1/3 md2:w-80"
      type="search" 
      name="search bar"
      placeholder="Search books"
      autoComplete="off"
      onBlur={() => setSearchBarOpened && setSearchBarOpened(false)}
    />
  )
}
