
interface Props{
    search:string
    searchData:(data:string)=>void;
}

export default function SearchBar({search,searchData}:Props) {
   
  return (
    <div><input type="search" name="search" className="border border-gray-200" value={search} onChange={(e)=>searchData(e.target.value)}  /></div>
  )
}
