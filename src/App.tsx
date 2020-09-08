/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FunctionComponent } from "react";
import { Playground } from "./pages/Playground";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <h1
        css={css`
          text-align: center;
        `}
      >
        Lets play kółko i krzyżyk!
      </h1>
      <Playground />
    </div>
  );
};

export default App;
