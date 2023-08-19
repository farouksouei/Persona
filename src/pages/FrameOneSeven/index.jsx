import React, { useState, useEffect, useRef } from "react";

import { Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
const FrameOneSevenPage = () => {

  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const sidebarAvatarRef = useRef(null);

  const avatarStyles = [
    "images/img_avatarstyle07.png",
    "images/img_avatarstyle08.png",
    "images/img_avatarstyle10.png",
    "images/img_avatarstyle11.png",
    "images/img_avatarstyle12.png",
    "images/img_avatarstyle13.png",
    "images/img_avatarstyle14.png",
    "images/img_avatarstyle15.png",
    "images/img_avatarstyle16.png",
    "images/img_avatarstyle17.png",
    "images/img_avatarstyle09.png",
    "images/img_avatarstyle06.png",
    "images/img_avatarstyle05.png",
    "images/img_avatarstyle04.png",
    "images/img_avatarstyle18.png",
  ];

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

  const handleAvatarSelection = (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
  };

  useEffect(() => {
    if (sidebarAvatarRef.current) {
      sidebarAvatarRef.current.src = selectedAvatar;
    }
    localStorage.setItem("selectedAvatar", selectedAvatar);
  }, [selectedAvatar]);

  useEffect(() => {
    const storedAvatar = localStorage.getItem("selectedAvatar");
    if (storedAvatar) {
      setSelectedAvatar(storedAvatar);
    }
  }, []);

  return (
    <>
      <div className="bg-indigo_100 flex flex-col  items-center justify-start w-full"
        style={{
          backgroundImage: `url("images/FrameOneSeven.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 fromtwo="" className="!sticky !w-[550px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="container-div flex flex-1 flex-col gap-[15px]  justify-start md:mt-0 mt-[30px] w-full"
            style={{
              overflow: "hidden",
            }}
          >
            <div className="flex flex-col items-start justify-start w-full ml-20">
              <span className="text-center">
                <Text className="text-indigo_900 font-bebasneue" as="h3" variant="h3">
                  Étape 2/7 : Créer votre avatar
                </Text>
              </span>
              <div className="flex flex-col gap-[3px] items-start justify-start w-40% md:w-full">
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Nommez votre persona.
                </Text>
                <div>
                  <input
                    type="text"
                    className="font-normal text-white_A700 w-[199px] bg-transparent outline-none text-left"
                    placeholder="Saisir un nom"
                    style={{ border: 'none' }}
                    value={name}
                    onChange={handleChange}
                  />
                  <Line className="bg-white_A700 h-px w-[84%]" />
                </div>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Sélectionnez un avatar
                </Text>
                <div className="avatars gap-12 md:gap-5 grid sm:grid-cols-3 md:grid-cols-5 grid-cols-5 min-h-[auto] ml-1.5 md:ml-[0] mt-[23px] w-3/5">
                  {avatarStyles.map((style, index) => (
                      <Img
                          key={index}
                          src={style}
                          className={`avatar (min-width: 40em) ${
                              selectedAvatar === style ? "border-2 border-white-500" : ""
                          }`}
                          alt="avatarstyle"
                          onClick={() => handleAvatarSelection(style)}
                      />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end mt-[40px] ml-1.5 md:ml-[0] md:mt-0 w-4/5">
              <Text
                className="bg-indigo_100_02 flex h-10 items-center justify-center mb-[178px] ml-1.5 rounded-[10px] text-blue_gray_400_01 text-center w-10"
                as="h2"
                variant="h2"
              >
                <>&lt;</>
              </Text>
              <a href="/frameone">
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



export default FrameOneSevenPage;
