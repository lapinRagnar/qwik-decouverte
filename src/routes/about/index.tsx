import { component$, useStyles$ } from '@builder.io/qwik'
import AboutStyles from './about.css?inline'

export default component$(() => {

  console.log('about')
  useStyles$(AboutStyles)

  return (
    <>
      <article>
        <h2>A propos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia dolores in obcaecati quod et porro accusamus voluptate. Cum hic accusamus dignissimos porro facere maxime adipisci unde delectus pariatur!</p>
      </article>
    </>
  )
})