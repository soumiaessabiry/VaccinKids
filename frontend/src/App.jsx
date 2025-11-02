import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardInfirmier from './pages/infirmier/DashboardInfirmier';
import ListeEnfants from './pages/infirmier/ListeEnfants';
import AjouterEnfant from './pages/infirmier/AjouterEnfant';
import ProfilEnfant from './pages/infirmier/ProfilEnfant';
import ModifierEnfant from './pages/infirmier/ModifierEnfant';
import NouvelleVaccination from './pages/infirmier/NouvelleVaccination';
import HistoriqueVaccinations from './pages/infirmier/HistoriqueVaccinations';
import ScanQR from './pages/infirmier/ScanQR';
import Calendrier from './pages/infirmier/Calendrier';
import ListeRendezVous from './pages/infirmier/ListeRendezVous';
import NouveauRendezVous from './pages/infirmier/NouveauRendezVous';
import EnfantsRetard from './pages/infirmier/EnfantsRetard';
import Statistiques from './pages/infirmier/Statistiques';
import Rapports from './pages/infirmier/Rapports';
import ProfilInfirmier from './pages/infirmier/ProfilInfirmier';
import ModifierVaccination from './pages/infirmier/ModifierVaccination';
import DetailsRendezVous from './pages/infirmier/DetailsRendezVous';
import ParametresInfirmier from './pages/infirmier/ParametresInfirmier';
import NotificationsInfirmier from './pages/infirmier/NotificationsInfirmier';
import AideInfirmier from './pages/infirmier/AideInfirmier';
import ExportEnfant from './pages/infirmier/ExportEnfant';
import ModifierRendezVous from './pages/infirmier/ModifierRendezVous';
import DashboardParent from './pages/parent/DashboardParent';
import ListeEnfantsParent from './pages/parent/ListeEnfants';
import ProfilEnfantParent from './pages/parent/ProfilEnfant';
import CarnetDigital from './pages/parent/CarnetDigital';
import MesRendezVous from './pages/parent/MesRendezVous';
import NotificationsParent from './pages/parent/NotificationsParent';
import DocumentsParent from './pages/parent/DocumentsParent';
import ProfilParent from './pages/parent/ProfilParent';
import ParametresParent from './pages/parent/ParametresParent';
import AideParent from './pages/parent/AideParent';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import CentresListe from './pages/admin/CentresListe';
import AjouterCentre from './pages/admin/AjouterCentre';
import CentreDetails from './pages/admin/CentreDetails';
import UtilisateursListe from './pages/admin/UtilisateursListe';
import AjouterUtilisateur from './pages/admin/AjouterUtilisateur';
import VaccinsListe from './pages/admin/VaccinsListe';
import AjouterVaccin from './pages/admin/AjouterVaccin';
import StatistiquesAdmin from './pages/admin/StatistiquesAdmin';
import LogsAudit from './pages/admin/LogsAudit';
import ParametresAdmin from './pages/admin/ParametresAdmin';
import ProfilAdmin from './pages/admin/ProfilAdmin';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/errors/Error404';
import Error403 from './pages/errors/Error403';
import Error500 from './pages/errors/Error500';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/VaccinKids">
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/infirmier/dashboard" element={<DashboardInfirmier />} />
        <Route path="/infirmier/enfants" element={<ListeEnfants />} />
        <Route path="/infirmier/enfants/ajouter" element={<AjouterEnfant />} />
        <Route path="/infirmier/enfants/:id" element={<ProfilEnfant />} />
        <Route path="/infirmier/enfants/:id/modifier" element={<ModifierEnfant />} />
        <Route path="/infirmier/vaccinations/nouvelle" element={<NouvelleVaccination />} />
        <Route path="/infirmier/vaccinations" element={<HistoriqueVaccinations />} />
        <Route path="/infirmier/scan-qr" element={<ScanQR />} />
        <Route path="/infirmier/calendrier" element={<Calendrier />} />
        <Route path="/infirmier/rendez-vous" element={<ListeRendezVous />} />
        <Route path="/infirmier/rendez-vous/nouveau" element={<NouveauRendezVous />} />
        <Route path="/infirmier/enfants-retard" element={<EnfantsRetard />} />
        <Route path="/infirmier/statistiques" element={<Statistiques />} />
        <Route path="/infirmier/rapports" element={<Rapports />} />
        <Route path="/infirmier/profil" element={<ProfilInfirmier />} />
        <Route path="/infirmier/vaccinations/:id/modifier" element={<ModifierVaccination />} />
        <Route path="/infirmier/rendez-vous/:id" element={<DetailsRendezVous />} />
        <Route path="/infirmier/rendez-vous/:id/modifier" element={<ModifierRendezVous />} />
        <Route path="/infirmier/parametres" element={<ParametresInfirmier />} />
        <Route path="/infirmier/notifications" element={<NotificationsInfirmier />} />
        <Route path="/infirmier/aide" element={<AideInfirmier />} />
        <Route path="/infirmier/enfants/:id/export" element={<ExportEnfant />} />
        {/* Parent routes */}
        <Route path="/parent/dashboard" element={<DashboardParent />} />
        <Route path="/parent/enfants" element={<ListeEnfantsParent />} />
        <Route path="/parent/enfants/:id" element={<ProfilEnfantParent />} />
        <Route path="/parent/enfants/:id/carnet" element={<CarnetDigital />} />
        <Route path="/parent/rendez-vous" element={<MesRendezVous />} />
        <Route path="/parent/notifications" element={<NotificationsParent />} />
        <Route path="/parent/documents" element={<DocumentsParent />} />
        <Route path="/parent/profil" element={<ProfilParent />} />
        <Route path="/parent/parametres" element={<ParametresParent />} />
        <Route path="/parent/aide" element={<AideParent />} />
        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/centres" element={<CentresListe />} />
        <Route path="/admin/centres/ajouter" element={<AjouterCentre />} />
        <Route path="/admin/centres/:id" element={<CentreDetails />} />
        <Route path="/admin/utilisateurs" element={<UtilisateursListe />} />
        <Route path="/admin/utilisateurs/ajouter" element={<AjouterUtilisateur />} />
        <Route path="/admin/vaccins" element={<VaccinsListe />} />
        <Route path="/admin/vaccins/ajouter" element={<AjouterVaccin />} />
        <Route path="/admin/statistiques" element={<StatistiquesAdmin />} />
        <Route path="/admin/logs" element={<LogsAudit />} />
        <Route path="/admin/parametres" element={<ParametresAdmin />} />
        <Route path="/admin/profil" element={<ProfilAdmin />} />
        {/* Public & Errors */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/403" element={<Error403 />} />
        <Route path="/500" element={<Error500 />} />
        <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
