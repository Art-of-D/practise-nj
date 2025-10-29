import Link from "next/link";
import Images from "@/components/Images";

export default function Home() {
  return (
    <main className="mt-10 flex flex-col gap-5 items-center">
      <section className="flex gap-10 mr-3 ml-3 max-w-6xl w-5/6 h-96">
        <div className="relative w-2xl h-[25rem]">
          <Images />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl text-transparent font-bold uppercase letter-spacing-wide bg-gradient-to-r from-(--color-orange) to-(--color-yellow) bg-clip-text">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="font-2xl flex gap-10">
            <Link
              href="/community"
              className="inline-block mt-1 px-0.5 py-1 rounded-lg bg-transparent font-normal text-(--color-yellow) hover:text-(--color-orange) "
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block mt-1 px-0.5 py-1 rounded-lg text-white font-bold  bg-gradient-to-r from-(--color-orange) to-(--color-yellow) hover:bg-gradient-to-r hover:from-(--color-yellow) hover:to-(--color-orange) "
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col  max-w-3xl mt-10 mx-2 text-center gap-3">
        <h2 className="text-2xl font-bold">How it works</h2>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It`s a place to discover new dishes, and to
          connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>

      <section className="flex flex-col max-w-3xl mr-2 ml-2 text-center gap-3">
        <h2 className="text-2xl font-bold">Why NextLevel Food?</h2>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It`s a place to discover new dishes, and to
          connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>
    </main>
  );
}
