
interface Props {  // interface of props
  list: string[];
  selected: number;
  selectedLink: (value: number) => void;
}


function Header({ list, selected, selectedLink }: Props) {
  return (
    <header className="p-2 pt-4 w-100 bg-sky-400">
      <nav>
        <ul className="flex flex-row gap-4">
          {list.map((item, index) => (
            <li key={item} className={`${selected === index ? "bg-white text-black" : ""} rounded-md px-3 py-1 cursor-pointer`} onClick={() => selectedLink(index)}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header