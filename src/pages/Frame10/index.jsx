import React, { useState, useEffect } from "react";

import { Img, Line, Text } from "components";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PDFContent from "./PDFContent";

const FrameTen = () => {
  const [name, setName] = useState("");
  const [ageRange, setAgeRange] = useState("");
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
  const [selectedCommunication, setSelectedCommunication] = useState([]);
  const [defisOption, setDefisOption] = useState("");

  useEffect(() => {
    const storedDefisOption = localStorage.getItem("defisOption");
    if (storedDefisOption) {
      setDefisOption(storedDefisOption);
    }
  }, []);

  const handleClick = () => {
    setShowSecondDiv(true);
  };
  useEffect(() => {
    const storedIcons = localStorage.getItem("moyencommunicationprefere");
    if (storedIcons) {
      setSelectedCommunication(JSON.parse(storedIcons));
    }
  }, []);

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
    const storedEtudeRange = localStorage.getItem("niveauEtude");
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
    const storedAgeRange = localStorage.getItem("ageRange");
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



  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);
  const deleteLocalStorageItems = () => {
    localStorage.removeItem("selectedAvatar");
    localStorage.removeItem("defis");
    localStorage.removeItem("informationsPersonnelles");
    localStorage.removeItem("superieurHierarchique");
    localStorage.removeItem("objectifPersona");
    localStorage.removeItem("indicateurPerformance");
    localStorage.removeItem("outilsNecessaires");
    localStorage.removeItem("tailleEntreprise");
    localStorage.removeItem("secteurActivite");
    localStorage.removeItem("niveauEtude");
    localStorage.removeItem("ageRange");
    localStorage.removeItem("intitulePoste");
    localStorage.removeItem("name");
    localStorage.removeItem("optionDefis");
    localStorage.removeItem("reseauxsociaux");

  };

  // Call deleteLocalStorageItems() to delete all the items

  const exportPDF = () => {
    const input = document.getElementById("FrameTen");

    // Set the dimensions to emulate a desktop view
    const desktopWidth = 1440;
    const desktopHeight = 900;
    window.innerWidth = desktopWidth;
    window.innerHeight = desktopHeight;

    html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const scalingFactor = 1.2;
      const imgData = canvas.toDataURL('image/png');
      const topMargin = 40;

      pdf.addImage(imgData, 'PNG', -20, topMargin, imgWidth * scalingFactor, imgHeight * scalingFactor);

      // Add background image
      const backgroundImage = 'images/img_clippathgroup.png'; // Replace with the path to your background image
      pdf.addImage(backgroundImage, 'PNG', 100, pdf.internal.pageSize.getHeight() - 40, 20, 20); // Add the background image to the PDF
      const fileName = name || "persona";
      pdf.save(`${fileName}.pdf`);
      deleteLocalStorageItems();
    });
  };





  return (
    <>
      <div
        className="bg-indigo_100 flex flex-col font-bebasneue items-center justify-start w-full"
        style={{
          backgroundImage: `url("images/Frame10Background.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="container-10 flex flex-col md:gap-10 gap-[75px] items-center justify-start w-full"
          style={{
            overflowX: "hidden",
          }}
        >
          <div
            className="flex flex-col md:gap-10 gap-[83px] items-start justify-start max-w-[1199px] mx-auto md:px-5 w-full"
          >
            <div className="flex md:flex-col flex-row md:gap-5 items-start mt-[30px] justify-start w-[94%] md:w-full">
              <a href="frameonefour">
                <Img
                  className="h-5 md:h-auto md:mt-0 mt-[5px] object-cover w-5"
                  src="images/img_flechegauche3.png"
                  alt="flechegaucheThree"
                />
              </a>
              <Text
                className="md:ml-[0] ml-[7px] md:mt-0 mt-[7px] text-center text-sm text-white-A700"
                size="txtBebasNeueRegular14"
              >
                <>REVENIR À LA PAGE D&#39;ACCUEIL</>
              </Text>

              <Text
                className="md:ml-[0] ml-[831px] md:mt-0 mt-[7px] text-base text-center text-white-A700"
                size="txtBebasNeueRegular16"
              >
                Partager l’outil:{" "}
              </Text>
              <Img
                className="h-[31px] md:ml-[0] ml-[18px] w-[30px]"
                src="images/img_icons8facebooknouveau.svg"
                alt="icons8facebookn"
              />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
              <Text
                className="mb-[3px] sm:text-[32px] md:text-[38px] text-[42px] text-center text-indigo-900 whitespace-nowrap"
                size="txtBebasNeueRegular42"
              >
                Vue d'ensemble du persona
              </Text>
              <button className="bg-white-A700 cursor-pointer leading-[normal] min-w-[158px] ml-[650px] sm:ml-[0] sm:mt-0 mt-[9px] py-3.5 rounded-[5px] text-center text-indigo-900 text-sm" onClick={exportPDF}>
                télécharger
              </button>
            </div>
          </div>
          <div
            id="FrameTen"
            className="sm:h-[1209px] h-[1375px] md:h-[2553px] md:px-5 relative w-full"
          >
            <div
              className="absolute flex md:flex-col flex-row font-librebaskerville gap-3 inset-x-[0] items-start justify-center mx-auto top-[0] w-[63%]"
            >
              <div className="bg-blue_gray-100 flex flex-col gap-[9px] items-center justify-start mb-[359px] pb-3.5 rounded-[10px] w-[27%] md:w-full">
                {selectedAvatar ? (
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
                      <img src={icon.src} alt={icon.name} className="h-[30px] md:ml-[0]   w-[65px]" />

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
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
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
                              className="text-base text-indigo-600_77 w-[200px]"
                              size="txtLibreBaskervilleRegular16Indigo60077"
                            >
                              {icon.name}
                            </Text>
                          ))
                        ) : (
                          <Text
                            className="text-base text-indigo-600_77 w-[200px]"
                            size="txtLibreBaskervilleRegular16Indigo60077"
                          >
                            Tu dois sélectionner les réseaux sociaux
                          </Text>
                        )}

                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
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
                              className="text-base text-indigo-600_77 w-[200px]"
                              size="txtLibreBaskervilleRegular16Indigo60077"
                            >
                              {outil}
                            </Text>
                          ))
                        ) : (
                          <Text
                            className="text-base text-indigo-600_77 w-[200px]"
                            size="txtLibreBaskervilleRegular16Indigo60077"
                          >
                            Tu dois côcher
                          </Text>
                        )}
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[300px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Indicateur de performances
                        </Text>
                        <input
                          type="text"
                          className="text-base text-indigo-600_77 w-[200px] bg-blue_gray-100"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                          placeholder="Saisir un indicateur "
                          style={{ border: 'none' }}
                          value={indicateurPerformance}
                          onChange={handlePerforamnceChange}
                        />
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Objectifs
                        </Text>
                        <input
                          type="text"
                          className="input-colomun text-base text-indigo-600_77 w-[200px] bg-blue_gray-100"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                          placeholder="Saisir un objectif"
                          style={{ border: 'none' }}
                          value={objectifPersona}
                          onChange={handleObjectifChange}

                        />
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Supérieur hiérarchique
                        </Text>
                        <input
                          type="text"
                          className="text-base text-indigo-600_77 w-[200px] bg-blue_gray-100"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                          placeholder="Saisir un hiérarchique"
                          style={{ border: 'none' }}
                          value={superieurHierarchique}
                          onChange={handleHierarchiqueChange}
                        />
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600 bg-blue_gray-100"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Sources d'information
                        </Text>
                        <input
                          type="text"
                          className="text-base text-indigo-600_77 w-[200px] bg-blue_gray-100"
                          placeholder="Saisir une source"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                          style={{ border: 'none' }}
                          value={informationsPersonnelles}
                          onChange={handleInformationChange}
                        />
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
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
                              className="text-base text-indigo-600_77 w-[200px]"
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
                        <Text
                          className="text-base text-indigo-600_77 w-[200px]"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                        >
                          {defisOption}
                        </Text>
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Moyen de communication préféré
                        </Text>
                        {selectedCommunication.length > 0 ? (
                          // Render the text based on the state value
                          selectedCommunication.map((icon) => (
                            <Text
                              className="text-base text-indigo-600_77 w-[200px]"
                              size="txtLibreBaskervilleRegular16Indigo60077"
                            >
                              {icon.name}
                            </Text>
                          ))
                        ) : (
                          <Text
                            className="text-base text-indigo-600_77 w-[200px]"
                            size="txtLibreBaskervilleRegular16Indigo60077"
                          >
                            Tu dois sélectionner les moyen de communication
                          </Text>
                        )}

                      </div>

                    </div>
                  </div>
                  <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[246px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full" style={{ display: showSecondDiv ? 'block' : 'none' }}>
                    <input className="max-w-[224px] md:max-w-full text-base text-indigo-600 bg-blue_gray-100" size="txtLibreBaskervilleRegular16"
                      placeholder="Saisir quelques choses"
                    />
                    <input
                      type="text"
                      className="text-base text-indigo-600_77 w-[200px] bg-blue_gray-100"
                      placeholder="Saisir une source"
                      size="txtLibreBaskervilleRegular16Indigo60077"
                      style={{ border: 'none' }}

                    />
                  </div>
                  <div className="flex flex-col font-bebasneue items-center justify-start outline-[5px] outline-dashed outline-white-A700 p-[43px] md:px-10 sm:px-5 rounded-[10px] w-full" onClick={handleClick}>
                    <Text
                      className="mb-[11px] text-center text-white-A700 text-xl"
                      size="txtBebasNeueRegular20"
                    >
                      Ajouter Une Section +
                    </Text>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTen;
