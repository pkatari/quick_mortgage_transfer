import { useState } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import "./PropertySelection.scss";

export const PropertySelection = (props: any) => {
  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 700,
      fontSize: "14px",
      fontWeight: 300,
      padding: "10px",
    },
  });

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const onSelect = (event: any) => {
    props.getMortgageType(event.target.value);
  };
  return (
    <div className="filter">
      <div className="bottom">
        <div className="item">
          <label htmlFor="property">Property Type</label>
          <select name="property" id="property">
            <option value="">All</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <CustomWidthTooltip
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            placement="top"
            title="Quick Mortgage Transfer means
            both Seller and Buyer are Natwest Customers and property is in Mortgage."
          >
            <label htmlFor="mortgage">Mortgage Type</label>
          </CustomWidthTooltip>
          <select name="mortgage" id="mortgage" onChange={onSelect}>
            <option value="all">All</option>
            <option value="inmortgage">Quick Mortgage Transfer</option>
          </select>
        </div>
      </div>
    </div>
  );
};
