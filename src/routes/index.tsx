import { component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";



export default component$(() => {

  const name = useSignal("lapinRagnar")
  const person = useStore({
    name: "lapinRagnar",
    age: 55
  })
  const blogs = useStore([
    {id: 1, title: 'first blog'},
    {id: 2, title: 'second blog'},
    {id: 3, title: 'third blog'},


  ])

  return (
    <>
      <div class="page-index">
        <h1>Page index</h1>
        <h2>Bonjour - { name.value } </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellat, veniam ut tempora labore aliquam dolor officiis enim quae? Culpa nam natus itaque velit ab deleniti perferendis quas voluptas adipisci.</p>
        <h4>Monsieur - { person.name } a { person.age } ans</h4>
        <button onClick$={() => name.value = "grochabe"}>changer le premier nom</button>
        <button onClick$={() => person.name = "grochabe"}>changer le deuxieme nom</button>
     

        <div>
          {blogs.map(blog => (
            <div key={blog.id}>{blog.title}</div>
          ))}
        <button onClick$={() => blogs.pop()}>Supprimer</button>
        </div>


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
