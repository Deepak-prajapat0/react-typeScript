import { ReactNode, useState } from "react"
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'

interface Props{
    children:ReactNode  // for getting any html tag or component
}

export default function Home({children}:Props) {

  const [like,setLike] = useState(false)

  return (
    <div>
      <br />
      <div>Home {children}</div>
      <span onClick={()=>setLike(!like)}>
        {like ? <AiFillHeart color={'red'} size={40} /> : <AiOutlineHeart size={40} />}
      </span>
    </div>
  );
}
