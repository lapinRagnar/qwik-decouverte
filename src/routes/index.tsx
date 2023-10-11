import { Resource, component$,   } from "@builder.io/qwik";
// import { routeLoader$, type DocumentHead, type RequestHandler  } from "@builder.io/qwik-city";
import { routeLoader$, type DocumentHead, Link  } from "@builder.io/qwik-city";
import Card from "~/components/card/card";


interface BlogDataInterface {
  id: string,
  title: string,
  content: string
}

export const useBlogData = routeLoader$(async () => {
  const response = await fetch('http://localhost:3000/blogs', {
    headers: { Accept: 'application/json' },
  })
  return (await response.json()) as BlogDataInterface[]
})



export default component$(() => {

  const blogsData = useBlogData()

  return (
    <>
      <div class="page-index">

        <h1>Utilisation de fetch - avec json-server </h1>

        <Resource 
          value={blogsData}
          onPending={() => <>loading...</>}
          onResolved= {
            (blogs) => (
              <div class="blogs">
                { 
                  blogs.map((blog, i) => (
                    
                    <Card key={i}>
                       <h1 q:slot="title">{blog.title}</h1>
                       <p q:slot="content" class="content">{blog.content.slice(0,30)}</p>
                       <Link q:slot="footer" class="bouton_lire" href={"/blog/" + blog.id }>Lire plus...</Link>

                    </Card>

                    // <div key={i}>

                    //   <h1>{blog.title}</h1>
                    //   <p class="content">{blog.content.slice(0,30)}</p>

                    //   <Link class="bouton_lire" href={"/blog/" + blog.id }>Lire plus...</Link>

                    // </div>
                  ))
                }
              </div>
            )
          }
        />


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
