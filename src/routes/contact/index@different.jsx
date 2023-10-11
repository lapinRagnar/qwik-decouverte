import { component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik"
import ContactStyles from "./contact.css?inline"


export default component$(() => {

  useStylesScoped$(ContactStyles)

  const formVisible = useSignal(false)
  const formState = useStore({
    name: '',
    message: ''
  })

  return (
    
    <article>
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>

      <button onClick$={() => formVisible.value = !formVisible.value}>Contacter moi</button>

      
      {
        formVisible.value && (
          <form
            preventdefault:submit
            onSubmit$={() => {
              console.log(formState.name, formState.message)
              formState.name = ''
              formState.message = ''
            }}
          >
          <label>
            <span>Ton nom :</span>
            <input 
              type="text" 
              value={formState.name}
              onInput$={(e) => formState.name = e.target.value}
            />
          </label>
  
          <label>
            <span>Ton message</span>
            <textarea
              value={formState.message}
              onInput$={(e) => formState.message = e.target.value}
            ></textarea>
          </label>
  
          <button>Envoyer</button>

          <p>{formState.name} : {formState.message}</p>

        </form>
        )
      }


    </article>
    
    
  )
})