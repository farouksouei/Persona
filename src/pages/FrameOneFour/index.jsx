import React, { useState, useEffect } from "react";
import { Text } from "components";
import Sidebar1 from "components/Sidebar1";

const FrameOneFourPage = () => {
  const [tailleEntreprise, setTaille] = useState("");
  const [secteurActivite, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTailleRangeChange = (event) => {
    const rangeValue = parseInt(event.target.value);
    setTaille(rangeValue);
  };

  useEffect(() => {
    const storedSecteur = localStorage.getItem("secteurActivite");
    if (storedSecteur) {
      setSelectedOption(storedSecteur);
    }
  }, []);

  useEffect(() => {
    if (secteurActivite !== "") {
      localStorage.setItem("secteurActivite", secteurActivite);
    }
  }, [secteurActivite]);

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

  return (
    <>
      <div className="bg-indigo_100 flex flex-col  items-center justify-start w-full"
        style={{
          backgroundImage: `url("images/Frameone.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[550px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="container-div flex flex-1 flex-col gap-[15px]  justify-start md:mt-0 mt-[30px] w-full"
            style={{
              overflow: "hidden",
            }}
          >
            <div className="flex flex-col items-start justify-start w-full ml-20">
              <span className="text-center">
                <Text className="text-indigo_900 font-bebasneue" as="h3" variant="h3">
                  Étape 1/7 : Ajouter des informations relatives à la marque
                </Text>
              </span>
              <div className="flex flex-col gap-[3px] items-start justify-start w-[815px] md:w-full">
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Sélectionnez un secteur d&#39;activité.
                </Text>
                <div className="h-[55px] md:h-[67px] mt-[34px] relative w-[85%] md:w-full">
                  <select
                    className="w-full bg-transparent "
                    id="dropdown1"
                    value={secteurActivite}
                    onChange={handleChange}
                  >
                    <option disabled={!secteurActivite} defaultValue={!secteurActivite ? "default" : ""}>
                      {secteurActivite || "Select an option"}
                    </option>
                    <option value="Vente">Vente</option>
                    <option value="Comptabilié">Comptabilié</option>
                    <option value="Investissement">Investissement</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Technologie">Technologie</option>
                    <option value="Publicité">Publicité</option>
                    <option value="Banque">Banque</option>
                    <option value="Industrie pharmaceutique">Industrie pharmaceutique</option>
                    <option value="Marqueting">Marqueting</option>
                    <option value="Artisanat">Artisanat</option>
                    <option value="Transport">Transport</option>
                    <option value="Immobilier">Immobilier</option>
                    <option value="santé">santé</option>
                    <option value="Assurance">Assurance</option>
                    <option value="Agricuture">Agricuture</option>
                    <option value="Construction">Construction</option>
                    <option value="Alimentation et besoin">Alimentation et besoin</option>
                  </select>
                </div>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Quelle est la taille de l&#39;entreprise ?
                </Text>
                <div className="h-[55px] md:h-[67px] mt-[34px] relative w-[85%] md:w-full">
                  <div className="flex justify-between text-white_A700">
                    <span>{tailleEntrepriseLabel[0]}</span>
                    <span>{tailleEntrepriseLabel[8]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="8"
                    value={tailleEntreprise}
                    step="1"
                    className="w-full bg-transparent border-none outline-none"
                    id="ageRange"
                    onChange={handleTailleRangeChange}
                  />
                  <div className="flex justify-between text-white_A700">
                    <span>{tailleEntrepriseLabel[tailleEntreprise]}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end mt-[40px] ml-1.5 md:ml-[0] md:mt-0 w-4/5">
              <a href="frameonefive">
                <Text
                  className="bg-indigo_100_02 flex h-10 items-center justify-center mb-[178px] ml-1.5 rounded-[10px] text-blue_gray_400_01 text-center w-10"
                  as="h2"
                  variant="h2"
                >
                  <>&lt;</>
                </Text>
              </a>
              <a href="/frameoneseven">
                <Text
                  className="bg-indigo_100_02 flex h-10 items-center justify-center mb-[178px] ml-[11px] rounded-[10px] text-blue_gray_400 text-center w-10"
                  as="h2"
                  variant="h2"
                >
                  <>&gt;</>
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameOneFourPage;
