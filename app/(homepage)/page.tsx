export default function Homepage() {
  return (
    <main>
      <section className="mx-auto flex h-screen max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="h1 font-bold">Heading using Font Display</h1>
        <h3 className="h3 font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem aspernatur tenetur accusantium, voluptates dolorum sint
          modi laborum omnis, soluta excepturi, aliquam neque ut at.
        </p>
        <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
          Button
        </button>
      </section>
    </main>
  );
}
