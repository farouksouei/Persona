import React, { useState, useEffect } from "react";

import { Line, Text } from "components";

const FrameOneEightPage = () => {
  const [tailleEntreprise, setTaille] = useState("");



  const handleTailleRangeChange = (event) => {
    const rangeValue = parseInt(event.target.value);
    setTaille(rangeValue);
  };


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
      <div className="bg-indigo_100_03 flex flex-col font-bebasneue items-center justify-end mx-auto p-[76px] md:px-10 sm:px-5 shadow-bs w-full"
        style={{
          backgroundImage: `url("images/frameHomeBackground.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-[53px] items-center justify-start mt-1 w-[51%] md:w-full">
          <Text
            className="font-normal text-center text-indigo_900 w-[67%] sm:w-full"
            as="h1"
            variant="h1"
          >
            Saisissez vos coordonnées ci-dessous pour télécharger ou partager
            votre persona.
          </Text>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex md:flex-col flex-row font-librebaskerville md:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
                <Text className="font-bold text-white_A700" as="h5" variant="h5">
                  Prénom
                </Text>
                <input
                  type="text"
                  className="font-normal text-white_A700 w-[199px] bg-transparent outline-none text-left"
                  placeholder="Saisir un prénom"
                  style={{ border: 'none' }}
                />
                <Line className="bg-white_A700 h-px w-[84%]" />
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
                <Text className="font-bold text-white_A700" as="h5" variant="h5">
                  Nom
                </Text>
                <input
                  type="text"
                  className="font-normal text-white_A700 w-[199px] bg-transparent outline-none text-left"
                  placeholder="Saisir un nom"
                  style={{ border: 'none' }}
                />
                <Line className="bg-white_A700 h-px w-[84%]" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-librebaskerville md:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
                <Text className="font-bold text-white_A700" as="h5" variant="h5">
                  Email professionnel
                </Text>
                <input
                  type="text"
                  className="font-normal text-white_A700 w-[199px] bg-transparent outline-none text-left"
                  placeholder="professionnel"
                  style={{ border: 'none' }}
                />
                <Line className="bg-white_A700 h-px w-[84%]" />
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
                <Text className="font-bold text-white_A700" as="h5" variant="h5">
                  Numéro de téléphone
                </Text>
                <input
                  type="text"
                  className="font-normal text-white_A700 w-[199px] bg-transparent outline-none text-left"
                  placeholder="+235545344554"
                  style={{ border: 'none' }}
                />
                <Line className="bg-white_A700 h-px w-[84%]" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-librebaskerville md:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
                <Text className="font-bold text-white_A700" as="h5" variant="h5">
                  Nom de l'entreprise
                </Text>
                <input
                  type="text"
                  className="font-normal text-white_A700 w-[199px] bg-transparent outline-none text-left"
                  placeholder="Joe doe & associes"
                  style={{ border: 'none' }}
                />
                <Line className="bg-white_A700 h-px w-[84%]" />
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
                <Text className="font-bold text-white_A700" as="h5" variant="h5">
                  Siteweb
                </Text>
                <input
                  type="text"
                  className="font-normal text-white_A700 w-[199px] bg-transparent outline-none text-left"
                  placeholder="www.loremipsium.com"
                  style={{ border: 'none' }}
                />
                <Line className="bg-white_A700 h-px w-[84%]" />
              </div>
            </div>



            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-1 w-full">
            </div>


            <a href="frameten">
              <button
                className="bg-blue_gray_100 font-bebasneue h-[45px] justify-center md:ml-[0] ml-[190px] mt-44 pb-1.5 pt-0.5 sm:px-5 px-[35px] rounded-[5px] text-center text-indigo_900 w-[331px]"
              >
                télécharger maintenant
              </button>
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default FrameOneEightPage;
