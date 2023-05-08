import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

const transitionText: string = "transition ease-out hover:text-sky-400 hover:cursor-hand";

export const Header = component$(() => {
  return (
    <div class="px-5
                bg-white/60 backdrop-blur
                text-sm">
      <div class="flex justify-between py-3 
                  border-b border-slate-900/10">

        <div class="font-bold">
          <Link href='/' class={transitionText}>Site de Hugo</Link>
        </div>

        <ul class="flex space-x-10 font-medium">
          <li><Link href='/login' class={transitionText}>Se connecter</Link></li>

          <li><Link href='/signup' class="py-1 px-2
                                          rounded-full 
                                          text-sky-600
                                          transition duration-300 ease-in-out
                                          bg-sky-400/10 hover:bg-sky-400/40">S'inscrire</Link></li>
        </ul>

      </div>
    </div >
  )
});
