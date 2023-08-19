import React, { useState, useEffect} from "react";

import { Img, Line, Text } from "components";
  
const PDFContent=()=>{
    const [ageRange, setAgeRange] = useState("");
  const [name, setName] = useState("");
  const [intitulePoste, setPoste] = useState("");
  const [etudeRange, setEtudeRange] = useState("");
  const [secteurActivite, setSecteur] = useState("");
  const [tailleEntreprise, setTaille] = useState("");
  const [outilsNecessaires, setOutils] = useState([]);
  const [indicateurPerformance, setPerformance] = useState("");
  const [objectifPersona, setObjectif] = useState("");
  const [superieurHierarchique, setHierarchique] = useState("");
  const [informationsPersonnelles, setInformation] = useState("");
  const [defis, setDefis] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const handleClick = () => {
    setShowSecondDiv(true);
  };

  useEffect(() => {
    const storedIcons = localStorage.getItem("reseauxsociaux");
    if (storedIcons) {
      setSelectedIcons(JSON.parse(storedIcons));
    }
  }, []);
  useEffect(() => {
    const storedAvatar = localStorage.getItem("selectedAvatar");
    if (storedAvatar) {
      setSelectedAvatar(storedAvatar);
    }
  }, []);

  useEffect(() => {
    const storedDefis = localStorage.getItem("defis");
    if (storedDefis) {
      setDefis(JSON.parse(storedDefis));
    }
  }, []);

  useEffect(() => {
    if (defis !== "") {
      localStorage.setItem("defis", JSON.stringify(defis));
    }
  }, [defis]);

  const handleInformationChange = (event) => {
    setInformation(event.target.value);
  };

  useEffect(() => {
    const storedInformation = localStorage.getItem("informationsPersonnelles");
    if (storedInformation) {
      setInformation(storedInformation);
    }
  }, []);

  useEffect(() => {
    if (informationsPersonnelles !== "") {
      localStorage.setItem("informationsPersonnelles", informationsPersonnelles);
    }
  }, [informationsPersonnelles]);
  
  const handleHierarchiqueChange = (event) => {
    setHierarchique(event.target.value);
  };

  useEffect(() => {
    const storedHierarchique = localStorage.getItem("superieurHierarchique");
    if (storedHierarchique) {
      setHierarchique(storedHierarchique);
    }
  }, []);

  useEffect(() => {
    if (superieurHierarchique !== "") {
      localStorage.setItem("superieurHierarchique", superieurHierarchique);
    }
  }, [superieurHierarchique]);
  const handleObjectifChange = (event) => {
    setObjectif(event.target.value);
  };

  useEffect(() => {
    const storedObjectif = localStorage.getItem("objectifPersona");
    if (storedObjectif) {
      setObjectif(storedObjectif);
    }
  }, []);

  useEffect(() => {
    if (objectifPersona !== "") {
      localStorage.setItem("objectifPersona", objectifPersona);
    }
  }, [objectifPersona]);

  useEffect(() => {
    const storedPerformance = localStorage.getItem("indicateurPerformance");
    if (storedPerformance) {
      setPerformance(storedPerformance);
    }
  }, []);
  

  useEffect(() => {
    if (indicateurPerformance !== "") {
      localStorage.setItem("indicateurPerformance", indicateurPerformance);
    }
  }, [indicateurPerformance]);

  useEffect(() => {
    const storedOutils = localStorage.getItem("outilsNecessaires");
    if (storedOutils) {
      setOutils(JSON.parse(storedOutils));
    }
  }, []);

  useEffect(() => {
    if (outilsNecessaires !== "") {
      localStorage.setItem("outilsNecessaires", JSON.stringify(outilsNecessaires));
    }
  }, [outilsNecessaires]);

  useEffect(() => {
    const storedTailleEntreprise = localStorage.getItem("tailleEntreprise");
    if (storedTailleEntreprise) {
      setTaille(storedTailleEntreprise);
    }
  }, []);

  useEffect(() => {
    if (tailleEntreprise !== "") {
      localStorage.setItem("tailleEntreprise", tailleEntreprise);
    }
  }, [tailleEntreprise]);
  const handleSecteurChange = (event) => {
    setSecteur(event.target.value);
  };
  useEffect(() => {
    const storedSecteur = localStorage.getItem("secteurActivite");
    if (storedSecteur) {
      setSecteur(storedSecteur);
    }
  }, []);

  useEffect(() => {
    if (secteurActivite !== "") {
      localStorage.setItem("secteurActivite", secteurActivite);
    }
  }, [secteurActivite]);

  useEffect(() => {
    const storedEtudeRange= localStorage.getItem("niveauEtude");
    if (storedEtudeRange) {
      setEtudeRange(storedEtudeRange);
    }
  }, []);

  useEffect(() => {
    if (etudeRange !== "") {
      localStorage.setItem("niveauEtude", etudeRange);
    }
  }, [etudeRange]);

  const handleAgeRangeChange = (event) => {
    setAgeRange(event.target.value);
  };
  useEffect(() => {
    const storedAgeRange= localStorage.getItem("ageRange");
    if (storedAgeRange) {
      setAgeRange(storedAgeRange);
    }
  }, []);

  useEffect(() => {
    if (ageRange !== "") {
      localStorage.setItem("ageRange", ageRange);
    }
  }, [ageRange]);

  const handlePosteChange = (event) => {
    setPoste(event.target.value);
  };

  useEffect(() => {
    const storedPoste = localStorage.getItem("intitulePoste");
    if (storedPoste) {
      setPoste(storedPoste);
    }
  }, []);

  useEffect(() => {
    if (intitulePoste !== "") {
      localStorage.setItem("intitulePoste", intitulePoste);
    }
  }, [intitulePoste]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  useEffect(() => {
    if (name !== "") {
      localStorage.setItem("name", name);
    }
  }, [name]);
  const handlePerforamnceChange = (event) => {
    setPerformance(event.target.value);
  };

  const ageRangeLabels = [
    "moins 18 ans",
    "entre 18 et 24 ans",
    "entre 25 et 34 ans",
    "entre 35 et 44 ans",
    "entre 45 et 64 ans",
    "65 et plus",
  ];
  const niveauEtude = [
    "Inférieur au bacalauréat",
    "Bacalauréat ou équivalent",
    "Parcours universitaire non sanctionné par un diplôme",
    "LIcense ou diplôme équivalent",
    "Master ou diplôme équivalent",
    "Doctorat",
  ];
  const tailleEntrepriseLabel = [
    "Travailleur indépeandant",
    "1 à 10 salariés",
    "1a à 50 salariés",
    "51 à 200 salariés",
    "201 à 500 salariés",
    "501 à 1000 salariés",
    "1001 à 5000 salariés",
    "5001 à 10000 salariés",
    "Plus de 10000 salariés",
  ];
  return(
    <div id="FrameTen" className="sm:h-[1209px] h-[1375px] md:h-[2553px] md:px-5 relative w-full" 
      style={{ marginTop: '40px', 
          backgroundImage: `url("images/Group67.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
    }}>
            <div style={{ height: '40px' }}></div>
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[1207px] inset-x-[0] items-center justify-end mx-auto p-[29px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_trac.png')" }}
            >
              <div className="flex flex-col items-center justify-start mt-[1008px] w-[16%] md:w-full">
                <div className="flex flex-col items-center justify-start p-[7px] w-[96%] md:w-full">
                  <Img
                    className="h-[109px] md:h-auto object-cover w-full"
                    src="images/img_clippathgroup.png"
                    alt="clippathgroup"
                  />
                </div>
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtBebasNeueRegular16Black900"
                >
                  Copyright © 2023 lézard & balthazar communication
                </Text>
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row font-librebaskerville gap-3 inset-x-[0] items-start justify-center mx-auto top-[0] w-[63%]">
              <div className="bg-blue_gray-100 flex flex-col gap-[9px] items-center justify-start mb-[359px] pb-3.5 rounded-[10px] w-[27%] md:w-full">
              {selectedAvatar?(
                <Img
                  src={selectedAvatar}
                  className="h-[200px] mt-[17px]"
                  alt="avatarstyleSeven"
                />
              ) : (
                <Img
                  src="images/img_avatarstyle07.png" // Default image source
                  className="h-[200px] mt-[17px]"
                  alt="avatarstyleSeven"
                />
              )}
                <div className="flex flex-col justify-start w-full">
                  <Line className="bg-indigo-100_01 h-px w-full" />
                  <Text
                    className="md:ml-[0] mt-[7px] text-base text-center text-indigo-600"
                    size="txtLibreBaskervilleRegular16"
                  >
                    Nom
                  </Text>
                  <input
                    type="text"
                    className="md:ml-[0] mt-[11px] text-base text-center text-indigo-600_77 bg-blue_gray-100"
                    size="txtLibreBaskervilleRegular16Indigo60077"
                    placeholder="Saisir un nom"
                    style={{ border: 'none' }}
                    value={name}
                    onChange={handleChange}
                  />
                  <Line className="bg-indigo-100_01 h-px mt-[9px] w-full" />
                  <Text
                    className="md:ml-[0] mt-[9px] text-base text-center text-indigo-600"
                    size="txtLibreBaskervilleRegular16"
                  >
                    Intitulé du poste
                  </Text>
                  <input
                    type="text"
                    className="md:ml-[0] mt-[11px] text-base text-center text-indigo-600_77 bg-blue_gray-100"
                    size="txtLibreBaskervilleRegular16Indigo60077"
                    placeholder="Saisir intitulé de poste"
                    style={{ border: 'none' }}
                    value={intitulePoste}
                    onChange={handlePosteChange}
                  />
                  <div className="md:h-2.5 h-px  relative w-full">
                    <Line className="bg-indigo-100_01 h-px m-auto w-full" />
                    <Line className="absolute bg-indigo-100_01 h-px inset-[0] justify-center m-auto w-full" />
                  </div>
                  <Text
                    className="md:ml-[0]  mt-2 text-base text-center text-indigo-600"
                    size="txtLibreBaskervilleRegular16"
                  >
                    Âge
                  </Text>
                  <Text
                    className="md:ml-[0]  mt-1.5 text-base text-center text-indigo-600_77"
                    size="txtLibreBaskervilleRegular16Indigo60077"
                  >
                    {ageRangeLabels[ageRange]}
                  </Text>
                  <Line className="bg-indigo-100_01 h-px mt-3.5 w-full" />
                  <Text
                    className="md:ml-[0] mt-[7px] text-base text-center text-indigo-600"
                    size="txtLibreBaskervilleRegular16"
                  >
                    <>Niveau d&#39;études</>
                  </Text>
                  <Text
                    className="md:ml-[0]mt-3 text-base text-center text-indigo-600_77"
                    size="txtLibreBaskervilleRegular16Indigo60077"
                  >
                    {niveauEtude[etudeRange]}
                  </Text>
                  <Line className="bg-indigo-100_01 h-px mt-[9px] w-full" />
                  <Text
                    className="md:ml-[0]  mt-[7px] text-base text-center text-indigo-600"
                    size="txtLibreBaskervilleRegular16"
                  >
                    Réseaux sociaux
                  </Text>
                  <div className="gap-1 md:gap-3 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-3 min-h-[auto] ml-1.5 mt-5 md:ml-[0] w-3/5">
                    {selectedIcons.map((icon) => (
                      <img src={icon.src} alt={icon.name} className="h-[30px] md:ml-[0]   w-[65px]"/>
                        
                          ))}
                  </div>
                  <Line className="bg-indigo-100_01 h-px mt-[50px] w-full" />
                  <Text
                    className="md:ml-[0]  mt-[7px] text-base text-center text-indigo-600"
                    size="txtLibreBaskervilleRegular16"
                  >
                    <>Secteur d'activités</>
                  </Text>
                  <Text
                    className="md:ml-[0] mt-[7px] text-base text-center text-indigo-600_77"
                    size="txtLibreBaskervilleRegular16Indigo60077"
                  >
                    {secteurActivite}
                  </Text>
                  <Line className="bg-indigo-100_01 h-px mt-3.5 w-full" />
                  <Text
                    className="md:ml-[0] mt-[9px] text-base text-center text-indigo-600"
                    size="txtLibreBaskervilleRegular16"
                  >
                    Taille d’entreprise
                  </Text>
                  <Text
                    className="md:ml-[0] mt-[5px] text-base text-center text-indigo-600_77"
                    size="txtLibreBaskervilleRegular16Indigo60077"
                  >
                    {tailleEntrepriseLabel[tailleEntreprise]}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start rounded-[10px] shadow-bs1 w-[73%] md:w-full">

                <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="gap-3 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[246px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Moyen de communication préféré
                        </Text>
                        {selectedIcons.length > 0 ? (
                        // Render the text based on the state value
                          selectedIcons.map((icon) => (
                            <Text
                              className="text-base text-indigo-600_77 w-[300px]"
                              size="txtLibreBaskervilleRegular16Indigo60077"
                            >
                              {icon.name}
                            </Text>
                          ))
                        ) : (
                            <Text
                                className="text-base text-indigo-600_77 w-[300px]"
                                size="txtLibreBaskervilleRegular16Indigo60077"
                              >
                                Tu dois sélectionner les réseaux sociaux
                            </Text>
                        )}

                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[246px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Outils nécessaires au quotidien
                        </Text>
                        {outilsNecessaires.length > 0 ? (
                        // Render the text based on the state value
                          outilsNecessaires.map((outil, index) => (
                            <Text
                              key={index}
                              className="text-base text-indigo-600_77 w-[300px]"
                              size="txtLibreBaskervilleRegular16Indigo60077"
                            >
                              {outil}
                            </Text>
                          ))
                        ) : (
                            <Text
                                className="text-base text-indigo-600_77 w-[300px]"
                                size="txtLibreBaskervilleRegular16Indigo60077"
                              >
                                Tu dois côcher
                            </Text>
                        )}
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[246px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[300px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Indicateur de performances
                        </Text>
                        <input
                          type="text"
                          className="text-base text-indigo-600_77 w-[250px] bg-blue_gray-100"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                          placeholder="Saisir un indicateur "
                          style={{ border: 'none' }}
                          value={indicateurPerformance}
                          onChange={handlePerforamnceChange}
                        />
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[246px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Objectifs
                        </Text>
                        <input
                        type="text"
                          className="text-base text-indigo-600_77 w-[250px] bg-blue_gray-100"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                          placeholder="Saisir un objectif"
                          style={{ border: 'none' }}
                          value={objectifPersona}
                          onChange={handleObjectifChange}
                        
                        />
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[246px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Supérieur hiérarchique
                        </Text>
                        <input
                          type="text"
                          className="text-base text-indigo-600_77 w-[270px] bg-blue_gray-100"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                          placeholder="Saisir un hiérarchique"
                          style={{ border: 'none' }}
                          value={superieurHierarchique}
                          onChange={handleHierarchiqueChange}
                        />
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[246px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600 bg-blue_gray-100"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Sources d'information
                        </Text>
                        <input
                          type="text"
                          className="text-base text-indigo-600_77 w-[250px] bg-blue_gray-100"
                          placeholder="Saisir une source"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                          style={{ border: 'none' }}
                          value={informationsPersonnelles}
                          onChange={handleInformationChange}
                        />
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[246px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Princiaux défis
                        </Text>
                        {defis.length > 0 ? (
                        // Render the text based on the state value
                          defis.map((defi, index) => (
                            <Text
                              key={index}
                              className="text-base text-indigo-600_77 w-[300px]"
                              size="txtLibreBaskervilleRegular16Indigo60077"
                            >
                              {defi}
                            </Text>
                          ))
                        ) : (
                            <Text
                                className="text-base text-indigo-600_77 w-[300px]"
                                size="txtLibreBaskervilleRegular16Indigo60077"
                              >
                                Tu dois côcher
                            </Text>
                        )}
                      </div>
                    
                    </div>
                    <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[246px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full" style={{ display: showSecondDiv ? 'block' : 'none' }}>
                    <input className="max-w-[224px] md:max-w-full text-base text-indigo-600 bg-blue_gray-100" size="txtLibreBaskervilleRegular16"
                      placeholder="Saisir quelques choses"
                    />
                    <input
                      type="text"
                      className="text-base text-indigo-600_77 w-[250px] bg-blue_gray-100"
                      placeholder="Saisir une source"
                      size="txtLibreBaskervilleRegular16Indigo60077"
                      style={{ border: 'none' }}
                      value={informationsPersonnelles}
                      onChange={handleInformationChange}
                    />
                  </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
  )

}
export default PDFContent;