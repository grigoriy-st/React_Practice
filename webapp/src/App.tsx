export const App = () => {
  const ideas = [
    { nick: "cool-nick", name: "Idea 1", description: "Description first" },
    { nick: "cool-nick1", name: "Idea 2", description: "Description second" },
    { nick: "cool-nick2", name: "Idea 3", description: "Description third" },
    { nick: "cool-nick3", name: "Idea 4", description: "Description fourth" },
  ];
  return (
    <div>
      <h1>Hello world</h1>
      {ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        );
      })}
    </div>
  );
};
