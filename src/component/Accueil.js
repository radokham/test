import React, { Component } from "react";
 
class Accueil extends Component {
  render() {
    return (
      <div>
        <h2>Bonjour</h2>
        <p>Les symboles d'échecs font partie de l'Unicode. 
            Au lieu d'utiliser des images, on peut représenter des pièces d'échecs par des symboles qui sont définis dans l'ensemble de caractères Unicode.
             Ceci permet de: 
            Utiliser la notation figurine algébrique,
            qui remplace la lettre qui le représente par son symbole, par exemple, 
            ♘c6 à la place de Cc6. Cela permet aux mouvements d'être lus indépendamment du langage.</p>
 
        <p>Pour afficher ces symboles, 
            on doit avoir une ou plusieurs polices avec une bonne prise en charge Unicode installé sur l'ordinateur, 
           et le document (page Web, document de traitement de texte, etc.)
            doit utiliser une de ces polices</p>
      </div>
    );
  }
}
 
export default Accueil;