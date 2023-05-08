import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1 class="text-black">Home Page</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Home page',
  meta: [
    {
      name: 'description',
      content: 'This is my home page',
    },
  ],
};
