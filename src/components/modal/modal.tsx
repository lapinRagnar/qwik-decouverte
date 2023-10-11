import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline";

interface ModalProps {
  size: 'sm' | 'lg',
  frosted ?: boolean
}

export const Modal = component$((props: ModalProps) => {

  useStyles$(ModalStyles)



  return (
    <div class={`modal`} >
      <div class={`modal-content ${props.size} ${props.frosted && 'frosted'}`}>
        <div class="close">Close</div>
        <main class="main-content">
          <Slot name="content" />
        </main>
        <footer>
          <Slot name="footer" />
        </footer>
      </div>
    </div>
  )
})