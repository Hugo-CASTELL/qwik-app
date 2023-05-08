import { component$, $, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

var buttonStyle: string = "border border-slate-100 rounded-full px-10 py-2 shadow-sm hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out";

// Page d'inscription
export default component$(() => {
  return (
    <div class="grid h-screen place-items-center">
      <div id="Encapsuler" class="text-center">

        <div id="Title" class="mb-5">
          <div class="text-black font-bold text-3xl mb-2">Connexion</div>
          <div class="text-gray-500 font-semibold text-sm">Ou <Link href="/signup" class="text-sky-500">je n'ai pas encore de compte</Link></div>
        </div>

        <div id="Inscription Part" class="bg-white rounded-lg p-5">
        </div>

      </div>
    </div >
  );
});
