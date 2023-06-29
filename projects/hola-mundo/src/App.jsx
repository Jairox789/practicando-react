import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    id: 1,
    userName: "jairox789",
    name: "Jairo Ortega",
    initialIsFollowing: false,
  },
  {
    id: 2,
    userName: "midudev",
    name: "midudev",
    initialIsFollowing: true,
  },
  {
    id: 3,
    userName: "antonio89",
    name: "Jesus Antonio",
    initialIsFollowing: false,
  },
];

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      {users.map((user) => {
        const { id, userName, name, initialIsFollowing } = user;
        return (
          <TwitterFollowCard
            key={id}
            userName={userName}
            name={name}
            formatUserName={formatUserName}
            initialIsFollowing={initialIsFollowing}
          />
        );
      })}
    </section>
  );
}
