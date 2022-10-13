import { CirclesThreePlus, Envelope, Lock } from "phosphor-react";
import { useState } from "react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Header } from "./components/Header";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./styles/global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen bg-brand-grey-900 flex flex-col items-center justify-center">
      <header className="flex flex-col items-center gap-2">
        <CirclesThreePlus size={100} className="text-brand-lilac-300" />
        <Header size="lg" className="text-brand-white mt-1">
          TicToe
        </Header>
        <Text size="lg" className="text-brand-grey-200">
          Log in and start using now
        </Text>
      </header>
      <form className="flex flex-col gap-4 items-stretch mt-10 w-full max-w-[400px]">
        <label htmlFor="email" className="flex flex-col gap-2">
          <Text className="font-semibold">Email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Type in your email address"
            ></TextInput.Input>
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-2">
          <Text className="font-semibold">Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="Type in your email address"
            ></TextInput.Input>
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm">Remember me on this computer?</Text>
        </label>
        <Button type="submit" className="mt-4">
          Log In
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-2 mt-8">
        <Text asChild size="sm">
          <a
            href="#"
            className="text-brand-grey-500 underline hover:text-brand-grey-200"
          >
            Forgot my password
          </a>
        </Text>
        <Text asChild size="sm">
          <a
            href="#"
            className="text-brand-grey-500 underline hover:text-brand-grey-200"
          >
            Don't have an account? Sign up
          </a>
        </Text>
      </footer>
      {/* <Text size="lg">Email</Text> */}
    </div>
  );
}

export default App;
