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
        className="bg-indigo_100 flex flex-col font-inter items-center justify-start mx-auto p-[45px] md:px-20 sm:px-5 shadow-bs w-full "
        display="flex"
        style={{
          backgroundImage: `url("images/frameHomeBackground.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Img
          src="images/Groupe76.png"
          alt="groupe761"
          max-width="200%"
          height="auto"
        />
        <Text
          className="font-medium mt-[17px] text-center text-white_A700"
          as="h1"
          variant="h1"
        >
          <span className="md:text-[38px] sm:text-[32px] text-indigo_900 text-[42px] font-bebasneue font-normal">
            Outil de création de persona
          </span>
        </Text>
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
        <div className="font-bebasneue h-44 md:h-[px] mb-[74px] mt-[30px] relative w-1/4">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto p-[9px] top-[0] w-full">
            <Img
              src="images/img_clippathgroup.png"
              className="h-[148px] md:h-auto object-cover w-full"
              alt="clippathgroup"
            />
          </div>
          <Text
            className="absolute bottom-[0] inset-x-[0] mx-auto text-white_A700 text-center w-full"
            variant="body2"
          >
            Copyright © 2023 lézard & balthazar communication
          </Text>
        </div>
      </div>
    </>
  );
};

export default FrameOneFivePage;
