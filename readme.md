introduction à React.js
========================


Plusieurs versions progressives.

Lancer `npm start` puis consulter `http://127.0.0.1:3000`

Charger une version avec

```git checkout <tag>```
où `tag` peut prendre comme valeur :
* `v0` : version initiale
* `v0.1` : exemple basique d'introduction de React   
    voir `/scripts/first-react.js` (et `/views/index.pug`)
* `v0.2` : second exemple toujours avec `React.createElement`
* `v0.3` : reprise du second exemple avec JSX   
    voir `/scripts/first-react-jsx.js`
* `v0.4` : premier composant sans état `First` à l'aide d'une fonction   
    voir `/components/first.js`   
* `v0.4.5` : ajout d'un second composant `Second` construit  à partir de `First`   
* `v0.5` : utilisation des propriétés (`props`) d'un composant
* `v0.5.5` : les propriétés peuvent être des objets, des tableaux, etc.
* `v0.6`: `props.children` désigne les composants enfants de l'élément    
        cf `/components/listing.js`
* `v1` : utilisation des *class* pour créer des composants
* `v1.1` : création des composants Book et Rating, versions "sans état"     
        mise à jour de `/scripts/main.js`
* `v1.2` : création du composant à état `Star`
* `v1.3` : composant `rating` à état    
        utilisation de l'attribut `key` dans le composant `Rating` pour gérer les éléments de liste
* `v1.4` : déplacement de l'état dans `rating` (càd "au plus haut")   
        utilisation de props pour transmettre les fonctions à déclencher pour "remonter" les modificactions  
* `v1.5` : ajout de l'élément `BookList` => déplacement de l'état au niveau de `BookList`   
        répétition du schéma de "remontée" des modifications par transmission via *props*    
        utilisation de la notation *spread* `...this.props`
* `v1.6` : `componentWillMount` utilisé dans `/components/booklist` pour initialiser l'état
* `v1.7` : utlisation  de l'attribut `ref` et de son callback pour créer une référence vers un élément DOM    
        cf `/components/book.js`
