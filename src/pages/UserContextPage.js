import React, { useContext } from 'react'
import { ThemeContext } from '../Context'

// 函数式组件useContext取数据
export default function UserContextPage() {
  const context = useContext(ThemeContext)
  const { themeColor } = context
  return (
    <div className='border'>
      <h3 className={themeColor}>UserContextPage</h3>
    </div>
  )
}

// 函数式组件Consumer取数据
// import { ThemeConsumer } from "../Context";

// export default function UserContextPage() {
//   return (
//     <div className="border">
//       <ThemeConsumer>
//         {
//           ({ themeColor }) => {
//             return <h3 className={themeColor}>UserContextPage</h3>
//           }
//         }
//       </ThemeConsumer>
//     </div>
//   )
// }
