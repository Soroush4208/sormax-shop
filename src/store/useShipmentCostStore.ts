import create from "zustand";
import { persist } from "zustand/middleware";

interface ShipmentCostState {
  shipmentCost: number;
  shipmentDays: number;
  setShipmentCost: (shipmentCost: number) => void;
  setShipmentDays: (shipmentDays: number) => void;
}

const useShipmentCostStore = create(
  persist<ShipmentCostState>(
    (set) => ({
      shipmentCost: 0,
      shipmentDays: 0,
      setShipmentCost: (shipmentCost) => set({ shipmentCost }),
      setShipmentDays: (shipmentDays) => set({ shipmentDays }),
    }),
    {
      name: "shipment-costState",
      getStorage: () => localStorage,
    }
  )
);

export default useShipmentCostStore;
