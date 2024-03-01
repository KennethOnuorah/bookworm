export default function Footer() {
  return (
    <footer>
      <div className='flex flex-col justify-center items-center bg-black text-white px-20 py-2 sm:flex-row sm:justify-between sm:items-start font-light'>
        <div>
          Created by Kenneth Onuorah
        </div>
        <div>
          Copyright &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}