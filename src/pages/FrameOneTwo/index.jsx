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
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [allSelectedTitles, setAllSelectedTitles] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

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
  const handleItemChange = (item) => (event) => {
    if (event.target.checked) {
      setSelectedItems((prevItems) => [...prevItems, item]);
    } else {
      setSelectedItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
      setAllSelectedTitles((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
    }

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
                    className="font-normal md:ml-[0] ml-[3px] mt-[30px] text-indigo_900"
                    as="h5"
                    variant="h5"
                >
                  Quels sont les centres d'interet de ce persona ?
                </Text>
                <div>
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
