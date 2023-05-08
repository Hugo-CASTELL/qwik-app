import { component$, $, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { supabase } from "~/misc/supabase";
import { validateEmail } from "~/workers/worker_user";

var buttonStyle: string = "border border-slate-100 rounded-full px-10 py-2 shadow-sm hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out";

// Page d'inscription
export default component$(() => {
  // On déclare que rien ne charge au lancement de la page
  const isLoading = useSignal(false);

  // Fonction d'inscription
  const handleEmailSignup = $(async (event: any) => {
    // On dit que quelque chose charge dans la page
    isLoading.value = true;

    // Récupération du champ du mail
    var email = event.target.email.value;

    // Vérification du mail
    if (!validateEmail(email))
      return;

    // Création de l'utilisateur
    const { data, error } = await supabase.auth.signUp({ email: email, password: "petit océan" });

    console.log(data);
    console.log(error);
  });

  return (
    <div class="grid h-screen place-items-center">
      <div id="Encapsuler" class="text-center">

        <div id="Title" class="mb-5">
          <div class="text-black font-bold text-3xl mb-2">Inscription</div>
          <div class="text-gray-500 font-semibold text-sm">Ou <Link href="/login" class="text-sky-500">j'ai déjà un compte</Link></div>
        </div>

        <div id="Inscription Part" class="bg-white rounded-lg p-5">
          <div id="Buttons" class="flex justify-evenly">
            <Link class={buttonStyle + " mr-2"}>Google</Link>
            <Link class={buttonStyle}>Github</Link>
          </div>

          <hr class="mx-auto my-3" />

          <form class="flex flex-col text-left" preventdefault:submit onSubmit$={handleEmailSignup}>
            <label for="email" class="font-semibold">Adresse e-mail</label>
            <input type="text" id="email" class="border border-slate-300 rounded-sm my-1 p-1" />
            <div class="inline text-sm text-stone-500">
              <input type="checkbox" id="agreements" class="border border-slate-300 rounded-sm mr-2" />
              <label for="agreements">J'accepte les closes</label>
            </div>
            <button type="submit" class="flex-auto border rounded-lg bg-sky-500 hover:shadow-inner py-1" disabled={isLoading.value}><div class="text-white font-semibold">Inscription</div></button>
            <p class="text-xs text-gray-400">Pas de mot de passe. Confirmation par mail.</p>
          </form>
        </div>

      </div>
    </div >
  );
});
