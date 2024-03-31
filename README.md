# web-01
1-Le fichier package-lock.json sert à verrouiller les versions des dépendances installées pour assurer une cohérence dans les environnements de développement et de production, en enregistrant précisément quelles versions des dépendances ont été installées.

2-Le format à 3 chiffres pour les numéros de version s'appelle SemVer(Semantic Versioning). Il utilise le format majeur.mineur.patch.

3-Une devDependency est une dépendance nécessaire seulement lors du développement, contrairement à une dependency qui est aussi nécessaire à l'exécution de l'application.

4-Une IIFE (Immediately Invoked Function Expression) est une fonction qui s'exécute immédiatement après sa définition. Elle était utilisée pour gérer le scope des variables. Avec l'introduction des modules ES6, l'utilisation des IIFE a diminué car let, const et les imports permettent de mieux gérer le scope.

5-import * from './utils' importe tout depuis le module ./utils dans un objet, tandis que import { parseUrl } from './utils' importe seulement la fonction ou la variable parseUrl. Utiliser le premier peut charger plus de code que ce dont on a besoin, affectant les performances.

6-Avec les classes Java, on peut overloader des fonctions et faire de l'héritage multiple.

7-var a un scope de fonction et peut être re-déclarée. let a une portée de bloc, ne peut pas être re-déclarée dans le même bloc.

8-.bind(this) crée une nouvelle fonction avec this fixé au contexte auquel il est bind. Sans lui, this va se référer au parent, ce qui peut poser problème lors des callbacks. Il n'est pas nécessaire avec les arrow functions car elles ne créent pas leur propre contexte this mais héritent de celui du parent.

9-Le symbole @ dans @babel/*** indique un espace dans NPM, utilisé pour les paquets liés à Babel.

10-Les avantages des Promesses sont qu'elles sont mieux que les callbacks permettant d'écrire un code asynchrone qui est plus facile à lire et à maintenir, et supportant les opérations asynchrones en chaîne.

11-async / await a été introduit dans ECMAScript 2017 (ES8).

12-La programmation orientée composant pour le web est considérée comme plus maintenable car elle permet de réutiliser des composants, de mieux organiser le code, et de séparer les responsabilités, donc l'application est plus modulaire et plus facile à gérer.

13-La programmation fonctionnelle est un ensemble de règles de programmation qui l'évolution des données et priorise l'utilisation de fonctions dont la sortie est uniquement définie par l'entrée.

14-La fonction map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du 1er tableau.

15-La fonction filter() crée un nouveau tableau avec tous les éléments qui passent le test demandé par la fonction argument de filter.

16-La fonction reduce() applique une fonction sur chaque valeur d'une liste afin de la réduire à une seule valeur.

17-.then() est utilisé avec les Promesses pour gérer la résolution et le rejet. async/await permet d'écrire un code asynchrone qui ressemble à du code synchrone, améliorant la lisibilité. async/await rend le code plus propre et plus facile à comprendre que le .then().

18-Le préfixe _ dans un nom de fichier Sass indique qu'il s'agit d'un fichier partiel Sass qui ne doit pas être compilé en CSS lui-même, mais peut être importé dans d'autres fichiers Sass.