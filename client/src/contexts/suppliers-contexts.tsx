import React from "react";
import { supplierState } from "../reducers/suppliers-reducers";
import { supplierTypes, supplierAction } from "../types/supplier-types";

export const supplierContext = React.createContext<{
  stateSupplier: supplierTypes[];
  dispatchSupplier: React.Dispatch<supplierAction>;
}>({
  stateSupplier: supplierState,
  dispatchSupplier: () => undefined,
});