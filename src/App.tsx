// import Message from "./Message";
// function App() {
//   return (
//     <div>
//       {" "}
//       <Message></Message>{" "}
//     </div>
//   );
// }
// export default App;
import ListGroup from "./components/ListGroup";
function App() {
  let items = [
    "Uganda",
    "Kenya",
    "Tanzania",
    "Rwanda",
    "Burundi",
    "South Sudan",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {" "}
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
