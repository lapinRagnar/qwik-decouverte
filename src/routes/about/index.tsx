import { component$, useSignal, useStyles$ } from '@builder.io/qwik'
import AboutStyles from './about.css?inline'
import { Modal } from '~/components/modal/modal'

export default component$(() => {

  console.log('about')
  useStyles$(AboutStyles)

  const modalVisible = useSignal(false)

  return (
    <>
      <article>
        <h2>A propos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>

        <button onClick$={() => modalVisible.value = !modalVisible.value}>Ouvrir le modal</button>
      
        {modalVisible.value && 
        <Modal>
          <div q:slot='content'>
            <h2>Salut tout le monde - modal titre avec un slot nommé</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, nostrum. Fugiat laboriosam culpa doloremque consectetur dignissimos omnis, mollitia velit blanditiis laudantium recusandae distinctio officiis nulla cumque quae dolores iste labore.</p>
          </div>

          <div q:slot='footer'>
            footer du modal avec slot nommé
            <button>S'enregistrer !!!</button>
          </div>
        </Modal>
        
        }

      </article>
    </>
  )
})