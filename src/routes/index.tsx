import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";



export default component$(() => {
  return (
    <>
      <div>salut</div>
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
