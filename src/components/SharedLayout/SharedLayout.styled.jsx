import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  /* height: '100vh';
    display: 'flex';
    justify-content: 'center';
    align-items: 'center'; */
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  /* padding-right: 16px;
  padding-left: 16px; */
  /* font-size: 40px; */
  color: #010101;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Main = styled.main`
  /* padding-right: 16px;
  padding-left: 16px; */
  padding: 16px 12px;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  min-height: 50px;
  padding: 8px 12px;

  color: #2a2a2a;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Link = styled(NavLink)`
  /* display: flex; */
  /* align-items: center; */

  padding: 4px 8px;

  line-height: 1;
  border-radius: 4px;
  /* border: 1px solid; */
  font-size: 24px;
  text-decoration: none;
  color: #000000;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  transition: box-shadow 250ms linear;

  &:not(:last-child) {
    margin-right: 8px;
  }

  &.active {
    color: rgb(255, 165, 0);
    box-shadow: 0px 2px 1px -1px rgb(255 165 0 / 20%),
      0px 1px 1px 0px rgb(255 165 0 / 14%), 0px 1px 3px 0px rgb(255 165 0 / 12%);
  }

  &:hover,
  &:focus {
    box-shadow: 0px 2px 1px -1px rgb(255 165 0 / 20%),
      0px 1px 1px 0px rgb(255 165 0 / 14%), 0px 1px 3px 0px rgb(255 165 0 / 12%);
  }
`;
