import Link from "next/link";
const NotFound = () => {
  return (
    <div className="justify-center">
      <iframe
          allow="fullscreen"
          height="270"
          src="https://giphy.com/embed/H8oJsiC2isDdEPZhtJ/video"
          width="480"
        ></iframe>
      <h1>Oooops...</h1>
      <h2>You Shouldn't be here.</h2>
      <p>
        Let's get you{" "}
        <Link href="/" className="text-red-500 hover:text-green-500">
          back to safety...
        </Link>
      </p>
    </div>
  );
};
export default NotFound;
