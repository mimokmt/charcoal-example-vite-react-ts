import { ThemeProvider } from "styled-components";
import {
  Button,
  DropdownMenuItem,
  DropdownSelector,
  TextArea,
  TextField,
} from "@charcoal-ui/react";
import { TokenInjector } from "@charcoal-ui/styled";
import { light } from "@charcoal-ui/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <TokenInjector theme={{ ":root": light }} background="background1" />

        <div className="mx-auto my-16 max-w-5xl">
          <h1 className="typography-20 mb-24">Charcoal Example</h1>
          <form
            className="flex gap-y-fixed flex-col"
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField placeholder="Name" label="name" />
            <TextArea placeholder="Description" label="description" />
            <div className="flex justify-around gap-x-fixed">
              <DropdownSelector
                label="dropdown"
                value="foo"
                onChange={() => {}}
              >
                <DropdownMenuItem key="foo" value="foo">
                  Foo
                </DropdownMenuItem>
                <DropdownMenuItem key="bar" value="bar">
                  Bar
                </DropdownMenuItem>
              </DropdownSelector>

              <Button variant="Primary" className="self-end">
                Button
              </Button>
            </div>
          </form>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
