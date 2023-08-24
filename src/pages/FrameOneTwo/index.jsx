import React, { useState, useEffect } from "react";
import { Text } from "components";
import Sidebar1 from "components/Sidebar1";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {TextField} from "@mui/material";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';

const FrameOneTwoPage = () => {
  const [objectifPersona, setObjectif] = useState("");
  const [defis, setDefis] = useState([]);
  const [responsabilite, setResponsabilite] = useState("");
  const [defisOption, setDefisOption] = useState("");
  const [secteurActivite, setSelectedOption] = useState("");
  const [objectifPersonaOption, setObjectifPersonaOption] = useState("");
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [allSelectedTitles, setAllSelectedTitles] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({
    technology: [],
    sports: [],
    hobby: [],
    shoppingAndFashion: [],
    fitnessAndWellness: [],
    familyAndRelationship: [],
    entertainment: [],
  });
  const handleTitleChange = (title) => (event) => {
    if (event.target.checked) {
      setSelectedTitles((prevTitles) => [...prevTitles, title]);
    } else {
      setSelectedTitles((prevTitles) => prevTitles.filter((prevTitle) => prevTitle !== title));
    }
  };

  useEffect(() => {
    console.log(selectedTitles);
    if (selectedTitles.length > 0) {
      localStorage.setItem("selectedTitles", JSON.stringify(selectedTitles));
    }
  }, [selectedTitles]);

  const [challenges, setChallenges] = useState({
    loseWeight: false,
    improveFitness: false,
    learnCooking: false,
    reduceStress: false,
  });

  const handleChallengeChange = (challenge) => {
    setChallenges((prevChallenges) => ({
      ...prevChallenges,
      [challenge]: !prevChallenges[challenge],
    }));
    console.log(challenges)
    // set it in local storage
    localStorage.setItem("challenges", challenges);
  };

    const handleObjectifPersonaChange = (event) => {
      setObjectifPersonaOption(event.target.value);
        // set it in local storage
        localStorage.setItem("objectifPersona", event.target.value);
    }
    const titleItems = [
        "Technology",
        "Sports",
        "Hobby",
        "Shopping & Fashion",
        "Fitness & Wellness",
        "Family & Relationship",
        "Entertainment",
        ];

  const categories = {
    Technology: [
      'Computer Hardware',
      'Computer Software',
      'Consumer Electronics',
      'Internet',
      'Telecommunications',
    ],
    Sports: [
      'Sports',
      'Sports Apparel',
      'Sports Equipment & Accessories',
      'Sports Teams & Leagues',
      'Sports Venues',
    ],
    Hobby: [
      'Arts & Crafts',
      'Beauty & Personal Care',
      'Books & Literature',
      'Celebrity Fan/Gossip',
      'Fine Art',
    ],
    ShoppingAndFashion: [
      'Apparel',
      'Beauty',
      'Fashion',
      'Jewelry & Watches',
      'Shopping',
    ],
    FitnessAndWellness: [
      'Fitness',
      'Health',
      'Nutrition',
      'Wellness',
    ],
    FamilyAndRelationship: [
      'Family & Parenting',
      'Relationships',
      'Weddings',
      'Pets',
    ],
    Entertainment: [
      'Entertainment',
      'Events',
      'Film & Television',
      'Humor',
      'Music & Audio',
      'Performing Arts',
      'Visual Arts & Design',
    ],
  };
  const handleItemSelected = (event, setSelectedFunction) => {
    setSelectedFunction(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const handleDefisOptionChange = (event) => {
    setDefisOption(event.target.value);
  };

  const handleItemChange = (item) => (event) => {
    if (event.target.checked) {
      setSelectedItems((prevItems) => [...prevItems, item]);
    } else {
      setSelectedItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
      setAllSelectedTitles((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
    }

    // add to allSelectedTitles
    if (event.target.checked) {
      setAllSelectedTitles((prevItems) => [...prevItems, item]);
    }
    console.log(allSelectedTitles);
  };

  useEffect(() => {
    if (selectedItems.length > 0) {
      localStorage.setItem("selectedItemsSpecific", JSON.stringify(allSelectedTitles));
    }
    }, [selectedItems]);


  useEffect(() => {
    const storedOption = localStorage.getItem("defisOption");
    const storedResponsabilite = localStorage.getItem("responsabilite");
    const storedDefis = localStorage.getItem("defis");
    const storedObjectif = localStorage.getItem("objectifPersona");
    const storedSelectedTitles = localStorage.getItem("selectedTitles");
    const storedChallenges = localStorage.getItem("challenges");
    const storedSelectedSpecific = localStorage.getItem("selectedItemsSpecific");
    if (storedOption) {
      setDefisOption(storedOption);
    }
    if (storedResponsabilite) {
        setResponsabilite(storedResponsabilite);
    }
    if (storedDefis) {
        setDefis(storedDefis);
    }
    if (storedObjectif) {
        setObjectif(storedObjectif);
    }
    if (storedSelectedTitles) {
        setSelectedTitles(storedSelectedTitles);
    }
    if (storedChallenges) {
        setChallenges(storedChallenges);
    }
    if (storedSelectedSpecific) {
        setSelectedItems(storedSelectedSpecific);
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


  const handleCategoryClick = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory('');
    } else {
      setExpandedCategory(category);
    }
    setSelectedItems([]);
  };


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
          <Sidebar1 flag={"Une dernière question, allons-y !"} className="!sticky !w-[550px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
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

                <FormControl fullWidth>
                <TextField
                    className=""
                    id="outlined-multiline-static"
                    label="Objectives"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                    value={objectifPersonaOption}
                    onChange={handleObjectifPersonaChange}
                />
                </FormControl>
                <Text
                    className="font-normal md:ml-[0] ml-[3px] mt-[30px] text-indigo_900"
                    as="h5"
                    variant="h5"
                >

                  Quels sont les défis du persona ?
                </Text>
                <FormControl>
                  <FormGroup>
                    <FormControlLabel
                        control={
                          <Checkbox
                              checked={challenges.challenge1}
                              onChange={() => handleChallengeChange('challenge1')}
                          />
                        }
                        label="Challenge 1"
                    />
                    <FormControlLabel
                        control={
                          <Checkbox
                              checked={challenges.challenge2}
                              onChange={() => handleChallengeChange('challenge2')}
                          />
                        }
                        label="Perdre du poids"
                    />
                    <FormControlLabel
                        control={
                          <Checkbox
                              checked={challenges.challenge3}
                              onChange={() => handleChallengeChange('challenge3')}
                          />
                        }
                        label="Challenge 3"
                    />
                    <FormControlLabel
                        control={
                          <Checkbox
                              checked={challenges.challenge4}
                              onChange={() => handleChallengeChange('challenge4')}
                          />
                        }
                        label="Améliorer sa forme physique"
                    />
                  </FormGroup>
                </FormControl>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[30px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >

                  Quels sont les centres d'interet de ce persona ?
                </Text>

                <div>
                  <List>
                    {Object.keys(categories).map((category) => (
                        <div key={category}>
                          <ListItem button onClick={() => handleCategoryClick(category)}>
                            <ListItemText primary={category} />
                            <IconButton>
                              {expandedCategory === category ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                          </ListItem>
                          <Collapse in={expandedCategory === category}>
                            <List disablePadding>
                              {categories[category].map((item) => (
                                  <ListItem key={item} dense>
                                    <Checkbox
                                        checked={selectedItems.includes(item)}
                                        onChange={handleItemChange(item)}
                                    />
                                    <ListItemText primary={item} />
                                  </ListItem>
                              ))}
                            </List>
                          </Collapse>
                        </div>
                    ))}
                  </List>
                </div>
                <Text
                    className="font-normal md:ml-[0] ml-[3px] mt-[30px] text-indigo_900"
                    as="h5"
                    variant="h5"
                >
                    Quels sont les centres d'interet de ce persona ?
                </Text>
                <div>
                  <Typography variant="h5" className="font-normal mt-[85px] text-indigo-900">
                    Selected Titles
                  </Typography>
                  <List>
                    {titleItems.map((title) => (
                        <ListItem key={title} dense>
                          <ListItemText primary={title} />
                          <Checkbox
                              checked={selectedTitles.includes(title)}
                              onChange={handleTitleChange(title)}
                          />
                        </ListItem>
                    ))}
                  </List>
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
