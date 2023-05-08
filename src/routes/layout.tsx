import { component$, Slot, } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="bg-stone-50">
      <main>
        <Slot />
      </main>
    </div>
  );
});
