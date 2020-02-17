import React from "react";
import Header from "../Header";
import TodoItemsList from "../TodoItemsList";

const App: React.FC = ({}) => {
  return (
    <>
      <Header />
      <div className='container'>
        <TodoItemsList
          todoList={[
            {
              id: 1,
              name: "Набрать воды",
              dateEnd: Date.now(),
              status: false,
            },
            {
              id: 2,
              name: "Наколоть дров",
              dateEnd: Date.now(),
              status: true,
            },
            {
              id: 3,
              name: "Замесить тесто",
              dateEnd: Date.now(),
              status: false,
            },
          ]}
        />
      </div>
    </>
  );
};

export default App;
