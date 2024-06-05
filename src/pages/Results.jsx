import React from "react";
import { Input, Button, Divider } from "@nextui-org/react";
import MovieCards from "../components/MovieCards";

function Results() {
  return (
    <>
      <div className=" bg-black min-h-[100vh] ">
        <div className="w-full text-center m-auto">
          <div className="flex gap-4 w-1/2  pt-[180px] pb-[100px] m-auto">
            <Input type="text" placeholder="Search movie" />
            <Button isIconOnly type="submit" color="danger">
              &#8594;
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-10 m-auto w-fit pb-[100px]">
            <div className="m-auto">
              <MovieCards />
            </div>
            <div className="m-auto">
              <MovieCards />
            </div>
            <div className="m-auto">
              <MovieCards />
            </div>
            <div className="m-auto">
              <MovieCards />
            </div>
            <div className="m-auto">
              <MovieCards />
            </div>
            <div className="m-auto">
              <MovieCards />
            </div>
            <div className="m-auto">
              <MovieCards />
            </div>
            <div className="m-auto">
              <MovieCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
