import React, { useState, useEffect } from "react";
import { Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import {TextField} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

const FrameOneTwoPage = () => {
  const [objectifPersona, setObjectif] = useState("");
  const [defis, setDefis] = useState([]);
  const [responsabilite, setResponsabilite] = useState("");
  const [defisOption, setDefisOption] = useState("");
  const [secteurActivite, setSelectedOption] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [objectifPersonaOption, setObjectifPersonaOption] = useState("");

  const [selectedCategories, setSelectedCategories] = useState({
    technology: [],
    sports: [],
    hobby: [],
    shoppingAndFashion: [],
    fitnessAndWellness: [],
    familyAndRelationship: [],
    entertainment: [],
  });

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

    // set it in local storage
    localStorage.setItem("challenges", challenges);
  };

    const handleObjectifPersonaChange = (event) => {
      setObjectifPersonaOption(event.target.value);
        // set it in local storage
        localStorage.setItem("objectifPersona", event.target.value);
    }
  const handleCategoryChange = (categoryTitle) => (newSelectedItems) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [categoryTitle]: newSelectedItems,
    }));

    localStorage.setItem("H",selectedItems)
  };

  const categoryData = [
    {
      title: 'Technology',
      items: [
        'Computer Hardware',
        'Computer Software',
        'Consumer Electronics',
        'Internet',
        'Telecommunications',
      ],
    },
    {
      title: 'Sports',
      items: [
        'Sports',
        'Sports Apparel',
        'Sports Equipment & Accessories',
        'Sports Teams & Leagues',
        'Sports Venues',
      ],
    },
    {
      title: 'Hobby',
      items: [
        'Arts & Crafts',
        'Beauty & Personal Care',
        'Books & Literature',
        'Celebrity Fan/Gossip',
        'Fine Art',
      ],
    },
    {
      title: 'Shopping and Fashion',
      items: [
        'Apparel',
        'Beauty',
        'Fashion',
        'Jewelry & Watches',
        'Shopping',
      ],
    },
    {
      title: 'Fitness and Wellness',
      items: [
        'Fitness',
        'Health',
        'Nutrition',
        'Wellness',
      ],
    },
    {
      title: 'Family and Relationship',
      items: [
        'Family & Parenting',
        'Relationships',
        'Weddings',
        'Pets',
      ],
    },
    {
      title: 'Entertainment',
      items: [
        'Entertainment',
        'Events',
        'Film & Television',
        'Humor',
        'Music & Audio',
        'Performing Arts',
        'Visual Arts & Design',
      ],
    },
  ];


  const ExpandableCheckboxList = ({ title, items, selectedItems, onChange }) => {
    const [open, setOpen] = useState(false);

    const handleExpand = () => {
      setOpen(!open);
    };

    const handleCheckboxChange = (item) => () => {
      const newSelected = selectedItems.includes(item)
          ? selectedItems.filter((selectedItem) => selectedItem !== item)
          : [...selectedItems, item];
      console.log(newSelected)
      localStorage.setItem("new", newSelected);
      onChange(newSelected);
    };

    return (
        <List>
          <ListItem onClick={handleExpand}>
            <ListItemText primary={title} />
            {open ? '-' : '+'}
          </ListItem>
          <Collapse in={true}>
            {items.map((item) => (
                <ListItem key={item}>
                  <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={selectedItems.includes(item)}
                        tabIndex={-1}
                        disableRipple
                        onChange={handleCheckboxChange(item)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
            ))}
          </Collapse>
        </List>
    );
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

                <FormControl fullWidth>
                  <InputLabel>Select Categories</InputLabel>
                  <Select
                      multiple
                      value={Object.values(selectedItems).flat()}
                      onChange={(event) => setSelectedItems(event.target.value)}
                      renderValue={(selected) =>
                          selected.length > 0
                              ? selected.join(', ')
                              : 'Select Categories'
                      }
                  >
                    {categoryData.map((category) => (
                        <ExpandableCheckboxList
                            key={category.title}
                            title={category.title}
                            items={category.items}
                            selectedItems={selectedItems[category.title] || []}
                            onChange={handleCategoryChange(category.title)}
                        />
                    ))}
                  </Select>
                </FormControl>
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
