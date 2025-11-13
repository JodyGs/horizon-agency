import React from "react";

export const metadata = {
	title: "Mentions Légales - Horizon",
	description: "Mentions légales du site Horizon - Cybersécurité & Intelligence Artificielle",
};

const MentionsLegales = () => {
	return (
		<div className="min-h-screen bg-white dark:bg-black">
			<div className="container mx-auto px-4 py-20">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl font-bold text-black dark:text-white mb-8">
						Mentions Légales
					</h1>
					
					<div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200">
						<section className="mb-8">
							<h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
								Informations légales
							</h2>
							<p className="mb-4">
								Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l&apos;Économie Numérique, dite L.C.E.N., et à l&apos;article L.111-1 du Code de la consommation, il est porté à la connaissance des utilisateurs et visiteurs du site les présentes mentions légales.
							</p>
							
							<h3 className="text-xl font-semibold text-black dark:text-white mb-3">
								Éditeur du site
							</h3>
							<ul className="mb-6 space-y-2">
								<li><strong>Dénomination :</strong> Jody Gonzales</li>
								<li><strong>Statut :</strong> Auto-entrepreneur</li>
								<li><strong>Adresse :</strong> 65A rue Guy Valayant, 84440 Robion, France</li>
								<li><strong>SIRET :</strong> 789 306 669 00027</li>
								<li><strong>Directeur de la publication :</strong> Jody Gonzales</li>
								<li><strong>Contact :</strong> via le formulaire de contact du site</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
								Hébergement
							</h2>
							<p className="mb-4">
								Ce site est hébergé par :
							</p>
							<ul className="mb-6 space-y-2">
								<li><strong>O2Switch</strong></li>
								<li>Adresse : 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France</li>
								<li>Téléphone : 04 44 44 60 40</li>
							</ul>
							<p className="mb-6">
								Et également par <strong>Vercel Inc.</strong> pour certains services, situé à San Francisco, États-Unis.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
								Propriété intellectuelle
							</h2>
							<p className="mb-4">
								L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
							</p>
							<p className="mb-6">
								La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
								Protection des données personnelles
							</h2>
							<p className="mb-4">
								Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « informatique et libertés » du 6 janvier 1978 modifiée, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de portabilité, de limitation du traitement, d&apos;opposition aux traitements, ainsi que du droit de définir des directives relatives au sort de vos données après votre décès.
							</p>
							<p className="mb-4">
								Les données collectées via ce site sont traitées dans le respect de votre vie privée. Elles ne sont utilisées que dans le cadre de nos services et ne sont jamais communiquées à des tiers sans votre consentement.
							</p>
							<p className="mb-6">
								Pour exercer vos droits, vous pouvez nous contacter via le formulaire de contact du site.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
								Cookies
							</h2>
							<p className="mb-4">
								Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site. Ces cookies ne nécessitent pas de consentement préalable.
							</p>
							<p className="mb-6">
								Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
								Responsabilité
							</h2>
							<p className="mb-4">
								Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l&apos;année, mais peut toutefois contenir des inexactitudes ou des omissions.
							</p>
							<p className="mb-4">
								Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible.
							</p>
							<p className="mb-6">
								Jody Gonzales ne pourra en aucun cas être tenu responsable de tout dommage de quelque nature qu&apos;il soit résultant de l&apos;interprétation ou de l&apos;utilisation des informations et/ou documents disponibles sur ce site.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
								Liens hypertextes
							</h2>
							<p className="mb-4">
								Les liens hypertextes mis en place dans le cadre du présent site web en direction d&apos;autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Jody Gonzales.
							</p>
							<p className="mb-6">
								De même, la création de liens vers ce site doit faire l&apos;objet d&apos;une autorisation préalable expresse.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
								Droit applicable et attribution de juridiction
							</h2>
							<p className="mb-6">
								Tout litige en relation avec l&apos;utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Carpentras.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
								Modifications
							</h2>
							<p>
								Ces mentions légales peuvent être modifiées à tout moment. Les utilisateurs sont invités à les consulter régulièrement.
							</p>
							<p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
								Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MentionsLegales;