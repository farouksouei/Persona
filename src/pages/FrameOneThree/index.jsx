import React, { useState, useEffect } from "react";
import { Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const FrameOneOnePage = () => {
  const [informationsPersonnelles, setInformation] = useState("");
  const [selectedIcons, setSelectedIcons] = useState([]);

  const handleIconClick = (iconSrc, iconName) => {
    const isSelected = selectedIcons.some(
      (icon) => icon.src === iconSrc && icon.name === iconName
    );

    if (isSelected) {
      setSelectedIcons(
        selectedIcons.filter(
          (icon) => icon.src !== iconSrc || icon.name !== iconName
        )
      );
    } else {
      setSelectedIcons([...selectedIcons, { src: iconSrc, name: iconName }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("reseauxsociaux", JSON.stringify(selectedIcons));
  }, [selectedIcons]);

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

  useEffect(() => {
    const storedIcons = localStorage.getItem("selectedIcons");
    if (storedIcons) {
      setSelectedIcons(JSON.parse(storedIcons));
    }
  }, []);
  return (
    <>
      <div className="bg-indigo_100 flex flex-col  items-center justify-start w-full"
        style={{
          backgroundImage: `url("images/Frameonethree.png")`,
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
                  Étape 7/7 : Ajouter des informations concernant les médias
                </Text>
              </span>
              <div className="flex flex-col gap-[3px] items-start justify-start w-[815px] md:w-full">
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Ajouter des informations relatives aux
                  sources d&#39;information utilisées
                </Text>
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
                  <input
                    type="text"
                    className="font-normal text-white_A700 w-[400px] bg-transparent outline-none text-left"
                    placeholder="Ex : formations en ligne, conférences, etc."
                    style={{ border: 'none' }}
                    value={informationsPersonnelles}
                    onChange={handleInformationChange}
                  />
                  <Img
                    src="images/img_crayon1.png"
                    className="h-5 md:h-auto mb-0.5 object-cover w-5 ml-2"
                    alt="logo"
                  />
                </div>
                <Line className="bg-white_A700 h-px ml-0.5 md:ml-[0] w-[99%]" />

                <div className="flex flex-col gap-[3px] items-start justify-start w-[815px] md:w-full">
                  <Text
                    className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                    as="h5"
                    variant="h5"
                  >
                    Quelle est la station de radio que votre persona écoute ?

                  </Text>
                  <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
                    <input
                      type="text"
                      className="font-normal text-white_A700 w-[400px] bg-transparent outline-none text-left"
                      placeholder=""
                      style={{ border: 'none' }}
                      value={informationsPersonnelles}
                      onChange={handleInformationChange}
                    />
                    <Img
                      src="images/img_crayon1.png"
                      className="h-5 md:h-auto mb-0.5 object-cover w-5 ml-2"
                      alt="logo"
                    />
                  </div>
                  <Line className="bg-white_A700 h-px ml-0.5 md:ml-[0] w-[99%]" />

                  <div className="flex flex-col gap-[3px] items-start justify-start w-[815px] md:w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                      as="h5"
                      variant="h5"
                    >
                      Quelle est la chaîne de télévision que votre persona regarde ?                    </Text>
                    <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
                      <input
                        type="text"
                        className="font-normal text-white_A700 w-[400px] bg-transparent outline-none text-left"
                        placeholder=""
                        style={{ border: 'none' }}
                        value={informationsPersonnelles}
                        onChange={handleInformationChange}
                      />
                      <Img
                        src="images/img_crayon1.png"
                        className="h-5 md:h-auto mb-0.5 object-cover w-5 ml-2"
                        alt="logo"
                      />
                    </div>
                    <Line className="bg-white_A700 h-px ml-0.5 md:ml-[0] w-[99%]" />

                    <div className="flex flex-col gap-[3px] items-start justify-start w-[815px] md:w-full">
                      <Text
                        className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                        as="h5"
                        variant="h5"
                      >
                        Quels sont les médias digitaux que votre persona suit ?                   </Text>
                      <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
                        <input
                          type="text"
                          className="font-normal text-white_A700 w-[400px] bg-transparent outline-none text-left"
                          placeholder=""
                          style={{ border: 'none' }}
                          value={informationsPersonnelles}
                          onChange={handleInformationChange}
                        />
                        <Img
                          src="images/img_crayon1.png"
                          className="h-5 md:h-auto mb-0.5 object-cover w-5 ml-2"
                          alt="logo"
                        />
                      </div>
                      <Line className="bg-white_A700 h-px ml-0.5 md:ml-[0] w-[99%]" />

                      <Text
                        className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                        as="h5"
                        variant="h5"
                      >
                        Sélectionnez les réseaux sociaux utilisés.
                      </Text>
                      <div className="gap-12 md:gap-6 grid sm:grid-cols-3 md:grid-cols-6 grid-cols-6 min-h-[auto] ml-1.5 md:ml-[0] mt-[23px] w-3/5">
                        <Img
                          src={selectedIcons.some(
                            (icon) =>
                              icon.src === 'images/icons8-facebook.png' &&
                              icon.name === 'Facebook'
                          )
                            ? 'images/icons8-facebook-active.png' // Replace 'new-image-source.png' with the new image source
                            : 'images/icons8-facebook.png'
                          }
                          className={`h-[50px] md:ml-[0] ml-[7px] mt-[46px] w-[65px] ${selectedIcons.some(
                            (icon) =>
                              icon.src === 'images/icons8-facebook.png' &&
                              icon.name === 'Facebook'
                          )
                            ? ''
                            : ''
                            }`}
                          alt="icons8facebook"
                          onClick={() =>
                            handleIconClick('images/icons8-facebook.png', 'Facebook')
                          }
                        />

                        <Img
                          src={selectedIcons.some(
                            (icon) =>
                              icon.src === 'images/icons8-instagram.png' &&
                              icon.name === 'Instagram'
                          )
                            ? 'images/icons8-instagram-active.png' // Replace 'new-image-source.png' with the new image source
                            : 'images/icons8-instagram.png'
                          }
                          className={`h-[50px] md:ml-[0] ml-[7px] mt-[46px] w-[65px] ${selectedIcons.some(
                            (icon) =>
                              icon.src === 'images/icons8-instagram.png' &&
                              icon.name === 'Instagram'
                          )
                            ? ''
                            : ''
                            }`}
                          alt="icons8instagram"
                          onClick={() =>
                            handleIconClick('images/icons8-instagram.png', 'Instagram')
                          }
                        />

                        <Img
                          src={selectedIcons.some(
                            (icon) =>
                              icon.src === 'images/icons8-twitter.png' &&
                              icon.name === 'Twitter'
                          )
                            ? 'images/icons8-twitter-active.png' // Replace 'new-image-source.png' with the new image source
                            : 'images/icons8-twitter.png'
                          }
                          className={`h-[50px] md:ml-[0] ml-[7px] mt-[46px] w-[65px] ${selectedIcons.some(
                            (icon) =>
                              icon.src === 'images/icons8-twitter.png' &&
                              icon.name === 'Twitter'
                          )
                            ? ''
                            : ''
                            }`}
                          alt="icons8twitter"
                          onClick={() =>
                            handleIconClick('images/icons8-twitter.png', 'Twitter')
                          }
                        />

                        <Img
                          src={selectedIcons.some(
                            (icon) =>
                              icon.src === 'images/icons8-linkedin.png' &&
                              icon.name === 'Linkedin'
                          )
                            ? 'images/icons8-linkedin-active.png' // Replace 'new-image-source.png' with the new image source
                            : 'images/icons8-linkedin.png'
                          }
                          className={`h-[50px] md:ml-[0] ml-[7px] mt-[46px] w-[65px] ${selectedIcons.some(
                            (icon) =>
                              icon.src === 'images/icons8-linkedin.png' &&
                              icon.name === 'Linkedin'
                          )
                            ? ''
                            : ''
                            }`}
                          alt="icons8linkedin"
                          onClick={() =>
                            handleIconClick('images/icons8-linkedin.png', 'Linkedin')
                          }
                        />

                        <Img
                          src={selectedIcons.some(
                            (icon) =>
                              icon.src === 'images/icons8-pinterest.png' &&
                              icon.name === 'Pinterest'
                          )
                            ? 'images/icons8-pinterest-active.png' // Replace 'new-image-source.png' with the new image source
                            : 'images/icons8-pinterest.png'
                          }
                          className={`h-[50px] md:ml-[0] ml-[7px] mt-[46px] w-[65px] ${selectedIcons.some(
                            (icon) =>
                              icon.src === 'images/icons8-pinterest.png' &&
                              icon.name === 'Pinterest'
                          )
                            ? ''
                            : ''
                            }`}
                          alt="icons8pinterest"
                          onClick={() =>
                            handleIconClick('images/icons8-pinterest.png', 'Pinterest')
                          }
                        />

                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-[40px] ml-1.5 md:ml-[0] md:mt-0 w-4/5">
                    <a href="frameonesix">
                      <Text
                        className="bg-indigo_100_02 flex h-10 items-center justify-center mb-[178px] ml-1.5 rounded-[10px] text-blue_gray_400_01 text-center w-10"
                        as="h2"
                        variant="h2"
                      >
                        <>&lt;</>
                      </Text>
                    </a>
                    <a href="/frameoneeight">
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
        </div>
      </div>
    </>
  );
};

export default FrameOneOnePage;

