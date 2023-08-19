import React, { useState, useEffect } from "react";
import { Text } from "components";
import Sidebar1 from "components/Sidebar1";

const FrameOnePage = () => {
  const [ageRange, setAgeRange] = useState("");
  const [etudeRange, setEtudeRange] = useState(""); // Add setEtudeRange state function
  const [secteurActivite, setSelectedOption] = useState("");
  const [defis, setDefis] = useState([]);




  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setDefis((prevDefis) => [...prevDefis, checkboxValue]);
    } else {
      setDefis((prevDefis) =>
        prevDefis.filter((defi) => defi !== checkboxValue)
      );
    }
  };



  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAgeRangeChange = (event) => {
    const rangeValue = parseInt(event.target.value);
    setAgeRange(rangeValue);
  };

  const handleEtudeRangeChange = (event) => {
    const rangeValue = parseInt(event.target.value);
    setEtudeRange(rangeValue)
  };
  useEffect(() => {
    const storedAgeRange = localStorage.getItem("ageRange");
    if (storedAgeRange) {
      setAgeRange(parseInt(storedAgeRange));
    }
  }, []);

  useEffect(() => {
    if (ageRange !== "") {
      localStorage.setItem("ageRange", ageRange);
    }
  }, [ageRange]);

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
              <span className="text-center items-start">
                <Text className="text-indigo_900 font-bebasneue" as="h3" variant="h3">
                  Étape 3/7 : Ajouter des données démographiques
                </Text>
              </span>
              <div className="flex flex-col gap-[3px] items-start justify-start w-[815px] md:w-full">
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Sélectionnez une tranche d'âge.
                </Text>
                <div className="h-[55px] md:h-[67px] mt-[34px] relative w-[85%] md:w-full">
                  <div className="range-labels flex justify-between text-white_A700">
                    <span>{ageRangeLabels[0]}</span>
                    <span>{ageRangeLabels[5]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={ageRange}
                    step="1"
                    className="w-full bg-transparent border-none outline-none"
                    id="ageRange"
                    onChange={handleAgeRangeChange}
                  />
                  <div className="flex justify-between text-white_A700">
                    <span>{ageRangeLabels[ageRange]}</span>
                  </div>
                </div>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Quelle est la situation matrimoniale de votre persona ?
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
                    <option value="Célebataire">Célebataire </option>
                    <option value="C'est compliqué">C'est compliqué</option>
                    <option value="Dans une relation libre">Dans une relation libre </option>
                    <option value="Divorcé">Divorcé</option>
                    <option value="En couple">En couple </option>
                    <option value="Fiancé">Fiancé</option>
                    <option value="Marié">Marié</option>
                    <option value="Non spécifiée">Non spécifiée</option>
                    <option value="Séparé">Séparé</option>
                    <option value="Veuf">Veuf</option>

                  </select>
                </div>

                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Quelle est la situation matrimoniale de votre persona ?
                </Text>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-[20px]">
                  <div className="flex flex-col font-librebaskerville  w-[100%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="relationClient"
                          id="relationClient"
                          value="oui"
                          checked={defis.includes(
                            "oui"
                          )}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        Oui
                      </Text>
                    </div>

                    <div className="flex flex-row items-start ">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="relationClient"
                          id="relationClient"
                          value="non"
                          checked={defis.includes("non")}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        Non
                      </Text>
                    </div>
                  </div>


                </div>
              </div>
              <div className="flex items-center justify-end mt-[40px] ml-1.5 md:ml-[0] md:mt-0 w-4/5">
                <a href="frameoneseven">
                  <Text
                    className="bg-indigo_100_02 flex h-10 items-center justify-center mb-[178px] ml-1.5 rounded-[10px] text-blue_gray_400_01 text-center w-10"
                    as="h2"
                    variant="h2"
                  >
                    <>&lt;</>
                  </Text>
                </a>
                <a href="/frameoneone">
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
      </div>

    </>
  );
};

export default FrameOnePage;
