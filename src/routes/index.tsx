import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";



export default component$(() => {
  return (
    <>
      <div class="page-index">
        <h1>Salut - page index</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellat, veniam ut tempora labore aliquam dolor officiis enim quae? Culpa nam natus itaque velit ab deleniti perferendis quas voluptas adipisci.</p>
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
