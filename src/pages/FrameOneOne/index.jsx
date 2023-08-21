import React, { useState, useEffect } from "react";

import { Img, Line, Text } from "components";
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
  TextField, RadioGroup, FormControlLabel, Radio
} from '@mui/material';

const theme = createTheme();
const FrameOneOnePage = () => {
  const [intitulePoste, setIntitulePoste] = useState("");
  const [indicateurPerformance, setPerformance] = useState("");
  const [superieurHierarchique, setHierarchique] = useState("");
  const [revenuAnnuel, setRevenuAnnuel] = useState("");

  const handleHierarchiqueChange = (event) => {
    setHierarchique(event.target.value);
  };

  const handleIntitulePosteChange = (event) => {
    setIntitulePoste(event.target.value);
    // set it in local storage
    localStorage.setItem("intitulePoste", event.target.value);
  }

  useEffect(() => {
    const storedHierarchique = localStorage.getItem("superieurHierarchique");
    if (storedHierarchique) {
      setHierarchique(storedHierarchique);
    }

    const storedIntitulePoste = localStorage.getItem("intitulePoste");
    if (storedIntitulePoste) {
        setIntitulePoste(storedIntitulePoste);
    }
  }, [intitulePoste]);

  useEffect(() => {
    if (superieurHierarchique !== "") {
      localStorage.setItem("superieurHierarchique", superieurHierarchique);
    }
  }, [superieurHierarchique]);

  const handlePerformanceChange = (event) => {
    setPerformance(event.target.value);
  };

    const handleOnChangeRevenuAnnuel = (event) => {
      setRevenuAnnuel(event.target.value);
      // put it in local storage
        localStorage.setItem("revenuAnnuel", event.target.value);
    }

  useEffect(() => {
    const storedPerformance = localStorage.getItem("indicateurPerformance");
    if (storedPerformance) {
      setPerformance(storedPerformance);
    }
    const storedRevenuAnnuel = localStorage.getItem("revenuAnnuel");
    if (storedRevenuAnnuel) {
      setRevenuAnnuel(storedRevenuAnnuel);
    }
  }, []);

  useEffect(() => {
    if (indicateurPerformance !== "") {
      localStorage.setItem("indicateurPerformance", indicateurPerformance);
    }
  }, [indicateurPerformance]);

  useEffect(() => {
    const storedPoste = localStorage.getItem("intitulePoste");
    if (storedPoste) {
      setIntitulePoste(storedPoste);
    }
  }, []);

  useEffect(() => {
    if (intitulePoste !== "") {
      localStorage.setItem("intitulePoste", intitulePoste);
    }
  }, [intitulePoste]);
  return (
    <>
      <div
        className="bg-indigo_100 flex flex-col  items-center justify-start w-full"
        style={{
          backgroundImage: `url("images/Group47.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 flag={"Dernier effort !"} className="!sticky !w-[550px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div
            className="container-div flex flex-1 flex-col gap-[15px]  justify-start md:mt-0 mt-[30px] w-full"
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
                  Étape 4/7 : Ajouter des informations relatives à la carrière

                </Text>
              </span>
              <div className="flex flex-col gap-[3px] items-start justify-start w-[815px] md:w-full">
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                  as="h5"
                  variant="h5"
                >
                  indiquez l'intitulé de post.
                </Text>
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2 w-full">
                  <div className="flex items-center">
                    <TextField
                        type="text"
                        className="font-normal text-white_A700 w-[420px] bg-transparent outline-none text-left"
                        placeholder="Par exemple, en termes de prospects, de revenus, etc."
                        style={{ border: "none" }}
                        InputProps={{
                          className: 'text-white_A700',
                          placeholderTextColor: 'white',
                        }}
                        value={intitulePoste}
                        onChange={handleIntitulePosteChange}
                    />
                  </div>
                  <Img
                    src="images/img_crayon1.png"
                    className="h-5 md:h-auto mb-[3px] object-cover w-5"
                    alt="crayonOne"
                  />
                </div>
                <div className="flex flex-col gap-[3px] items-start justify-start w-[815px] md:w-full">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "50vh",
                    }}
                    className="cont"
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                      }}
                    >
                      <Text
                        className="font-normal md:ml-[0] ml-[3px] mt-[85px] text-indigo_900"
                        as="h5"
                        variant="h5"
                      >
                        Quel est le revenu annuel de votre persona ?
                      </Text>
                      <FormControl className=" m-2">
                        <InputLabel id="revenuAnnuel">Revenu Annuel</InputLabel>
                        <Select
                            labelId="revenuAnnuel"
                            id="revenuAnnuel"
                            value={revenuAnnuel}
                            onChange={handleOnChangeRevenuAnnuel}
                        >
                          <MenuItem disabled={!revenuAnnuel} value="">
                            {revenuAnnuel || 'Select an option'}
                          </MenuItem>
                          <MenuItem value="-2 500 DT">-2 500 DT</MenuItem>
                          <MenuItem value="Entre 2500 DT et 19 500 DT">Entre 2500 DT et 19 500 DT</MenuItem>
                          <MenuItem value="Entre 19 500 DT et 26 000 DT">Entre 19 500 DT et 26 000 DT</MenuItem>
                          <MenuItem value="+ 26 000 DT">+ 26 000 DT</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end mt-[40px] ml-1.5 md:ml-[0] md:mt-0 w-4/5">
                <a href="frameone">
                  <Text
                    className="bg-indigo_100_02 flex h-10 items-center justify-center mb-[178px] ml-1.5 rounded-[10px] text-blue_gray_400_01 text-center w-10"
                    as="h2"
                    variant="h2"
                  >
                    <>&lt;</>
                  </Text>
                </a>
                <a href="/frameonetwo">
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
    </>
  );
};

export default FrameOneOnePage;
