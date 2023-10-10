import { component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";



export default component$(() => {

  const name = useSignal("lapinRagnar")
  const person = useStore({
    name: "lapinRagnar",
    age: 55
  })

  return (
    <>
      <div class="page-index">
        <h1>Page index</h1>
        <h2>Bonjour - { name.value } </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellat, veniam ut tempora labore aliquam dolor officiis enim quae? Culpa nam natus itaque velit ab deleniti perferendis quas voluptas adipisci.</p>
        <h4>Monsieur - { person.name } a { person.age } ans</h4>
        <button onClick$={() => name.value = "grochabe"}>changer le premier nom</button>
        <button onClick$={() => person.name = "grochabe"}>changer le deuxieme nom</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "un blog pour esseyer Qwik!",
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
    }
  ]
};
