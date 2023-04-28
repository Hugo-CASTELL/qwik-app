import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Counter from '~/components/starter/counter/counter';
import Hero from '~/components/starter/hero/hero';
import Infobox from '~/components/starter/infobox/infobox';
import Starter from '~/components/starter/next-steps/next-steps';

export default component$(() => {
  return (
    <>
      <h1>Home Page</h1>
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
