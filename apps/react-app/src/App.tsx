import { ReactButton } from '@frontend-monorepo/ui-components';

function App() {
  const handleClick = () => {
    alert('Hello from React!');
  };

  return (
    <div className="app">
      <div className="button-container">
        <ReactButton onClick={handleClick}>
          Click me (React)
        </ReactButton>
      </div>
    </div>
  );
}

export default App;
