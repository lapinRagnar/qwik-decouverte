import { component$, useStylesScoped$ } from "@builder.io/qwik"
import ContactStyles from "./contact.css?inline"


export default component$(() => {

  useStylesScoped$(ContactStyles)

  return (
    
    <article>
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>
    </article>
    
    
  )
})