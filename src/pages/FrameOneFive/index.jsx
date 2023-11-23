import React from "react";

import { Img, Text } from "components";

import { Button, ThemeProvider, createTheme } from '@mui/material';

const extractedBlueColor = '#1C39BB';


const theme = createTheme({
  typography: {
    fontFamily: 'Bebas Neue',
  },
  palette: {
    primary: {
      main: extractedBlueColor,
    },
  },
});


const FrameOneFivePage = () => {
  return (
    <>
      <div
          className="bg-indigo_100 flex flex-col font-inter items-center justify-start mx-auto p-[70px] md:px-20 sm:px-5 shadow-bs w-full"
          style={{
            backgroundImage: `url("images/frameHomeBackground.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh", // Set the height to 100% of the viewport height
            width: "100%", // Set the width to 100%
            position: "fixed", // Position the div fixed to cover the entire viewport
            top: 0, // Position it at the top of the viewport
            left: 0, // Position it at the left of the viewport
            zIndex: -1, // Place it behind other content
          }}
      >
        <Text
          className="font-medium mt-[17px] text-center text-white_A700"
          as="h1"
          variant="h1"
        >
          <span className="md:text-[38px] sm:text-[32px] text-indigo_900 text-[42px] font-bebasneue font-normal">
            Outil de création de persona
          </span>
        </Text>
          <Img
                src="images/img_groupe761.png"
                className="h-[125px]"
                alt="frameonefive"
            />
        <Text
          className="mt-6 text-white_A700 text-center w-[25%] sm:w-full"
          variant="body1"
        >
          Créez un buyer persona que les équipes de marketing, de vente et de
          service client de votre entreprise pourront utiliser pour optimiser
          leurs performances.
        </Text>

        <div className="flex flex-col font-bebasneue items-start justify-start mt-3 p-2.5 w-auto">
          <a href="/frameonefour">
            <ThemeProvider theme={theme}>
                <Button
                    className="bg-indigo_900 font-bebasneue font-normal text-white_A700"
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: 0 }}
                >
                    Commencer
                </Button>
            </ThemeProvider>
          </a>
        </div>
        <div className="font-bebasneue h-44 md:h-[px] relative w-1/4">
          <div className="absolute items-center justify-start w-full">
            <Img
              src="images/img_clippathgroup.png"
              className="h-[150px] md:h-auto object-cover w-full"
              alt="clippathgroup"
            />
          </div>
        </div>
          <Text
              className="mx-auto text-white_A700 text-center w-[25%] sm:w-full"
          >
              Copyright © 2023 lézard & balthazar communication
          </Text>
      </div>

    </>
  );
};

export default FrameOneFivePage;
