import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { PropertyContainer } from "../../components/PropertyContainer/PropertyContainer";
import { PropertySelection } from "../../components/PropertySelecion/PropertySelection";
import { checkIfMortgageExists } from "../../utils/common";
import { propertyList } from "../../mockData/mockData";
import "./PropertyList.scss";

export const PropertyList = () => {
  const [mortgageType, setMortgageType] = useState();

  const contextData: any = useOutletContext();

  const getMortgageType = (type: any) => {
    setMortgageType(type);
  };

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <PropertySelection getMortgageType={getMortgageType} />
          {propertyList.map((item: any) =>
            checkIfMortgageExists(mortgageType, item, contextData) ? (
              <PropertyContainer
                key={item.id}
                item={item}
                mortgageType={mortgageType}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
