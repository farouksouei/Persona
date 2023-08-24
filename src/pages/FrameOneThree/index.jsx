import React, { useState, useEffect } from "react";
import { Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {WhatsApp} from "@mui/icons-material";
import {Telegram} from "@mui/icons-material";
import {LinkedIn} from "@mui/icons-material";
import {Pinterest} from "@mui/icons-material";
import {Reddit} from "@mui/icons-material";
import {Email} from "@mui/icons-material";
import {Sms} from "@mui/icons-material";
import {Link} from "@mui/icons-material";
import {Phone} from "@mui/icons-material";

const FrameOneOnePage = () => {
  const [informationsPersonnelles, setInformation] = useState("");
  const [informationsPersonnelles2, setInformation2] = useState("");
  const [informationsPersonnelles3, setInformation3] = useState("");
  const [informationsPersonnelles4, setInformation4] = useState("");
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState([]);

  const handleSocialMediaChange = (socialMediaId) => () => {
    setSelectedSocialMedia((prevSelected) => {
      if (prevSelected.includes(socialMediaId)) {
        return prevSelected.filter((id) => id !== socialMediaId);
      } else {
        return [...prevSelected, socialMediaId];
      }
    });
  };

  const socialMediaIcons = [
    { id: 'facebook', label: 'Facebook', icon: <FacebookIcon /> },
    { id: 'twitter', label: 'Twitter', icon: <TwitterIcon /> },
    { id: 'instagram', label: 'Instagram', icon: <InstagramIcon /> },
    { id: 'whatapp', label: 'Whatapp', icon: <WhatsApp /> },
    { id: 'telegram', label: 'Telegram', icon: <Telegram /> },
    { id: 'linkedin', label: 'Linkedin', icon: <LinkedIn /> },
    { id: 'pinterest', label: 'Pinterest', icon: <Pinterest /> },
    { id: 'reddit', label: 'Reddit', icon: <Reddit /> },
    { id: 'email', label: 'Email', icon: <Email /> },
    { id: 'sms', label: 'Sms', icon: <Sms /> },
    { id: 'link', label: 'Link', icon: <Link /> },
    { id: 'phone', label: 'Phone', icon: <Phone /> },
  ];
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
    // set it in local storage
    localStorage.setItem("informationsPersonnelles", event.target.value);
  };

  const handleInformationChange2 = (event) => {
    setInformation2(event.target.value);
    localStorage.setItem("informationsPersonnelles2", event.target.value);
  };

  const handleInformationChange3 = (event) => {
    setInformation3(event.target.value);
    localStorage.setItem("informationsPersonnelles3", event.target.value);
  };

  const handleInformationChange4 = (event) => {
    setInformation4(event.target.value);
    localStorage.setItem("informationsPersonnelles4", event.target.value);
  };

  useEffect(() => {
    const storedInformation = localStorage.getItem("informationsPersonnelles");
    const storedInformation2 = localStorage.getItem("informationsPersonnelles2");
    const storedInformation3 = localStorage.getItem("informationsPersonnelles3");
    const storedInformation4 = localStorage.getItem("informationsPersonnelles4");
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
          <Sidebar1 flag={"Mission\n" +
              "accomplie, bravo ! :)\n"} className="!sticky !w-[550px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
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
                      value={informationsPersonnelles2}
                      onChange={handleInformationChange2}
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
                        value={informationsPersonnelles3}
                        onChange={handleInformationChange3}
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
                          value={informationsPersonnelles4}
                          onChange={handleInformationChange4}
                        />
                        <Img
                          src="images/img_crayon1.png"
                          className="h-5 md:h-auto mb-0.5 object-cover w-5 ml-2"
                          alt="logo"
                        />
                      </div>
                      <Line className="bg-white_A700 h-px ml-0.5 md:ml-[0] w-[99%]" />
                      <Typography variant="h5" className="font-normal mt-[90px] text-indigo-900">
                        Sélectionnez les réseaux sociaux utilisés.
                      </Typography>
                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {socialMediaIcons.map((icon) => (
                            <IconButton
                                key={icon.id}
                                onClick={handleSocialMediaChange(icon.id)}
                                color={selectedSocialMedia.includes(icon.id) ? 'primary' : 'default'}
                            >
                              {icon.icon}
                            </IconButton>
                        ))}
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

