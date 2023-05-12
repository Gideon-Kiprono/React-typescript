import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const handleClick = () => {
    console.log("Button Clicked");
  };
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: String) => {
  //   console.log(item);
  // };

  return (
    <div>
      {
        /* /* <ListGroup
        item={items}
        heading="Cities"
        onSelectItem={ handleSelectItem}
      /> */
        // <Alert>
        //   Hello<span>World</span>{" "}
        // </Alert> */}
        <Button onClick={handleClick}>Click Me</Button>
      }
    </div>
  );
}

export default App;
