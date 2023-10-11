import { component$, useStyles$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import HeaderStyles from './styles.css?inline'



export default component$(() => {

  useStyles$(HeaderStyles)

  return (
    <header >
      <nav>
        <img src="/mario_block.jpeg" alt="logo" />

        <h1>Mario Life</h1>
        <ul>
          <li>
            <Link href="/">Acceuil</Link>
          </li>
          <li>
            <Link href="/about">A propos</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
