import { baseURL } from "../../constants/base-url";
import { DTOOut } from "../../types/DTO-out";
import { AppDispatch } from "./../store";
import {
  goodsFetching,
  goodsFetchingSuccess,
  goodsFetchingError,
} from "./goods-slice";

export const goodsFetch = () => (dispatch: AppDispatch) => {
  try {
    dispatch(goodsFetching());
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => dispatch(goodsFetchingSuccess(data.products)));
  } catch (e) {
    dispatch(goodsFetchingError((e as Error).message));
  }
};

export const filteredGoodsFetch =
  (selectVal: string) => (dispatch: AppDispatch) => {
    try {
      dispatch(goodsFetching());
      fetch(`${baseURL}/category/${selectVal}`)
        .then((res) => res.json())
        .then((data) => dispatch(goodsFetchingSuccess(data.products)));
    } catch (e) {
      dispatch(goodsFetchingError((e as Error).message));
    }
  };
export const searchGoodsFetch =
  (inputVal: string) => (dispatch: AppDispatch) => {
    try {
      dispatch(goodsFetching());
      fetch(`${baseURL}/search?q=${inputVal}`)
        .then((res) => res.json())
        .then((data) => dispatch(goodsFetchingSuccess(data.products)));
    } catch (e) {
      dispatch(goodsFetchingError((e as Error).message));
    }
  };
export const deleteGoodsFetch =
  (productID: string) => (dispatch: AppDispatch) => {
    try {
      fetch(`${baseURL}/${productID}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => alert(`${data.title} was successfully deleted`));
    } catch (e) {
      dispatch(goodsFetchingError((e as Error).message));
    }
  };
export const createGoodsFetch =
  (product: DTOOut) => (dispatch: AppDispatch) => {
    try {
      fetch(`${baseURL}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
        }),
      })
        .then((res) => res.json())
        .then((data) => alert("New product successfully created"));
    } catch (e) {
      dispatch(goodsFetchingError((e as Error).message));
    }
  };
