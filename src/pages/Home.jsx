import React from "react";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import Movie from "../components/Movie";
import { useState } from "react";

function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [ movie, setMovie ] = useState("");

  return (
    <>
      <div>
        <Movie isOpen={isOpen} onOpenChange={onOpenChange} query={movie}/>
      </div>
      <div className="w-full flex items-center bg-black h-screen">
        <div className="flex gap-4 m-auto w-1/2">
          <Input
            // name="movie"
            type="text"
            placeholder="Search movie"
            required
            // className="w-[50vh]"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />
          <Button isIconOnly onPress={isOpen} color="danger">
            &#8594;
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
