import React from "react";
import PropTypes from "prop-types";
import { Text } from "components";

const RightCornerComponent = ({ onClick }) => {
  return (
    <div className="fixed top-0 right-0 m-4">
      <Text
        className="bg-indigo_100_02 flex h-10 items-center justify-center rounded-[10px] text-blue_gray_400_01 text-center w-10 cursor-pointer"
        as="h2"
        variant="h2"
        onClick={onClick}
      >
        <>&lt;</>
      </Text>
    </div>
  );
};

RightCornerComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RightCornerComponent;
