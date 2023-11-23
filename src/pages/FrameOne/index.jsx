import React, { useState, useEffect } from "react";
import {Input, Text} from "components";
import Sidebar1 from "components/Sidebar1";

import {
  Slider,
  Typography,
  ThemeProvider,
  createTheme,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField, RadioGroup, FormControlLabel, Radio,Button
} from '@mui/material';

const theme = createTheme();

const FrameOnePage = () => {
  const [ageRange, setAgeRange] = useState("");
  const [etudeRange, setEtudeRange] = useState(""); // Add setEtudeRange state function
  const [secteurActivite, setSelectedOption] = useState("");
  const [defis, setDefis] = useState([]);
  const [showChildrenForm, setShowChildrenForm] = React.useState(false);
  const [hasChildren, setHasChildren] = React.useState(false);
  const [showChildrenForm2, setShowChildrenForm2] = React.useState(false);
  const [childrenNumber, setChildrenNumber] = React.useState(0);
  const [childrenAges,setChildrenAges] = useState('')
  const [residence, setResidence] = useState("");
  const [studyRange, setStudyRange] = useState("");
  const [chidrenNumber, setChidrenNumber] = useState(0);
  const [demenagement, setDemenagement] = useState("");

  const handleResidenceChange = (event) => {
    setResidence(event.target.value);
    //put it in local storage
    localStorage.setItem("residence", event.target.value);
  }

  const handleDemenagementChange = (event) => {
    setDemenagement(event.target.value);
    //put it in local storage
    localStorage.setItem("demenagement", event.target.value);
  }

  const handleChildrenNumberChange = (event) => {
    const newValue = Math.min(Math.max(0, parseInt(event.target.value) || 0), 20);
    setChidrenNumber(newValue);
    //put it in local storage
    localStorage.setItem("childrenNumber", newValue);
  }

  const handleIncrement = () => {
    setChildrenNumber((prevValue) => Math.min(prevValue + 1, 20));
    localStorage.setItem("childrenNumber", childrenNumber);
  };

  const handleDecrement = () => {
    setChildrenNumber((prevValue) => Math.max(prevValue - 1, 0));
    localStorage.setItem("childrenNumber", childrenNumber);
  };


  const arrayyy = [
      "Divorcé",
      "Marié",
      "Pacsé",
      "Séparé",
      "Veuf",
      ];


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

  const handleHasChildrenChange = (event) => {
    const isChecked = event.target.value;

    console.log(isChecked)
    if (isChecked === "yes") {
      setHasChildren("yes");
      setShowChildrenForm2(true);
    } else {
      setHasChildren("no");
      setShowChildrenForm2(false);
    }
    //put it in local storage
    localStorage.setItem("hasChildren", event.target.value);
  }

  const answers2 = [
      "Parents avec enfants en bas âge (1-2 ans)",
      "Parents avec enfants de 6 à 8 ans",
      "Parents avec enfants de 13 à 17 ans",
      "Parents avec enfants de +18 ans Adultes",
      ]

  const handleOnChangeChildrenAges = (event) => {
    console.log(event.target.value)
      setChildrenAges(event.target.value)
      //put it in local storage
        localStorage.setItem("childrenAges", event.target.value);
  }

  const [selectedAnswer, setSelectedAnswer] = React.useState('');

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleChange = (event) => {
    // if event value is in the array show the children form
    if (arrayyy.includes(event.target.value)) {
        setShowChildrenForm(true);
    } else {
        setShowChildrenForm(false);
        setShowChildrenForm2(false)
    }
    setSelectedOption(event.target.value);
    //put it in local storage
    localStorage.setItem("situation", event.target.value);
  };

  const handleChildrenChange = (event) => {
    // add form validation that the number is between 0 and 10
    setChildrenNumber(event.target.value);
    //put it in local storage

  }

  const handleAgeRangeChange = (event) => {
    const rangeValue = parseInt(event.target.value);
    setAgeRange(rangeValue);
  };

  const handleStudyRangeChange = (event) => {
    const rangeValue = parseInt(event.target.value);
    setStudyRange(rangeValue);
    localStorage.setItem("niveauEtude", niveauEtude[studyRange]);
  }

  const handleEtudeRangeChange = (event) => {
    const rangeValue = parseInt(event.target.value);
    setEtudeRange(rangeValue)
  };
  useEffect(() => {
    const storedResidence = localStorage.getItem("residence");
    const storedAgeRange = localStorage.getItem("ageRange");
    if (storedAgeRange) {
      setAgeRange(parseInt(storedAgeRange));
    }
    if (storedResidence) {
        setResidence(storedResidence);
    }
  }, []);

  useEffect(() => {

    if (ageRange !== "") {
      localStorage.setItem("ageRange", ageRange);
    }
    const storedSituation = localStorage.getItem("situation");
    const storedChildrenNumber = localStorage.getItem("childrenNumber");
    const storedChildrenAges = localStorage.getItem("childrenAges");
    const storedHasChildren = localStorage.getItem("hasChildren");
    const storedEtudeRange = localStorage.getItem("niveauEtude");
    if (storedSituation) {
        setSelectedOption(storedSituation);
        if (arrayyy.includes(storedSituation)) {
            setShowChildrenForm(true);
        } else {
            setShowChildrenForm(false);
        }
    }
    if (storedHasChildren === "yes") {
        setHasChildren("yes");
        setShowChildrenForm2(true);
    } else {
        setHasChildren("no");
        setShowChildrenForm2(false);
    }

    if (storedChildrenAges) {
        setChildrenAges(storedChildrenAges);
    }
  }, [ageRange, secteurActivite]);

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

  useEffect(() => {
    if (etudeRange !== "") {
      localStorage.setItem("niveauEtude", niveauEtude[studyRange]);
    }
  }, [studyRange]);



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
    "BTP",
    "Bacalauréat ou équivalent",
      "BTS ou DUT",
    "LIcense ou diplôme équivalent",
    "Master ou diplôme équivalent",
    "Doctorat",
  ];

  useEffect(() => {
    const nbrChildren = localStorage.getItem("childrenNumber");
    if (nbrChildren) {
      setChidrenNumber(nbrChildren);
    }
    }, []);

    useEffect(() => {
        const demenagement = localStorage.getItem("demenagement");
        if (demenagement) {
            setDemenagement(demenagement);
        }
    } , []);

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
          <Sidebar1 flag={"Hmm, une\n" +
              "petite pause..."} className="!sticky !w-[550px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
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
                <ThemeProvider theme={theme}>
                  <div className="h-[55px] md:h-[67px] mt-[34px] relative w-[85%] md:w-full">
                    <div className="range-labels flex justify-between text-white_A700">
                      <span className="text-indigo_900">{ageRangeLabels[0]}</span>
                      <span className="text-indigo_900">{ageRangeLabels[5]}</span>
                    </div>
                    <Slider
                        value={ageRange}
                        onChange={handleAgeRangeChange}
                        min={0}
                        max={5}
                        step={1}
                        valueLabelDisplay="auto"
                    />
                    <div className="flex justify-between text-white_A700">
                      <Typography className="text-indigo_900">{ageRangeLabels[ageRange]}</Typography>
                    </div>
                  </div>
                </ThemeProvider>
                <Text
                    className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                    as="h5"
                    variant="h5"
                >
                  Quels est le plus haut niveau d'étude que vous avez atteint ?
                </Text>
                <ThemeProvider theme={theme}>
                  <div className="h-[55px] md:h-[67px] mt-[34px] relative w-[85%] md:w-full">
                    <div className="range-labels flex justify-between text-white_A700">
                      <span className="text-indigo_900">{niveauEtude[0]}</span>
                      <span className="text-indigo_900">{niveauEtude[5]}</span>
                    </div>
                    <Slider
                        value={studyRange}
                        onChange={handleStudyRangeChange}
                        min={0}
                        max={5}
                        step={1}
                        valueLabelDisplay="auto"
                    />
                    <div className="flex justify-between text-white_A700">
                      <Typography className="text-indigo_900">{niveauEtude[studyRange]}</Typography>
                    </div>
                  </div>
                </ThemeProvider>
                <Text
                    className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                    as="h5"
                    variant="h5"
                >
                  Quel est le lieu de résidence de votre persona ?
                </Text>
                <ThemeProvider theme={theme}>
                  <div className="h-[10px] md:h-[10px] mt-[4px] relative w-[85%] md:w-full">
                    <FormControl className="w-full">
                        <TextField
                            id="residence"
                            label="Saisis ton lieu de residence"
                            value={residence}
                            onChange={handleResidenceChange}
                        />
                    </FormControl>
                  </div>
                </ThemeProvider>
                <Text
                    className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                    as="h5"
                    variant="h5"
                >
                  est ce que votre persona a recement demenagé?
                </Text>
                <ThemeProvider theme={theme}>
                    <div className="h-[55px] md:h-[67px] mt-[34px] relative w-[85%] md:w-full">
                        <FormControl className="w-full">
                            <InputLabel id="demenagement-label">Choisir une option</InputLabel>
                            <Select
                                labelId="demenagement-label"
                                id="demenagement"
                                value={demenagement}
                                onChange={handleDemenagementChange}
                            >
                                <MenuItem disabled={demenagement} value="">
                                    {'Select an option'}
                                </MenuItem>
                                <MenuItem value="Oui">Oui</MenuItem>
                                <MenuItem value="Non">Non</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </ThemeProvider>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[90px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  Quelle est la situation matrimoniale de votre persona ?
                </Text>

                <ThemeProvider theme={theme}>
                  <div className="h-[55px] md:h-[67px] mt-[34px] relative w-[85%] md:w-full">
                    <FormControl className="w-full">
                      <InputLabel id="dropdown1-label">Choisir une option</InputLabel>
                      <Select
                          labelId="dropdown1-label"
                          id="dropdown1"
                          value={secteurActivite}
                          onChange={handleChange}
                      >
                        <MenuItem disabled={!secteurActivite} value="">
                          {secteurActivite || 'Select an option'}
                        </MenuItem>
                        <MenuItem value="Célibataire">Célibataire</MenuItem>
                        <MenuItem value="C'est compliqué">C'est compliqué</MenuItem>
                        <MenuItem value="Dans une relation libre">Dans une relation libre</MenuItem>
                        <MenuItem value="Divorcé">Divorcé</MenuItem>
                        <MenuItem value="En couple">En couple</MenuItem>
                        <MenuItem value="Fiancé">Fiancé</MenuItem>
                        <MenuItem value="Marié">Marié</MenuItem>
                        <MenuItem value="Non spécifiée">Non spécifiée</MenuItem>
                        <MenuItem value="Séparé">Séparé</MenuItem>
                        <MenuItem value="Veuf">Veuf</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </ThemeProvider>

                {showChildrenForm && (
                    <>
                    <Text
                        className="font-normal text-indigo_900 mt-4"
                        as="h5"
                        variant="h5"
                    >
                      est ce que vous avez des enfants??
                    </Text>
                      <FormControl className="mt-4 w-[199px]">
                        <RadioGroup value={hasChildren} onChange={handleHasChildrenChange}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl>
                    </>
                )}
                {showChildrenForm2 && (
                    <>
                      <Text
                          className="font-normal text-indigo_900 mt-4"
                          as="h5"
                          variant="h5"
                      >
                        Est-ce que votre persona a des enfants ?
                      </Text>
                      <FormControl className="mt-4 w-[199px]">
                        <InputLabel id="childrenAges">Ages des enfants</InputLabel>
                        <Select
                            labelId="childrenAges"
                            id="childrenAges"
                            value={childrenAges}
                            onChange={handleOnChangeChildrenAges}
                        >
                          <MenuItem disabled={!childrenAges} value="">
                            {childrenAges || 'Select an option'}
                          </MenuItem>
                          <MenuItem value="Parents avec enfants en bas âge (1-2 ans)">Parents avec enfants en bas âge (1-2 ans)</MenuItem>
                          <MenuItem value="Parents avec enfants de 6 à 8 ans">Parents avec enfants de 6 à 8 ans</MenuItem>
                          <MenuItem value="Parents avec enfants de 13 à 17 ans">Parents avec enfants de 13 à 17 ans</MenuItem>
                          <MenuItem value="Parents avec enfants de +18 ans Adultes">Parents avec enfants de +18 ans Adultes</MenuItem>
                        </Select>
                      </FormControl>
                      <div>
                        <Typography variant="h5" className="font-normal text-indigo-900 mt-4">
                          Combien d'enfants avez-vous?
                        </Typography>
                        <FormControl className="mt-4" fullWidth>
                          <Typography variant="h6" className="font-normal text-indigo-900 mt-4">
                            {childrenNumber}
                          </Typography>
                        </FormControl>
                        <div className="mt-2">
                          <Button variant="outlined" onClick={handleDecrement} className="m-2">
                            -
                          </Button>
                          <Button variant="outlined" onClick={handleIncrement} className="m-2">
                            +
                          </Button>
                        </div>
                      </div>
                    </>
                )}
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

    </>
  );
};

export default FrameOnePage;
