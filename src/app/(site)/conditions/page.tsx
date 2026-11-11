import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";
import { routes, siteConfig } from "@/lib/site-config";

const { name } = siteConfig;

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: `Les règles qui encadrent l'utilisation de ${name} par les commerçants, leurs équipes et les livreurs.`,
};

const sections: LegalSection[] = [
  {
    id: "objet",
    navTitle: "Objet",
    body: (
      <p>
        {name}, édité par [raison sociale] ([adresse], Lomé, Togo), est une application web qui
        permet aux commerçants de gérer leur catalogue, leur stock, leurs commandes, leurs factures,
        leurs livraisons et leur comptabilité à partir des ventes réalisées sur WhatsApp Business.
      </p>
    ),
  },
  {
    id: "compte",
    navTitle: "Compte et accès",
    body: (
      <ul>
        <li>
          Le compte est créé avec un numéro de téléphone vérifié par code (OTP). Les informations
          fournies doivent être exactes.
        </li>
        <li>
          Vous êtes responsable de l&apos;accès à votre téléphone et de toute action réalisée depuis
          votre compte.
        </li>
        <li>
          Le propriétaire peut inviter des employés et définir leurs droits. Il reste responsable de
          leurs actions dans l&apos;application.
        </li>
      </ul>
    ),
  },
  {
    id: "whatsapp",
    navTitle: "Connexion à WhatsApp",
    title: "Connexion à WhatsApp Business",
    body: (
      <>
        <p>
          {name} fonctionne en se connectant à votre compte WhatsApp Business via l&apos;API de
          Meta. Vous devez respecter les conditions et politiques commerciales de WhatsApp. Un
          produit refusé par Meta ne peut pas apparaître dans votre catalogue WhatsApp, et {name}{" "}
          n&apos;a pas la main sur ces décisions.
        </p>
        <p>
          {name} n&apos;est ni affilié à Meta ni approuvé par Meta. Une interruption du service
          WhatsApp ou de son API peut limiter le fonctionnement de {name}.
        </p>
      </>
    ),
  },
  {
    id: "usage",
    navTitle: "Usage autorisé",
    body: (
      <>
        <p>Vous vous engagez à ne pas utiliser {name} pour :</p>
        <ul>
          <li>
            vendre des produits ou services interdits par la loi togolaise ou par les politiques de
            WhatsApp ;
          </li>
          <li>envoyer des messages non sollicités ou trompeurs ;</li>
          <li>
            tenter d&apos;accéder aux données d&apos;autres utilisateurs ou de perturber le service.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ventes",
    navTitle: "Ventes, factures et paiements",
    body: (
      <>
        <p>
          {name} est un outil de gestion : la vente est conclue entre le commerçant et son client,
          et {name} n&apos;y est pas partie. Les paiements (espèces, Mixx by Yas, Moov Money) sont
          réglés directement entre eux ; {name} n&apos;encaisse aucun fonds.
        </p>
        <p>
          Les factures sont générées à partir des informations saisies par le commerçant, qui reste
          responsable de leur exactitude et des mentions légales qui s&apos;appliquent à son
          activité.
        </p>
      </>
    ),
  },
  {
    id: "livraisons",
    navTitle: "Livraisons",
    body: (
      <p>
        {name} met le commerçant en relation avec des livreurs et permet de suivre les courses. Les
        conditions de la livraison (frais, délais, responsabilité en cas de perte ou de dommage)
        sont [à préciser selon le modèle retenu : livreurs du commerçant, de la plateforme ou les
        deux].
      </p>
    ),
  },
  {
    id: "tarifs",
    navTitle: "Tarifs",
    body: (
      <p>
        [Conditions tarifaires à définir : offre gratuite, abonnement, commissions.] Toute
        modification des tarifs est annoncée au moins [délai] à l&apos;avance dans
        l&apos;application.
      </p>
    ),
  },
  {
    id: "propriete",
    navTitle: "Propriété intellectuelle",
    body: (
      <p>
        L&apos;application, sa marque et son design appartiennent à [raison sociale]. Vos contenus
        (photos, descriptions, logo) restent les vôtres ; vous nous autorisez à les utiliser
        uniquement pour faire fonctionner le service, par exemple pour les publier dans votre
        catalogue WhatsApp et sur vos factures.
      </p>
    ),
  },
  {
    id: "responsabilite",
    navTitle: "Responsabilité",
    title: "Disponibilité et responsabilité",
    body: (
      <p>
        Nous faisons notre possible pour que {name} soit disponible et fiable, y compris avec une
        connexion lente, sans pouvoir garantir une disponibilité permanente. Dans les limites
        permises par la loi, {name} n&apos;est pas responsable des pertes liées à une vente, à une
        livraison ou à une interruption de services tiers comme WhatsApp ou les opérateurs de mobile
        money.
      </p>
    ),
  },
  {
    id: "resiliation",
    navTitle: "Suspension et résiliation",
    body: (
      <p>
        Vous pouvez fermer votre compte à tout moment depuis les réglages. Nous pouvons suspendre un
        compte qui enfreint ces conditions, après vous en avoir informé sauf en cas d&apos;urgence.
        Vos données sont ensuite traitées comme indiqué dans la{" "}
        <Link href={routes.privacy}>politique de confidentialité</Link>.
      </p>
    ),
  },
  {
    id: "droit-applicable",
    navTitle: "Droit applicable",
    body: (
      <>
        <p>
          Ces conditions sont régies par le droit togolais. En cas de litige, nous chercherons
          d&apos;abord une solution à l&apos;amiable ; à défaut, les juridictions compétentes de
          Lomé seront saisies.
        </p>
        <p>
          Contact : {siteConfig.contact.email} · {siteConfig.contact.whatsapp}.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Conditions d'utilisation"
      summary={`Les règles qui encadrent l'utilisation de ${name} par les commerçants, leurs équipes et les livreurs.`}
      intro={`En créant un compte ou en utilisant ${name}, vous acceptez les présentes conditions. Si vous les refusez, n'utilisez pas le service.`}
      accent="sun"
      sections={sections}
      closing={{
        text: "Prêt à gérer votre boutique autrement ?",
        href: routes.signupSection,
        label: "Créer mon compte",
        tone: "ink-soft",
      }}
      current={routes.terms}
    />
  );
}
