<h1 align = "center">
  Quotes Generator
  </h1>
  <h2>
Introducere:
</h2>
<p>Aplicatie web pentru accesarea unor citate</p>
  
  <h3>
  Descriere:
  </h3>
  <p>Aceasta aplicatie are ca scop generarea unor citate notabile din cariera personajului Ron Swanson adus la
viata de catre actorul Nick Offerman in serialul de comedie Parks and Recreation difuzat pe NBC si 
creat de  Greg Daniels si Michael Schur.</br> Platforma este bazată pe o aplicație web cu arhitectură de tip Single Page Application accesibilă în browser. Utilitatea acestei aplicatii este in principal pentru retele de socializare, si anume pentru a dispune postari memorabile impreuna cu un citat personalizat. Accesul la aplicatie se face printr-o pagina de logare, ce utilizeaza conectarea prin cont de google.</p>
<p>In cadrul acestei aplicatii am folosit doua API-uri. Primul API pe care l-am utilizat realizeaza conecatarea la pagina prin utilizarea unui cont de google, urmand ca functionalitatea celui de al doilea API sa fie prezentata in pagina principala, acest APi perimite cautarea unor citate din viata lui Ron Swanson, folosind un ID si anume un cuvant cheie care sa descriei sau sa fie cuprins in citat.  </p>

<h3>
  Flux de date
  </h3>
  <p>Principalul exemplu de request din cadrul aceste aplicatii este cererea pe care o face utilizatorul prin introducerea cuvantului cheie, iar partea de response este dispunerea citatului ce corespunde cuvantului cheie.</p>
  <p> Metoda de HTTP folosita in cadrul proiectului este metoda GET/resource/:id, ce reprezinta o operatie de READ.
  
  




  



