import React from "react";
import { supplierState } from "../reducers/suppliers-reducers";
import { supplierTypes } from "../types/supplier-types";
import { supplierAction } from "../actions/actions";

export const supplierContext = React.createContext<{
  stateSupplier: supplierTypes[];
  dispatchSupplier: React.Dispatch<supplierAction>;
}>({
  stateSupplier: supplierState,
  dispatchSupplier: () => undefined,
});