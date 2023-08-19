import React, { useState, useEffect } from "react";
import { Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const FrameOneTwoPage = () => {
  const [objectifPersona, setObjectif] = useState("");
  const [defis, setDefis] = useState([]);
  const [responsabilite, setResponsabilite] = useState("");
  const [defisOption, setDefisOption] = useState("");
  const [secteurActivite, setSelectedOption] = useState("");








  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const handleDefisOptionChange = (event) => {
    setDefisOption(event.target.value);
  };

  useEffect(() => {
    const storedOption = localStorage.getItem("defisOption");
    if (storedOption) {
      setDefisOption(storedOption);
    }
  }, []);

  useEffect(() => {
    if (defisOption !== "") {
      localStorage.setItem("defisOption", defisOption);
    }
  }, [defisOption]);

  const handleResponsabiliteChange = (event) => {
    setResponsabilite(event.target.value);
  };

  useEffect(() => {
    const storedResponsabilite = localStorage.getItem("responsabilite");
    if (storedResponsabilite) {
      setResponsabilite(storedResponsabilite);
    }
  }, []);

  useEffect(() => {
    if (responsabilite !== "") {
      localStorage.setItem("responsabilite", responsabilite);
    }
  }, [responsabilite]);

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

  useEffect(() => {
    const storedDefis = localStorage.getItem("defis");
    if (storedDefis) {
      setDefis(JSON.parse(storedDefis));
    }
  }, []);

  useEffect(() => {
    if (defis.length > 0) {
      localStorage.setItem("defis", JSON.stringify(defis));
    }
  }, [defis]);

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

  return (
    <>
      <div
        className="bg-indigo_100 flex flex-col  items-center justify-start w-full"
        style={{
          backgroundImage: `url("images/Frameonetwo.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[550px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div
            className="container-div flex flex-1 flex-col gap-[15px] justify-start md:mt-0 mt-[30px] w-full"
            style={{
              overflow: "hidden",
            }}
          >
            <div className="flex flex-col items-start justify-start w-full ml-20">
              <span className="text-center">
                <Text
                  className="text-indigo_900 font-bebasneue"
                  as="h3"
                  variant="h3"
                >
                  Étape 5/7 : "Ajouter des informations relatives aux intérêts
                </Text>
              </span>
              <div className="flex flex-col gap-[3px] items-start justify-start w-[815px] md:w-full">
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Quels sont les objectifs du persona ?
                </Text>
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="font-normal text-white_A700 w-[420px] bg-transparent outline-none text-left"
                      placeholder="Par exemple, en termes de prospects, de revenus, etc."
                      style={{ border: "none" }}
                      value={objectifPersona}
                      onChange={handleObjectifChange}
                      placeholderTextColor="white"
                    />
                  </div>
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
                  Quels sont ses plus grands défis ?
                </Text>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-[20px]">
                  <div className="flex flex-col font-librebaskerville  w-[100%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="relationClient"
                          id="relationClient"
                          value="Communications et relations avec les clients"
                          checked={defis.includes(
                            "Communications et relations avec les clients"
                          )}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        Communications et relations avec les clients
                      </Text>
                    </div>

                    <div className="flex flex-row items-start ">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="motivationSalaries"
                          id="motivationSalaries"
                          value="Motivation des salariés"
                          checked={defis.includes("Motivation des salariés")}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        Motivation des salariés
                      </Text>
                    </div>
                  </div>

                  <div className="flex flex-col font-librebaskerville  w-[68%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="gestionChangement"
                          id="gestionChangement"
                          value="Gestion des changements"
                          checked={defis.includes("Gestion des changements")}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        Gestion des changements
                      </Text>
                    </div>

                    <div className="flex flex-row items-start mt-[20px]">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="communicationInterne"
                          id="communicationInterne"
                          value="Communication interne"
                          checked={defis.includes("Communication interne")}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        Communication interne
                      </Text>
                    </div>
                  </div>

                  <div className="flex flex-col font-librebaskerville  w-[68%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="resources"
                          id="resources"
                          value="Ressources"
                          checked={defis.includes("Ressources")}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        Ressources
                      </Text>
                    </div>

                    <div className="flex flex-row items-start mt-[20px]">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="collaborationCreativité"
                          id="collaborationCreativité"
                          value="Collaboration et créativité"
                          checked={defis.includes(
                            "Collaboration et créativité"
                          )}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        Collaboration et créativité
                      </Text>
                    </div>
                  </div>

                  <div className="flex flex-col font-librebaskerville w-[68%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="gestionProjets"
                          id="gestionProjets"
                          value="Gestion des projets et organisation"
                          checked={defis.includes(
                            "Gestion des projets et organisation"
                          )}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        Gestion des projets et organisation
                      </Text>
                    </div>

                    <div className="flex flex-row items-start ">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="developpementPersonnel"
                          id="developpementPersonnel"
                          value="Développement professionnel"
                          checked={defis.includes(
                            "Développement professionnel"
                          )}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        Développement professionnel
                      </Text>
                    </div>
                  </div>
                </div>

                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Queles sont ses responsabilités ?
                </Text>
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="font-normal text-white_A700 w-[420px] bg-transparent outline-none text-left"
                      placeholder="Par exemple, en termes de prospects, de revenus, etc."
                      style={{ border: "none" }}
                      value={responsabilite}
                      onChange={handleResponsabiliteChange}
                    />
                  </div>
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
                  Quels sont vos principaux centres d'intérêt ou hobbies ?

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
                    <option value="Business and industry "> Business and industry </option>
                    <option value="Entertainment (leisure)">Entertainment (leisure)</option>
                    <option value="Family and relationship">Family and relationship </option>
                    <option value="Fitness and wellness (fitness)">Fitness and wellness (fitness)</option>
                    <option value="Foods drinks (consumables)">Foods drinks (consumables) </option>
                    <option value="Hobbies and activities">Hobbies and activities</option>
                    <option value="Shopping and fashion ">Shopping and fashion </option>
                    <option value="Sport and outdoors">Sport and outdoors</option>
                    <option value="Technology (computers and electronics)">Technology (computers and electronics)</option>

                  </select>
                </div>


                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >

                  Business and industry
                </Text>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-[20px]">
                  <div className="flex flex-col font-librebaskerville  w-[100%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="relationClient"
                          id="relationClient"
                          value="Communications et relations avec les clients"
                          checked={defis.includes(
                            "Communications et relations avec les clients"
                          )}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        advertising meaning                      </Text>
                    </div>

                    <div className="flex flex-row items-start ">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="motivationSalaries"
                          id="motivationSalaries"
                          value="Motivation des salariés"
                          checked={defis.includes("Motivation des salariés")}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        agriculture (industry)                      </Text>
                    </div>
                  </div>

                  <div className="flex flex-col font-librebaskerville  w-[68%] md:w-full">
                    <div className="flex flex-row items-start">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="gestionChangement"
                          id="gestionChangement"
                          value="Gestion des changements"
                          checked={defis.includes("Gestion des changements")}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>




                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        architecture                   </Text>
                    </div>

                    <div className="flex flex-row items-start ">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="developpementPersonnel"
                          id="developpementPersonnel"
                          value="Développement professionnel"
                          checked={defis.includes(
                            "Développement professionnel"
                          )}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                      </div>
                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                        aviation
                      </Text>

                      <Text
                        className="ml-[25px] text-white_A700"
                        variant="body2"
                      >
                      </Text>
                    </div>
                  </div>
                </div>



              </div>
            </div>
            <div className="flex items-center justify-end mt-[40px] ml-1.5 md:ml-[0] md:mt-0 w-4/5">
              <a href="frameoneone">
                <Text
                  className="bg-indigo_100_02 flex h-10 items-center justify-center mb-[178px] ml-1.5 rounded-[10px] text-blue_gray_400_01 text-center w-10"
                  as="h2"
                  variant="h2"
                >
                  &lt;
                </Text>
              </a>
              <a href="/frameonesix">
                <Text
                  className="bg-indigo_100_02 flex h-10 items-center justify-center mb-[178px] ml-[11px] rounded-[10px] text-blue_gray_400 text-center w-10"
                  as="h2"
                  variant="h2"
                >
                  &gt;
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameOneTwoPage;
