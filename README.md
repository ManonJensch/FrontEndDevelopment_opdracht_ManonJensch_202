# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Manon Jensch

  #### Je startniveau:
  Tussen blauw en rood

  #### Je focus:
  Surface plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.loavies.com/nl/ 

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home pagina 
  <img src="/readme-images/loavies_home.PNG" width="250px" alt="Home pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  Party kleding pagina 
  <img src="/readme-images/loavies_party.PNG" width="250px" alt="Party kleding pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Ik heb naar meerdere dingen gekeken zoals, de koppen (headings), de links en knoppen. Verder heb ik ook gekeken naar de WCAG (Web Content Accesslibilty Guidelines).

  Lijst met je bevindingen die in de test naar voren kwamen:
  #### Screenreader:
  - De headings zijn niet goed op volgorde (zie afbeelding 1.1). 
  - De navigatie links zijn allemaal in hoofdletters (capslock) en de rest is in kleine letters (zie afbeelding 1.2). 
  - De uitleg van andere knoppen is ook allemaal in hoofdletters (capslock) (zie afbeelding 1.3).

  <img src="/readme-images/screenreader_koppen_lijst.png" width="150px" alt="Screenshot van screenreader koppen lijst">
  Afbeelding 1.1
  <img src="/readme-images/screenreader_links_lijst.png" width="150px" alt="Screenshot van screenreader linkjes lijst">
  Afbeelding 1.2
  <img src="/readme-images/screenreader_capslock.png" width="150px" alt="Screenshot van screenreader koppen in capslock">    
  Afbeelding 1.3

  #### Web Content Accessibility Guidelines:
  - Hun buttons zijn allemaal consistent.
  - Ze gebruiken veel engelse woorden op hun website, maar hun lang attribute in hun HTML is nederlands. Hierdoor worden de engelse woorden dan ook op zijn nederlands gezegd door de screenreader. 
  - Met tab kan je bij sommige dingen zien dat het klikbaar is, maar ook bij heel veel dingen niet. 
  - De icons onderaan de pagina zijn wel wat aan de kleine kant, ze zouden groter kunnen. 
  - De 1e h1 is net zo groot als de normale platte tekst en de 2e h1 is zo groot als dat een h1 zou moeten zijn, maar deze staat helemaal onderaan. 
  - Decoratieve afbeeldingen zijn niet echt aanwezig en maps is er ook niet. 
  - Media is niet echt aanwezig. Er is hier en daar wel een video te zien, maar deze staat dan op loop en er is geen pauze button of geluid.
  - Sommige linkjes zijn wel duidelijk dat het linkjes zijn, maar er zitten ook sommige linkjes tussen waaraan je het helemaal niet kan zien dat het een linkje is.
  - Focus state werkt alleen met tab, niet met je muis. Je ziet alleen als je ergens op klikt dat je daar hebt geklikt. 
  - Ze gebruiken ook a als button.
  - De websote maakt geen gebruik van light en dark modus, er wordt geen high contrast gesupport en je kan de tekstgrootte ook niet aanpassen. Verder zie je wel wanneer je de kleuren uit zet, dat er dan alsnog een groot contrast aanwezig is. 
  - De custom selection color is niet aangepast, maar standaard. Het is blauw en de tekst kleur verandert niet. 

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de home pagina: 
  <img src="/readme-images/home_pagina_breakdownschets.jpg" width="150px" alt="breakdown van de home pagina">

  ### dynamisch deel home pagina(bijv menu): 
  <img src="/readme-images/home_pagina_breakdownschets_detail.jpg" width="150px" alt="breakdown van een dynamisch deel van de home pagina">

  ### de party pagina: 
  <img src="/readme-images/party_pagina_breakdownschets.jpg" width="150px" alt="breakdown van de party pagina">

  ### dynamisch deel party pagina(bijv menu): 
  <img src="/readme-images/party_pagina_breakdownschets_detail.jpg" width="150px" alt="breakdown van een dynamisch deel van de party pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code):
  - Ik vond het wel weer even lastig om dan zo weer aan de code te beginnen. Ik moet dan weer altijd even inkomen met het schrijven ervan en wat waar ook alweer hoort. 
  - Nadat ik dan bezig was met de code vanuit de breakdownschets ging het eigenlijk wel snel. 
  - Wat ik ook wel lastig vond was toen ik het logo van Loavies wilde zoeken via de website om op te slaan, kon ik hem niet vinden. Toen vroeg ik aan een van de studentassistenten hoe ik dit het beste kon doen. Hij vertelde mij toen dat ik ook kon kijken in de code van de website en daaruit de svg kon halen. Dan staat het logo er in aan de hand van code.
  <img src="/readme-images/code_screenshot1.png" width="150px" alt="Screenshot html code">
  <img src="/readme-images/code_screenshot2.png" width="150px" alt="Screenshot css code">


  ### Agenda voor meeting
  samen met je groepje opstellen

  Manon     
  - In css dingen aanroepen. Wat je het beste voor elk ding kan gebruiken. (lnt-of-type() etc).  
  - Afbeeldingen uit een section kleiner maken als andere afbeeldingen, dan gewoon classes gebruiken?
  - Font van de website in je code zetten?
  - Border om afbeelding heen zetten.
  - Footer einde
  - Tekst in button een kleur geven

  Gloria    
  - Ze wilt wat vragen over het menu en over dingen aanroepen met css.         
  
  Bob          
  - Hij wilt vragen hoe je automatische animaties makkelijk in de website kan maken. 
 
  Rosa             
  - Ze wilt iets vragen over javascript.


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Ik moet betere alt teksten neerzetten. Ik moet het aan de hand van een zin uitleggen. Ik zou hiervoor ook chatGPT mogen gebruiken.
  - Mijn code is al goed ingesprongen en ik was daarmee ook lekker bezig. 
  - Ik moet opletten dat ik geen buttons gebruik in plaats van links. Ik moet proberen buttons echt te gebruiken voor de dingen die op mijn pagina komen, zoals iwnkelwagen en misschien een andere pop-up. Als je naar een andere pagina wordt doorverwezen is het altijd een link. Dit moet ik dus nog even goed bekijken en aanpassen.
  - Als ik dan dit linkje een kleur wil geven dan kan ik background-color: black: color: white; gebruiken. 
  - Ik gebruik heel veel li elementen, omdat dat dan n iet semantisch genoeg is kan ik soms beter article er nog tussen zetten. Dus: section - ul - li - article etc, wat er dan allemaal in staat. 

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>