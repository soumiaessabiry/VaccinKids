# VaccinKids
creat simple projet react tailwind  : 
nvm --version
===> npm create vite@latest frontend -- --template react
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
pages: 
Commencer par ces 7 pages :
Login - Point d'entrée
Dashboard Infirmier - Centre de travail
Liste Enfants - Base de données
Ajouter Enfant - Onboarding
Nouvelle Vaccination - Action principale
Scanner QR - Gain de temps
Enfants en Retard - CRITIQUE santé publique
Puis ajouter :
Dashboard Parent - Interface parent
Dashboard Admin - Interface admin
Mes Rendez-vous - Gestion RDV
""""""""""""""#################################""""""""""""""""""""""""""""
les pages 
/login — Connexion (déjà créée)
/register — Inscription parent
/infirmier/dashboard — Dashboard infirmier (stats, graphiques, alertes)
/infirmier/enfants — Liste enfants avec recherche/filtres
/infirmier/enfants/ajouter — Ajouter un enfant
/infirmier/enfants/:id — Profil enfant (onglets: infos, carnet, RDV)
/infirmier/vaccinations/nouvelle — Enregistrer vaccination
/infirmier/scan-qr — Scanner QR enfant
/infirmier/calendrier — Calendrier rendez-vous
/infirmier/enfants-retard — Liste enfants en retard
/parent/dashboard — Dashboard parent (enfants, RDV)
/parent/enfants — Liste des enfants du parent
/parent/enfants/:id — Profil enfant (lecture seule)
/parent/rendez-vous — Rendez-vous du parent
/admin/dashboard — Dashboard admin (stats nationales)
/admin/centres — Gestion des centres
/admin/utilisateurs — Gestion des utilisateurs