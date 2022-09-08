import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { PALETTE } from "../../config/palette";

export const StyledPagination = styled(ReactPaginate)`
  display: flex;
  justify-content: space-between;
  min-width: 250px;
  max-width: 250px;
  li:nth-child(2) {
    margin-left: 0;
  }
  li {
    display: flex;
    align-items: center;
    height: 30px;
    color: #4f5757;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    border-radius: 12px;
    list-style-type: none;
    margin-left: 10px;
    min-width: 15px;
    transition: all 0.3s ease;
    :hover {
      cursor: pointer;
      color: ${PALETTE.activeFontColor};
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }
  }
  li.previous,
  li.next {
    /* display: none; */
  }

  li.previous {
    margin-right: 20px;
    margin-left: 0;
  }
  li.next {
    margin-left: 20px;
  }
  li.previous.disabled,
  li.next.disabled {
    cursor: auto;
    a svg * {
      fill: #4f5757;
    }
  }
  li.selected {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${PALETTE.activeFontColor};
    border: 1px solid #f3fffe;
    width: 30px;
    height: 30px;
    :hover {
      text-decoration: none;
    }
  }
`;
