import React from "react";

const Header = ({ activeElement, numObjects }) => {
  return (
    <div className="bg-gray-100 p-3 px-20 my-4 flex justify-between rounded-xl">
      <div>
        <p className="ml-4 mr-4">
          <b>Toolbar</b>
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Grafikly</h1>
      </div>
      <div>
        <p>
          Anzahl Objekte: <b>{(numObjects)}</b>
        </p>
      </div>
    </div>
  );
};

export default Header;
