import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Header from "./Header";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("Başlık bulundu", () => {
  const div2 = document.createElement("div");
  ReactDOM.render(<Header />, div2);
});


test("Emojiler Listelendi", () => {
  render(<App />);
  const emojiListContainer = document.querySelector(".component-emoji-results");
  expect(emojiListContainer.childNodes.length === 20);
});


test("İnput ile Emoji filtrelendi", () => {
  render(<App />);
  const inputElement = document.getElementsByTagName("input");
  userEvent.type(inputElement[0], "smile");
  expect(screen.getByText("Grinning"))
});

test("Kopyalama tuşu kontrol edildi",()=>{
  render(<App />);
  const clickedItem = document.querySelector(".component-emoji-results")
  userEvent.click(clickedItem)
  
})


 
   


 




 