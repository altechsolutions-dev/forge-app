# Personas - FORGE 🏋️‍♂️

Ce document définit les profils types des utilisateurs de l'application de suivi de musculation avec coach IA.

---

## 1. Persona Primaire : Le Débutant Guidé

**"L'IA est mon filet de sécurité pour ne pas faire n'importe quoi."**

### Profil

- **Nom :** Léo
- **Âge :** 28 ans
- **Profession :** Cadre en marketing, télétravail partiel.
- **Niveau :** Débutant (0 à 6 mois d'expérience).
- **Matériel :** Inscrit en salle de sport classique ou possède deux haltères à la maison.

### Motivations & Objectifs

- **Transformation physique :** Perdre du gras et "se dessiner" (prise de muscle légère).
- **Santé :** Réduire les douleurs dorsales liées à la position assise.
- **Simplicité :** Veut ouvrir l'application et savoir immédiatement quoi faire sans réfléchir.

### Frustrations & Barrières

- **Le "Gymtimidation" :** Se sent observé et illégitime à la salle.
- **Surcharge d'info :** Perdu face aux conseils contradictoires sur internet.
- **Manque de rigueur :** A tendance à abandonner si les résultats ne sont pas immédiats ou s'il se blesse.

### Attentes vis-à-vis du Coach IA

- **Génération automatique :** Un programme adapté à son emploi du temps (ex: 3 séances de 45 min).
- **Correction & Éducation :** Des explications simples sur l'exécution des mouvements.
- **Ajustement dynamique :** Si Léo dit "Je suis fatigué", l'IA réduit le volume de la séance.

---

## 2. Persona Secondaire : Le Pratiquant Confirmé

**"Je veux un outil de précision pour sculpter ma progression."**

### Profil

- **Nom :** Sarah
- **Âge :** 32 ans
- **Profession :** Infirmière (horaires décalés).
- **Niveau :** Intermédiaire/Avancé (3 ans de pratique régulière).
- **Matériel :** Accès complet en salle de sport.

### Motivations & Objectifs

- **Performance :** Augmenter ses max (PR) et optimiser son hypertrophie.
- **Autonomie :** Veut construire sa propre routine (Split, PPL, Upper/Lower).
- **Data-Visualisation :** Analyser ses courbes de progression sur plusieurs mois.

### Frustrations & Barrières

- **Rigidité des apps :** Marre des applications qui ne permettent pas de remplacer un exercice ou de changer l'ordre.
- **Stagnation :** A du mal à gérer seule sa périodisation (alternance force/volume).

### Attentes vis-à-vis de l'Application

- **Custom Builder :** Un éditeur de programme flexible avec une large base de données d'exercices.
- **Analyse IA :** Que l'IA suggère des augmentations de charges basées sur la vitesse perçue ou l'historique ($RPE$ - Rate of Perceived Exertion).
- **Logbook rapide :** Une saisie des poids et répétitions extrêmement fluide pour ne pas perdre de temps entre les séries.

---

## 3. Comparatif des Besoins Fonctionnels

| Fonctionnalité            | Pour Léo (Débutant)                          | Pour Sarah (Confirmé)              |
| :------------------------ | :------------------------------------------- | :--------------------------------- |
| **Création de programme** | Automatique par l'IA                         | Manuel ou avec assistance de l'IA  |
| **Contrôle de séance**    | Pas à pas avec timer pour les temps de repos | Liste globale avec repos géré      |
| **Rôle de l'IA**          | Mentor et Guide                              | Analyste de données                |
| **Feedback**              | "Comment te sens-tu ?"                       | "Quel était ton RPE (intensité) ?" |

---

## 4. Équation de Progression IA (Rappel)

L'algorithme de l'IA doit assurer la surcharge progressive pour les deux profils :
$$Total \ Volume = Séries \times Répétitions \times Charge$$
L'objectif est d'augmenter progressivement l'une de ces variables tout en surveillant la fatigue récupératrice.

---

## 5. Stratégie de Communication (Tone of Voice)

L'IA doit agir comme un caméléon : protectrice avec Léo, partenaire de performance avec Sarah.

---

### 🎙️ Le Ton pour Léo (Le Débutant)

**Rôle : Le Grand Frère / La Grande Sœur Bienveillante**

- **Linguistique :** Vocabulaire vulgarisé. On évite le jargon comme "hypertrophie sarcoplasmique" et on parle de "prendre du muscle".
- **Renforcement Positif :** Féliciter chaque petite victoire (ex: "Bravo pour ta 1ère séance terminée !").
- **Rassurance :** Utiliser des phrases qui calment l'anxiété : "Ne t'inquiète pas pour le poids au début, l'important c'est ton mouvement."
- **Directives :** Phrases courtes et impératives mais douces. "Prends les haltères de 4kg", "Respire bien pendant l'effort".

> **Exemple de message IA :**
> _"Salut Léo ! Superbe séance aujourd'hui. On a fait 2 répétitions de plus que la semaine dernière, c'est comme ça qu'on progresse. Comment te sens-tu au niveau du bas du dos ?"_

---

### 🎙️ Le Ton pour Sarah (La Confirmée)

**Rôle : Le Coach de Haute Performance / L'Analyste**

- **Linguistique :** Précis et technique. On utilise les termes métier : _RPE, AMRAP, Deload, Supersets, Tension mécanique_.
- **Efficacité :** Pas de blabla inutile. Elle veut ses stats et son chrono de repos.
- **Challenge :** L'IA doit être provocatrice (de manière saine). "Tes données suggèrent que tu en as encore sous le pied, on tente +2kg ?"
- **Objectivité :** Basé sur les chiffres. "Ton volume sur les pectoraux a baissé de 5% cette semaine, est-ce volontaire ?"

> **Exemple de message IA :**
> _"Sarah, ton RPE sur la dernière série était de 7. Selon ton historique, on peut viser un RPE 9 sur le prochain set. Prête à pousser le volume ?"_

---

### ⚖️ Matrice du Ton de l'IA

| Dimension            | Pour Léo (Débutant)              | Pour Sarah (Confirmé)                      |
| :------------------- | :------------------------------- | :----------------------------------------- |
| **Niveau de détail** | Conceptuel (Pourquoi on fait ça) | Technique (Comment optimiser ça)           |
| **Humour**           | Encourageant et léger            | Complice et axé "effort"                   |
| **Fréquence d'aide** | Élevée (Guidage constant)        | Basse (Intervention sur demande)           |
| **Gestion d'échec**  | "C'est normal, ça arrive"        | "Analyse de la cause (sommeil/nutrition?)" |

---

## 6. L'Équation de l'Engagement

Pour maintenir la rétention, l'IA applique la formule de la **Variable de Récompense** :
$$Engagement = (Progression \ Réelle + Feedback \ Positif) \times Simplicité$$
