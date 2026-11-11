import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";
import { routes, siteConfig } from "@/lib/site-config";

const { name } = siteConfig;

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Quelles données nous traitons, pourquoi, avec qui nous les partageons et comment exercer vos droits.",
};

const sections: LegalSection[] = [
  {
    id: "qui-sommes-nous",
    navTitle: "Qui sommes-nous",
    body: (
      <>
        <p>
          {name} est édité par [raison sociale], [forme juridique] au capital de [montant] FCFA,
          immatriculée au RCCM sous le n° [numéro], dont le siège est situé [adresse], Lomé, Togo.
          Pour les données de nos utilisateurs commerçants, nous sommes responsable du traitement.
        </p>
        <p>Contact pour toute question sur vos données : [adresse e-mail dédiée].</p>
      </>
    ),
  },
  {
    id: "donnees-collectees",
    navTitle: "Données collectées",
    body: (
      <>
        <p>
          <strong>Commerçants et employés :</strong>
        </p>
        <ul>
          <li>numéro de téléphone, nom, rôle dans la boutique ;</li>
          <li>nom, catégorie, ville et quartier de la boutique, logo, horaires ;</li>
          <li>
            informations figurant sur les factures (NIF, RCCM si fournis) et moyens de paiement
            acceptés ;
          </li>
          <li>catalogue, stock, commandes, factures et paiements enregistrés.</li>
        </ul>
        <p>
          <strong>Clients des commerçants</strong>, reçus via WhatsApp : nom de profil, numéro de
          téléphone, contenu de la commande, adresse de livraison et mode de paiement.
        </p>
        <p>
          <strong>Livreurs :</strong> nom, numéro de téléphone, zone, statut des courses et
          encaissements signalés.
        </p>
        <p>
          <strong>Données techniques :</strong> journaux de connexion, type d&apos;appareil et de
          navigateur, nécessaires au fonctionnement et à la sécurité du service.
        </p>
      </>
    ),
  },
  {
    id: "finalites",
    navTitle: "Pourquoi nous les utilisons",
    body: (
      <>
        <ul>
          <li>
            fournir le service : synchroniser le catalogue, recevoir et traiter les commandes,
            générer et envoyer les factures, organiser les livraisons ;
          </li>
          <li>sécuriser votre compte, notamment par la vérification par code (OTP) ;</li>
          <li>vous assister lorsque vous contactez le support ;</li>
          <li>respecter nos obligations légales, notamment comptables ;</li>
          <li>améliorer l&apos;application à partir de statistiques d&apos;usage agrégées.</li>
        </ul>
        <p>
          Nous ne vendons pas vos données et nous ne les utilisons pas pour de la publicité ciblée.
        </p>
      </>
    ),
  },
  {
    id: "donnees-clients",
    navTitle: "Les données de vos clients",
    body: (
      <p>
        Pour les données de ses propres clients, le commerçant est responsable du traitement. {name}{" "}
        les traite uniquement pour son compte et selon ses instructions, afin de gérer ses commandes,
        factures et livraisons. Le commerçant s&apos;engage à informer ses clients de ce traitement.
      </p>
    ),
  },
  {
    id: "partage",
    navTitle: "Partage des données",
    body: (
      <>
        <p>Nous partageons uniquement ce qui est nécessaire, avec :</p>
        <ul>
          <li>
            Meta, via l&apos;API WhatsApp Cloud, pour envoyer et recevoir les messages et
            synchroniser le catalogue ;
          </li>
          <li>le livreur assigné à une commande : nom, numéro et adresse du client concerné ;</li>
          <li>
            nos prestataires techniques : hébergement ([nom du prestataire]), envoi des SMS de
            vérification ([nom du prestataire]) ;
          </li>
          <li>les autorités, lorsque la loi nous y oblige.</li>
        </ul>
      </>
    ),
  },
  {
    id: "transferts",
    navTitle: "Transferts hors du Togo",
    body: (
      <p>
        Certains prestataires, dont Meta et notre hébergeur, peuvent traiter des données hors du
        Togo. Ces transferts sont encadrés conformément à la loi n° 2019-014 et, lorsque celle-ci
        l&apos;exige, soumis aux formalités prévues auprès de l&apos;Instance de protection des
        données à caractère personnel (IPDCP).
      </p>
    ),
  },
  {
    id: "conservation",
    navTitle: "Durée de conservation",
    body: (
      <ul>
        <li>données du compte : tant que le compte est actif, puis [durée] après sa fermeture ;</li>
        <li>factures et données comptables : [durée légale applicable] ;</li>
        <li>journaux techniques : [durée].</li>
      </ul>
    ),
  },
  {
    id: "securite",
    navTitle: "Sécurité",
    body: (
      <p>
        Les échanges sont chiffrés, l&apos;accès aux données est limité selon les rôles
        (propriétaire, employé, livreur) et chaque connexion est protégée par un code de
        vérification. Aucun système n&apos;étant infaillible, nous vous informerons de toute
        violation susceptible de vous affecter.
      </p>
    ),
  },
  {
    id: "vos-droits",
    navTitle: "Vos droits",
    body: (
      <>
        <p>
          Vous pouvez demander l&apos;accès à vos données, leur rectification, leur suppression ou
          vous opposer à certains traitements, en écrivant à [adresse e-mail dédiée]. Nous répondons
          dans un délai de [délai].
        </p>
        <p>
          Vous pouvez aussi adresser une réclamation à l&apos;IPDCP :{" "}
          <a href="https://ipdcp.tg">ipdcp.tg</a>.
        </p>
      </>
    ),
  },
  {
    id: "modifications",
    navTitle: "Modifications",
    body: (
      <p>
        Nous pouvons modifier cette politique. En cas de changement important, nous vous prévenons
        dans l&apos;application avant son entrée en vigueur.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      summary="Quelles données nous traitons, pourquoi, avec qui nous les partageons et comment exercer vos droits."
      intro={`${name} est une application de gestion pour les commerçants qui vendent sur WhatsApp Business. Cette politique explique comment nous traitons les données personnelles, conformément à la loi n° 2019-014 du 29 octobre 2019 relative à la protection des données à caractère personnel au Togo.`}
      accent="lime"
      sections={sections}
      closing={{
        text: "Une question sur vos données ?",
        href: routes.contact,
        label: "Nous contacter",
        tone: "ink",
      }}
      current={routes.privacy}
    />
  );
}
