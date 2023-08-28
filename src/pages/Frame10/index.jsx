import React, { useState, useEffect } from "react";

import { Img, Line, Text } from "components";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PDFContent from "./PDFContent";
import {TextField} from "@mui/material";

const FrameTen = () => {
  const [name, setName] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [intitulePoste, setPoste] = useState("");
  const [lieuPoste, setLieuPoste] = useState("");
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
  const [informationsPersonnelles2, setInformation2] = useState("");
  const [informationsPersonnelles3, setInformation3] = useState("");
  const [informationsPersonnelles4, setInformation4] = useState("");
  const [comportement, setComportement] = useState("");
  const [optionDefis, setOption] = useState("");
  const [anniversaire, setAnniversaire] = React.useState('');
  const [expatrie, setExpatrie] = React.useState('');
  const [football, setFootball] = React.useState('');
  const [useMobile, setUseMobile] = React.useState('');
  const [systemeExploitationMobile, setSystemeExploitationMobile] = React.useState('');
  const [childrenAges,setChildrenAges] = useState('')
  const [hasChildren, setHasChildren] = React.useState(false);
  const [situation, setSituation] = React.useState('');
  const [niveauEtudee, setNiveauEtudee] = React.useState('');
  const [operateurUtilise, setOperateurUtilise] = React.useState('');
  const [revenuAnnuel, setRevenuAnnuel] = React.useState('');
  const [residence, setResidence] = React.useState('');
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    // Fetch data from local storage
    const storedData = JSON.parse(localStorage.getItem('fullSelectedItems'));
    if (storedData) {
      const grouped = groupDataByTitle(storedData);
      setGroupedData(grouped);
    }
  }, []);

  const groupDataByTitle = (data) => {
    const grouped = {};
    data.forEach(item => {
      if (!grouped[item.title]) {
        grouped[item.title] = [];
      }
      grouped[item.title].push(item.item);
    });
    return grouped;
  };


  useEffect(() => {
    const storedDefisOption = localStorage.getItem("defisOption");
    const storedNiveauEtudee = localStorage.getItem("niveauEtude");
    const storedLieuposte = localStorage.getItem("lieuPoste");
    const storedoperateurUtilise = localStorage.getItem("optionDefis");
    const storedRevenuAnnuel = localStorage.getItem("revenuAnnuel");
    const storedResidence = localStorage.getItem("residence");
    if (storedDefisOption) {
      setDefisOption(storedDefisOption);
    }
    if (storedNiveauEtudee) {
      setNiveauEtudee(storedNiveauEtudee);
    }
    if (storedLieuposte) {
      setLieuPoste(storedLieuposte);
    }
    if (storedoperateurUtilise) {
      setOperateurUtilise(storedoperateurUtilise);
    }
    if (storedRevenuAnnuel) {
      setRevenuAnnuel(storedRevenuAnnuel);
    }
    if (storedResidence) {
      setResidence(storedResidence);
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
    const storedInformation2 = localStorage.getItem("informationsPersonnelles2");
    const storedInformation3 = localStorage.getItem("informationsPersonnelles3");
    const storedInformation4 = localStorage.getItem("informationsPersonnelles4");
    const storedComportement = localStorage.getItem("comportement");
    const storedAnniversaire = localStorage.getItem("anniversaire");
    const storedExpatrie = localStorage.getItem("expatrie");
    const storedFootball = localStorage.getItem("football");
    const storedUseMobile = localStorage.getItem("useMobile");
    const storedSystemeExploitationMobile = localStorage.getItem("systemeExploitationMobile");
    const storedChildrenAges = localStorage.getItem("childrenAges");
    const storedHasChildren = localStorage.getItem("hasChildren");
    const storedSituation = localStorage.getItem("situation");
    if (storedChildrenAges) {
        setChildrenAges(storedChildrenAges);
    }
    if (storedHasChildren) {
        setHasChildren(storedHasChildren);
    }
    if (storedSituation) {
        setSituation(storedSituation);
    }
    if (storedComportement) {
        setComportement(storedComportement);
    }
    if (storedAnniversaire) {
        setAnniversaire(storedAnniversaire);
    }
    if (storedExpatrie) {
        setExpatrie(storedExpatrie);
    }
    if (storedFootball) {
        setFootball(storedFootball);
    }
    if (storedUseMobile) {
        setUseMobile(storedUseMobile);
    }
    if (storedSystemeExploitationMobile) {
        setSystemeExploitationMobile(storedSystemeExploitationMobile);
    }
    if (storedInformation) {
      setInformation(storedInformation);
    }
    if (storedInformation2) {
        setInformation2(storedInformation2);
    }
    if (storedInformation3) {
        setInformation3(storedInformation3);
    }
    if (storedInformation4) {
        setInformation4(storedInformation4);
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
    localStorage.removeItem("moyencommunicationprefere");
    localStorage.removeItem("defisOption");
    localStorage.removeItem("informationsPersonnelles2");
    localStorage.removeItem("informationsPersonnelles3");
    localStorage.removeItem("informationsPersonnelles4");
    localStorage.removeItem("comportement");
    localStorage.removeItem("anniversaire");
    localStorage.removeItem("expatrie");
    localStorage.removeItem("football");
    localStorage.removeItem("useMobile");
    localStorage.removeItem("systemeExploitationMobile");
    localStorage.removeItem("childrenAges");
    localStorage.removeItem("hasChildren");
    localStorage.removeItem("situation");
    localStorage.removeItem("niveauEtude");
    localStorage.removeItem("operateurUtilise");
    localStorage.removeItem("revenuAnnuel");
    localStorage.removeItem("residence");
  };

  // Call deleteLocalStorageItems() to delete all the items

  const exportPDF = () => {
    const input = document.getElementById("FrameTen");
    const input2 = document.getElementById("FrameTenTwo");
    const input3 = document.getElementById("FrameTenThree");

    // Set the dimensions to emulate a desktop view
    const desktopWidth = 1440;
    const desktopHeight = 900;
    window.innerWidth = desktopWidth;
    window.innerHeight = desktopHeight;

    html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas1 => {
      html2canvas(input2, { logging: true, letterRendering: 1, useCORS: true }).then(canvas2 => {
        html2canvas(input3, { logging: true, letterRendering: 1, useCORS: true }).then(canvas3 => {
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgWidth = pdf.internal.pageSize.getWidth();
          const imgHeight = (canvas1.height * imgWidth) / canvas1.width;
          const scalingFactor = 1.2;
          const imgData1 = canvas1.toDataURL('image/png');
          const imgData2 = canvas2.toDataURL('image/png');
          const imgData3 = canvas3.toDataURL('image/png');
          const topMargin = 40;

          const pageContents = [
            { image: imgData1, x: -10, y: topMargin, width: imgWidth * scalingFactor, height: imgHeight * scalingFactor },
            { image: imgData2, x: 40, y: 50, width: imgWidth * 0.65, height: imgHeight * 0.9 },
            { image: imgData3, x: 40, y: 50, width: imgWidth * 0.65, height: imgHeight * 0.55 },
          ];

          // Loop through each page content and add it to the PDF
          pageContents.forEach((content, index) => {
            pdf.addImage(content.image, 'PNG', content.x, content.y, content.width, content.height);
            if (index !== pageContents.length - 1) {
              pdf.addPage(); // Add a new page for the next content
            }
          });

          // Save the PDF
          const fileName = name || "persona";
          pdf.save(`${fileName}.pdf`);
        });
      });
    });
    deleteLocalStorageItems()
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
                  <Text
                      className="md:ml-[0] mt-[9px] text-base text-center text-indigo-600"
                      size="txtLibreBaskervilleRegular16"
                  >
                    Lieu de poste
                  </Text>
                  <input
                      type="text"
                      className="md:ml-[0] mt-[11px] text-base text-center text-indigo-600_77 bg-blue_gray-100"
                      size="txtLibreBaskervilleRegular16Indigo60077"
                      placeholder="Saisir intitulé de poste"
                      style={{ border: 'none' }}
                      value={lieuPoste}
                  />
                  <div className="md:h-2.5 h-px  relative w-full">
                    <Line className="bg-indigo-100_01 h-px m-auto w-full" />
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
                  <Text
                    className="md:ml-[0] mt-3 text-base text-center text-indigo-600"
                    size="txtLibreBaskervilleRegular16"
                    >
                    Situation familiale : {situation}
                    </Text>
                  {hasChildren && (
                    <>
                        <Line className="bg-indigo-100_01 h-px mt-3.5 w-full" />
                        <Text
                            className="md:ml-[0] mt-[7px] text-base text-center text-indigo-600"
                            size="txtLibreBaskervilleRegular16"
                        >
                            Enfants
                        </Text>
                        <Text
                            className="md:ml-[0]mt-3 text-base text-center text-indigo-600_77"
                            size="txtLibreBaskervilleRegular16Indigo60077"
                        >
                            {childrenAges}
                        </Text>
                    </>
                  )}
                  <Line className="bg-indigo-100_01 h-px mt-3.5 w-full" />
                  <Text
                    className="md:ml-[0] mt-[7px] text-base text-center text-indigo-600"
                    size="txtLibreBaskervilleRegular16"
                  >
                    <>Niveau d&#39;études</>
                  </Text>
                  <Text
                    className=" text-base text-center text-indigo-600_77"
                    size="txtLibreBaskervilleRegular16Indigo60077"
                  >
                    {niveauEtudee}
                  </Text>
                  <Line className="bg-indigo-100_01 h-px mt-[15px] w-full" />
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
                          Moyen de communication préféré (Operateur)
                        </Text>

                          <Text
                            className="text-base text-indigo-600_77 w-[200px]"
                            size="txtLibreBaskervilleRegular16Indigo60077"
                          >
                            {operateurUtilise}
                          </Text>

                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                             Revenu Annuel                     </Text>

                        <Text
                            className="text-base text-indigo-600_77 w-[200px]"
                            size="txtLibreBaskervilleRegular16Indigo60077"
                        >
                          {revenuAnnuel}
                        </Text>

                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Residence
                        </Text>
                        <input
                          type="text"
                          className="input-colomun text-base text-indigo-600_77 w-[200px] bg-blue_gray-100"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                          placeholder="Saisir un objectif"
                          style={{ border: 'none' }}
                          value={residence}
                        />
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                        >
                          Est-ce que le produit/service concerne un persona dont l'anniversaire se situe dans 61 à 90 jours ?
                        </Text>
                        <input
                          type="text"
                          className="text-base text-indigo-600_77 w-[200px] bg-blue_gray-100"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                          placeholder="Saisir un hiérarchique"
                          style={{ border: 'none' }}
                          value={anniversaire}
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
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                            className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                            size="txtLibreBaskervilleRegular16"
                        >
                          Quelle est la station de radio que votre persona écoute ?
                        </Text>
                        <input
                            type="text"
                            className="text-base text-indigo-600_77 w-[200px] bg-blue_gray-100"
                            size="txtLibreBaskervilleRegular16Indigo60077"
                            style={{ border: 'none' }}
                            value={informationsPersonnelles2}
                            disabled={true}
                        />
                      </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                            className="max-w-[224px] md:max-w-full text-base text-indigo-600 bg-blue_gray-100"
                            size="txtLibreBaskervilleRegular16"
                        >
                          Quelle est la chaîne de télévision que votre persona regarde ?
                        </Text>
                        <input
                            type="text"
                            className="text-base text-indigo-600_77 w-[200px] bg-blue_gray-100"
                            size="txtLibreBaskervilleRegular16Indigo60077"
                            style={{ border: 'none' }}
                            value={informationsPersonnelles3}
                            disabled={true}
                        />
                      </div><div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">

                      <Text
                          className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                          size="txtLibreBaskervilleRegular16"
                      >
                        Quels sont les médias digitaux que votre persona suit ?
                      </Text>
                      <input
                          type="text"
                          className="text-base text-indigo-600_77 w-[200px] bg-blue_gray-100"
                          size="txtLibreBaskervilleRegular16Indigo60077"
                          style={{ border: 'none' }}
                          value={informationsPersonnelles4}
                          disabled={true}
                      />
                    </div>
                      <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[17px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                        <Text
                            className="max-w-[224px] md:max-w-full text-base text-indigo-600 bg-blue_gray-100"
                            size="txtLibreBaskervilleRegular16"
                        >
                            Quels sont les médias digitaux que votre persona suit ?
                        </Text>
                        <input
                            type="text"
                            className="text-base text-indigo-600_77 w-[200px] bg-blue_gray-100"
                            size="txtLibreBaskervilleRegular16Indigo60077"
                            style={{ border: 'none' }}
                            value={informationsPersonnelles3}
                            disabled={true}
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

                    </div>
                    <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
                  </div>
                </div>
                <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>

                <div
                    id="FrameTenTwo"
                    className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full"
                >
                  <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                    <Text
                        className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                        size="txtLibreBaskervilleRegular16"
                    >
                      systeme Exploitation de telephone
                    </Text>
                    <Text
                        className="text-base text-indigo-600_77 w-[200px]"
                        size="txtLibreBaskervilleRegular16Indigo60077"
                    >
                      {systemeExploitationMobile}
                    </Text>
                  </div>

                  <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                    <Text
                        className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                        size="txtLibreBaskervilleRegular16"
                    >
                      utilization de telephone portable
                    </Text>
                    <Text
                        className="text-base text-indigo-600_77 w-[200px]"
                        size="txtLibreBaskervilleRegular16Indigo60077"
                    >
                      {useMobile}
                    </Text>
                  </div>
                  <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                    <Text
                        className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                        size="txtLibreBaskervilleRegular16"
                    >
                      Est-ce que votre persona est un fan de football ?
                    </Text>
                    <Text
                        className="text-base text-indigo-600_77 w-[200px]"
                        size="txtLibreBaskervilleRegular16Indigo60077"
                    >
                      {football}
                    </Text>
                  </div>
                  <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                    <Text
                        className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                        size="txtLibreBaskervilleRegular16"
                    >
                      Le Compotement de votre persona est :
                    </Text>
                    <Text
                        className="text-base text-indigo-600_77 w-[200px]"
                        size="txtLibreBaskervilleRegular16Indigo60077"
                    >
                      {comportement}
                    </Text>
                  </div>
                  <div className=" relative w-full bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                    <Text
                        className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                        size="txtLibreBaskervilleRegular16"
                    >
                      Le niveau d'etude de votre persona est :
                    </Text>
                    <Text
                        className="text-base text-indigo-600_77 w-[200px]"
                        size="txtLibreBaskervilleRegular16Indigo60077"
                    >
                      {niveauEtudee}
                    </Text>
                  </div>
                </div>
                <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
                <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
                <div
                    id="FrameTenThree"
                    className=" bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full sm:h-[1209px] h-[1375px] md:h-[2553px] md:px-5 relative w-full rounded-[10px]"
                >
                  <div className="bg-blue_gray-100 flex flex-1 flex-col gap-[7px] h-[270px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[50px] py-[31px] rounded-[10px] w-full">
                    <Text
                        className="max-w-[224px] md:max-w-full text-base text-indigo-600"
                        size="txtLibreBaskervilleRegular16"
                    >
                      Les centres d'interet de ce persona :
                    </Text>
                    <Text size="txtLibreBaskervilleRegular16Indigo60077" className="text-base text-indigo-600_77 w-[200px] bg-transparent border-none text-blue-gray-600 font-serif w-full min-h-[100px] whitespace-pre-wrap p-4">
                      {Object.keys(groupedData).map(title => (
                          <React.Fragment key={title}>
                            {`${title}:\n${groupedData[title].join('\n')}`}
                            <br /><br />
                          </React.Fragment>
                      ))}
                    </Text>

                  </div>

                </div>
                <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
                <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
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
                <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
                <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
                <div className="flex flex-col font-bebasneue items-center justify-start outline-[5px] outline-dashed outline-white-A700 p-[43px] md:px-10 sm:px-5 rounded-[10px] w-full" onClick={handleClick}>
                  <Text
                      className="mb-[11px] text-center text-white-A700 text-xl"
                      size="txtBebasNeueRegular20"
                  >
                    Ajouter Une Section +
                  </Text>
                </div>
                <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
                <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTen;
