
import React, { useState, useEffect } from "react";

import { Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
const FrameOneSixPage = () => {
  const [outilsNecessaires, setOutils] = useState([]);
  const [optionDefis, setOption] = useState("");
  const [selectedCommunication, setSelectedCommunication] = useState([]);
  const [defis, setDefis] = useState([]);

  const [secteurActivite, setSelectedOption] = useState("");








  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };




  const handleIconClick = (iconSrc, iconName) => {
    const isSelected = selectedCommunication.some(
      (icon) => icon.src === iconSrc && icon.name === iconName
    );

    if (isSelected) {
      setSelectedCommunication(
        selectedCommunication.filter(
          (icon) => icon.src !== iconSrc || icon.name !== iconName
        )
      );
    } else {
      setSelectedCommunication([...selectedCommunication, { src: iconSrc, name: iconName }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("moyencommunicationprefere", JSON.stringify(selectedCommunication));
  }, [selectedCommunication]);

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  useEffect(() => {
    const storedOption = localStorage.getItem("optionDefis");
    if (storedOption) {
      setOption(storedOption);
    }
  }, []);

  useEffect(() => {
    if (optionDefis !== "") {
      localStorage.setItem("optionDefis", optionDefis);
    }
  }, [optionDefis]);

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setOutils((prevOutils) => [...prevOutils, checkboxValue]);
    } else {
      setOutils((prevOutils) => prevOutils.filter((outilsNecessaires) => outilsNecessaires !== checkboxValue));
    }
  };
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
  return (
    <>
      <div className="bg-indigo_100 flex flex-col  items-center justify-start w-full"
        style={{
          backgroundImage: `url("images/Frameonesix.png")`,
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
                  Étape 6/7 : Ajouter des informations relatives aux comportements
                </Text>
              </span>

              <div className="flex flex-col gap-[3px] items-start justify-start w-[815px] md:w-full">
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Sélectionnez les outils nécessaires ou utilisés par le persona.
                </Text>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-[40px]">

                  <div className="flex flex-col font-librebaskerville  w-[100%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input type="checkbox" name="communications" id="communications"
                          value="Système de gestion et de comptabilité"
                          checked={outilsNecessaires.includes("Système de gestion et de comptabilité")}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <Text className="ml-[25px] text-white_A700" variant="body2">
                        Système de gestion et de comptabilité
                      </Text>
                    </div>

                    <div className="flex flex-row items-start mt-[20px]">
                      <div className="relative">
                        <input type="checkbox" name="communications" id="communications"
                          value="Système de gestion de contenu"
                          checked={outilsNecessaires.includes("Système de gestion de contenu")}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <Text className="ml-[25px] text-white_A700" variant="body2">
                        Système de gestion de contenu
                      </Text>
                    </div>
                  </div>

                  <div className="flex flex-col font-librebaskerville  w-[100%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input type="checkbox" name="communications" id="communications"
                          value="Outil de gestion de projet"
                          checked={outilsNecessaires.includes("Outil de gestion de projet")}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <Text className="ml-[25px] text-white_A700" variant="body2">
                        Outil de gestion de projet
                      </Text>
                    </div>

                    <div className="flex flex-row items-start mt-[20px]">
                      <div className="relative">
                        <input type="checkbox" name="communications" id="communications"
                          value="Applications de stockage et de partage de dossiers en ligne"
                          checked={outilsNecessaires.includes("Applications de stockage et de partage de dossiers en ligne")}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <Text className="ml-[25px] text-white_A700" variant="body2">
                        Applications de stockage et de partage de dossiers en ligne
                      </Text>
                    </div>
                  </div>

                  <div className="flex flex-col font-librebaskerville  w-[100%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input type="checkbox" name="communications" id="communications"
                          value="Outil d'e-mailing"
                          checked={outilsNecessaires.includes("Outil d'e-mailing")}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <Text className="ml-[25px] text-white_A700" variant="body2">
                        Outil d'e-mailing
                      </Text>
                    </div>

                    <div className="flex flex-row items-start mt-[20px]">
                      <div className="relative">
                        <input type="checkbox" name="communications" id="communications"
                          value="Logiciel de planning des salariés"
                          checked={outilsNecessaires.includes("Logiciel de planning des salariés")}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <Text className="ml-[25px] text-white_A700" variant="body2">
                        Logiciel de planning des salariés
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-librebaskerville  w-[100%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input type="checkbox" name="communications" id="communications"
                          value="Logiciel de facturation"
                          checked={outilsNecessaires.includes("Logiciel de facturation")}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <Text className="ml-[25px] text-white_A700" variant="body2">
                        Logiciel de facturation
                      </Text>
                    </div>

                    <div className="flex flex-row items-start mt-[20px]">
                      <div className="relative">
                        <input type="checkbox" name="communications" id="communications"
                          value="Logiciel de traitement de texte"
                          checked={outilsNecessaires.includes("Logiciel de traitement de texte")}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <Text className="ml-[25px] text-white_A700" variant="body2">
                        Logiciel de traitement de texte
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-librebaskerville  w-[68%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input type="checkbox" name="communications" id="communications"
                          value="CRM"
                          checked={outilsNecessaires.includes("CRM")}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <Text className="ml-[25px] text-white_A700" variant="body2">
                        CRM
                      </Text>
                    </div>

                    <div className="flex flex-row items-start mt-[20px]">
                      <div className="relative">
                        <input type="checkbox" name="communications" id="communications"
                          value="Logiciel de reporting"
                          checked={outilsNecessaires.includes("Logiciel de reporting")}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <Text className="ml-[25px] text-white_A700" variant="body2">
                        Logiciel de reporting
                      </Text>
                    </div>
                  </div>
                </div>


                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Quel est le comportement d'achat de votre persona :
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
                        Acheteur actif
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
                        Acheteur passif                      </Text>
                    </div>
                  </div>


                </div>





                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Est-ce que le produit/service concerne un persona dont l'anniversaire se situe dans 61 à 90 jours ?
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
                        Oui                      </Text>
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
                        Non                     </Text>
                    </div>
                  </div>


                </div>



                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Est-ce que votre persona est un expatrié ou travaille-t-il dans son pays d'origine ?

                </Text>
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
                  <input type="text"
                    className="font-normal text-white_A700 w-[400px] bg-transparent outline-none text-left"
                    placeholder=""
                    style={{ border: 'none' }}
                    value={optionDefis}
                    onChange={handleOptionChange}
                  />
                  <Img
                    src="images/img_crayon1.png"
                    className="h-5 md:h-auto mb-[3px] object-cover w-5"
                    alt="crayonOne"
                  />
                </div>
                <Line className="bg-white_A700 h-px ml-0.5 md:ml-[0] w-full" />


                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Est-ce que votre persona est un fan de football ?
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
                        Oui                      </Text>
                    </div>

                    <div className="flex flex-row items-start ">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="relationClient"
                          id="non"
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



                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Depuis combien de temps votre persona utilise-t-il un appareil mobile ?
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
                        Utilise un appareil mobile (1 à 6 mois)
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
                        Utilise un appareil mobile (7 à 12 mois)                     </Text>
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
                        Utilise un appareil mobile (+ de 12 mois)                  </Text>
                    </div>
                  </div>


                </div>


                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >

                  Quel est le système d'exploitation mobile utilisé par votre persona ?
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
                        iOS                      </Text>
                    </div>

                    <div className="flex flex-row items-start ">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="relationClient"
                          id="non"
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
                        Android
                      </Text>
                    </div>
                  </div>
                </div>


                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Quel est l'opérateur téléphonique de votre person
                </Text>
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
                  <input type="text"
                    className="font-normal text-white_A700 w-[400px] bg-transparent outline-none text-left"
                    placeholder=""
                    style={{ border: 'none' }}
                    value={optionDefis}
                    onChange={handleOptionChange}
                  />
                  <Img
                    src="images/img_crayon1.png"
                    className="h-5 md:h-auto mb-[3px] object-cover w-5"
                    alt="crayonOne"
                  />
                </div>
                <Line className="bg-white_A700 h-px ml-0.5 md:ml-[0] w-full" />


                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Est-ce que votre persona est un voyageur ?
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
                    <option value="De retour de voyage il y a 1 semaine"> De retour de voyage il y a 1 semaine </option>
                    <option value="Grand voyageurs">Grand voyageurs</option>
                    <option value="Personnes faisant la navette">Personnes faisant la navette </option>
                    <option value="Revenus de voyage il y a 2 semaines">Revenus de voyage il y a 2 semaines</option>
                    <option value="Voyageurs internationaux fréquents">Voyageurs internationaux fréquents</option>

                  </select>
                </div>




                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Préciser le moyen de communication préféré avec les fournisseurs ou avec d"autres entreprises.
                </Text>
                <div className="gap-12 md:gap-6 grid sm:grid-cols-3 md:grid-cols-6 grid-cols-6 min-h-[auto] ml-1.5 md:ml-[0] mt-[10px] w-3/5">
                  <Img
                    src="images/icons8-facebook.png"
                    className={`avatar h-[50px] md:ml-[0] ml-[7px] mt-[46px] w-[65px] ${selectedCommunication.some(
                      (icon) =>
                        icon.src === 'images/icons8-facebook.png' &&
                        icon.name === 'Réseaux sociaux'
                    )
                      ? 'border-2 border-blue-500'
                      : ''
                      }`}
                    alt="icons8facebook"
                    onClick={() =>
                      handleIconClick('images/icons8-facebook.png', 'Réseaux sociaux')
                    }
                  />

                  <Img
                    src="images/icons8-email.png"
                    className={`avatar h-[50px] md:ml-[0] ml-[7px] mt-[46px] w-[40px] ${selectedCommunication.some(
                      (icon) =>
                        icon.src === 'images/icons8-email.png' &&
                        icon.name === 'Email'
                    )
                      ? 'border-2 border-blue-500'
                      : ''
                      }`}
                    alt="icons8email"
                    onClick={() =>
                      handleIconClick('images/icons8-email.png', 'Email')
                    }
                  />

                  <Img
                    src="images/icons8-sms.png"
                    className={`avatar h-[50px] md:ml-[0] ml-[7px] mt-[46px] w-[65px] ${selectedCommunication.some(
                      (icon) =>
                        icon.src === 'images/icons8-sms.png' &&
                        icon.name === 'SMS'
                    )
                      ? 'border-2 border-blue-500'
                      : ''
                      }`}
                    alt="icons8sms"
                    onClick={() =>
                      handleIconClick('images/icons8-sms.png', 'SMS')
                    }
                  />

                  <Img
                    src="images/icons8-phone.png"
                    className={`avatar h-[50px] md:ml-[0] ml-[7px] mt-[46px] w-[65px] ${selectedCommunication.some(
                      (icon) =>
                        icon.src === 'images/icons8-phone.png' &&
                        icon.name === 'Phone'
                    )
                      ? 'border-2 border-blue-500'
                      : ''
                      }`}
                    alt="icons8phone"
                    onClick={() =>
                      handleIconClick('images/icons8-phone.png', 'Phone')
                    }
                  />

                  <Img
                    src="images/icons8-face2face.png"
                    className={`avatar h-[50px] md:ml-[0] ml-[7px] mt-[46px] w-[65px] ${selectedCommunication.some(
                      (icon) =>
                        icon.src === 'images/icons8-face2face.png' &&
                        icon.name === 'Face to face'
                    )
                      ? 'border-2 border-blue-500'
                      : ''
                      }`}
                    alt="icons8face2face"
                    onClick={() =>
                      handleIconClick('images/icons8-face2face.png', 'Face to face')
                    }
                  />


                </div>
              </div>

            </div>
            <div className="flex items-center justify-end mt-[40px] ml-1.5 md:ml-[0] md:mt-0 w-4/5">
              <a href="frameonetwo">
                <Text
                  className="bg-indigo_100_02 flex h-10 items-center justify-center mb-[178px] ml-1.5 rounded-[10px] text-blue_gray_400_01 text-center w-10"
                  as="h2"
                  variant="h2"
                >
                  <>&lt;</>
                </Text>
              </a>
              <a href="/frameonethree">
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

export default FrameOneSixPage;


