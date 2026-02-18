# Architecture des Écrans - FORGE 🏋️‍♂️

Ce document définit les écrans principaux et les flux utilisateurs pour les personas Léo (Débutant) et Sarah (Confirmée).

---

## 1. Onglet "AUJOURD'HUI" (Dashboard)

_L'écran d'accueil qui s'adapte à l'état de l'utilisateur._

- **Header Dynamique :** Salutation personnalisée par l'IA ("Salut Léo, prêt pour ton haut du corps ?").
- **Bouton Action Principal (CTA) :** "DÉMARRER LA SÉANCE".
- **Résumé de Progression :**
  - _Léo :_ Jauge de complétion du programme (ex: "Séance 4/12").
  - _Sarah :_ Derniers records personnels (PR).

---

## 2. Onglet "SÉANCE ACTIVE" (Mode Entraînement)

_Interface minimaliste axée sur l'exécution._

- **Zone Média :** Vidéo de démonstration pour Léo.
- **Consigne IA :** Texte clair (ex: "Série 2/3 : 10 répétitions à 40kg").
- **Bouton [Validé] :** Enregistre la réussite et lance le chrono de repos.
- **Chrono de Repos :** Décompte automatique avec boutons:
  - **Bouton [Ajouter une note] :** Ouvre un champ de saisie textuel.
  - **Bouton [Passer le repos]**

---

## 3. Onglet "COACH IA" (Espace Conversationnel)

_Le centre de support et d'éducation._

- **Interface de Chat :** Fil de discussion fluide avec le coach.
- **Boutons de Questions Rapides (Chips) :**
  - "J'ai une courbature, je fais quoi ?"
  - "Explique-moi le mouvement du Squat."
  - "J'ai raté ma diète hier."
  - "Pourquoi ce programme ?"
- **Bilan Hebdomadaire :** Message de l'IA analysant les réussites et les points d'effort de la semaine écoulée.

---

## 4. Onglet "MON PROGRAMME" (La Forge)

_L'espace central pour piloter son entraînement sur le long terme._

- **Header :** Nom du programme actuel (ex: "Objectif Volume Haut du Corps - Semaine 3/8").
- **Vue d'ensemble :** Calendrier de la semaine avec les séances prévues (Lundi : Pectoraux, Mercredi : Dos, etc.).
- **Données de Santé :** Poids, taille, et intégration éventuelle des données de santé (sommeil, pas).
- **Gestion (Différenciée par Persona) :**
  - **Pour Léo :** Bouton "Demander une modification au Coach". L'IA ouvre le chat pour changer un exercice qui ne lui plaît plus ou ajuster la fréquence.
  - **Pour Sarah :** Bouton "Éditer ma structure". Elle peut ajouter/supprimer des exercices, changer l'ordre des séances ou modifier manuellement les séries/réps cibles.
- **Inventaire Matériel :** Rappel du matériel utilisé pour ce programme (modifiable pour que l'IA mette à jour les exercices).

---

## 5. Onglet "ÉVOLUTION" (Statistiques)

_Visualisation des résultats._

- **Section Photos :** Galerie "Avant / Après" privée.
- **Graphiques de Progression :**
  - _Léo :_ Badges de réussite (ex: "Niveau 2 atteint", "10 tonnes soulevées").
  - _Sarah :_ Courbes de tonnage par groupe musculaire et intensité (RPE).
- **Historique :** Liste des séances passées avec les notes laissées lors des "Pas validé".

---
