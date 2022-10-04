import React, { useState } from "react";

const ModalProject = ({ project }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
    >
      project.id
    </div>
  );
};

export default ModalProject;
