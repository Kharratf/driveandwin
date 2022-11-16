import { v4 as uuid } from "uuid";

export const trajets = [
  {
    id: uuid(),
    matricule: "124 TN 5456",
    carburant: 1.44,
    depart: "Sfax",
    arrivee: "Sfax",
    date: "11/09/2022",
    distance: 18,
  },
  {
    id: uuid(),
    matricule: "124 TN 5456",
    carburant: 11.09,
    depart: "Sfax",
    arrivee: "Sousse",
    date: "10/09/2022",
    distance: 138.6,
  },
  {
    id: uuid(),
    matricule: "124 TN 5456",
    carburant: 12.2,
    depart: "Sousse",
    arrivee: "Tunis",
    date: "08/09/2022",
    distance: 152.4,
  },
  {
    id: uuid(),
    matricule: "124 TN 5456",
    carburant: 21.5,
    depart: "Tunis",
    arrivee: "Sfax",
    date: "07/09/2022",
    distance: 268.2,
  },
];
