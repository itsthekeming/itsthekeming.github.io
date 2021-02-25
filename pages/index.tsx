export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen space-y-8 bg-gray-800 text-gray-200 text-center">
      <h1 className="text-9xl">Hello</h1>
      <p className="text-4xl">I&apos;m Edward</p>
      <p className="text-4xl">This is my personal website</p>
      <p className="text-4xl">I&apos;ll be building it out over the coming months</p>
      <p className="text-4xl">For now, here&apos;s where you can find me:</p>
      <span className="flex flex-row space-x-8 text-2xl underline active:text-gray-50">
        <a href="https://twitter.com/itsthekeming">Twitter</a>
        <a href="https://github.com/itsthekeming">GitHub</a>
        <a href="https://www.linkedin.com/in/esanders1994/">LinkedIn</a>
      </span>
    </div>
  );
}
