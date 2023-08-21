import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "react-pro-sidebar";
import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  const backgroundImage = "images/img_trac3091.png"; // Set the path to your background image
  const fromTwo = props.fromTwo;
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [selectedLink, setSelectedLink] = useState("");
  const flag = props.flag;
  const links = [
    { path: "/frameonefour", label: "Frame One Seven" },
    { path: "/frameoneseven", label: "Frame One" },
    { path: "/frameone", label: "Frame One Four" },
    { path: "/frameoneone", label: "Frame One One" },
    { path: "/frameonetwo", label: "Frame One Two" },
    { path: "/frameonesix", label: "Frame One Six" },
    { path: "/frameonethree", label: "Frame One Three" },
  ];

  const location = useLocation();

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  useEffect(() => {
    const storedAvatar = localStorage.getItem("selectedAvatar");
    console.log(fromTwo)
    if (storedAvatar) {
      setSelectedAvatar(storedAvatar);
    }
  }, []);

  return (
    <>
      <Sidebar
        className={props.className}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // Adjust the background size
          backgroundPosition: "center", // Adjust the background position
          overflow: "hidden",
        }}
      >
        <div className="flex flex-col justify-start mb-[20px] ml-2.5 ml-[15px] mt-[20px] w-[81%]"
          style={{
            overflow: "hidden",
          }}>
          <Link to="/frameonefive">
            <div className="flex flex-row items-start justify-start md:ml-[0] ml-[27px] w-[32%] md:w-full">
              <Img
                src="images/img_flechegauche3.png"
                className="h-5 md:h-auto object-cover w-5"
                alt="flechegaucheThree"
              />
              <Text
                className="font-bebasneue ml-1 mt-0.5 text-center text-white_A700 w-full"
                variant="body3"
              >
                <>REVENIR À LA PAGE D'ACCUEIL</>
              </Text>
            </div>
          </Link>
          {fromTwo ? (
              <div className="grid place-items-center">
                <Img
                    src={fromTwo}
                    className="h-[200px] w-[200px] mt-[17px]"
                    alt="avatarstyleSeven"
                />
              </div>
          ) : props.selectedAvatar || selectedAvatar ? (
              <div className="grid place-items-center">
                <Img
                    src={props.selectedAvatar || selectedAvatar}
                    className="h-[200px] w-[200px] mt-[17px]"
                    alt="avatarstyleSeven"
                />
              </div>
          ) : (
              <div className="grid place-items-center">
                <Img
                    src="images/img_avatarstyle07.png" // Default image source
                    className="h-[200px] w-[200px] mt-[17px]"
                    alt="avatarstyleSeven"
                />
              </div>
          )}

          <Text  className="flex sm:flex-col flex-row gap-[50px] items-center ml-10 md:ml-[0] mt-[150px] w-[90%] md:w-full text-2xl text-amber-50">
            {flag}
          </Text>
          <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-end ml-10 md:ml-[0] mt-[200px] w-[90%] md:w-full">
            {links.map((link) => (
              <Link
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                key={link.path}
                className={`${location.pathname === link.path ? "bg-red" : "bg-gray_800_01"
                  } rounded-full h-[18px] w-[18px]`}
                style={{
                  backgroundColor: location.pathname === link.path ? "white" : "",
                  borderRadius: "50%",
                }}
              ></Link>
            ))}


          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
