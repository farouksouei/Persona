import React, { useState, useEffect } from "react";
import { Text } from "components";
import Sidebar1 from "components/Sidebar1";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
const FrameOneTwoPage = () => {
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setSelectedTitles((prevSelectedTitles) =>
        prevSelectedTitles.includes(title)
            ? prevSelectedTitles.filter((item) => item !== title)
            : [...prevSelectedTitles, title]
    );
  };

  useEffect(() => {
    const fullSelectedItems = selectedTitles.reduce((accumulator, title) => {
      return [
        ...accumulator,
        ...(selectedItems[title] || []).map((item) => ({ title, item })),
      ];
    }, []);

    localStorage.setItem('fullSelectedItems', JSON.stringify(fullSelectedItems));
  }, [selectedTitles, selectedItems]);

  const handleItemChange = (event, title) => {
    const item = event.target.value;
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [title]: prevSelectedItems[title]
          ? prevSelectedItems[title].includes(item)
              ? prevSelectedItems[title].filter((i) => i !== item)
              : [...prevSelectedItems[title], item]
          : [item],
    }));

    console.log(selectedItems)
  };
    const titleItems = [
        "Technology (Computer and electronics)",
        "Sports and outdoors",
        "Hobbies and activities",
        "Shopping & Fashion",
        "Fitness & Wellness (fitness)",
        "Family & Relationship",
        "Entertainment (Leisure)",
        "Business & industry",
        "Food and drink (consumables)"
        ];

  const SpecificTitleItems = {
    "Technology (Computer and electronics)": [
      'Computer Hardware',
      'Computer Software',
      'Consumer Electronics',
      'Internet',
      'Telecommunications',
    ],
    "Sports and outdoors": [
      'Sports',
      'Sports Apparel',
      'Sports Equipment & Accessories',
      'Sports Teams & Leagues',
      'Sports Venues',
    ],
    "Hobbies and activities": [
      'Arts & Crafts',
      'Beauty & Personal Care',
      'Books & Literature',
      'Celebrity Fan/Gossip',
      'Fine Art',
    ],
    "Shopping & Fashion": [
      'Apparel',
      'Beauty',
      'Fashion',
      'Jewelry & Watches',
      'Shopping',
    ],
    "Fitness & Wellness (fitness)": [
      'Fitness',
      'Health',
      'Nutrition',
      'Wellness',
    ],
    "Family & Relationship": [
      'Family & Parenting',
      'Relationships',
      'Weddings',
      'Pets',
    ],
    "Entertainment (Leisure)": [
      'Entertainment',
      'Events',
      'Film & Television',
      'Humor',
      'Music & Audio',
      'Performing Arts',
      'Visual Arts & Design',
    ],
    "Business & industry" : [
        'Advertising & Marketing',
        'Aerospace & Defense',
        'Agriculture',
        'Automotive Industry',
        'Aviation',
    ],
    "Food and drink (consumables)" : [
        'Alcoholic Beverages',
        'Beverages',
        'Cooking & Recipes',
        'Cuisine',
        'Food',
        'Restaurants',
    ]
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
              </div>
              <div>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Select Titles</FormLabel>
                  <FormGroup>
                    {titleItems.map((title) => (
                        <FormControlLabel
                            key={title}
                            control={
                              <Checkbox
                                  checked={selectedTitles.includes(title)}
                                  onChange={handleTitleChange}
                                  value={title}
                              />
                            }
                            label={title}
                        />
                    ))}
                  </FormGroup>
                </FormControl>

                {selectedTitles.length > 0 &&
                    selectedTitles.map((title) => (
                        <FormControl key={title} component="fieldset">
                          <FormLabel component="legend">Select Items for {title}</FormLabel>
                          <FormGroup>
                            {SpecificTitleItems[title].map((item) => (
                                <FormControlLabel
                                    key={item}
                                    control={
                                      <Checkbox
                                          checked={
                                            selectedItems[title]
                                                ? selectedItems[title].includes(item)
                                                : false
                                          }
                                          onChange={(event) => handleItemChange(event, title)}
                                          value={item}
                                      />
                                    }
                                    label={item}
                                />
                            ))}
                          </FormGroup>
                        </FormControl>
                    ))}
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
