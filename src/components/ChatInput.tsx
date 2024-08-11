"use client";
import { Button, Textarea } from "@nextui-org/react";
import { Send } from "lucide-react";
import React from "react";

const ChatInput = () => {
  return (
    <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <form className="relative">
              <Textarea
                minRows={4}
                autoFocus
                placeholder="Enter your question ..."
                className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
              />

              <Button
                size="sm"
                type="submit"
                className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
              >
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
