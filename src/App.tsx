import Container from "./components/Container";

import Clock from "./components/ClockFromClocks";
import Sequence from "./components/Sequence";
import Wallpaper from "./components/Wallpaper";

const App: React.FC = () =>
{
  return (
    <Container>
      <Clock />
    </Container>
  );
}

export default App;
