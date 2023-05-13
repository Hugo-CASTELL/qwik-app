import { component$, $, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { supabase } from "~/misc/supabase";

// Page d'inscription
export default component$(() => {
  const isAuthentificated = useSignal(false);
  const navTo = useNavigate();

  useVisibleTask$(() => {
    const timeout = setTimeout(async () => {
      const { data, error } = await supabase.auth.getUser();

      console.log(data);

      // On vérifie que l'utilisateur existe
      if (data?.user?.id && !error) {
        isAuthentificated.value = true;
        navTo("/");
      } else; {
        console.error(error);
        navTo("/login");
      }

    }, 500);

    // Clean listener
    return () => {
      clearTimeout(timeout);
    }

  });

  return (
    <>
      Vérification de l'authentification et redirection vers la <Link href="/">page d'accueil</Link>.
    </>
  );
});
