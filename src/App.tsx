import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: String) => {
  //   console.log(item);
  // };

  return (
    <div>
      {
        /* <ListGroup
        item={items}
        heading="Cities"
        onSelectItem={ handleSelectItem}
      /> */
        <Alert>
          Hello<span>World</span>{" "}
        </Alert>
      }
    </div>
  );
}

export default App;
