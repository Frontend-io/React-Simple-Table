import styled from "styled-components";

export const SimpleTable = styled.table`
  height: 100%;
  transition: 0.2s;
  background: #fff;
  width: 100%;
  text-align: left;
  border-radius: 5px;
  border-collapse: collapse;
  display: table;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  & thead {
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  & thead th {
    padding: 20px;
    color: #222;
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
  }
  & tbody tr td {
    padding: 20px;
    color: #555;
    border-bottom: 1px solid #eee;
    font-size: 14px;
  }
  & tbody tr:last-child td {
    border-bottom: none !important;
  }
  & tbody tr td img {
    height: 30px;
    width: 30px;
    min-width: 30px;
    border-radius: 100%;
    margin-right: 1rem;
  }
  & tbody tr td:hover {
    color: #aaa;
  }
  & tbody tr:nth-child(odd) {
    background: #fcfdff;
  }
`;
