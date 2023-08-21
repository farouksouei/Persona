
import React, { useState, useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';

const FrameOneSixPage = () => {
  const [outilsNecessaires, setOutilsNecessaires] = useState([]);
  const [comportement, setComportement] = useState("");
  const [optionDefis, setOption] = useState("");
  const [selectedCommunication, setSelectedCommunication] = useState([]);
  const [secteurActivite, setSelectedOption] = useState("");
  const [anniversaire, setAnniversaire] = React.useState('');
  const [expatrie, setExpatrie] = React.useState('');
  const [football, setFootball] = React.useState('');
  const [useMobile, setUseMobile] = React.useState('');
  const [systemeExploitationMobile, setSystemeExploitationMobile] = React.useState('');

    const handleExpatrieChange = (event) => {
    setExpatrie(event.target.value);
    // set in local storage
    localStorage.setItem("expatrie", event.target.value);
    }

    const handleSystemeExploitationChange = (event) => {
    setSystemeExploitationMobile(event.target.value);
    // set in local storage
    localStorage.setItem("systemeExploitationMobile", event.target.value);
    }

    const handleFootballChange = (event) => {
    setFootball(event.target.value);
    // set in local storage
    localStorage.setItem("football", event.target.value);
    }

    const handleUseMobileChange = (event) => {
    setUseMobile(event.target.value);
    // set in local storage
    localStorage.setItem("useMobile", event.target.value);
    }
  const handleAnniversaireChange = (event) => {
    setAnniversaire(event.target.value);
    // set in local storage
    localStorage.setItem("anniversaire", event.target.value);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    //put it in local storage
    localStorage.setItem("secteurActivite", event.target.value);
  };

  const handleComportementChange = (event) => {
    setComportement(event.target.value);
    // set in local storage
    localStorage.setItem("comportement", event.target.value);
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

  const options = [
    "Système de gestion et de comptabilité",
    "Système de gestion de contenu",
    "Outil de gestion de projet",
    "Applications de stockage et de partage de dossiers en ligne",
    "Outil d'e-mailing",
    "Logiciel de planning des salariés",
    "Logiciel de facturation",
    "Logiciel de traitement de texte",
    "CRM",
    "Logiciel de reporting",
  ];

  const options2 = [
    "Utilise un appareil mobile (1 à 6 mois)",
    "Utilise un appareil mobile (6 mois à 1 an)",
    "Utilise un appareil mobile (1 à 2 ans) +",
  ]


  useEffect(() => {
    localStorage.setItem("moyencommunicationprefere", JSON.stringify(selectedCommunication));
  }, [selectedCommunication]);


  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  useEffect(() => {
    const storedOption = localStorage.getItem("optionDefis");
    const storedOutils = localStorage.getItem("outilsNecessaires");
    const storedComportement = localStorage.getItem("comportement");
    const storedCommunication = localStorage.getItem("moyencommunicationprefere");
    const storedSecteurActivite = localStorage.getItem("secteurActivite");
    const storedAnniversaire = localStorage.getItem("anniversaire");
    const storedExpatrie = localStorage.getItem("expatrie");
    const storedFootball = localStorage.getItem("football");
    const storedUseMobile = localStorage.getItem("useMobile");
    const storedSystemeExploitationMobile = localStorage.getItem("systemeExploitationMobile");
    if (storedOption) {
      setOption(storedOption);
    }
    if (storedOutils) {
        setOutilsNecessaires(JSON.parse(storedOutils));
    }
    if (storedComportement) {
        setComportement(storedComportement);
    }
    if (storedCommunication) {
        setSelectedCommunication(JSON.parse(storedCommunication));
    }
    if (storedSecteurActivite) {
        setSelectedOption(storedSecteurActivite);
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
  }, []);

  useEffect(() => {
    if (optionDefis !== "") {
      localStorage.setItem("optionDefis", optionDefis);
    }
  }, [optionDefis]);

  const handleCheckboxChange = (option) => {
    if (outilsNecessaires.includes(option)) {
      setOutilsNecessaires(outilsNecessaires.filter(item => item !== option));
    } else {
      setOutilsNecessaires([...outilsNecessaires, option]);
    }
  };
  useEffect(() => {
    const storedOutils = localStorage.getItem("outilsNecessaires");
    if (storedOutils) {
      setOutilsNecessaires(JSON.parse(storedOutils));
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
          <Sidebar1 flag={"Hmm, une petite pause..."} className="!sticky !w-[550px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
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
                <FormGroup>
                  {options.map((option, index) => (
                      <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                                checked={outilsNecessaires.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                            />
                          }
                          label={option}
                      />
                  ))}
                </FormGroup>


                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Quel est le comportement d'achat de votre persona :
                </Text>

                <FormControl component="fieldset">
                  <RadioGroup
                      name="personaBehavior"
                      value={comportement}
                      onChange={handleComportementChange}
                  >
                    <FormControlLabel
                        value="Acheteur actif"
                        control={<Radio />}
                        label="Acheteur actif"
                    />
                    <FormControlLabel
                        value="Acheteur passif"
                        control={<Radio />}
                        label="Acheteur passif"
                    />
                  </RadioGroup>
                </FormControl>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Est-ce que le produit/service concerne un persona dont l'anniversaire se situe dans 61 à 90 jours ?
                </Text>
                <FormControl component="fieldset">
                  <RadioGroup
                      name="anniversaire"
                      value={anniversaire}
                      onChange={handleAnniversaireChange}
                  >
                    <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                    />
                    <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                    />
                  </RadioGroup>
                </FormControl>

                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Est-ce que votre persona est un expatrié ou travaille-t-il dans son pays d'origine ?

                </Text>
                <TextField
                    label="Est-ce que votre persona est un expatrié ou travaille-t-il dans son pays d'origine?"
                    value={expatrie}
                    onChange={handleExpatrieChange}
                    fullWidth
                />
                <Line className="bg-white_A700 h-px ml-0.5 md:ml-[0] w-full" />


                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Est-ce que votre persona est un fan de football ?
                </Text>

                <FormControl component="fieldset">
                    <RadioGroup
                        name="football"
                        value={football}
                        onChange={handleFootballChange}
                    >
                        <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                        />
                        <FormControlLabel
                            value="No"
                            control={<Radio />}
                            label="No"
                        />
                    </RadioGroup>
                </FormControl>



                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Depuis combien de temps votre persona utilise-t-il un appareil mobile ?
                </Text>

                <FormControl component="fieldset">
                    <RadioGroup
                        name="useMobile"
                        value={useMobile}
                        onChange={handleUseMobileChange}
                    >
                        <FormControlLabel
                            value="1 à 6 mois"
                            control={<Radio />}
                            label="1 à 6 mois"
                        />
                        <FormControlLabel
                            value="6 mois à 1 an"
                            control={<Radio />}
                            label="6 mois à 1 an"
                        />
                        <FormControlLabel
                            value="1 à 2 ans et plus"
                            control={<Radio />}
                            label="1 à 2 ans et plus"
                        />

                    </RadioGroup>
                </FormControl>

                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >

                  Quel est le système d'exploitation mobile utilisé par votre persona ?
                </Text>

                <FormControl component="fieldset">
                    <RadioGroup
                        name="systemeExploitation"
                        value={systemeExploitationMobile}
                        onChange={handleSystemeExploitationChange}
                    >
                        <FormControlLabel
                            value="Android"
                            control={<Radio />}
                            label="Android"
                        />
                        <FormControlLabel
                            value="iOS"
                            control={<Radio />}
                            label="iOS"
                        />
                        <FormControlLabel
                            value="Windows"
                            control={<Radio />}
                            label="Windows"
                        />
                    </RadioGroup>
                </FormControl>


                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Quel est l'opérateur téléphonique de votre person
                </Text>
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
                  <TextField
                      type="text"
                      className="font-normal text-white_A700 w-[400px] bg-transparent outline-none text-left"
                      placeholder=""
                      style={{ border: 'none' }}
                      value={optionDefis}
                      onChange={handleOptionChange}
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



                <TextField
                    select
                    label="Secteur d'activité"
                    value={secteurActivite}
                    onChange={handleChange}
                    fullWidth
                >
                  <MenuItem disabled={!secteurActivite} value="">
                    {secteurActivite || "Select an option"}
                  </MenuItem>
                  <MenuItem value="De retour de voyage il y a 1 semaine">De retour de voyage il y a 1 semaine</MenuItem>
                  <MenuItem value="Grand voyageurs">Grand voyageurs</MenuItem>
                  <MenuItem value="Personnes faisant la navette">Personnes faisant la navette</MenuItem>
                  <MenuItem value="Revenus de voyage il y a 2 semaines">Revenus de voyage il y a 2 semaines</MenuItem>
                  <MenuItem value="Voyageurs internationaux fréquents">Voyageurs internationaux fréquents</MenuItem>
                </TextField>
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


