import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {


  return (
    <div class="bg-green-700 shadow-md rounded p-4">
        <div class="mb-2 pb-2 border-b-2 border-gray-200">
          <Slot name="title" />
        </div>

        <div class="my-2">
          <Slot name="content" />
        </div>

        <div class="mt-6 text-center">
          <Slot name="footer" />
        </div>
    </div>
  )
})