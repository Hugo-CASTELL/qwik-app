import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Footer } from '~/components/header-footer/footer';
import { Header } from '~/components/header-footer/header';

export default component$(() => {
  return (
    <div class="flex flex-col h-screen">

      <Header />

      <div class="mb-auto">
        <h1 class="text-black">Home Page</h1>
      </div>

      <Footer />

    </div>
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
