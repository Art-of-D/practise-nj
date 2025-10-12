import Link from "next/link";

export default function Meals() {
  return (
    <>
      <main>
        <section>
          <div></div>
          <div>
            <div>
              <h1 className="font-montserrat text-3xl text-transparent font-bold uppercase letter-spacing-wide bg-gradient-to-r from-(--color-orange) to-(--color-yellow) bg-clip-text">
                NextLevel Food for NextLevel Foodies
              </h1>
              <p>Taste & share food from all over the world.</p>
            </div>
            <div>
              <Link href="/community">Join the Community</Link>
              <Link href="/meals">Explore Meals</Link>
            </div>
          </div>
        </section>
        <section>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It`s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It`s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
