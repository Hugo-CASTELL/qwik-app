import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navigation = component$(() => {
  return (
    <div class="flex items-center justify-between py-3 px-5
                bg-stone-100">
      <div>LOGO</div>
      <ul class="flex space-x-10">
        <li><Link href='/'>Accueil</Link></li>
        <li><Link href='/test'>Page de test</Link></li>
      </ul>
    </div>
  )
});
