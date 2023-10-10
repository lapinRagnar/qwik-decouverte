import { component$, useStylesScoped$ } from "@builder.io/qwik"
import ContactStyles from "./contact.css?inline"


export default component$(() => {

  useStylesScoped$(ContactStyles)

  return (
    
    <article>
      <h2>Contact</h2>
      <p>lorem</p>
    </article>
    
    
  )
})