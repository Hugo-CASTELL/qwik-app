import { component$, $, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { supabase } from "~/misc/supabase";
import { validateEmail } from "~/workers/worker_user";

// Page d'inscription
export default component$(() => {
  // On déclare que rien ne charge au lancement de la page
  const isLoading = useSignal(false);
  const location = useLocation();

  // Fonction d'inscription
  const handleEmailLogin = $(async (event: any) => {
    // On dit que quelque chose charge dans la page
    isLoading.value = true;

    // Récupération du champ du mail
    var email = event.target.email.value;

    // Vérification du mail
    if (!validateEmail(email))
      return;

    // Demande d'authentification
    await supabase.auth.signInWithOtp({ email: email, options: { emailRedirectTo: location.url + "/staging" } });
  });

  return (
    <div class="grid h-screen place-items-center">
      <div id="Encapsuler" class="text-center">

        <div id="Title" class="mb-5">
          <div class="text-black font-bold text-3xl mb-2">Connexion</div>
          <div class="text-gray-500 font-semibold text-sm">Ou <Link href="/signup" class="text-sky-500">je n'ai pas encore de compte</Link></div>
        </div>

        <div id="Inscription Part" class="bg-white rounded-lg p-5">
          <form class="flex flex-col text-left" preventdefault:submit onSubmit$={handleEmailLogin}>
            <label for="email" class="font-semibold">Adresse e-mail</label>
            <input type="text" id="email" class="border border-slate-300 rounded-sm my-1 p-1" />
            <button type="submit" class="flex-auto border rounded-lg bg-sky-500 hover:shadow-inner py-1" disabled={isLoading.value}><div class="text-white font-semibold">Connexion</div></button>
            <p class="text-xs text-gray-400">Confirmation de connexion par mail.</p>
          </form>
        </div>

      </div>
    </div >
  );
});
