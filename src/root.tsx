import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';
import { supabase } from './misc/supabase';

export default component$(() => {

  useVisibleTask$(async () => {
    // Récupération du statut de connexion
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event: string, session: any) => {
      console.log(event);

      // Si l'utilisateur est connecté
      if (event === "SIGNED_IN") {
        // On envoie les cookies au serveur
      }
      // Si l'utilisateur se déconnecte
      else if (event === "SIGNED_OUT") {
      }
    });

    // Quand le listener est dismount
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  });

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
