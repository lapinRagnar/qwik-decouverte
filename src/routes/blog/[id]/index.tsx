import { Resource, component$, useStyles$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"

import blogStyles from './blog.css?inline'


interface BlogDataInterface {
  id: string,
  title: string,
  content: string
}

export const useBlogData = routeLoader$(async ({ params, status, redirect }) => {
  
  
  const response = await fetch('http://localhost:3000/blogs/' + params.id, {
    headers: { Accept: 'application/json' },
  })
  

  if (!response.ok) {
    console.log('response pas ok')
    status(404)
    throw redirect(302, '/')
    
  }

  return (await response.json()) as BlogDataInterface

})

export default component$(() => {

  useStyles$(blogStyles)
    
  const blogData = useBlogData()

  return (
    <div class="blog">
      <Resource 
        value={blogData}
        onPending={() => <>loading...</>}
        onResolved={(blog) => (
          <div>
            <h2>{ blog.title}</h2>
            <p> { blog.content }</p>
          </div>
        )}
      />
    </div>
  )
})