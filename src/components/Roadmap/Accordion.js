import React, { useState } from "react";
import AccordionItem from "./AccordionItem.js";
import "./Accordion.scss";

function Accordion() {
  const [clicked, setClicked] = useState("0");

  const phases = [
    {
        title: "Phase one",
        text: [
            "Welcome to Dino Squad Club ! This collection made by Antoine and Sacha our two 3D artists will blow your mind.",
            "Our passionate artists each worked really hard in order to give you the best collection.",
            "The project brings back the dinosaurs for a 5,555 collection on the Opensea plateform. The dinosaurs are back on the surface of earth to make your dreams come true. Our goal is to create a family and that each person in this discord makes friends whether it is digital or not. We are tired of projects that scam people.",
            "That's why Dino Squad Club will be a place to relax and to make friends and even more!"
        ]
    },
    {
        title: "Phase two",
        text: [
            "To celebrate the accomplishments of our work,we will do huge giveaways only among our dearest holders.",
            "You will have the opportunity to claim what type of gifts you want by voting."
        ]
    },
    {
        title: "Phase three",
        text: [
            "We are planning to launch our own merch collection.Hoodies ! T-Shirts ! And more !",
            "We also wants to engage our community on this project so you can add suggestions iin our discord.",
            "The collection of clothes that we offer is already in progress and photos will be revealed soon to show you the progress.",
            "Community comes first !"
        ]
    },
    {
        title: "Phase four",
        text: [
            "Holding our NFTs is special and makes you a privileged person !",
            "We are in collaboration with an application which aims to create events such as wedding, birthdays, parties and many others. After 1 year of work , this application called Hanana made by a brilliant team will be released 1 month after the mint. It will help create our own events such as parties or others. Everyone is tired of having to go through tons of sites to organize a party, thanks to this application , you can now contact and organize your events in 3 clicks!",
            "We plan to organize events around the world and holders will have the right to vote for the destination.",
            "Dinos at tokyo ?or maybe L.A",
            "could be Paris ? or Dubai ?",
            "You choose !"
        ]
    }
  ];
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <ul className="accordion" id="Accordion">
      {phases.map((element, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          element={element}
        />
      ))}
    </ul>
  );
}

export default Accordion;
