import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline";

export const Modal = component$(() => {

  useStylesScoped$(ModalStyles)

  return (
    <div class="modal">
      <div class="modal-content">
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