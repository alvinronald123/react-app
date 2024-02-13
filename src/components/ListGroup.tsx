import { useState } from "react";
// import { MouseEvent } from "react";
// import { Fragment, useState } from "react";
// import { MouseEvent } from "react";

// interface Props {
//   items: string[];
//   heading: string;
// }

// function ListGroup({ items, heading }: Props) {
//   // const items = ["Newyok", "Kampala", "Paris", "London", "Tokyo"];

//   //let slectedIndex = 0;
//   const [slectedIndex, setSelectedINdex] = useState(-1);
//   //const message = items.length === 0 ? <p>No item Found </p> : null;

//   /*const getMessage = () => {
//     return items.length === 0 ? <p> No Item Found </p> : null;
//   };
//   */

//   // const handleClick = (events: MouseEvent) => console.log(events);

//   return (
//     <Fragment>
//       <h1>{heading}</h1>
//       {items.length === 0 ? <p>No item Found </p> : null}
//       {items.length === 0 && <p>No item Found </p>}
//       <ul className="list-group">
//         {items.map((items, index) => (
//           <li
//             className={
//               slectedIndex === index
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//             onClick={() => setSelectedINdex(index)}
//             key={items}
//           >
//             {" "}
//             {items}{" "}
//           </li>
//         ))}
//       </ul>
//     </Fragment>
//   );
// }
// export default ListGroup;
//function ListGroup() {
// if (items.length === 0) {
//   return (
//     <>
//       <h1>List</h1>
//       <p> No Item Has Been Found </p>
//     </>
//   );
// }
// const getMessage = () => {
//  return items.length === 0 ? <p>No items Found.. </p> : null;
// };
//let selectedIndex = -1;
// const handleClick = (event: MouseEvent) => console.log(event);
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {/* {items.length === 0 ? <p>No items Found.. </p> : null} */}
        {/* {getMessage()} */}
        {items.length === 0 && <p>No items Found.. </p>}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
