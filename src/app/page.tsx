import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Modern Chat Bot</h1>
      <p>
        For use this chat bot choose a specific webpage that you want to analyse
        it`s content with chat bot, select the page url and paste it after url
        of this page and press enter.
      </p>
      <p>Enjoy chatting</p>
    </main>
  );
}
